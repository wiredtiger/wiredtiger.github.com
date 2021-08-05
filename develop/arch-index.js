var arch_index =
[
    [ "Backup (Architecture Guide)", "arch-backup.html", [
      [ "Overview", "arch-backup.html#autotoc_md0", null ],
      [ "Full database", "arch-backup.html#autotoc_md1", null ],
      [ "Block-based incremental backup", "arch-backup.html#autotoc_md2", null ],
      [ "Log-based incremental backup", "arch-backup.html#autotoc_md3", null ],
      [ "Target backup", "arch-backup.html#autotoc_md4", null ]
    ] ],
    [ "Block Manager (Architecture Guide)", "arch-block.html", null ],
    [ "Cache (Architecture Guide)", "arch-cache.html", null ],
    [ "Checkpoint (Architecture Guide)", "arch-checkpoint.html", [
      [ "Overview", "arch-checkpoint.html#autotoc_md5", null ],
      [ "The checkpoint algorithm", "arch-checkpoint.html#autotoc_md6", null ],
      [ "Skipping checkpoints", "arch-checkpoint.html#autotoc_md7", null ],
      [ "Checkpoint generations", "arch-checkpoint.html#autotoc_md8", null ],
      [ "Garbage collection", "arch-checkpoint.html#autotoc_md9", null ]
    ] ],
    [ "Cursor (Architecture Guide)", "arch-cursor.html", [
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
    [ "Data File Format (Architecture Guide)", "arch-data-file.html", [
      [ "Database Files", "arch-data-file.html#data_file_database_files", null ],
      [ "Data File Format and Layout", "arch-data-file.html#data_file_format", null ],
      [ "On-Disk Page Format and Layout", "arch-data-file.html#data_file_on_disk_page_format", null ],
      [ "Page Types", "arch-data-file.html#data_file_page_types", null ],
      [ "Data File Functions", "arch-data-file.html#data_file_functions", null ]
    ] ],
    [ "Data Handles and Btrees (Architecture Guide)", "arch-dhandle.html", "arch-dhandle" ],
    [ "Eviction (Architecture Guide)", "arch-eviction.html", null ],
    [ "File System and Operating System Interface (Architecture Guide)", "arch-fs-os.html", null ],
    [ "History Store (Architecture Guide)", "arch-hs.html", [
      [ "History store table structure", "arch-hs.html#arch_hs_table", [
        [ "Tombstones in the history store table", "arch-hs.html#arch_hs_table_tombstone", null ]
      ] ],
      [ "History store initialization", "arch-hs.html#arch_hs_initialize", null ],
      [ "History store cursor interface", "arch-hs.html#arch_hs_cursor", null ],
      [ "History store cursor interface and visibility rules", "arch-hs.html#arch_hs_cursor_visibility", null ],
      [ "History store and reconciliation", "arch-hs.html#arch_hs_reconciliation", null ],
      [ "Searching for older versions of a key in History Store", "arch-hs.html#arch_hs_read", null ],
      [ "History store and rollback-to-stable", "arch-hs.html#arch_hs_rts", null ],
      [ "History store and prepared transactions", "arch-hs.html#arch_hs_prepared", null ]
    ] ],
    [ "Logging (Architecture Guide)", "arch-logging.html", [
      [ "Log-related files in the database directory", "arch-logging.html#log_files", null ],
      [ "Configuration choices and their implications", "arch-logging.html#log_configuration", null ],
      [ "Log operations and records", "arch-logging.html#log_records", null ],
      [ "Logging subsystem data structures and algorithms", "arch-logging.html#log_subsystem", null ],
      [ "Internal Threads", "arch-logging.html#log_threads", null ],
      [ "Using the log", "arch-logging.html#log_usage", null ]
    ] ],
    [ "Log File Format (Architecture Guide)", "arch-log-file.html", null ],
    [ "Metadata (Architecture Guide)", "arch-metadata.html", [
      [ "Metadata Table", "arch-metadata.html#metadata_table", null ],
      [ "Storing Checkpoint Metadata", "arch-metadata.html#metadata_checkpoint", null ],
      [ "Turtle file", "arch-metadata.html#metadata_turtle", null ],
      [ "Reading Metadata", "arch-metadata.html#metadata_reading", [
        [ "\"metadata:\" cursor", "arch-metadata.html#metadata_cursor", null ],
        [ "\"metadata:create\" cursor", "arch-metadata.html#metadata_create_cursor", null ],
        [ "Printing metadata with the wt utility", "arch-metadata.html#metadata_wt_util", null ]
      ] ]
    ] ],
    [ "Python API (Architecture Guide)", "arch-python.html", null ],
    [ "Row Store & Column Store (Architecture Guide)", "arch-row-column.html", [
      [ "Definition", "arch-row-column.html#row_column_definition", null ],
      [ "Row-stores", "arch-row-column.html#row_column_rs", null ],
      [ "Variable length column-stores", "arch-row-column.html#row_column_vlcs", null ],
      [ "Fixed length column-stores", "arch-row-column.html#row_column_flcs", null ],
      [ "Internal usage", "arch-row-column.html#row_column_internal_use", null ]
    ] ],
    [ "Rollback to stable (Architecture Guide)", "arch-rts.html", [
      [ "Overview of rollback to stable", "arch-rts.html#rts-overview", null ],
      [ "Stable update of rollback to stable", "arch-rts.html#rts-stable-update", null ],
      [ "Pre-conditions required for rollback to stable", "arch-rts.html#rts-preconditions", null ],
      [ "Checks performed on a table by rollback to stable", "arch-rts.html#rts-table-check", null ],
      [ "How rollback to stable fixes the unstable updates", "arch-rts.html#rts-how", null ],
      [ "How rollback to stable aborts in-memory updates", "arch-rts.html#rts-abort-update", null ],
      [ "How rollback to stable aborts on-disk update", "arch-rts.html#rts-abort-on-disk-update", null ],
      [ "Rollback to stable history store search", "arch-rts.html#rts-hs-search", null ],
      [ "Skipping reading unnecessary pages into memory", "arch-rts.html#rts-page-skip", null ]
    ] ],
    [ "Schema (Architecture Guide)", "arch-schema.html", "arch-schema" ],
    [ "Snapshot (Architecture Guide)", "arch-snapshot.html", null ],
    [ "Transactions (Architecture Guide)", "arch-transaction.html", [
      [ "Lifecycle", "arch-transaction.html#Lifecycle", null ],
      [ "Properties", "arch-transaction.html#ACID", [
        [ "Atomicity", "arch-transaction.html#Atomicity", null ],
        [ "Isolation", "arch-transaction.html#Isolation", null ],
        [ "Timestamps", "arch-transaction.html#Timestamps", null ],
        [ "Visibility", "arch-transaction.html#Visibility", null ],
        [ "Durability", "arch-transaction.html#Durability", null ]
      ] ],
      [ "Transactions", "arch-transaction.html#Prepared", null ]
    ] ],
    [ "Architecture Guide Glossary of Terms", "arch-glossary.html", [
      [ "General Terms Used in WiredTiger", "arch-glossary.html#arch-glossary-general", null ],
      [ "Terms Related to Checkpoints", "arch-glossary.html#arch-glossary-checkpoint", null ],
      [ "Terms Related to Transactions", "arch-glossary.html#arch-glossary-transactions", null ]
    ] ]
];