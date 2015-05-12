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
    [ "Transactions", "transactions.html", [
      [ "ACID properties", "transactions.html#transactions_acid", null ],
      [ "Transactional API", "transactions.html#transactions_api", null ],
      [ "Implicit transactions", "transactions.html#transactions_implicit", null ],
      [ "Concurrency control", "transactions.html#transactions_concurrency", null ],
      [ "Isolation levels", "transactions.html#transaction_isolation", null ]
    ] ],
    [ "Error handling", "error_handling.html", null ],
    [ "Schema, Columns, Column Groups, Indices and Projections", "schema.html", "schema" ],
    [ "Log-Structured Merge Trees", "lsm.html", [
      [ "Background", "lsm.html#lsm_background", null ],
      [ "Description of LSM trees", "lsm.html#lsm_description", null ],
      [ "Interface to LSM trees", "lsm.html#lsm_api", null ],
      [ "Merging", "lsm.html#lsm_merge", null ],
      [ "Bloom filters", "lsm.html#lsm_bloom", null ],
      [ "Creating tables using LSM trees", "lsm.html#lsm_schema", null ],
      [ "Caveats", "lsm.html#lsm_caveats", [
        [ "Hazard configuration", "lsm.html#lsm_hazard", null ],
        [ "Named checkpoints", "lsm.html#lsm_checkpoints", null ]
      ] ]
    ] ],
    [ "File formats and compression", "file_formats.html", "file_formats" ],
    [ "Compressors", "compression.html", [
      [ "Using bzip2 compression", "compression.html#compression_bzip2", null ],
      [ "Using LZ4 compression", "compression.html#compression_lz4", null ],
      [ "Using snappy compression", "compression.html#compression_snappy", null ],
      [ "Using zlib compression", "compression.html#compression_zlib", null ],
      [ "Upgrading compression engines", "compression.html#compression_upgrading", null ],
      [ "Custom compression engines", "compression.html#compression_custom", null ]
    ] ],
    [ "Encryptors", "encryption.html", "encryption" ],
    [ "Multithreading", "threads.html", [
      [ "Code samples", "threads.html#threads_example", null ]
    ] ],
    [ "Name spaces", "namespace.html", [
      [ "Process' environment name space", "namespace.html#namespace_env", null ],
      [ "C language name space", "namespace.html#namespace_c", null ],
      [ "File system name space", "namespace.html#namespace_filesystem", null ],
      [ "Error return name space", "namespace.html#namespace_error", null ]
    ] ],
    [ "Signal handling", "signals.html", null ],
    [ "Asynchronous operations", "async.html", [
      [ "Configuring asynchronous operations", "async.html#async_config", null ],
      [ "Allocating an asynchronous operations handle", "async.html#async_alloc", null ],
      [ "Executing asynchronous operations", "async.html#async_operations", null ],
      [ "Waiting for outstanding operations to complete", "async.html#async_flush", null ],
      [ "Asynchronous operations and transactions", "async.html#async_transactions", null ]
    ] ],
    [ "Backups", "backup.html", [
      [ "Backup from an application", "backup.html#backup_process", null ],
      [ "Backup from the command line", "backup.html#backup_util", null ],
      [ "Incremental backup", "backup.html#backup_incremental", null ],
      [ "Backup and O_DIRECT", "backup.html#backup_o_direct", null ]
    ] ],
    [ "Checkpoint durability", "checkpoint.html", [
      [ "Automatic checkpoints", "checkpoint.html#checkpoint_server", null ],
      [ "Checkpoint cursors", "checkpoint.html#checkpoint_cursors", null ],
      [ "Checkpoint naming", "checkpoint.html#checkpoint_naming", null ],
      [ "Checkpoints and file compaction", "checkpoint.html#checkpoint_compaction", null ]
    ] ],
    [ "Compaction", "compact.html", null ],
    [ "Log cursors", "cursor_log.html", null ],
    [ "Commit-level durability", "durability.html", [
      [ "Checkpoints", "durability.html#durability_checkpoint", null ],
      [ "Backups", "durability.html#durability_backup", null ],
      [ "Bulk loads", "durability.html#durability_bulk", null ],
      [ "Log file archival", "durability.html#durability_archiving", null ],
      [ "Tuning commit-level durability", "durability.html#durability_tuning", [
        [ "Group commit", "durability.html#durability_group_commit", null ],
        [ "Flush call configuration", "durability.html#durability_flush_config", null ]
      ] ]
    ] ],
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
      [ "Serialization", "custom_data_sources.html#custom_data_source_cursor_serialize", null ]
    ] ],
    [ "WiredTiger Helium support", "helium.html", [
      [ "Building the WiredTiger Helium Support", "helium.html#helium_build", null ],
      [ "Loading the WiredTiger Helium Support", "helium.html#helium_load", null ],
      [ "Creating WiredTiger objects on Helium volumes", "helium.html#helium_objects", null ],
      [ "Helium notes", "helium.html#helium_notes", null ],
      [ "Helium limitations", "helium.html#helium_limitations", null ]
    ] ],
    [ "Performance monitoring with statistics", "tune_statistics.html", null ],
    [ "Simulating workloads with wtperf", "wtperf.html", [
      [ "Monitoring wtperf", "wtperf.html#monitor", null ],
      [ "Wtperf configuration options", "wtperf.html#config", null ]
    ] ],
    [ "Visualizing performance with wtstats", "wtstats.html", [
      [ "Manipulating the wtstats display", "wtstats.html#wtstats_display", null ]
    ] ],
    [ "Memory allocator", "tune_memory_allocator.html", null ],
    [ "Page and overflow key/value sizes", "tune_page_sizes.html", [
      [ "Page, key and value sizes", "tune_page_sizes.html#tune_page_sizes_sizes", null ],
      [ "Split percentage", "tune_page_sizes.html#tune_page_sizes_split_percentage", null ],
      [ "Allocation size", "tune_page_sizes.html#tune_page_sizes_allocation_size", null ]
    ] ],
    [ "Cache and eviction tuning", "tune_cache.html", [
      [ "Cache size", "tune_cache.html#tuning_cache_size", null ],
      [ "Cache resident objects", "tune_cache.html#tuning_cache_resident", null ],
      [ "Eviction tuning", "tune_cache.html#cache_eviction", null ]
    ] ],
    [ "Bulk-load", "tune_bulk_load.html", null ],
    [ "Cursor persistence", "tune_cursor_persist.html", null ],
    [ "Read-only objects", "tune_read_only.html", null ],
    [ "Commit-level durability", "tune_durability.html", [
      [ "Group commit", "tune_durability.html#tune_durability_group_commit", null ],
      [ "Flush call configuration", "tune_durability.html#tune_durability_flush_config", null ]
    ] ],
    [ "Checksums", "tune_checksum.html", null ],
    [ "Compression", "tune_compression.html", null ],
    [ "File allocation", "tune_file_alloc.html", [
      [ "File growth", "tune_file_alloc.html#tuning_system_file_block_grow", null ],
      [ "File block allocation", "tune_file_alloc.html#tuning_system_file_block_allocation", null ]
    ] ],
    [ "System buffer cache", "tune_system_buffer_cache.html", [
      [ "Direct I/O", "tune_system_buffer_cache.html#tuning_system_buffer_cache_direct_io", null ],
      [ "os_cache_dirty_max", "tune_system_buffer_cache.html#tuning_system_buffer_cache_os_cache_dirty_max", null ],
      [ "os_cache_max", "tune_system_buffer_cache.html#tuning_system_buffer_cache_os_cache_max", null ]
    ] ],
    [ "Linux transparent huge pages", "tune_transparent_huge_pages.html", null ],
    [ "Connection close", "tune_close.html", null ],
    [ "Mutexes", "tune_mutex.html", null ],
    [ "Linux zone reclamation memory management", "tune_zone_reclaim.html", null ]
];