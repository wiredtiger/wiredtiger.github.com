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
      [ "JSON compatibility", "config_strings.html#config_json", null ],
      [ "Code samples", "config_strings.html#config_examples", null ]
    ] ],
    [ "Cursors", "cursors.html", "cursors" ],
    [ "Multithreading", "threads.html", [
      [ "Code samples", "threads.html#threads_example", null ]
    ] ],
    [ "Schemas", "schema.html", "schema" ],
    [ "File formats", "file_formats.html", "file_formats" ],
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
        [ "Transactional access", "lsm.html#lsm_txn", null ]
      ] ]
    ] ],
    [ "Transactions", "transactions.html", [
      [ "ACID properties", "transactions.html#transactions_acid", null ],
      [ "Transactional API", "transactions.html#transactions_api", null ],
      [ "Implicit transactions", "transactions.html#transactions_implicit", null ],
      [ "Concurrency control", "transactions.html#transactions_concurrency", null ],
      [ "Isolation levels", "transactions.html#transaction_isolation", null ],
      [ "Checkpoints and Recovery", "transactions.html#transaction_recovery", null ]
    ] ],
    [ "Checkpoints", "checkpoints.html", null ],
    [ "Hot backup", "hot_backup.html", null ],
    [ "Compressors", "compression.html", [
      [ "Using bzip2 compression", "compression.html#compression_bzip2", null ],
      [ "Using snappy compression", "compression.html#compression_snappy", null ],
      [ "Upgrading compression engines", "compression.html#compression_upgrading", null ],
      [ "Custom compression engines", "compression.html#compression_custom", null ]
    ] ],
    [ "Database Home Directory", "home.html", null ],
    [ "Database Configuration", "database_config.html", [
      [ "WiredTiger.config file", "database_config.html#config_file", null ],
      [ "WIREDTIGER_CONFIG environment variable", "database_config.html#config_env", null ]
    ] ],
    [ "Programmatic name spaces", "name_space.html", [
      [ "Process' environment name space", "name_space.html#env", null ],
      [ "C language name space", "name_space.html#c", null ],
      [ "File system name space", "name_space.html#filename", null ],
      [ "Error return name space", "name_space.html#error", null ]
    ] ],
    [ "Security", "security.html", [
      [ "Database directory permissions", "security.html#directory_permissions", null ],
      [ "File permissions", "security.html#file_permissions", null ],
      [ "Environment variables", "security.html#environment_variables", null ]
    ] ],
    [ "Signal handling", "signals.html", null ],
    [ "Performance Tuning", "tuning.html", [
      [ "Cache size", "tuning.html#tuning_cache_size", null ],
      [ "Cache resident objects", "tuning.html#tuning_cache_resident", null ],
      [ "Page and overflow sizes", "tuning.html#tuning_page_size", null ],
      [ "Memory allocation", "tuning.html#tuning_memory_allocation", null ],
      [ "Checksums", "tuning.html#tuning_checksums", null ],
      [ "Performance monitoring with statistics", "tuning.html#tuning_statistics", null ]
    ] ]
];