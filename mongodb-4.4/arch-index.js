var arch_index =
[
    [ "Backup (Architecture Guide)", "arch-backup.html", [
      [ "Overview", "arch-backup.html#autotoc_md0", null ],
      [ "Full database", "arch-backup.html#autotoc_md1", null ],
      [ "Block-based incremental backup", "arch-backup.html#autotoc_md2", null ],
      [ "Log-based incremental backup", "arch-backup.html#autotoc_md3", null ],
      [ "Target backup", "arch-backup.html#autotoc_md4", null ]
    ] ],
    [ "Block Manager (Architecture Guide)", "arch-block.html", [
      [ "What is a block?", "arch-block.html#block", null ],
      [ "Block manager implementation details", "arch-block.html#block_implementation", [
        [ "Writing", "arch-block.html#write_once", null ],
        [ "Descriptor blocks", "arch-block.html#desc_block", null ],
        [ "Extent lists", "arch-block.html#block_lists", null ]
      ] ],
      [ "Configuration options", "arch-block.html#configuration", [
        [ "Allocation size", "arch-block.html#alloc_size", null ],
        [ "Checksum", "arch-block.html#checksum", null ]
      ] ],
      [ "How WiredTiger uses the block manager", "arch-block.html#block_usage", [
        [ "File creation and the block manager", "arch-block.html#creation", null ],
        [ "Reading files and pages", "arch-block.html#read", null ],
        [ "Writing", "arch-block.html#Writing", [
          [ "Checkpoint", "arch-block.html#Checkpoint", null ],
          [ "Eviction", "arch-block.html#Eviction", null ]
        ] ],
        [ "Compaction", "arch-block.html#Compaction", null ]
      ] ]
    ] ],
    [ "B-Trees (Architecture Guide)", "arch-btree.html", [
      [ "B-Tree Data Source (WT_BTREE)", "arch-btree.html#btree_btree_data_source", null ],
      [ "B-Tree In-Memory Representation", "arch-btree.html#btree_btree_in_memory_representation", null ],
      [ "Truncate Operation", "arch-btree.html#btree_truncate_operation", null ],
      [ "Range Truncate On Files", "arch-btree.html#btree_range_truncate_file", null ],
      [ "Interaction With Other Operations", "arch-btree.html#btree_truncate_interaction_with_other_operations", null ],
      [ "Performing Reads On Truncated Pages", "arch-btree.html#btree_truncate_performing_reads_on_truncated_pages", null ]
    ] ],
    [ "Cache (Architecture Guide)", "arch-cache.html", [
      [ "Basic operation", "arch-cache.html#arch_cache_basics", null ],
      [ "Cache structure", "arch-cache.html#arch_cache_structure", null ],
      [ "Cache size and content", "arch-cache.html#arch_cache_size", null ],
      [ "Shared caches", "arch-cache.html#arch_cache_shared", null ]
    ] ],
    [ "Checkpoint (Architecture Guide)", "arch-checkpoint.html", [
      [ "Overview", "arch-checkpoint.html#autotoc_md5", null ],
      [ "The checkpoint algorithm", "arch-checkpoint.html#autotoc_md6", null ],
      [ "Skipping checkpoints", "arch-checkpoint.html#autotoc_md7", null ],
      [ "Checkpoint generations", "arch-checkpoint.html#autotoc_md8", null ],
      [ "Garbage collection", "arch-checkpoint.html#autotoc_md9", null ]
    ] ],
    [ "Connection (Architecture Guide)", "arch-connection.html", [
      [ "Definition", "arch-connection.html#arch_conn_def", null ],
      [ "Life cycle", "arch-connection.html#arch_conn_lifecycle", [
        [ "Initialization", "arch-connection.html#arch_conn_init", null ],
        [ "Runtime", "arch-connection.html#arch_conn_runtime", null ],
        [ "Closure", "arch-connection.html#arch_conn_closure", null ]
      ] ]
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
    [ "Data Handles (Architecture Guide)", "arch-dhandle.html", [
      [ "Data Handle Lifecycle", "arch-dhandle.html#dhandle_data_handle_lifecycle", null ],
      [ "Data Handle Creation", "arch-dhandle.html#dhandle_data_handle_creation", null ],
      [ "Data Handle Reference Counts", "arch-dhandle.html#dhandle_data_handle_reference_counts", null ],
      [ "Sweep-Server Dhandle Sweep", "arch-dhandle.html#dhandle_sweep_server_dhandle_sweep", null ],
      [ "Dhandle Session Cache Sweep", "arch-dhandle.html#dhandle_dhandle_session_cache_sweep", null ]
    ] ],
    [ "Eviction (Architecture Guide)", "arch-eviction.html", [
      [ "Eviction", "arch-eviction.html#eviction_overall", null ],
      [ "Clean vs dirty data", "arch-eviction.html#clean_dirty_data", null ],
      [ "Clean vs dirty eviction", "arch-eviction.html#clean_dirty_eviction", null ]
    ] ],
    [ "File System Interface and Operating System Support (Architecture Guide)", "arch-fs-os.html", [
      [ "Support for Multiple Operating Systems", "arch-fs-os.html#multiple_os", null ],
      [ "WiredTiger File System and File Handle Interfaces", "arch-fs-os.html#file_system_and_handle", [
        [ "File System Interface", "arch-fs-os.html#file_system", null ],
        [ "File Handle Interface", "arch-fs-os.html#file_handle", null ],
        [ "File System and Handle Customization", "arch-fs-os.html#file_customization", null ],
        [ "In-memory support", "arch-fs-os.html#file_in_memory", null ],
        [ "File Stream", "arch-fs-os.html#file_stream", null ]
      ] ],
      [ "Multiple System Architecture Support", "arch-fs-os.html#filesystem_usage", null ]
    ] ],
    [ "History Store (Architecture Guide)", "arch-hs.html", [
      [ "History store table structure", "arch-hs.html#arch_hs_table", [
        [ "Tombstones in the history store table", "arch-hs.html#arch_hs_table_tombstone", null ]
      ] ],
      [ "History store initialization", "arch-hs.html#arch_hs_initialize", null ],
      [ "History store cursor interface", "arch-hs.html#arch_hs_cursor", null ],
      [ "History store cursor interface and visibility rules", "arch-hs.html#arch_hs_cursor_visibility", null ],
      [ "History store and reconciliation", "arch-hs.html#arch_hs_reconciliation", null ],
      [ "Searching for older versions of a key in History Store", "arch-hs.html#arch_hs_read", null ],
      [ "History store and rollback to stable", "arch-hs.html#arch_hs_rts", null ],
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
    [ "Row Store and Column Store (Architecture Guide)", "arch-row-column.html", [
      [ "Definition", "arch-row-column.html#row_column_definition", null ],
      [ "Row-stores", "arch-row-column.html#row_column_rs", null ],
      [ "Variable length column-stores", "arch-row-column.html#row_column_vlcs", null ],
      [ "Fixed length column-stores", "arch-row-column.html#row_column_flcs", null ],
      [ "Internal usage", "arch-row-column.html#row_column_internal_use", null ]
    ] ],
    [ "Rollback to Stable (Architecture Guide)", "arch-rts.html", [
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
    [ "Schema (Architecture Guide)", "arch-schema.html", [
      [ "Data Formats", "arch-schema.html#schema_data_formats", null ],
      [ "Data Files", "arch-schema.html#schema_files", null ],
      [ "Schema Integrity", "arch-schema.html#schema_integrity", null ],
      [ "Schema Manipulation", "arch-schema.html#schema_api", [
        [ "Create", "arch-schema.html#schema_create", null ],
        [ "Drop", "arch-schema.html#schema_drop", null ],
        [ "Rename", "arch-schema.html#schema_rename", null ],
        [ "Alter", "arch-schema.html#schema_alter", null ],
        [ "Truncate", "arch-schema.html#schema_truncate", null ]
      ] ]
    ] ],
    [ "Session (Architecture Guide)", "arch-session.html", [
      [ "Definition", "arch-session.html#arch_session_def", null ],
      [ "Operations", "arch-session.html#arch_session_ops", null ],
      [ "Transactions", "arch-session.html#arch_session_txn", null ],
      [ "Cursors", "arch-session.html#arch_session_cur", null ],
      [ "Data Handles", "arch-session.html#arch_session_dhandles", null ],
      [ "Closure", "arch-session.html#arch_session_closure", null ],
      [ "Multithreading", "arch-session.html#arch_session_thread", null ]
    ] ],
    [ "Snapshot (Architecture Guide)", "arch-snapshot.html", [
      [ "Transactions using Snapshots", "arch-snapshot.html#snapshot_transaction", null ],
      [ "Snapshot Internals", "arch-snapshot.html#snapshot_internals", null ],
      [ "Snapshot Visibility", "arch-snapshot.html#snapshot_visibility", null ],
      [ "Snapshots & Checkpoints", "arch-snapshot.html#snapshot_checkpoint", null ]
    ] ],
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
    [ "Architecture Guide Glossary of Terms", "arch-glossary.html", "arch-glossary" ]
];