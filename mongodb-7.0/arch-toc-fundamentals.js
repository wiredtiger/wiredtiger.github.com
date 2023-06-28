var arch_toc_fundamentals =
[
    [ "Connection", "arch-connection.html", [
      [ "Definition", "arch-connection.html#arch_conn_def", null ],
      [ "Life cycle", "arch-connection.html#arch_conn_lifecycle", [
        [ "Initialization", "arch-connection.html#arch_conn_init", null ],
        [ "Runtime", "arch-connection.html#arch_conn_runtime", null ],
        [ "Closure", "arch-connection.html#arch_conn_closure", null ]
      ] ]
    ] ],
    [ "Session", "arch-session.html", [
      [ "Definition", "arch-session.html#arch_session_def", null ],
      [ "Operations", "arch-session.html#arch_session_ops", null ],
      [ "Transactions", "arch-session.html#arch_session_txn", null ],
      [ "Cursors", "arch-session.html#arch_session_cur", null ],
      [ "Data Handles", "arch-session.html#arch_session_dhandles", null ],
      [ "Closure", "arch-session.html#arch_session_closure", null ],
      [ "Multithreading", "arch-session.html#arch_session_thread", null ]
    ] ],
    [ "Cursor", "arch-cursor.html", [
      [ "Data translation", "arch-cursor.html#arch_cursor_raw", null ],
      [ "File cursors", "arch-cursor.html#arch_cursor_file", null ],
      [ "Table and index cursors", "arch-cursor.html#arch_cursor_table", null ],
      [ "Projections and plans", "arch-cursor.html#arch_cursor_projections", null ],
      [ "Dump cursors", "arch-cursor.html#arch_cursor_dump", null ],
      [ "Backup cursors", "arch-cursor.html#arch_cursor_backup", null ],
      [ "Join cursors", "arch-cursor.html#arch_cursor_join", null ],
      [ "Duplicating cursors", "arch-cursor.html#arch_cursor_duplicate", null ],
      [ "File cursors, Btrees and data handles", "arch-cursor.html#arch_cursor_dhandle", null ],
      [ "Cursor caching", "arch-cursor.html#arch_cursor_caching", null ],
      [ "Session cursor sweep", "arch-cursor.html#arch_cursor_sweep", null ],
      [ "Range bounded cursors", "arch-cursor.html#arch_cursor_bound", null ],
      [ "Debug copy", "arch-cursor.html#arch_cursor_debug_copy", null ]
    ] ],
    [ "Transactions", "arch-transaction.html", [
      [ "Lifecycle", "arch-transaction.html#Lifecycle", null ],
      [ "Properties", "arch-transaction.html#ACID", [
        [ "Atomicity", "arch-transaction.html#Atomicity", null ],
        [ "Isolation", "arch-transaction.html#Isolation", null ],
        [ "Timestamps", "arch-transaction.html#Timestamps", null ],
        [ "Visibility", "arch-transaction.html#Visibility", null ],
        [ "Durability", "arch-transaction.html#Durability", null ]
      ] ],
      [ "Prepared Transactions", "arch-transaction.html#arch-transaction-prepare", null ]
    ] ],
    [ "Timestamps", "arch-timestamp.html", [
      [ "Timestamp data model and worldview", "arch-timestamp.html#arch-timestamp-model", null ],
      [ "Representation of timestamps and time windows", "arch-timestamp.html#arch-timestamp-representation", null ],
      [ "Handling of timestamps in updates and disk pages", "arch-timestamp.html#arch-timestamp-handling", null ],
      [ "Prepared transactions", "arch-timestamp.html#arch-timestamp-prepare", null ]
    ] ],
    [ "Snapshot", "arch-snapshot.html", [
      [ "Transactions using Snapshots", "arch-snapshot.html#snapshot_transaction", null ],
      [ "Snapshot Internals", "arch-snapshot.html#snapshot_internals", null ],
      [ "Snapshot Visibility", "arch-snapshot.html#snapshot_visibility", null ],
      [ "Snapshots & Checkpoints", "arch-snapshot.html#snapshot_checkpoint", null ]
    ] ],
    [ "Rollback to Stable (RTS)", "arch-rts.html", [
      [ "Overview of RTS", "arch-rts.html#rts-overview", null ],
      [ "How RTS aborts unstable updates", "arch-rts.html#rts-abort-updates", null ],
      [ "Skipping reading unnecessary pages into memory", "arch-rts.html#rts-page-skip", null ],
      [ "Example 1", "arch-rts.html#rts-example-1", null ],
      [ "Example 2", "arch-rts.html#rts-example-2", null ],
      [ "Example 3", "arch-rts.html#rts-example-3", null ],
      [ "Interaction with timestamps", "arch-rts.html#interaction-with-timestamps", null ],
      [ "Interaction with transaction IDs", "arch-rts.html#interaction-with-transaction-ids", null ],
      [ "Operations on the history store", "arch-rts.html#operations-on-the-history-store", null ],
      [ "Iterating over B-Trees", "arch-rts.html#iterating-over-b-trees", null ],
      [ "Iterating over pages", "arch-rts.html#iterating-over-pages", null ],
      [ "Iterating over updates", "arch-rts.html#iterating-over-updates", null ],
      [ "Interaction with checkpoints and eviction", "arch-rts.html#interaction-with-checkpoints-and-eviction", null ],
      [ "Dry-run mode", "arch-rts.html#dry-run-mode", null ],
      [ "RTS for a single table", "arch-rts.html#rts-for-a-single-table", null ]
    ] ],
    [ "Deleted Pages and Fast-Truncate", "arch-fast-truncate.html", [
      [ "Deleted Pages", "arch-fast-truncate.html#ft_deleted_pages", null ],
      [ "Instantiated Pages", "arch-fast-truncate.html#ft_instantiated_pages", [
        [ "The instantiated flag and the page_del field", "arch-fast-truncate.html#ft_instantiated_instantiated", null ],
        [ "The inst_updates field", "arch-fast-truncate.html#ft_instantiated_updates", null ]
      ] ],
      [ "Instantiation", "arch-fast-truncate.html#ft_instantiation", null ],
      [ "Internal page reconciliation", "arch-fast-truncate.html#ft_internal_reconciliation", null ],
      [ "Leaf (child) reconciliation", "arch-fast-truncate.html#ft_leaf_reconciliation", null ],
      [ "On-disk format", "arch-fast-truncate.html#ft_on_disk_format", null ],
      [ "Truncation", "arch-fast-truncate.html#ft_truncate", null ],
      [ "Generation of other deleted pages", "arch-fast-truncate.html#ft_deleted_generation", null ],
      [ "Skipping deleted pages", "arch-fast-truncate.html#ft_page_skip", null ],
      [ "VLCS considerations", "arch-fast-truncate.html#ft_vlcs", null ],
      [ "FLCS and deleted pages", "arch-fast-truncate.html#ft_flcs", null ],
      [ "Notes on visibility", "arch-fast-truncate.html#ft_visibility", null ],
      [ "Miscellaneous other notes", "arch-fast-truncate.html#ft_misc", null ],
      [ "Pointers to pieces of the implementation", "arch-fast-truncate.html#ft_pointers", null ]
    ] ]
];