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
    [ "Timestamps and timestamping", "arch-timestamp.html", [
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
    [ "Rollback to Stable", "arch-rts.html", [
      [ "Overview of rollback to stable", "arch-rts.html#rts-overview", null ],
      [ "Stable update of rollback to stable", "arch-rts.html#rts-stable-update", null ],
      [ "Pre-conditions required for rollback to stable", "arch-rts.html#rts-preconditions", null ],
      [ "Checks performed on a table by rollback to stable", "arch-rts.html#rts-table-check", null ],
      [ "How rollback to stable fixes the unstable updates", "arch-rts.html#rts-how", null ],
      [ "How rollback to stable aborts in-memory updates", "arch-rts.html#rts-abort-update", null ],
      [ "How rollback to stable aborts on-disk update", "arch-rts.html#rts-abort-on-disk-update", null ],
      [ "Rollback to stable history store search", "arch-rts.html#rts-hs-search", null ],
      [ "Skipping reading unnecessary pages into memory", "arch-rts.html#rts-page-skip", null ]
    ] ]
];