var programming_lang_java =
[
    [ "Getting Started with the API  in Java", "basic_api_lang_java.html", [
      [ "Connecting to a database", "basic_api_lang_java.html#basic_connection_lang_java", null ],
      [ "Creating a table", "basic_api_lang_java.html#basic_create_table_lang_java", null ],
      [ "Accessing data with cursors", "basic_api_lang_java.html#basic_cursors_lang_java", null ],
      [ "Closing handles", "basic_api_lang_java.html#basic_close_lang_java", null ]
    ] ],
    [ "Configuration Strings  in Java", "config_strings_lang_java.html", [
      [ "Introduction", "config_strings_lang_java.html#config_intro_lang_java", null ],
      [ "JavaScript Object Notation (JSON) compatibility", "config_strings_lang_java.html#config_json_lang_java", null ]
    ] ],
    [ "Cursors  in Java", "cursors_lang_java.html", "cursors_lang_java" ],
    [ "Transactions  in Java", "transactions_lang_java.html", [
      [ "ACID properties", "transactions_lang_java.html#transactions_acid_lang_java", null ],
      [ "Transactional API", "transactions_lang_java.html#transactions_api_lang_java", null ],
      [ "Implicit transactions", "transactions_lang_java.html#transactions_implicit_lang_java", null ],
      [ "Concurrency control", "transactions_lang_java.html#transactions_concurrency_lang_java", null ],
      [ "Isolation levels", "transactions_lang_java.html#transaction_isolation_lang_java", null ]
    ] ],
    [ "Error handling  in Java", "error_handling_lang_java.html", null ],
    [ "Schema, Columns, Column Groups, Indices and Projections  in Java", "schema_lang_java.html", "schema_lang_java" ],
    [ "Log-Structured Merge Trees  in Java", "lsm_lang_java.html", [
      [ "Background", "lsm_lang_java.html#lsm_background_lang_java", null ],
      [ "Description of LSM trees", "lsm_lang_java.html#lsm_description_lang_java", null ],
      [ "Interface to LSM trees", "lsm_lang_java.html#lsm_api_lang_java", null ],
      [ "Merging", "lsm_lang_java.html#lsm_merge_lang_java", null ],
      [ "Bloom filters", "lsm_lang_java.html#lsm_bloom_lang_java", null ],
      [ "Creating tables using LSM trees", "lsm_lang_java.html#lsm_schema_lang_java", null ],
      [ "Caveats", "lsm_lang_java.html#lsm_caveats_lang_java", [
        [ "Hazard configuration", "lsm_lang_java.html#lsm_hazard_lang_java", null ],
        [ "Named checkpoints", "lsm_lang_java.html#lsm_checkpoints_lang_java", null ]
      ] ]
    ] ],
    [ "File formats and compression  in Java", "file_formats_lang_java.html", "file_formats_lang_java" ],
    [ "Compressors  in Java", "compression_lang_java.html", [
      [ "Using zlib compression", "compression_lang_java.html#compression_zlib_lang_java", null ],
      [ "Using snappy compression", "compression_lang_java.html#compression_snappy_lang_java", null ],
      [ "Using bzip2 compression", "compression_lang_java.html#compression_bzip2_lang_java", null ],
      [ "Upgrading compression engines", "compression_lang_java.html#compression_upgrading_lang_java", null ],
      [ "Custom compression engines", "compression_lang_java.html#compression_custom_lang_java", null ]
    ] ],
    [ "Multithreading  in Java", "threads_lang_java.html", [
      [ "Code samples", "threads_lang_java.html#threads_example_lang_java", null ]
    ] ],
    [ "Name spaces  in Java", "namespace_lang_java.html", [
      [ "Process' environment name space", "namespace_lang_java.html#namespace_env_lang_java", null ],
      [ "Java language name space", "namespace_lang_java.html#namespace_c_lang_java", null ],
      [ "File system name space", "namespace_lang_java.html#namespace_filesystem_lang_java", null ]
    ] ],
    [ "Checkpoint durability  in Java", "checkpoint_lang_java.html", [
      [ "Automatic checkpoints", "checkpoint_lang_java.html#checkpoint_server_lang_java", null ],
      [ "Checkpoint cursors", "checkpoint_lang_java.html#checkpoint_cursors_lang_java", null ],
      [ "Checkpoint naming", "checkpoint_lang_java.html#checkpoint_naming_lang_java", null ],
      [ "Checkpoints and file compaction", "checkpoint_lang_java.html#checkpoint_compaction_lang_java", null ]
    ] ],
    [ "Commit-level durability  in Java", "durability_lang_java.html", [
      [ "Checkpoints", "durability_lang_java.html#durability_checkpoint_lang_java", null ],
      [ "Backups", "durability_lang_java.html#durability_backup_lang_java", null ],
      [ "Bulk loads", "durability_lang_java.html#durability_bulk_lang_java", null ],
      [ "Log file archival", "durability_lang_java.html#durability_archiving_lang_java", null ],
      [ "Tuning commit-level durability", "durability_lang_java.html#durability_tuning_lang_java", [
        [ "Group commit", "durability_lang_java.html#durability_group_commit_lang_java", null ],
        [ "Flush call configuration", "durability_lang_java.html#durability_flush_config_lang_java", null ]
      ] ]
    ] ],
    [ "Backups  in Java", "backup_lang_java.html", [
      [ "Backup from an application", "backup_lang_java.html#backup_process_lang_java", null ],
      [ "Backup from the command line", "backup_lang_java.html#backup_util_lang_java", null ],
      [ "Incremental backup", "backup_lang_java.html#backup_incremental_lang_java", null ],
      [ "Backup and O_DIRECT", "backup_lang_java.html#backup_o_direct_lang_java", null ]
    ] ],
    [ "Asynchronous operations  in Java", "async_lang_java.html", [
      [ "Configuring asynchronous operations", "async_lang_java.html#async_config_lang_java", null ],
      [ "Allocating an asynchronous operations handle", "async_lang_java.html#async_alloc_lang_java", null ],
      [ "Executing asynchronous operations", "async_lang_java.html#async_operations_lang_java", null ],
      [ "Waiting for outstanding operations to complete", "async_lang_java.html#async_flush_lang_java", null ],
      [ "Asynchronous operations and transactions", "async_lang_java.html#async_transactions_lang_java", null ]
    ] ],
    [ "Compaction  in Java", "compact_lang_java.html", null ],
    [ "Statistics  in Java", "statistics_lang_java.html", [
      [ "Statistics logging", "statistics_lang_java.html#statistics_log_lang_java", null ]
    ] ],
    [ "Per-process shared caches  in Java", "shared_cache_lang_java.html", null ],
    [ "Log cursors  in Java", "cursor_log_lang_java.html", null ],
    [ "Upgrading and downgrading databases", "upgrade.html", null ]
];