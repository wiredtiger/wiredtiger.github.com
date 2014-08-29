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
        [ "Empty values", "lsm.html#lsm_tombstones", null ],
        [ "Named checkpoints", "lsm.html#lsm_checkpoints", null ]
      ] ]
    ] ],
    [ "File formats and compression", "file_formats.html", "file_formats" ],
    [ "Compressors", "compression.html", [
      [ "Using zlib compression", "compression.html#compression_zlib", null ],
      [ "Using snappy compression", "compression.html#compression_snappy", null ],
      [ "Using bzip2 compression", "compression.html#compression_bzip2", null ],
      [ "Upgrading compression engines", "compression.html#compression_upgrading", null ],
      [ "Custom compression engines", "compression.html#compression_custom", null ]
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
    [ "Signal handling", "signals.html", null ],
    [ "Checkpoint durability", "checkpoint.html", [
      [ "Automatic checkpoints", "checkpoint.html#checkpoint_server", null ],
      [ "Checkpoint cursors", "checkpoint.html#checkpoint_cursors", null ],
      [ "Checkpoint naming", "checkpoint.html#checkpoint_naming", null ],
      [ "Checkpoints and file compaction", "checkpoint.html#checkpoint_compaction", null ]
    ] ],
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
    [ "Backups", "backup.html", [
      [ "Backup from an application", "backup.html#backup_process", null ],
      [ "Backup from the command line", "backup.html#backup_util", null ],
      [ "Incremental backup", "backup.html#backup_incremental", null ],
      [ "Backup and O_DIRECT", "backup.html#backup_o_direct", null ]
    ] ],
    [ "Asynchronous operations", "async.html", [
      [ "Configuring asynchronous operations", "async.html#async_config", null ],
      [ "Allocating an asynchronous operations handle", "async.html#async_alloc", null ],
      [ "Executing asynchronous operations", "async.html#async_operations", null ],
      [ "Waiting for outstanding operations to complete", "async.html#async_flush", null ],
      [ "Asynchronous operations and transactions", "async.html#async_transactions", null ]
    ] ],
    [ "Compaction", "compact.html", null ],
    [ "Statistics", "statistics.html", [
      [ "Statistics logging", "statistics.html#statistics_log", null ]
    ] ],
    [ "Per-process shared caches", "shared_cache.html", null ],
    [ "Log cursors", "cursor_log.html", null ],
    [ "Extending WiredTiger", "extensions.html", [
      [ "Loadable extensions", "extensions.html#extensions_loadable", null ],
      [ "Extensions and recovery", "extensions.html#extensions_recovery", null ],
      [ "Local extensions", "extensions.html#extensions_local", null ]
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
    ] ]
];