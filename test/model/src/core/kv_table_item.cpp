/*-
 * Public Domain 2014-present MongoDB, Inc.
 * Public Domain 2008-2014 WiredTiger, Inc.
 *
 * This is free and unencumbered software released into the public domain.
 *
 * Anyone is free to copy, modify, publish, use, compile, sell, or
 * distribute this software, either in source code form or as a compiled
 * binary, for any purpose, commercial or non-commercial, and by any
 * means.
 *
 * In jurisdictions that recognize copyright laws, the author or authors
 * of this software dedicate any and all copyright interest in the
 * software to the public domain. We make this dedication for the benefit
 * of the public at large and to the detriment of our heirs and
 * successors. We intend this dedication to be an overt act of
 * relinquishment in perpetuity of all present and future rights to this
 * software under copyright law.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
 * IN NO EVENT SHALL THE AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR
 * OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
 * ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 */

#include <algorithm>
#include <iostream>
#include <list>
#include <sstream>

#include "model/kv_table_item.h"
#include "wiredtiger.h"

namespace model {

/*
 * kv_table_item::add_update --
 *     Add an update. Throw exception on error.
 */
void
kv_table_item::add_update(kv_update &&update, bool must_exist, bool must_not_exist)
{
    std::shared_ptr<kv_update> update_ptr = std::make_shared<kv_update>(std::move(update));
    add_update(update_ptr, must_exist, must_not_exist);
}

/*
 * kv_table_item::add_update --
 *     Add an update. Throw exception on error.
 */
void
kv_table_item::add_update(std::shared_ptr<kv_update> update, bool must_exist, bool must_not_exist)
{
    std::lock_guard lock_guard(_lock);
    add_update_nolock(update, must_exist, must_not_exist);
}

/*
 * kv_table_item::add_update_nolock --
 *     Add an update but without taking a lock (this assumes the caller has it). Throw an exception
 *     on error.
 */
void
kv_table_item::add_update_nolock(
  std::shared_ptr<kv_update> update, bool must_exist, bool must_not_exist)
{
    kv_update::timestamp_comparator cmp;

    /* If this is a non-timestamped update, there cannot be existing timestamped updates. */
    if (update->global())
        if (!_updates.empty() && !_updates.back()->global())
            throw wiredtiger_exception(EINVAL);

    /* Check for transaction conflicts. */
    kv_transaction_ptr txn = update->txn();
    if (txn) {
        /*
         * Check whether the update chain has an update that is not included in this transaction's
         * snapshot, or if it has an uncommitted update (regardless of whether it is included in its
         * transaction snapshot.
         */
        for (auto &u : _updates) {
            switch (u->txn_state()) {
            case kv_transaction_state::in_progress:
                /* Can't conflict with self. */
                if (u->txn_id() == txn->id()) {
                    /*
                     * Cannot update a key with a more recent timestamp. If we do this, WiredTiger
                     * would abort during commit.
                     */
                    if (u->commit_timestamp() > update->commit_timestamp())
                        throw wiredtiger_abort_exception(
                          "Updating a key with a more recent timestamp");
                    break;
                }
                fail_with_rollback(update);
            case kv_transaction_state::committed:
            case kv_transaction_state::prepared:
                if (!txn->visible_txn(u->txn_id()))
                    fail_with_rollback(update);
                break;
            case kv_transaction_state::rolled_back:
            default:
                break;
            }
        }
    }

    /* Position the update. */
    auto i = std::upper_bound(_updates.begin(), _updates.end(), update.get(), cmp);

    /* If need be, fail if the key does not exist. */
    if (must_exist) {
        if (_updates.empty())
            throw wiredtiger_exception(WT_NOTFOUND);

        auto j = i;
        if (j == _updates.begin() || (*(--j))->value() == NONE)
            throw wiredtiger_exception(WT_NOTFOUND);
    }

    /* If need be, fail if the key exists. */
    if (must_not_exist && !_updates.empty()) {
        auto j = i;
        if (j != _updates.begin() && (*(--j))->value() != NONE)
            throw wiredtiger_exception(WT_DUPLICATE_KEY);
    }

    /* Insert. */
    _updates.insert(i, update);
}

/*
 * kv_table_item::fail_with_rollback --
 *     Fail the given update and throw an exception indicating rollback.
 */
void
kv_table_item::fail_with_rollback(std::shared_ptr<kv_update> update)
{
    kv_transaction_ptr txn = update->txn();
    if (txn)
        txn->fail();
    throw wiredtiger_exception(WT_ROLLBACK);
}

/*
 * kv_table_item::contains_any --
 *     Check whether the table contains the given value. If there are multiple value associated with
 *     the given timestamp, return true if any of them match.
 */
bool
kv_table_item::contains_any(const data_value &value, timestamp_t timestamp) const
{
    std::lock_guard lock_guard(_lock);
    kv_update::timestamp_comparator cmp;

    /* Position the cursor on the update that is right after the provided timestamp. */
    auto i = std::upper_bound(_updates.begin(), _updates.end(), timestamp, cmp);

    /*
     * If we are positioned at the beginning of the list, there are no visible updates given the
     * provided timestamp (i.e., with timestamp that is smaller than or equal to the provided
     * timestamp).
     */
    if (i == _updates.begin())
        return false;

    /* Read the timestamp of the latest visible update. */
    timestamp_t t = (*(--i))->commit_timestamp();

    /* Check all updates with that timestamp. */
    for (; (*i)->commit_timestamp() == t; i--) {
        if ((*i)->value() == value)
            return true;
        if (i == _updates.begin())
            break;
    }
    return false;
}

/*
 * kv_table_item::exists --
 *     Check whether the latest value exists.
 */
bool
kv_table_item::exists() const
{
    return get(k_timestamp_latest) != NONE;
}

/*
 * kv_table_item::get --
 *     Get the corresponding value. Return NONE if not found. Throw an exception on error.
 */
data_value
kv_table_item::get(timestamp_t timestamp) const
{
    std::lock_guard lock_guard(_lock);
    kv_update::timestamp_comparator cmp;

    if (_updates.empty())
        return NONE;

    if (has_prepared_nolock(timestamp))
        throw wiredtiger_exception(WT_PREPARE_CONFLICT);

    auto i = std::upper_bound(_updates.begin(), _updates.end(), timestamp, cmp);
    if (i == _updates.begin())
        return NONE;

    return (*(--i))->value();
}

/*
 * kv_table_item::get --
 *     Get the corresponding value. Return NONE if not found. Throw an exception on error.
 */
data_value
kv_table_item::get(kv_transaction_ptr txn) const
{
    std::lock_guard lock_guard(_lock);
    kv_update::timestamp_comparator cmp;

    if (!txn)
        throw model_exception("Null transaction");

    if (_updates.empty())
        return NONE;

    txn_id_t txn_id = txn->id();
    timestamp_t read_timestamp = txn->read_timestamp();

    if (has_prepared_nolock(read_timestamp))
        throw wiredtiger_exception(WT_PREPARE_CONFLICT);

    /*
     * See if the transaction wrote something - we read our own writes, irrespective of the read
     * timestamp.
     */
    for (auto i = _updates.rbegin(); i != _updates.rend(); i++)
        if ((*i)->txn_id() == txn_id)
            return (*i)->value();

    /* Otherwise do a regular read using the transaction's read timestamp and snapshot. */
    auto i = std::upper_bound(_updates.begin(), _updates.end(), read_timestamp, cmp);

    while (i != _updates.begin()) {
        const std::shared_ptr<kv_update> &u = *(--i);
        /*
         * The transaction snapshot includes only committed transactions, so no need to check
         * whether the update is actually committed.
         */
        if (txn->visible_txn(u->txn_id()))
            return u->value();
    }

    return NONE;
}

/*
 * kv_table_item::fix_timestamps --
 *     Fix the commit and durable timestamps for the corresponding update. We need to do this,
 *     because WiredTiger transaction API specifies the commit timestamp after performing the
 *     operations, not before.
 */
void
kv_table_item::fix_timestamps(
  txn_id_t txn_id, timestamp_t commit_timestamp, timestamp_t durable_timestamp)
{
    std::lock_guard lock_guard(_lock);
    kv_update::timestamp_comparator cmp;

    /*
     * Remove matching elements from the collection of updates. Note that we cannot use
     * std::equal_range here, because we are deleting from the collection, which has the side effect
     * of invalidating the "second" pointer returned from equal_range.
     */
    std::list<std::shared_ptr<kv_update>> to_fix;
    auto i = std::lower_bound(_updates.begin(), _updates.end(), k_initial_commit_timestamp, cmp);
    while (i != _updates.end() && (*i)->commit_timestamp() == k_initial_commit_timestamp)
        if ((*i)->txn_id() == txn_id) {
            to_fix.push_back(*i);
            i = _updates.erase(i);
        } else
            i++;

    for (auto &u : to_fix) {
        u->set_timestamps(commit_timestamp, durable_timestamp);
        try {
            add_update_nolock(u, false, false);
        } catch (wiredtiger_exception &e) {
            std::ostringstream ss;
            ss << "Unexpected error during the commit of transaction " << txn_id << ": ";
            ss << e.what();
            throw model_exception(ss.str());
        }
    }
}

/*
 * kv_table_item::has_prepared --
 *     Check whether the item has any prepared updates for the given timestamp.
 */
bool
kv_table_item::has_prepared(timestamp_t timestamp) const
{
    std::lock_guard lock_guard(_lock);
    return has_prepared_nolock(timestamp);
}

/*
 * kv_table_item::has_prepared_nolock --
 *     Check whether the item has any prepared updates without taking a lock.
 */
bool
kv_table_item::has_prepared_nolock(timestamp_t timestamp) const
{
    kv_update::timestamp_comparator cmp;

    /*
     * Check only updates with the initial commit timestamp. An update in a prepared transaction is
     * guaranteed to have that timestamp at this point.
     */
    auto r = std::equal_range(_updates.begin(), _updates.end(), k_initial_commit_timestamp, cmp);
    for (auto i = r.first; i != r.second; i++) {
        const kv_update *u = (*i).get();
        if (u->prepared() && u->txn()->prepare_timestamp() <= timestamp)
            return true;
    }

    return false;
}

/*
 * kv_table_item::rollback_updates --
 *     Roll back updates of an aborted transaction.
 */
void
kv_table_item::rollback_updates(txn_id_t txn_id)
{
    std::lock_guard lock_guard(_lock);
    for (auto i = _updates.begin(); i != _updates.end();)
        if ((*i)->txn_id() == txn_id) {
            /* Need to remove the transaction object, so that we don't leak memory. */
            (*i)->remove_txn();
            i = _updates.erase(i);
        } else
            i++;
}

} /* namespace model */