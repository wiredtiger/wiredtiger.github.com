var arch_toc_mem_disk =
[
    [ "Block Manager", "arch-block.html", [
      [ "What is a block?", "arch-block.html#block_what", [
        [ "Address Cookies", "arch-block.html#block_address_cookie", null ]
      ] ],
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
    [ "Data File Format", "arch-data-file.html", [
      [ "Database Files", "arch-data-file.html#data_file_database_files", null ],
      [ "Data File Format and Layout", "arch-data-file.html#data_file_format", null ],
      [ "On-Disk Page Format and Layout", "arch-data-file.html#data_file_on_disk_page_format", null ],
      [ "Page Types", "arch-data-file.html#data_file_page_types", null ],
      [ "Data File Functions", "arch-data-file.html#data_file_functions", null ]
    ] ],
    [ "Storage Source", "arch-cloud-storage-extension.html", [
      [ "Cloud Storage Source Implementation", "arch-cloud-storage-extension.html#extension_storage_source", null ],
      [ "Connection class", "arch-cloud-storage-extension.html#extension_connection", null ],
      [ "Cloud File System Interface", "arch-cloud-storage-extension.html#extension_cloud_file_system", null ],
      [ "Cloud File Handle Interface", "arch-cloud-storage-extension.html#extension_cloud_file_handle", null ],
      [ "Messaging and Statistics", "arch-cloud-storage-extension.html#extension_log_stat", null ],
      [ "S3 Storage source", "arch-cloud-storage-extension.html#s3_store", null ],
      [ "Azure and GCP Storage Source", "arch-cloud-storage-extension.html#azure_gcp_store", null ]
    ] ],
    [ "Pre-fetch", "arch-prefetch.html", [
      [ "What is pre-fetching? When is pre-fetching useful?", "arch-prefetch.html#prefetch_overview", null ],
      [ "Pre-fetch Algorithm", "arch-prefetch.html#prefetch_algorithm", [
        [ "Finding Candidate Pages", "arch-prefetch.html#prefetch_algorithm_find_pages", null ],
        [ "Populating the Pre-fetch Queue", "arch-prefetch.html#prefetch_algorithm_populate_queue", null ],
        [ "Pre-fetching Content Into the Cache", "arch-prefetch.html#prefetch_algorithm_process_pages", null ]
      ] ],
      [ "Pre-fetch API", "arch-prefetch.html#prefetch_api", [
        [ "Connection-Level Configuration", "arch-prefetch.html#prefetch_api_connection", null ],
        [ "Session-Level Configuration", "arch-prefetch.html#prefetch_api_session", null ]
      ] ],
      [ "Interaction With Other Components", "arch-prefetch.html#prefetch_other", [
        [ "Considering Current Cache Busyness", "arch-prefetch.html#prefetch_other_cache_busyness", null ],
        [ "Ensuring References on the Pre-fetch Queue Remain Valid", "arch-prefetch.html#prefetch_other_refs", null ],
        [ "Concurrency", "arch-prefetch.html#prefetch_other_concurrency", null ]
      ] ]
    ] ],
    [ "Tiered Storage", "arch-tiered-storage.html", [
      [ "Introduction and Definitions", "arch-tiered-storage.html#ts_intro", null ],
      [ "Object IDs", "arch-tiered-storage.html#ts_objectid", null ],
      [ "Checkpoints", "arch-tiered-storage.html#ts_checkpoints", null ],
      [ "Block Manager", "arch-tiered-storage.html#ts_block_manager", [
        [ "Cookies in Tiered Storage", "arch-tiered-storage.html#ts_cookies", null ],
        [ "Files in the Block Manager", "arch-tiered-storage.html#ts_block_files", null ],
        [ "Local File Removal", "arch-tiered-storage.html#ts_block_local_file_removal", null ]
      ] ],
      [ "Tiered Server and Work Queue", "arch-tiered-storage.html#ts_server", null ],
      [ "Metadata and Associated Data Structures", "arch-tiered-storage.html#ts_metadata", null ],
      [ "Storage Sources, Buckets, and Prefixes", "arch-tiered-storage.html#ts_buckets", null ],
      [ "Flush Checkpoint Operations", "arch-tiered-storage.html#ts_flush", [
        [ "Checkpoint Prepare Phase", "arch-tiered-storage.html#ts_checkpoint_prepare", null ],
        [ "Data file checkpoint", "arch-tiered-storage.html#ts_checkpoint_data_file", null ],
        [ "Flush actions", "arch-tiered-storage.html#ts_checkpoint_flush", null ]
      ] ],
      [ "Future", "arch-tiered-storage.html#ts_future", [
        [ "Sharing of Tiered Objects", "arch-tiered-storage.html#ts_future_sharing", null ],
        [ "Garbage Collection", "arch-tiered-storage.html#ts_future_garbage", null ]
      ] ]
    ] ]
];