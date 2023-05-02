var programming =
[
    [ "Getting Started with the API", "basic_api.html", [
      [ "Connecting to a database", "basic_api.html#basic_connection", null ],
      [ "Creating a table", "basic_api.html#basic_create_table", null ],
      [ "Accessing data with cursors", "basic_api.html#basic_cursors", null ],
      [ "Closing handles", "basic_api.html#basic_close", null ]
    ] ],
    [ "Configuration Strings", "config_strings.html", [
      [ "Introduction", "config_strings.html#config_intro", null ],
      [ "JavaScript Object Notation (JSON) compatibility", "config_strings.html#config_json", null ]
    ] ],
    [ "Cursors", "cursors.html", "cursors" ],
    [ "Schema, Columns, Column Groups, Indices and Projections", "schema.html", "schema" ],
    [ "Error handling", "error_handling.html", [
      [ "EBUSY errors", "error_handling.html#error_ebusy", null ],
      [ "WiredTiger-specific errors", "error_handling.html#error_list", null ],
      [ "Translating errors", "error_handling.html#error_translation", null ]
    ] ],
    [ "Transactional applications", "transactions.html", null ],
    [ "Transactional API calls", "transactions_api.html", [
      [ "Explicit transactions", "transactions_api.html#transactions_grouping", null ],
      [ "Implicit transactions", "transactions_api.html#transactions_implicit", null ],
      [ "Concurrency control", "transactions_api.html#transactions_concurrency", null ],
      [ "Isolation levels", "transactions_api.html#isolation_levels", null ],
      [ "Cursors and transactions", "transactions_api.html#cursors_transactions", null ],
      [ "Resetting the session snapshot", "transactions_api.html#snapshot_reset", null ]
    ] ],
    [ "Durability overview", "durability_overview.html", [
      [ "In-memory databases", "durability_overview.html#explain_durability_in_memory", null ],
      [ "Checkpoint durability (without timestamps)", "durability_overview.html#explain_durability_checkpoint", null ],
      [ "Commit-level durability (without timestamps)", "durability_overview.html#explain_durability_commit", null ],
      [ "Adding timestamps", "durability_overview.html#explain_durability_timestamp", null ]
    ] ],
    [ "Checkpoint-level durability", "durability_checkpoint.html", [
      [ "Checkpoints vs. snapshots", "durability_checkpoint.html#checkpoint_snapshot", null ],
      [ "Checkpoints", "durability_checkpoint.html#checkpoint_checkpoints", [
        [ "Checkpointing specific objects", "durability_checkpoint.html#checkpoint_target", null ]
      ] ],
      [ "Checkpoint cursors", "durability_checkpoint.html#checkpoint_cursors", null ],
      [ "Checkpoint naming", "durability_checkpoint.html#checkpoint_naming", null ],
      [ "Checkpoint durability and backups", "durability_checkpoint.html#checkpoint_backup", null ],
      [ "Checkpoints and file compaction", "durability_checkpoint.html#checkpoint_compaction", null ]
    ] ],
    [ "Commit-level durability", "durability_log.html", [
      [ "Enabling commit-level durability", "durability_log.html#commit_durability_enable", null ],
      [ "Commit-level durability and logs", "durability_log.html#commit_durability_logs", null ],
      [ "Recovery", "durability_log.html#commit_durability_recovery", null ],
      [ "Checkpoints", "durability_log.html#commit_durability_checkpoint", null ],
      [ "Backups", "durability_log.html#commit_durability_backup", null ],
      [ "Log file archival and removal", "durability_log.html#commit_durability_archiving", null ],
      [ "Log cursors", "durability_log.html#commit_log_cursors", null ],
      [ "Bulk loads", "durability_log.html#commit_durability_bulk", null ],
      [ "Tuning commit-level durability", "durability_log.html#commit_durability_tuning", [
        [ "Group commit", "durability_log.html#commit_durability_group_commit", null ],
        [ "Flush call configuration", "durability_log.html#commit_durability_flush_config", null ]
      ] ]
    ] ],
    [ "Timestamp overview", "timestamp_model.html", [
      [ "Global timestamps", "timestamp_model.html#timestamps_global", null ],
      [ "Timestamps and transactions", "timestamp_model.html#timestamp_transactions", null ],
      [ "Timestamp format", "timestamp_model.html#timestamps_format", null ],
      [ "Logged objects, commit-level durability and timestamps", "timestamp_model.html#timestamps_durability_commit", null ],
      [ "Checkpoint durability and timestamps", "timestamp_model.html#timestamps_durability_checkpoint", null ]
    ] ],
    [ "Managing the global timestamp state", "timestamp_global_api.html", [
      [ "Setting global timestamps", "timestamp_global_api.html#timestamp_global_setting_timestamps", [
        [ "Setting the global \"durable_timestamp\" timestamp", "timestamp_global_api.html#timestamp_global_set_api_durable_timestamp", null ],
        [ "Setting the \"oldest_timestamp\" timestamp", "timestamp_global_api.html#timestamp_global_set_api_oldest_timestamp", null ],
        [ "Setting the \"stable_timestamp\" timestamp", "timestamp_global_api.html#timestamp_global_set_api_stable_timestamp", null ]
      ] ],
      [ "Querying global timestamps", "timestamp_global_api.html#timestamp_global_querying_timestamps", [
        [ "Reading the \"all_durable\" timestamp", "timestamp_global_api.html#timestamp_global_query_api_all_durable", null ],
        [ "Reading the \"last_checkpoint\" timestamp", "timestamp_global_api.html#timestamp_global_query_api_last_checkpoint", null ],
        [ "Reading the \"oldest_reader\" timestamp", "timestamp_global_api.html#timestamp_global_query_api_oldest_reader", null ],
        [ "Reading the \"oldest_timestamp\" timestamp", "timestamp_global_api.html#timestamp_global_query_api_oldest_timestamp", null ],
        [ "Reading the \"pinned\" timestamp", "timestamp_global_api.html#timestamp_global_query_api_pinned", null ],
        [ "Reading the \"recovery\" timestamp", "timestamp_global_api.html#timestamp_global_query_api_recovery", null ],
        [ "Reading the \"stable_timestamp\" timestamp", "timestamp_global_api.html#timestamp_global_query_api_stable_timestamp", null ]
      ] ]
    ] ],
    [ "Managing the transaction timestamp state", "timestamp_txn_api.html", [
      [ "Application timestamp configuration", "timestamp_txn_api.html#timestamp_txn_api_configure", null ],
      [ "Setting the transaction's commit timestamp", "timestamp_txn_api.html#timestamp_txn_api_commit_timestamp", null ],
      [ "Setting multiple commit timestamps", "timestamp_txn_api.html#timestamp_txn_api_commit_multi_timestamp", null ],
      [ "Setting the transaction's read timestamp", "timestamp_txn_api.html#timestamp_txn_api_read_timestamp", null ],
      [ "Querying transaction timestamp information", "timestamp_txn_api.html#timestamp_txn_api_query", null ],
      [ "Configuring transaction timestamp information with WT_SESSION::begin_transaction", "timestamp_txn_api.html#timestamp_txn_api_begin", null ],
      [ "Configuring transaction timestamp information with WT_SESSION::commit_transaction", "timestamp_txn_api.html#timestamp_txn_api_commit", null ],
      [ "Configuring transaction timestamp information with WT_SESSION::prepare_transaction", "timestamp_txn_api.html#timestamp_txn_api_prepare", null ],
      [ "Configuring transaction timestamp information with WT_SESSION::timestamp_transaction", "timestamp_txn_api.html#timestamp_txn_api_timestamp_transaction", null ]
    ] ],
    [ "Using transaction prepare with timestamps", "timestamp_prepare.html", [
      [ "Configuring ignore_prepare", "timestamp_prepare.html#timestamp_prepare_ignore_prepare", null ]
    ] ],
    [ "Automatic prepare timestamp rounding", "timestamp_prepare_roundup.html", [
      [ "Replaying prepared transactions by rounding up the prepare timestamp", "timestamp_prepare_roundup.html#timestamp_prepare_roundup_replay", null ],
      [ "Safety rationale and details", "timestamp_prepare_roundup.html#timestamp_prepare_roundup_safety", null ]
    ] ],
    [ "Miscellaneous timestamp topics", "timestamp_misc.html", [
      [ "Rounding up the read timestamp", "timestamp_misc.html#timestamp_read_roundup", null ],
      [ "Using rollback-to-stable with timestamps", "timestamp_misc.html#timestamp_misc_rts", null ],
      [ "In-memory configurations and timestamps", "timestamp_misc.html#timestamps_misc_in_memory", null ]
    ] ],
    [ "Tutorial: transactions and ACID properties", "explain_acid.html", null ],
    [ "Tutorial: isolation levels", "explain_isolation.html", null ],
    [ "Log-Structured Merge Trees", "lsm.html", [
      [ "Background", "lsm.html#lsm_background", null ],
      [ "Description of LSM trees", "lsm.html#lsm_description", null ],
      [ "Interface to LSM trees", "lsm.html#lsm_api", null ],
      [ "Merging", "lsm.html#lsm_merge", null ],
      [ "Bloom filters", "lsm.html#lsm_bloom", null ],
      [ "Creating tables using LSM trees", "lsm.html#lsm_schema", null ],
      [ "Caveats", "lsm.html#lsm_caveats", [
        [ "Key_format configuration", "lsm.html#lsm_key_format", null ],
        [ "Named checkpoints", "lsm.html#lsm_checkpoints", null ]
      ] ]
    ] ],
    [ "File formats and compression", "file_formats.html", "file_formats" ],
    [ "Compressors", "compression.html", [
      [ "Using LZ4 compression", "compression.html#compression_lz4", null ],
      [ "Using snappy compression", "compression.html#compression_snappy", null ],
      [ "Using zlib compression", "compression.html#compression_zlib", null ],
      [ "Using zstd compression", "compression.html#compression_zstd", null ],
      [ "Using iaa compression", "compression.html#compression_iaa", null ],
      [ "Upgrading compression engines", "compression.html#compression_upgrading", null ],
      [ "Custom compression engines", "compression.html#compression_custom", null ]
    ] ],
    [ "Encryptors", "encryption.html", "encryption" ],
    [ "Message handling", "message_handling.html", [
      [ "Message handling using the WT_EVENT_HANDLER", "message_handling.html#event_message_handling", null ],
      [ "Output format of the WT_EVENT_HANDLER", "message_handling.html#message_handling_output", [
        [ "Flat string format", "message_handling.html#message_handling_output_flat_string", null ],
        [ "JSON format", "message_handling.html#message_handling_output_json", null ]
      ] ]
    ] ],
    [ "Verbose messaging", "verbose_messaging.html", [
      [ "Verbosity Levels", "verbose_messaging.html#verbosity_levels", null ],
      [ "Verbosity Categories", "verbose_messaging.html#verbosity_categories", [
        [ "Configuring Verbose Categories", "verbose_messaging.html#verbosity_configuration", null ]
      ] ]
    ] ],
    [ "Debugging", "debugging.html", [
      [ "Assertions", "debugging.html#assertions", null ],
      [ "Diagnostic Code Blocks", "debugging.html#diagnostic_code_blocks", null ],
      [ "Diagnostic Categories", "debugging.html#diagnostic_categories", [
        [ "Configuring runtime diagnostics", "debugging.html#extra_diagnostics_configuration", null ]
      ] ]
    ] ],
    [ "Multithreading", "threads.html", [
      [ "Code samples", "threads.html#threads_example", null ]
    ] ],
    [ "Name spaces", "namespace.html", [
      [ "Process' environment name space", "namespace.html#namespace_env", null ],
      [ "C language name space", "namespace.html#namespace_c", null ],
      [ "File system name space", "namespace.html#namespace_filesystem", null ],
      [ "Error return name space", "namespace.html#namespace_error", null ]
    ] ],
    [ "Database read-only mode", "readonly.html", [
      [ "Database read-only configuration considerations", "readonly.html#readonly_config", null ],
      [ "Readonly configuration and recovery", "readonly.html#readonly_recovery", null ],
      [ "Readonly configuration and logging", "readonly.html#readonly_logging", null ],
      [ "Readonly configuration and LSM trees", "readonly.html#readonly_lsm", null ],
      [ "Readonly configuration and multiple database handles", "readonly.html#readonly_handles", null ]
    ] ],
    [ "Signal handling", "signals.html", null ],
    [ "Backups", "backup.html", [
      [ "Backup from an application", "backup.html#backup_process", null ],
      [ "Duplicate backup cursors", "backup.html#backup_duplicate", null ],
      [ "Backup from the command line", "backup.html#backup_util", null ],
      [ "Block-based Incremental backup", "backup.html#backup_incremental-block", null ],
      [ "Log-based Incremental backup", "backup.html#backup_incremental", null ],
      [ "Export tables using backup cursor", "backup.html#backup_export", null ],
      [ "Backup and O_DIRECT", "backup.html#backup_o_direct", null ]
    ] ],
    [ "Compaction", "compact.html", null ],
    [ "In-memory databases", "in_memory.html", null ],
    [ "Eviction", "eviction.html", [
      [ "Eviction overview", "eviction.html#eviction_overview", null ],
      [ "Clean eviction", "eviction.html#clean_eviction", null ],
      [ "History store eviction", "eviction.html#hs_eviction", null ],
      [ "Update restore eviction", "eviction.html#update_restore_eviction", null ],
      [ "Exceptions", "eviction.html#exceptions", null ]
    ] ],
    [ "Join cursors", "cursor_join.html", null ],
    [ "Log cursors", "cursor_log.html", null ],
    [ "Track function calls", "operation_tracking.html", null ],
    [ "Per-process shared caches", "shared_cache.html", null ],
    [ "Statistics", "statistics.html", [
      [ "Statistics logging", "statistics.html#statistics_log", null ]
    ] ],
    [ "Upgrading and downgrading databases", "upgrade.html", null ],
    [ "Extending WiredTiger", "extensions.html", [
      [ "Loadable extensions", "extensions.html#extensions_loadable", null ],
      [ "Extensions and recovery", "extensions.html#extensions_recovery", null ],
      [ "Local extensions", "extensions.html#extensions_local", null ]
    ] ],
    [ "Custom Collators", "custom_collators.html", [
      [ "Introduction to Custom Collators", "custom_collators.html#custom_collators_intro", null ],
      [ "Custom Collators and Recovery", "custom_collators.html#custom_collators_recovery", null ],
      [ "Custom Collators for Indices", "custom_collators.html#custom_collators_indices", null ]
    ] ],
    [ "Custom Extractors", "custom_extractors.html", [
      [ "Introduction to Custom Extractors", "custom_extractors.html#custom_extractors_intro", null ],
      [ "Implementation notes", "custom_extractors.html#custom_extractors_notes", null ],
      [ "Custom Collators in raw mode", "custom_extractors.html#custom_extractors_raw", null ]
    ] ],
    [ "Custom Data Sources", "custom_data_sources.html", [
      [ "WT_DATA_SOURCE methods", "custom_data_sources.html#custom_ds_methods", [
        [ "WT_DATA_SOURCE::create method", "custom_data_sources.html#custom_ds_create", null ]
      ] ],
      [ "WT_CURSOR methods", "custom_data_sources.html#custom_ds_cursor_methods", [
        [ "WT_CURSOR::insert method", "custom_data_sources.html#custom_ds_cursor_insert", null ]
      ] ],
      [ "WT_CURSOR key/value fields", "custom_data_sources.html#custom_ds_cursor_fields", null ],
      [ "Error handling", "custom_data_sources.html#custom_ds_error_handling", null ],
      [ "Configuration strings", "custom_data_sources.html#custom_ds_config", [
        [ "Parsing configuration strings", "custom_data_sources.html#custom_ds_config_parsing", null ],
        [ "Creating data-specific configuration strings", "custom_data_sources.html#custom_ds_config_add", null ]
      ] ],
      [ "WT_COLLATOR", "custom_data_sources.html#custom_ds_cursor_collator", null ],
      [ "Serialization", "custom_data_sources.html#custom_data_source_cursor_serialize", null ],
      [ "Transactions", "custom_data_sources.html#custom_data_source_transactions", null ]
    ] ],
    [ "Custom File Systems", "custom_file_systems.html", null ],
    [ "Custom Tiered Storage sources", "custom_storage_sources.html", "custom_storage_sources" ],
    [ "Performance monitoring with statistics", "tune_statistics.html", null ],
    [ "Simulating workloads with wtperf", "wtperf.html", [
      [ "Monitoring wtperf", "wtperf.html#monitor", null ],
      [ "Wtperf configuration options", "wtperf.html#config", null ]
    ] ],
    [ "gcc/clang build options", "tune_build_options.html", null ],
    [ "Bulk-load", "tune_bulk_load.html", null ],
    [ "Cache and eviction tuning", "tune_cache.html", [
      [ "Cache size", "tune_cache.html#tuning_cache_size", null ],
      [ "Cache resident objects", "tune_cache.html#tuning_cache_resident", null ],
      [ "Eviction tuning", "tune_cache.html#cache_eviction", null ]
    ] ],
    [ "Capacity tuning", "tune_capacity.html", null ],
    [ "Checksums", "tune_checksum.html", null ],
    [ "Connection close", "tune_close.html", null ],
    [ "Cursor persistence", "tune_cursor_persist.html", null ],
    [ "Commit-level durability", "tune_durability.html", [
      [ "Group commit", "tune_durability.html#tune_durability_group_commit", null ],
      [ "Flush call configuration", "tune_durability.html#tune_durability_flush_config", null ]
    ] ],
    [ "File allocation", "tune_file_alloc.html", [
      [ "File growth", "tune_file_alloc.html#tuning_system_file_block_grow", null ],
      [ "File block allocation", "tune_file_alloc.html#tuning_system_file_block_allocation", null ]
    ] ],
    [ "Memory allocator", "tune_memory_allocator.html", null ],
    [ "Mutexes", "tune_mutex.html", null ],
    [ "Tuning page size and compression", "tune_page_size_and_comp.html", [
      [ "Data life cycle", "tune_page_size_and_comp.html#data_life_cycle", null ],
      [ "Configurable page structures in WiredTiger", "tune_page_size_and_comp.html#configurable_page_struct", [
        [ "memory_page_max", "tune_page_size_and_comp.html#memory_page_max", null ],
        [ "internal_page_max", "tune_page_size_and_comp.html#internal_page_max", null ],
        [ "leaf_page_max", "tune_page_size_and_comp.html#leaf_page_max", null ],
        [ "allocation_size", "tune_page_size_and_comp.html#allocation_size", null ],
        [ "internal/leaf key/value max", "tune_page_size_and_comp.html#key_val_max", null ],
        [ "split_pct (split percentage)", "tune_page_size_and_comp.html#split_pct", null ]
      ] ],
      [ "Compression considerations", "tune_page_size_and_comp.html#compression_considerations", [
        [ "Table summarizing compression in WiredTiger", "tune_page_size_and_comp.html#table_compress", null ]
      ] ]
    ] ],
    [ "Read-only objects", "tune_read_only.html", null ],
    [ "System buffer cache", "tune_system_buffer_cache.html", [
      [ "Direct I/O", "tune_system_buffer_cache.html#tuning_system_buffer_cache_direct_io", null ],
      [ "os_cache_dirty_max", "tune_system_buffer_cache.html#tuning_system_buffer_cache_os_cache_dirty_max", null ],
      [ "os_cache_max", "tune_system_buffer_cache.html#tuning_system_buffer_cache_os_cache_max", null ]
    ] ],
    [ "Linux transparent huge pages", "tune_transparent_huge_pages.html", null ],
    [ "Linux zone reclamation memory management", "tune_zone_reclaim.html", null ]
];