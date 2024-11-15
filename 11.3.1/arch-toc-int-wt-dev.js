var arch_toc_int_wt_dev =
[
    [ "Concurrency management", "arch-concurrency.html", [
      [ "Volatile", "arch-concurrency.html#volatile", null ],
      [ "Locking", "arch-concurrency.html#locking", [
        [ "Lock usage", "arch-concurrency.html#lock-usage", null ]
      ] ],
      [ "Generations", "arch-concurrency.html#generations", null ],
      [ "Atomics", "arch-concurrency.html#atomics", null ],
      [ "Memory Barriers", "arch-concurrency.html#memory-barriers", [
        [ "Acquire barrier", "arch-concurrency.html#acq-bar", null ],
        [ "Release barrier", "arch-concurrency.html#rel-bar", null ],
        [ "Full barrier", "arch-concurrency.html#full-bar", null ],
        [ "Compiler barrier", "arch-concurrency.html#com-bar", null ]
      ] ],
      [ "Marked Access", "arch-concurrency.html#marked-access", [
        [ "Acquire", "arch-concurrency.html#acq-marked", null ],
        [ "Release", "arch-concurrency.html#rel-marked", null ]
      ] ]
    ] ],
    [ "Locks hierarchy", "arch-locking-hierarchy.html", [
      [ "Cache and Eviction locks", "arch-locking-hierarchy.html#arch-locking-hierarchy-cache-and-eviction", null ],
      [ "Log locks", "arch-locking-hierarchy.html#arch-locking-hierarchy-log", null ],
      [ "Checkpoint and Schema locks", "arch-locking-hierarchy.html#arch-locking-hierarchy-checkpoint-schema", null ],
      [ "Miscellaneous locks", "arch-locking-hierarchy.html#arch-locking-hierarchy-checkpoint-misc", null ],
      [ "Examples", "arch-locking-hierarchy.html#arch-locking-hierarchy-examples", [
        [ "Eviction (no queue lock)", "arch-locking-hierarchy.html#arch-locking-hierarchy-examples-eviction0", null ],
        [ "Eviction (full)", "arch-locking-hierarchy.html#arch-locking-hierarchy-examples-eviction", null ],
        [ "Log", "arch-locking-hierarchy.html#arch-locking-hierarchy-examples-log", null ]
      ] ]
    ] ],
    [ "Usage Patterns", "arch-usage-patterns.html", [
      [ "Message passing with acquire and release", "arch-usage-patterns.html#message-passing", null ],
      [ "Slotted arrays", "arch-usage-patterns.html#slotted-arrays", [
        [ "Overview", "arch-usage-patterns.html#slotted-arrays-overview", [
          [ "Use cases", "arch-usage-patterns.html#slotted-arrays-use-cases", null ],
          [ "Writing", "arch-usage-patterns.html#slotted-arrays-writing", null ],
          [ "Reading", "arch-usage-patterns.html#slotted-arrays-reading", null ],
          [ "Correctness of allowing reading while allowing writes", "arch-usage-patterns.html#slotted-arrays-correctness", null ]
        ] ],
        [ "Growable arrays", "arch-usage-patterns.html#growable-arrays", [
          [ "Writing", "arch-usage-patterns.html#growable-arrays-writing", null ],
          [ "Reading", "arch-usage-patterns.html#growable-arrays-reading", null ],
          [ "Further details", "arch-usage-patterns.html#growable-arrays-further-details", null ]
        ] ]
      ] ],
      [ "Write While stable (WwS)", "arch-usage-patterns.html#write-while-stable", [
        [ "Pseudocode", "arch-usage-patterns.html#write-while-stable-pseudocode", null ],
        [ "Example WT implementation", "arch-usage-patterns.html#write-while-stable-wt-implementation", null ]
      ] ],
      [ "Win the Race", "arch-usage-patterns.html#win-the-race", [
        [ "Example", "arch-usage-patterns.html#win-the-race-example", null ],
        [ "Example Pseudocode", "arch-usage-patterns.html#win-the-race-pseudocode", null ]
      ] ]
    ] ]
];