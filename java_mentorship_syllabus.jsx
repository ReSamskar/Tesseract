import { useState } from "react";

const CATEGORIES = {
  java: { label: "Core Java", color: "#1D9E75", bg: "#E1F5EE" },
  oop: { label: "OOP", color: "#534AB7", bg: "#EEEDFE" },
  collections: { label: "Collections", color: "#185FA5", bg: "#E6F1FB" },
  dsa_basic: { label: "DSA: Basic", color: "#BA7517", bg: "#FAEEDA" },
  dsa_mid: { label: "DSA: Intermediate", color: "#D85A30", bg: "#FAECE7" },
  dsa_adv: { label: "DSA: Advanced", color: "#A32D2D", bg: "#FCEBEB" },
  interview: { label: "Interview Prep", color: "#993C1D", bg: "#FAECE7" },
  competitive: { label: "Competitive Prog.", color: "#3B6D11", bg: "#EAF3DE" },
  design: { label: "Design Patterns", color: "#993556", bg: "#FBEAF0" },
  capstone: { label: "Capstone", color: "#444441", bg: "#F1EFE8" },
};

const syllabus = {
  3: [
    {
      month: 1,
      title: "Java Fundamentals",
      theme: "Build the foundation — syntax, OOP basics, arrays, strings",
      weeks: [
        {
          week: 1,
          title: "Environment Setup & Java Basics",
          category: "java",
          days: [
            { day: 1, topic: "JDK, IntelliJ/VS Code setup, Hello World, JVM/JRE/JDK architecture", project: "Hello World with user input prompt" },
            { day: 2, topic: "Variables, data types (int, double, char, boolean, String), type casting", project: "Simple 4-function calculator" },
            { day: 3, topic: "Operators — arithmetic, relational, logical, bitwise, ternary", project: "Grade calculator with letter grades" },
            { day: 4, topic: "Scanner class, System.in, reading different input types", project: "BMI calculator with health category output" },
            { day: 5, topic: "Conditionals — if/else if/else, switch-case, nested conditions", project: "Day-of-week classifier + season detector" },
            { day: 6, topic: "Weekly Quiz + Code Review Session", project: "— Review & refactor Week 1 projects —" },
          ],
        },
        {
          week: 2,
          title: "Control Flow & Methods",
          category: "java",
          days: [
            { day: 7, topic: "Loops — for, while, do-while, loop comparison", project: "Number pattern printer (triangle, pyramid)" },
            { day: 8, topic: "Nested loops, break, continue, labelled loops", project: "Multiplication table generator (N×N)" },
            { day: 9, topic: "Methods — defining, calling, parameters, scope", project: "Math utility library (10+ functions)" },
            { day: 10, topic: "Return types, void vs value, method overloading", project: "Unit converter (km↔miles, kg↔lbs, °C↔°F)" },
            { day: 11, topic: "Recursion — concept, call stack, base case, recursive case", project: "Factorial & Fibonacci calculator (recursive + iterative)" },
            { day: 12, topic: "Weekly Quiz + Live Mentorship Session", project: "— Review & pair debug —" },
          ],
        },
        {
          week: 3,
          title: "Arrays & Strings",
          category: "java",
          days: [
            { day: 13, topic: "1D arrays — declaration, initialization, traversal, common operations", project: "Student grade tracker (avg, highest, lowest, rank)" },
            { day: 14, topic: "2D arrays — matrix representation, row/column traversal", project: "Tic-Tac-Toe board renderer + input system" },
            { day: 15, topic: "String class — length, charAt, substring, indexOf, compareTo, equals", project: "String analyzer tool (vowel count, word count, case convert)" },
            { day: 16, topic: "StringBuilder, String manipulation, immutability concept", project: "Word reverser, palindrome checker, anagram detector" },
            { day: 17, topic: "Array manipulation — rotation, shifting, searching in arrays", project: "Mini statistics tool (min, max, avg, median, mode)" },
            { day: 18, topic: "Weekly Quiz + Code Review", project: "— Review & extend prior projects —" },
          ],
        },
        {
          week: 4,
          title: "OOP Basics — Classes & Objects",
          category: "oop",
          days: [
            { day: 19, topic: "Classes & Objects — blueprints, instantiation, fields, methods", project: "BankAccount class (deposit, withdraw, balance)" },
            { day: 20, topic: "Constructors — default, parameterized, constructor chaining, this keyword", project: "Student record system (create, display, update)" },
            { day: 21, topic: "Encapsulation — private fields, getters, setters, data hiding", project: "Employee record system with validation rules" },
            { day: 22, topic: "Static variables & methods, class-level vs instance-level", project: "Counter utility + bank transaction logger" },
            { day: 23, topic: "toString(), equals(), hashCode() override — object identity", project: "Contact book (add, search, display contacts)" },
            { day: 24, topic: "Month 1 Assessment + Weekly Quiz", project: "— Month 1 Capstone: Library Book Manager CLI —" },
          ],
        },
      ],
    },
    {
      month: 2,
      title: "OOP Deep Dive + Java Collections",
      theme: "Master object-oriented design and Java's built-in data structures",
      weeks: [
        {
          week: 5,
          title: "OOP Advanced — Inheritance & Polymorphism",
          category: "oop",
          days: [
            { day: 25, topic: "Inheritance — extends, parent-child relationship, IS-A relationship", project: "Vehicle class hierarchy (Car, Truck, Motorcycle)" },
            { day: 26, topic: "Method overriding, @Override, super keyword, parent method access", project: "Animal sound simulator (dynamic dispatch demo)" },
            { day: 27, topic: "Polymorphism — compile-time vs runtime, upcasting, downcasting, instanceof", project: "Shape area calculator (Circle, Rectangle, Triangle, dynamic)" },
            { day: 28, topic: "Abstract classes — abstract methods, partial implementation, when to use", project: "Payment system (Cash, Card, UPI extend AbstractPayment)" },
            { day: 29, topic: "Interfaces — contract design, implements, multiple interfaces, default methods", project: "Printable + Saveable + Exportable interface system" },
            { day: 30, topic: "Weekly Quiz + Live Mentorship", project: "— Design review: when to use abstract vs interface —" },
          ],
        },
        {
          week: 6,
          title: "Exception Handling + Special Topics",
          category: "oop",
          days: [
            { day: 31, topic: "Exception handling — try/catch/finally, checked vs unchecked exceptions", project: "Safe division & input parser with exception handling" },
            { day: 32, topic: "Custom exceptions — creating your own exception classes", project: "Age & email validation system with custom exceptions" },
            { day: 33, topic: "Multi-catch, throws, exception chaining, best practices", project: "Robust file-safe input parser with layered exceptions" },
            { day: 34, topic: "Wrapper classes — Integer, Double, Boolean; autoboxing & unboxing", project: "Number formatter tool (ordinal, comma-separated, padded)" },
            { day: 35, topic: "Enums — constants, methods in enum, enum with fields", project: "Task priority scheduler with enums (HIGH, MEDIUM, LOW)" },
            { day: 36, topic: "Weekly Quiz + Code Review", project: "— Refactor Month 1 projects with exceptions + enums —" },
          ],
        },
        {
          week: 7,
          title: "Java Collections — List, Map, Set",
          category: "collections",
          days: [
            { day: 37, topic: "ArrayList — dynamic arrays, add/remove/get/size, iteration", project: "To-do list CLI app (add, complete, delete, list tasks)" },
            { day: 38, topic: "LinkedList — doubly linked, as Queue, addFirst/addLast, use cases", project: "Browser history simulator (back, forward, visit)" },
            { day: 39, topic: "HashMap — key-value pairs, put/get/remove, null handling, iteration", project: "Word frequency counter (top-N most frequent words)" },
            { day: 40, topic: "HashSet — unique elements, add/contains/remove, set operations", project: "Duplicate finder + union/intersection of two lists" },
            { day: 41, topic: "TreeMap & TreeSet — sorted order, NavigableMap, floor/ceiling", project: "Sorted phonebook with range search (A-M contacts)" },
            { day: 42, topic: "Weekly Quiz + Live Mentorship", project: "— Design: choose the right collection for the job —" },
          ],
        },
        {
          week: 8,
          title: "Generics + Functional Java Basics",
          category: "collections",
          days: [
            { day: 43, topic: "Generics — type parameters, generic classes, generic methods, bounded types", project: "Generic Stack<T> and Queue<T> implementation" },
            { day: 44, topic: "Iterator, Iterable, for-each under the hood, ListIterator", project: "Custom collection traverser (forward + backward)" },
            { day: 45, topic: "Lambda expressions — functional interface, arrow syntax, Comparator lambdas", project: "Sorting comparator (sort students by name, grade, age)" },
            { day: 46, topic: "Stream API — filter, map, reduce, collect, sorted, distinct, limit", project: "Data filter & transformer (filter even, square, sum pipeline)" },
            { day: 47, topic: "Optional<T>, method references (::), Consumer, Function, Predicate", project: "Null-safe user profile processor" },
            { day: 48, topic: "Month 2 Assessment + Weekly Quiz", project: "— Month 2 Capstone: Student Grade Management System —" },
          ],
        },
      ],
    },
    {
      month: 3,
      title: "Basic DSA — The Foundation",
      theme: "Learn Big O, arrays, sorting, searching, stacks, queues, and linked lists",
      weeks: [
        {
          week: 9,
          title: "Complexity Analysis + Array DSA",
          category: "dsa_basic",
          days: [
            { day: 49, topic: "Big O notation — O(1), O(log n), O(n), O(n²), space complexity, best/worst/avg", project: "Complexity analyzer: manually annotate given code snippets" },
            { day: 50, topic: "Array DSA — Two Sum, max subarray (Kadane's), find duplicates", project: "Array problem solver CLI (run multiple array algorithms)" },
            { day: 51, topic: "Prefix sums — cumulative sum array, range sum queries", project: "Range sum query tool (offline O(1) per query after O(n) build)" },
            { day: 52, topic: "Sliding window — fixed window, max/min subarray of size K", project: "Max sum subarray of size K + max average subarray" },
            { day: 53, topic: "Two pointers — opposite ends, same direction, sorted array problems", project: "Pair finder: two sum sorted, remove duplicates, squaring sorted array" },
            { day: 54, topic: "Weekly Quiz + Live Mentorship", project: "— Pattern recognition: which technique for which problem —" },
          ],
        },
        {
          week: 10,
          title: "Searching & Sorting Algorithms",
          category: "dsa_basic",
          days: [
            { day: 55, topic: "Linear search O(n), Binary search O(log n) — iterative & recursive", project: "Search utility: linear vs binary comparison with timing" },
            { day: 56, topic: "Bubble sort O(n²), Selection sort O(n²) — visualization + analysis", project: "Console sorting visualizer (show each swap step)" },
            { day: 57, topic: "Insertion sort O(n²)/O(n) best, Merge sort O(n log n) — divide & conquer", project: "Sort comparator: run all 4 sorts on same array, compare times" },
            { day: 58, topic: "Quick sort O(n log n) avg — pivot selection, partitioning, Lomuto scheme", project: "Quick sort with random pivot + worst-case trigger demo" },
            { day: 59, topic: "Sorting applications — sort by multiple criteria, counting sort, custom Comparator", project: "Leaderboard sorter (sort players by score, then name, then level)" },
            { day: 60, topic: "Weekly Quiz + Code Review", project: "— Which sort when? Trade-off discussion + cheat sheet —" },
          ],
        },
        {
          week: 11,
          title: "Stacks & Queues",
          category: "dsa_basic",
          days: [
            { day: 61, topic: "Stack — LIFO, push/pop/peek, implement with array & LinkedList, Stack class", project: "Stack-based undo/redo system for a text editor simulation" },
            { day: 62, topic: "Stack applications — balanced parentheses, infix-to-postfix, reverse string", project: "Bracket validator: check [], (), {}, nested, mixed" },
            { day: 63, topic: "Queue — FIFO, enqueue/dequeue, implement with LinkedList, ArrayDeque", project: "Print queue simulator (add jobs, process in order, show status)" },
            { day: 64, topic: "Deque (double-ended queue), PriorityQueue — heap-backed, custom Comparator", project: "Task scheduler: PriorityQueue by urgency + deadline" },
            { day: 65, topic: "Stack + Queue problems — next greater element, sliding window max, BFS intro", project: "Expression evaluator (postfix notation with stack)" },
            { day: 66, topic: "Weekly Quiz + Live Mentorship", project: "— Live problem solving: stack/queue interview classics —" },
          ],
        },
        {
          week: 12,
          title: "Recursion Deep Dive + Linked Lists",
          category: "dsa_basic",
          days: [
            { day: 67, topic: "Recursion deep dive — call stack visualization, memoization intro, tail recursion", project: "Recursive descent calculator + Tower of Hanoi solver" },
            { day: 68, topic: "Singly Linked List — Node class, insert at head/tail/position, traversal", project: "LinkedList from scratch (generic, fully functional)" },
            { day: 69, topic: "Linked List — deletion (head, tail, value), search, length, display", project: "Linked list operations CLI (all operations in one tool)" },
            { day: 70, topic: "Linked List problems — reverse, detect cycle (Floyd's), find middle", project: "Cycle detector + list reversal + middle-finder tool" },
            { day: 71, topic: "Doubly Linked List — bidirectional links, insert/delete both ends", project: "Doubly linked list + LRU Cache simulation (get/put)" },
            { day: 72, topic: "3-Month Final Assessment + Live Review", project: "— 3-Month Capstone: DSA Toolkit CLI (all structures in one app) —" },
          ],
        },
      ],
    },
  ],
  6: [
    {
      month: 4,
      title: "Trees — Binary, BST & Heaps",
      theme: "Master hierarchical data structures that power databases, compilers, and OS internals",
      weeks: [
        {
          week: 13,
          title: "Binary Trees — Fundamentals",
          category: "dsa_mid",
          days: [
            { day: 73, topic: "Tree concepts — nodes, edges, height, depth, leaf, root, subtree, level", project: "Binary tree builder from array input + visual console print" },
            { day: 74, topic: "Inorder, Preorder, Postorder traversal — recursive + iterative with stack", project: "Tree traversal printer (all 3 orders, recursive & iterative)" },
            { day: 75, topic: "Level order traversal (BFS with Queue) — level-by-level, zigzag variant", project: "Level-by-level tree printer (show each level on new line)" },
            { day: 76, topic: "Tree height, diameter, count nodes, leaf count, sum of all nodes", project: "Tree stats calculator (8 metrics from one tree input)" },
            { day: 77, topic: "Tree problems — mirror/invert tree, check symmetry, same tree check", project: "Tree validator toolkit (symmetric, mirror, height-balanced check)" },
            { day: 78, topic: "Weekly Quiz + Live Mentorship", project: "— Whiteboard: tree problem solving session —" },
          ],
        },
        {
          week: 14,
          title: "Binary Search Tree + Heaps",
          category: "dsa_mid",
          days: [
            { day: 79, topic: "BST property — left < root < right, search O(log n), BST vs Binary Tree", project: "BST implementation from scratch (Node + BST class)" },
            { day: 80, topic: "BST insert, search, delete (3 cases: leaf, one child, two children)", project: "BST operations tool (insert, search, delete, display inorder)" },
            { day: 81, topic: "BST problems — validate BST, LCA, Kth smallest, range sum in BST", project: "BST checker: validate, find Kth smallest, find range sum" },
            { day: 82, topic: "Heaps — Min Heap, Max Heap, heapify, insert, extract-min/max, array representation", project: "Min Heap from scratch (array-based, all operations)" },
            { day: 83, topic: "PriorityQueue in Java, heap sort, top-K elements using heap", project: "Top-K elements finder (K largest/smallest from stream)" },
            { day: 84, topic: "Weekly Quiz + Code Review", project: "— BST vs Heap: when to use which —" },
          ],
        },
        {
          week: 15,
          title: "Hashing Deep Dive",
          category: "dsa_mid",
          days: [
            { day: 85, topic: "Hashing internals — hash function, load factor, rehashing, bucket array", project: "Custom HashMap<K,V> with chaining (from scratch)" },
            { day: 86, topic: "Collision resolution — chaining vs open addressing, linear/quadratic probing", project: "Hash table with open addressing (linear probing)" },
            { day: 87, topic: "Hashing problems — group anagrams, first unique char, longest consecutive sequence", project: "Anagram grouper (group words into anagram families)" },
            { day: 88, topic: "HashMap + sliding window — subarray with given sum, longest subarray with equal 0s & 1s", project: "Subarray sum equals K finder (all subarrays, count & list)" },
            { day: 89, topic: "HashMap patterns — frequency map, two-sum variants, isomorphic strings", project: "Frequency-based problem solver (top K freq, sort by freq)" },
            { day: 90, topic: "Weekly Quiz + Live Mentorship", project: "— Hashing interview classics live session —" },
          ],
        },
        {
          week: 16,
          title: "Intermediate Problem Patterns",
          category: "dsa_mid",
          days: [
            { day: 91, topic: "Sliding window advanced — variable window, longest substring without repeat, min window substring", project: "Longest substring/subarray tool (3 classic problems)" },
            { day: 92, topic: "Two pointers advanced — 3Sum, 4Sum, container with most water, trapping rain water", project: "3Sum problem + container with most water solver" },
            { day: 93, topic: "Prefix sum advanced — subarray with given XOR, count subarrays with sum in range", project: "Subarray range tool (sum, XOR, count variants)" },
            { day: 94, topic: "Matrix problems — spiral order, rotate 90°, diagonal traverse, search in sorted matrix", project: "Matrix processor CLI (spiral, rotate, search, diagonal)" },
            { day: 95, topic: "Mixing patterns — recognize which pattern fits given problem", project: "Pattern identifier tool (given problem → suggest approach)" },
            { day: 96, topic: "Month 4 Assessment + Weekly Quiz", project: "— Month 4 Capstone: Mini LeetCode-style problem set (10 problems) —" },
          ],
        },
      ],
    },
    {
      month: 5,
      title: "Graphs + Dynamic Programming",
      theme: "The two most powerful algorithmic tools — used in maps, AI, compilers, and more",
      weeks: [
        {
          week: 17,
          title: "Graph Fundamentals",
          category: "dsa_mid",
          days: [
            { day: 97, topic: "Graph concepts — directed/undirected, weighted/unweighted, degree, adjacency list vs matrix", project: "Graph builder: input edges → build adjacency list + matrix" },
            { day: 98, topic: "BFS — level-by-level traversal, queue-based, visited array, BFS tree", project: "BFS traversal tool (show visited order + level grouping)" },
            { day: 99, topic: "DFS — recursive & iterative, visited tracking, DFS tree, back edges", project: "DFS traversal tool (recursive + iterative, compare outputs)" },
            { day: 100, topic: "Connected components — find all components via BFS/DFS, count them", project: "Component counter (show each component with its nodes)" },
            { day: 101, topic: "Cycle detection — undirected graph (parent tracking), directed (DFS + recursion stack)", project: "Cycle detector (undirected + directed, explain why cycle exists)" },
            { day: 102, topic: "Weekly Quiz + Live Mentorship", project: "— Graph on whiteboard: model real-world as graph —" },
          ],
        },
        {
          week: 18,
          title: "Graph Algorithms",
          category: "dsa_mid",
          days: [
            { day: 103, topic: "Topological sort — DFS approach, Kahn's BFS (in-degree) approach, DAG only", project: "Course prerequisite solver (find valid course order)" },
            { day: 104, topic: "Shortest path — BFS for unweighted, multi-source BFS, 0-1 BFS", project: "Shortest path finder (unweighted, show path not just distance)" },
            { day: 105, topic: "Dijkstra's algorithm — PriorityQueue implementation, weighted shortest path", project: "City route planner (weighted graph, min distance + path)" },
            { day: 106, topic: "Union-Find / DSU — path compression, union by rank, connected components", project: "Network connectivity checker (online union-find queries)" },
            { day: 107, topic: "Graph problems — number of islands, flood fill, bipartite check, word ladder", project: "Island counter (4-dir + 8-dir) + flood fill tool" },
            { day: 108, topic: "Weekly Quiz + Code Review", project: "— Graph problem pattern map (when to use BFS/DFS/Dijkstra/DSU) —" },
          ],
        },
        {
          week: 19,
          title: "Dynamic Programming — Foundations",
          category: "dsa_mid",
          days: [
            { day: 109, topic: "DP concept — overlapping subproblems, optimal substructure, memoization (top-down)", project: "Fibonacci with 4 approaches: naive, memo, tabulation, space-opt" },
            { day: 110, topic: "Tabulation (bottom-up DP), 1D DP — climbing stairs, house robber, min cost climbing", project: "Staircase problem family (5 variants, tabulation)" },
            { day: 111, topic: "0/1 Knapsack — classic DP, 2D table, item inclusion/exclusion", project: "Knapsack solver (show filled table + selected items)" },
            { day: 112, topic: "Subset sum — boolean DP, count of subsets with given sum", project: "Subset sum checker + count all subsets with target sum" },
            { day: 113, topic: "Coin change — min coins, count ways, unbounded knapsack pattern", project: "Coin change calculator (min coins + number of ways)" },
            { day: 114, topic: "Weekly Quiz + Live Mentorship", project: "— DP whiteboard: identify base case + recurrence for new problems —" },
          ],
        },
        {
          week: 20,
          title: "DP Patterns — Strings & Sequences",
          category: "dsa_mid",
          days: [
            { day: 115, topic: "LCS — Longest Common Subsequence, 2D DP, trace back the actual subsequence", project: "LCS finder (show 2D table + actual LCS string)" },
            { day: 116, topic: "LIS — Longest Increasing Subsequence O(n²) DP + O(n log n) patience sort", project: "LIS finder (both approaches, compare runtime)" },
            { day: 117, topic: "Edit distance (Levenshtein) — insert/delete/replace cost, reconstruct operations", project: "Spell checker using edit distance (suggest closest word)" },
            { day: 118, topic: "DP on grids — unique paths, minimum path sum, dungeon game", project: "Grid path counter + min cost path (show all optimal paths)" },
            { day: 119, topic: "DP review + mixed — partition equal subset sum, palindrome partitioning minimum cuts", project: "DP problem classifier (identify pattern from problem description)" },
            { day: 120, topic: "Month 5 Assessment + Weekly Quiz", project: "— Month 5 Capstone: Pathfinder (Dijkstra + DP on grid hybrid app) —" },
          ],
        },
      ],
    },
    {
      month: 6,
      title: "Greedy, Backtracking & Interview Mastery",
      theme: "Complete your DSA toolkit and enter interview-ready mode",
      weeks: [
        {
          week: 21,
          title: "Greedy Algorithms + Backtracking",
          category: "dsa_adv",
          days: [
            { day: 121, topic: "Greedy — greedy choice property, local vs global optimum, when greedy works", project: "Activity selector (maximum non-overlapping activities)" },
            { day: 122, topic: "Greedy problems — interval scheduling, jump game, assign cookies, gas station", project: "Meeting room scheduler (greedy interval + room count)" },
            { day: 123, topic: "Backtracking — decision tree, state space, pruning, template pattern", project: "N-Queens solver (all solutions, show board visually in console)" },
            { day: 124, topic: "Backtracking — permutations, combinations, subsets (power set)", project: "Permutation & combination generator (with/without repetition)" },
            { day: 125, topic: "Backtracking — Sudoku solver, word search in grid, letter combinations of phone number", project: "Sudoku validator + solver (backtracking)" },
            { day: 126, topic: "Weekly Quiz + Live Mentorship", project: "— Backtracking template: apply to any new problem —" },
          ],
        },
        {
          week: 22,
          title: "Advanced Data Structures",
          category: "dsa_adv",
          days: [
            { day: 127, topic: "Trie (Prefix Tree) — TrieNode, insert, search, startsWith, applications", project: "Autocomplete system (type prefix → get all matching words)" },
            { day: 128, topic: "Trie problems — word search II, replace words, longest word in dictionary", project: "Word search tool (find all words from dictionary in grid)" },
            { day: 129, topic: "Monotonic stack — next greater element, daily temperatures, largest rectangle in histogram", project: "Next greater element + largest rectangle histogram solver" },
            { day: 130, topic: "Sliding window maximum — monotonic deque, window min/max in O(n)", project: "Window max/min tool (any array, any window size, O(n))" },
            { day: 131, topic: "Segment tree — range queries, point updates, build O(n), query O(log n)", project: "Range query tool (range sum, range min with point updates)" },
            { day: 132, topic: "Weekly Quiz + Code Review", project: "— When to use Trie vs HashMap vs Set for string problems —" },
          ],
        },
        {
          week: 23,
          title: "Interview Problem Patterns",
          category: "interview",
          days: [
            { day: 133, topic: "Fast & slow pointers — cycle detection in LL, find middle, happy number", project: "Linked list health checker (cycle, middle, length)" },
            { day: 134, topic: "Merge intervals — merge overlapping, insert interval, meeting rooms II", project: "Calendar conflict detector (merge + count max overlapping)" },
            { day: 135, topic: "Cyclic sort — numbers in range [1,n], missing number, find duplicate, first missing positive", project: "Missing number finder (missing, duplicate, first missing positive)" },
            { day: 136, topic: "Top K elements — heap-based, quickselect O(n) average", project: "Top K frequent words + K closest points to origin" },
            { day: 137, topic: "Bit manipulation — AND/OR/XOR tricks, count set bits, single number, power of 2", project: "Bit manipulation toolkit (12 classic bit tricks in one tool)" },
            { day: 138, topic: "Weekly Quiz + Live Mentorship", project: "— Speed drills: solve 5 medium problems in 60 minutes —" },
          ],
        },
        {
          week: 24,
          title: "Mock Interviews + Capstone",
          category: "capstone",
          days: [
            { day: 139, topic: "Mock Interview Round 1 — Arrays, Strings, HashMap (45 min timed)", project: "Post-interview self-review + optimal solution writeup" },
            { day: 140, topic: "Mock Interview Round 2 — Trees, Graphs (45 min timed)", project: "Post-interview self-review + optimal solution writeup" },
            { day: 141, topic: "Mock Interview Round 3 — DP + Mixed (45 min timed)", project: "Post-interview self-review + optimal solution writeup" },
            { day: 142, topic: "6-Month Capstone Project Build — Day 1", project: "DSA Visualizer (console): pick one structure, implement full visualization" },
            { day: 143, topic: "6-Month Capstone Project Build — Day 2", project: "Add 2 more structures, finalize CLI, write documentation" },
            { day: 144, topic: "6-Month Final Assessment + Capstone Presentation", project: "— 6-Month Graduation: Certificate + Internship Guidance —" },
          ],
        },
      ],
    },
  ],
  12: [
    {
      month: 7,
      title: "Advanced Dynamic Programming",
      theme: "Master every DP pattern used in top-tier company interviews",
      weeks: [
        {
          week: 25,
          title: "DP on Trees + Interval DP",
          category: "dsa_adv",
          days: [
            { day: 145, topic: "DP on trees — diameter, max path sum, house robber on tree, subtree DP", project: "Tree DP solver (max path sum, rob houses on tree)" },
            { day: 146, topic: "Rerooting technique — compute answer for every node as root", project: "Sum of distances in tree + centroid finder" },
            { day: 147, topic: "Interval DP — matrix chain multiplication, burst balloons, palindrome partition", project: "Matrix chain order optimizer (min multiplications + order)" },
            { day: 148, topic: "Interval DP problems — strange printer, remove boxes, minimum cost to merge stones", project: "Palindrome partition min cuts + strange printer" },
            { day: 149, topic: "Bitmask DP — TSP, assign tasks to workers, cover problems", project: "Travelling Salesman (bitmask DP, cities ≤ 15)" },
            { day: 150, topic: "Weekly Quiz + Live Mentorship", project: "— Advanced DP: state design workshop —" },
          ],
        },
        {
          week: 26,
          title: "String DP + DP Optimization",
          category: "dsa_adv",
          days: [
            { day: 151, topic: "String DP — word break, word break II, interleaving strings", project: "Word break solver (list all valid sentences from dictionary)" },
            { day: 152, topic: "Palindrome DP — longest palindromic subsequence, minimum insertions to make palindrome", project: "Palindrome transformer (min ops to make any string palindrome)" },
            { day: 153, topic: "DP with binary search — LIS O(n log n) revisited, WIS (weighted)", project: "LIS visualizer with patience sorting animation (console)" },
            { day: 154, topic: "Divide & conquer DP optimization — when opt is monotone, reduce O(n³) to O(n² log n)", project: "Optimal BST cost + divide conquer DP demo" },
            { day: 155, topic: "Sliding window + DP combo — max sum with cooldown, stock buy sell variants", project: "Stock trading optimizer (3 variants: 1 tx, k tx, with cooldown)" },
            { day: 156, topic: "Weekly Quiz + Code Review", project: "— DP pattern cheat sheet construction (collaborative) —" },
          ],
        },
        {
          week: 27,
          title: "Number Theory + Math for DSA",
          category: "competitive",
          days: [
            { day: 157, topic: "GCD, LCM (Euclidean algorithm), prime check, prime factorization", project: "Number theory toolkit (GCD, LCM, primes, factorization)" },
            { day: 158, topic: "Sieve of Eratosthenes — generate all primes up to N efficiently", project: "Prime sieve + prime count in range + Goldbach checker" },
            { day: 159, topic: "Modular arithmetic — mod arithmetic rules, modular inverse, why mod 10⁹+7", project: "Modular arithmetic calculator (add/mul/pow under mod)" },
            { day: 160, topic: "Fast exponentiation (binary exponentiation) — O(log n) power", project: "Power calculator (a^b mod m) + matrix exponentiation intro" },
            { day: 161, topic: "Combinatorics — nCr, Pascal's triangle, Catalan numbers, pigeonhole principle", project: "Combinatorics calculator (nCr, nPr, Catalan, with mod)" },
            { day: 162, topic: "Weekly Quiz + Live Mentorship", project: "— Math-in-disguise problems: recognize the math pattern —" },
          ],
        },
        {
          week: 28,
          title: "Month 7 Consolidation",
          category: "dsa_adv",
          days: [
            { day: 163, topic: "Mixed advanced DP — contest-style problem set (5 problems, 2 hours)", project: "Contest simulation: solve & submit (peer-reviewed)" },
            { day: 164, topic: "DP + Graph hybrid — DP on DAG, shortest path with DP, DP over graph states", project: "All-pairs shortest path + DP-on-DAG (project scheduling)" },
            { day: 165, topic: "Advanced backtracking — pruning strategies, constraint propagation, dancing links intro", project: "Constraint satisfaction solver (map coloring, Sudoku with CSP)" },
            { day: 166, topic: "Problem decomposition workshop — break hard problems into sub-problems", project: "Problem decomposition document for 5 real LeetCode hards" },
            { day: 167, topic: "Speed + accuracy drills — solve known problem patterns in under 15 min each", project: "Speed drill scorecard: 6 problems × 10 min each" },
            { day: 168, topic: "Month 7 Assessment + Weekly Quiz", project: "— Month 7 Capstone: Advanced DP Contest App (3-problem set) —" },
          ],
        },
      ],
    },
    {
      month: 8,
      title: "Advanced Graphs + Advanced Trees",
      theme: "Go beyond BFS/DFS — spanning trees, SCCs, Fenwick Trees, Segment Trees",
      weeks: [
        {
          week: 29,
          title: "Minimum Spanning Tree + Advanced Shortest Path",
          category: "dsa_adv",
          days: [
            { day: 169, topic: "MST — Kruskal's (sort edges + DSU), Prim's (PriorityQueue), when MST matters", project: "Network builder: find cheapest cable layout (MST visualizer)" },
            { day: 170, topic: "Bellman-Ford — detect negative cycles, SSSP with negative weights", project: "Currency arbitrage detector (negative cycle = profit opportunity)" },
            { day: 171, topic: "Floyd-Warshall — all-pairs shortest path, O(V³), transitive closure", project: "Friend-of-friend finder (all-pairs distances in social graph)" },
            { day: 172, topic: "A* search algorithm — heuristic-guided BFS, admissibility, applications", project: "Maze solver using A* (shortest path with obstacles)" },
            { day: 173, topic: "Shortest path problems — network delay, cheapest flights within K stops", project: "Flight route optimizer (K stops, cost constraint)" },
            { day: 174, topic: "Weekly Quiz + Live Mentorship", project: "— Graph algorithm selection flowchart construction —" },
          ],
        },
        {
          week: 30,
          title: "Strongly Connected Components + Advanced Graph",
          category: "dsa_adv",
          days: [
            { day: 175, topic: "SCC — Kosaraju's algorithm (2 DFS passes), condensation graph", project: "SCC finder + condensation graph builder" },
            { day: 176, topic: "Tarjan's algorithm — single DFS, low-link values, bridges, articulation points", project: "Bridge finder (remove this edge → graph disconnects)" },
            { day: 177, topic: "Bipartite matching — König's theorem, maximum matching, Hopcroft-Karp intro", project: "Job assignment matcher (workers ↔ jobs, max matching)" },
            { day: 178, topic: "Eulerian path & circuit — Hierholzer's algorithm, conditions for existence", project: "Eulerian circuit finder for given graph" },
            { day: 179, topic: "Graph coloring — greedy coloring, chromatic number, applications (scheduling)", project: "Exam scheduler (color graph so no conflicts share color)" },
            { day: 180, topic: "Weekly Quiz + Code Review", project: "— Advanced graph problems from real interviews —" },
          ],
        },
        {
          week: 31,
          title: "Fenwick Tree + Lazy Segment Tree",
          category: "dsa_adv",
          days: [
            { day: 181, topic: "Fenwick Tree (BIT) — point update, prefix sum query, O(log n) both, range update", project: "BIT from scratch: range sum + count inversions in array" },
            { day: 182, topic: "2D Fenwick Tree — 2D point update, 2D prefix sum query", project: "2D BIT: count points in rectangle query" },
            { day: 183, topic: "Segment Tree with lazy propagation — range update + range query, push-down", project: "Lazy segment tree: range assign + range sum/min/max" },
            { day: 184, topic: "Persistent data structures — persistent segment tree, versioning", project: "Kth smallest in range (offline, persistent segment tree)" },
            { day: 185, topic: "Merge sort tree, wavelet tree intro — order statistics", project: "Range Kth smallest + count smaller/larger in range" },
            { day: 186, topic: "Weekly Quiz + Live Mentorship", project: "— When to use BIT vs Segment Tree vs sparse table —" },
          ],
        },
        {
          week: 32,
          title: "Month 8 Integration + Advanced String Algorithms",
          category: "dsa_adv",
          days: [
            { day: 187, topic: "KMP algorithm — failure function, O(n+m) pattern matching", project: "Multi-pattern text searcher using KMP" },
            { day: 188, topic: "Z-algorithm — Z-array, O(n) string matching alternative to KMP", project: "Z-algorithm vs KMP comparison tool" },
            { day: 189, topic: "Rabin-Karp — rolling hash, multiple pattern search, O(n+m) avg", project: "Plagiarism detector (find repeated substrings ≥ K length)" },
            { day: 190, topic: "Suffix array + LCP array — O(n log n) construction, applications", project: "Longest common substring finder using suffix array" },
            { day: 191, topic: "Aho-Corasick — multi-pattern search in O(n + m + z) using trie + failure links", project: "Keyword filter (find all dictionary words in text, O(n))" },
            { day: 192, topic: "Month 8 Assessment + Capstone", project: "— Month 8 Capstone: Text Analysis Engine (search + pattern + stats) —" },
          ],
        },
      ],
    },
    {
      month: 9,
      title: "Competitive Programming Foundations",
      theme: "Think faster, code cleaner, solve harder — compete at Codeforces/LeetCode Contests",
      weeks: [
        {
          week: 33,
          title: "Competitive Programming Mindset",
          category: "competitive",
          days: [
            { day: 193, topic: "CP workflow — read problem, identify constraints, choose algorithm, code fast, test", project: "First Codeforces contest simulation (Div. 3, problems A-C)" },
            { day: 194, topic: "Common CP pitfalls — overflow (use long), edge cases, off-by-one, TLE vs WA", project: "Bug hunt: fix 10 intentionally broken competitive solutions" },
            { day: 195, topic: "Greedy proofs — exchange argument, invariant-based proofs for greedy choices", project: "Prove 3 greedy algorithms correct (written + coded)" },
            { day: 196, topic: "Advanced two pointers + deque — problems requiring multiple pointer tracking", project: "Advanced pointer problems (minimum size subarray, shortest subarray sum ≥ k)" },
            { day: 197, topic: "Coordinate compression — compress large value ranges for array indexing", project: "Coordinate compression toolkit + BIT on compressed values" },
            { day: 198, topic: "Weekly Quiz + Live Mentorship", project: "— Live contest: 90-minute timed CP session —" },
          ],
        },
        {
          week: 34,
          title: "Game Theory + Combinatorial Problems",
          category: "competitive",
          days: [
            { day: 199, topic: "Game theory — Nim game, Sprague-Grundy theorem, memoized game states", project: "Nim game solver + Grundy number calculator" },
            { day: 200, topic: "Permutation problems — next permutation, kth permutation, count permutations with constraints", project: "Permutation explorer (rank, unrank, next, previous)" },
            { day: 201, topic: "Inclusion-exclusion principle — count with multiple overlapping conditions", project: "Inclusion-exclusion calculator (custom set problems)" },
            { day: 202, topic: "Meet-in-the-middle — split search space in half, O(2^(n/2))", project: "4-Sum with meet in middle + subset sum with large N" },
            { day: 203, topic: "Randomized algorithms — random pivot quickselect, hashing with random mod", project: "Randomized algorithms demo + expected time analysis" },
            { day: 204, topic: "Weekly Quiz + Code Review", project: "— CP problem classification workshop —" },
          ],
        },
        {
          week: 35,
          title: "Advanced DP for CP",
          category: "competitive",
          days: [
            { day: 205, topic: "DP on sequences with special states — DP with last element constraint", project: "Longest alternating subsequence + zigzag DP" },
            { day: 206, topic: "Digit DP — count numbers in [L,R] satisfying property (no consecutive same digit, etc.)", project: "Digit DP: count numbers with non-decreasing digits in range" },
            { day: 207, topic: "Profile DP — tiling problems, DP across columns, broken profile DP", project: "Domino tiling counter for M×N grid" },
            { day: 208, topic: "Expected value DP — probability × value, expected steps, game DP", project: "Expected dice rolls to reach N + expected steps in random walk" },
            { day: 209, topic: "DP on permutations — count permutations by inversions, descents, derangements", project: "Derangement counter + permutation by inversion count" },
            { day: 210, topic: "Weekly Quiz + Live Mentorship", project: "— CP contest: 2-hour rated simulation (Div. 2 A-D level) —" },
          ],
        },
        {
          week: 36,
          title: "Month 9 Contest Practice",
          category: "competitive",
          days: [
            { day: 211, topic: "Full contest simulation — Codeforces Div. 2 style (5 problems, 2 hours)", project: "Contest performance analysis (solve rate, time distribution)" },
            { day: 212, topic: "Upsolving session — solve problems you couldn't during contest, learn editorials", project: "Editorial study + re-implementation of missed problems" },
            { day: 213, topic: "Speed coding drills — implement 10 classic algorithms under time pressure", project: "Speed implementation: BFS, DFS, Dijkstra, Union-Find, Segment Tree (timed)" },
            { day: 214, topic: "Hard problem breakdown — read Codeforces D/E problems, identify components", project: "Problem decomposition for 3 hard problems (no coding, just analysis)" },
            { day: 215, topic: "Personal weakness audit — identify weak topics, make targeted study plan", project: "Personal DSA audit: 30-question diagnostic test" },
            { day: 216, topic: "Month 9 Assessment + Capstone", project: "— Month 9 Capstone: Compete in a real Codeforces/AtCoder contest —" },
          ],
        },
      ],
    },
    {
      month: 10,
      title: "Company-Specific Interview Preparation",
      theme: "Crack FAANG and top product company interviews with targeted preparation",
      weeks: [
        {
          week: 37,
          title: "Interview Fundamentals",
          category: "interview",
          days: [
            { day: 217, topic: "Interview process overview — OA, phone screen, system design, behavioral, offer", project: "Personal preparation plan: timeline × topic matrix" },
            { day: 218, topic: "Amazon-style problems — arrays, trees, OOP design, leadership principles questions", project: "Solve 5 Amazon-tagged problems + write STAR stories for 5 LPs" },
            { day: 219, topic: "Google-style problems — graph + DP heavy, clean code, edge cases, communication", project: "Solve 5 Google-tagged hard graph/DP problems with explanation" },
            { day: 220, topic: "Microsoft-style problems — mixed DSA, OOP design, friendly interviewer style", project: "Solve 5 Microsoft-tagged problems + design a class for one" },
            { day: 221, topic: "Startup interviews — practical coding, system thinking, full-stack awareness", project: "Build a small feature: CLI + basic logic + test cases" },
            { day: 222, topic: "Weekly Quiz + Live Mentorship", project: "— Mock interview: Amazon round (45 min, live feedback) —" },
          ],
        },
        {
          week: 38,
          title: "OA Preparation + Timed Practice",
          category: "interview",
          days: [
            { day: 223, topic: "OA structure — HackerRank, Codility, CoderPad formats, anti-cheat awareness", project: "HackerRank-style OA simulation (2 problems, 90 min)" },
            { day: 224, topic: "LeetCode Top 150 — systematic coverage, pattern by pattern", project: "Solve 5 problems from LeetCode Top 150 (timed, explain aloud)" },
            { day: 225, topic: "LeetCode Top 150 — continued coverage", project: "Solve 5 more problems with complexity analysis writeup" },
            { day: 226, topic: "Timed drills — solve 2 medium + 1 hard in 75 minutes", project: "Timed drill + self-scoring rubric (correctness, time, space, edge cases)" },
            { day: 227, topic: "Communication practice — think aloud, ask clarifying questions, walk through approach", project: "Video record yourself solving a problem, review, improve" },
            { day: 228, topic: "Weekly Quiz + Code Review", project: "— Peer mock interview: swap interviewer/interviewee roles —" },
          ],
        },
        {
          week: 39,
          title: "Low-Level Design (LLD)",
          category: "design",
          days: [
            { day: 229, topic: "SOLID principles — SRP, OCP, LSP, ISP, DIP with Java examples", project: "Refactor bad code to follow all 5 SOLID principles" },
            { day: 230, topic: "Design Pattern: Singleton + Factory + Builder — implement in Java", project: "Database connection pool (Singleton) + Logger (Builder)" },
            { day: 231, topic: "Design Pattern: Observer + Strategy + Decorator", project: "Event notification system (Observer) + sorting strategy switcher" },
            { day: 232, topic: "LLD Problem: Parking Lot — classes, relationships, flows, edge cases", project: "Parking lot system (full OOP design + working code)" },
            { day: 233, topic: "LLD Problem: Library Management, Chess game, Food delivery system", project: "Choose one LLD: design + implement core classes" },
            { day: 234, topic: "Weekly Quiz + Live Mentorship", project: "— LLD mock interview: design a URL shortener OOP model —" },
          ],
        },
        {
          week: 40,
          title: "Month 10 Full-Round Mock Interviews",
          category: "interview",
          days: [
            { day: 235, topic: "Full mock: DSA Round 1 (45 min, arrays + strings, timed, recorded)", project: "Interview scorecard + improvement plan" },
            { day: 236, topic: "Full mock: DSA Round 2 (45 min, trees + graphs, timed, recorded)", project: "Interview scorecard + improvement plan" },
            { day: 237, topic: "Full mock: LLD Round (45 min, design a system OOP-level)", project: "LLD mock scorecard + design diagram" },
            { day: 238, topic: "Full mock: DP + Mixed hard problems (45 min)", project: "Interview scorecard + optimal solution study" },
            { day: 239, topic: "Behavioral round prep — STAR method, 10 essential questions, company research", project: "Behavioral answer bank (10 situations × 3 versions)" },
            { day: 240, topic: "Month 10 Assessment + Mock Debrief", project: "— Month 10 Capstone: Full Interview Day Simulation (4 rounds) —" },
          ],
        },
      ],
    },
    {
      month: 11,
      title: "Java Internals + Concurrency + Advanced Problem Solving",
      theme: "Go deeper into Java and solve problems at expert level",
      weeks: [
        {
          week: 41,
          title: "Java Internals + JVM",
          category: "java",
          days: [
            { day: 241, topic: "JVM architecture — class loader, bytecode, JIT compiler, execution engine", project: "JVM internals cheat sheet + bytecode viewer demo" },
            { day: 242, topic: "Java memory model — heap, stack, method area, GC types (G1, ZGC, Serial)", project: "Memory leak finder — identify & fix 5 memory leak scenarios" },
            { day: 243, topic: "Garbage collection — GC roots, mark-and-sweep, generational GC, GC tuning", project: "GC simulation: build a simple mark-and-sweep demo" },
            { day: 244, topic: "Java performance — profiling, BigDecimal vs double, StringBuilder vs String concat", project: "Performance benchmark: compare 5 alternative implementations" },
            { day: 245, topic: "Java internals quiz + review — deep questions from interviews", project: "Answer 20 JVM interview questions with code evidence" },
            { day: 246, topic: "Weekly Quiz + Live Mentorship", project: "— JVM deep dive: Q&A with real interview questions —" },
          ],
        },
        {
          week: 42,
          title: "Java Concurrency",
          category: "java",
          days: [
            { day: 247, topic: "Threads — Thread class, Runnable, lifecycle, sleep, join, daemon threads", project: "Multi-threaded number printer + thread lifecycle visualizer" },
            { day: 248, topic: "Synchronization — race conditions, synchronized blocks, volatile, atomic variables", project: "Race condition demo + fix with synchronization" },
            { day: 249, topic: "Executor framework — ThreadPool, Executors, Future, Callable, CompletableFuture", project: "Parallel file downloader simulator (thread pool, 10 tasks)" },
            { day: 250, topic: "Concurrent collections — ConcurrentHashMap, BlockingQueue, CopyOnWriteArrayList", project: "Producer-consumer system with BlockingQueue" },
            { day: 251, topic: "Deadlock, livelock, starvation — detection, prevention, ReentrantLock", project: "Deadlock simulator + deadlock-free bank transfer system" },
            { day: 252, topic: "Weekly Quiz + Code Review", project: "— Concurrency interview Q&A: top 20 questions —" },
          ],
        },
        {
          week: 43,
          title: "Expert-Level Problem Solving",
          category: "dsa_adv",
          days: [
            { day: 253, topic: "Hard LeetCode patterns — LRU Cache, LFU Cache, median from data stream", project: "LRU Cache (O(1) get/put with HashMap + DoublyLinkedList)" },
            { day: 254, topic: "Hard problems — serialize/deserialize binary tree, word ladder II, alien dictionary", project: "Tree serializer/deserializer (BFS-based, compact format)" },
            { day: 255, topic: "Hard DP — regular expression matching, wildcard matching, burst balloons", project: "Regex matcher from scratch (. and * support)" },
            { day: 256, topic: "Hard graph — swim in rising water, critical connections, minimum cost to connect all points", project: "Critical connections finder (Tarjan's bridges)" },
            { day: 257, topic: "Contest-level problem solving — solve problems rated 1800+ on Codeforces", project: "Solve 3 problems rated 1800+ with editorial analysis" },
            { day: 258, topic: "Weekly Quiz + Live Mentorship", project: "— Expert round: mentor presents unseen hard problem, solve live —" },
          ],
        },
        {
          week: 44,
          title: "Month 11 Integration",
          category: "capstone",
          days: [
            { day: 259, topic: "Full technical interview simulation — 2 rounds back-to-back (90 min total)", project: "Post-interview comprehensive analysis + improvement roadmap" },
            { day: 260, topic: "Resume project review — make DSA skills visible on resume with project descriptions", project: "Updated resume with quantified project achievements" },
            { day: 261, topic: "GitHub portfolio — push all mentorship projects, README for each, pinned repos", project: "GitHub portfolio live and public (10+ projects pinned)" },
            { day: 262, topic: "LinkedIn optimization — headline, about, skills, projects, open to work", project: "LinkedIn profile 100% complete + connection strategy" },
            { day: 263, topic: "Job application strategy — target companies, referrals, cold outreach, timing", project: "Job tracker sheet (50 target companies, status tracking)" },
            { day: 264, topic: "Month 11 Assessment + Portfolio Review", project: "— Month 11 Capstone: Complete Portfolio + Interview Readiness Score —" },
          ],
        },
      ],
    },
    {
      month: 12,
      title: "Internship Prep + Capstone + Graduation",
      theme: "Land your internship. Ship your capstone. Graduate interview-ready.",
      weeks: [
        {
          week: 45,
          title: "Final Interview Sprints",
          category: "interview",
          days: [
            { day: 265, topic: "Sprint 1 — Arrays, Strings, HashMap: solve 10 problems at speed (medium-hard)", project: "Speed drill scorecard + error log" },
            { day: 266, topic: "Sprint 2 — Trees, Graphs: solve 10 problems at speed", project: "Speed drill scorecard + error log" },
            { day: 267, topic: "Sprint 3 — DP, Backtracking: solve 10 problems at speed", project: "Speed drill scorecard + error log" },
            { day: 268, topic: "Sprint 4 — Mixed hard: solve 10 problems including 3 hard", project: "Speed drill scorecard + final weak area log" },
            { day: 269, topic: "Last-mile prep — flash cards, complexity table, key patterns review", project: "Personal cheat sheet (1 page, all patterns + templates)" },
            { day: 270, topic: "Weekly Quiz + Live Mentorship", project: "— Final mentorship session: Q&A, motivation, strategy —" },
          ],
        },
        {
          week: 46,
          title: "Capstone Project Build",
          category: "capstone",
          days: [
            { day: 271, topic: "Capstone kickoff — finalize scope, design document, data structures to use", project: "Design doc: DSA Visualizer or Algorithm Playground (Java CLI)" },
            { day: 272, topic: "Capstone build — Day 2: implement core data structure engine", project: "Core module: Graph + Tree + Heap engine working" },
            { day: 273, topic: "Capstone build — Day 3: implement algorithm layer (BFS, DFS, Dijkstra, DP)", project: "Algorithm module: 8 algorithms wired to engine" },
            { day: 274, topic: "Capstone build — Day 4: implement CLI interface + pretty printing", project: "CLI layer: interactive menu, formatted output" },
            { day: 275, topic: "Capstone build — Day 5: testing, edge cases, documentation", project: "Tests + Javadoc + README" },
            { day: 276, topic: "Weekly Quiz + Capstone Review", project: "— Peer review session: test each other's capstone —" },
          ],
        },
        {
          week: 47,
          title: "Internship Guidance + Industry Readiness",
          category: "capstone",
          days: [
            { day: 277, topic: "Internship application process — OA, screening, references, offer negotiation", project: "Internship application tracker (20 companies, personalized)" },
            { day: 278, topic: "Workplace coding standards — code review etiquette, Git workflow, PR descriptions", project: "Git workflow simulation: branch, commit, PR, review, merge" },
            { day: 279, topic: "Reading production code — how to navigate large codebases, read before write", project: "Explore an open-source Java repo: document one module's design" },
            { day: 280, topic: "Debugging in real projects — logging, breakpoints, profiling, heap dumps", project: "Debug 3 intentionally broken Java programs using IntelliJ debugger" },
            { day: 281, topic: "Communication for engineers — writing tickets, documentation, async communication", project: "Write a ticket + design doc + documentation for capstone" },
            { day: 282, topic: "Weekly Quiz + Industry Panel (Guest Mentor)", project: "— Guest: Working engineer shares internship + first-job experience —" },
          ],
        },
        {
          week: 48,
          title: "Final Assessment + Graduation",
          category: "capstone",
          days: [
            { day: 283, topic: "Final mock interviews — Round 1: DSA (company-level, timed, recorded)", project: "Full post-interview debrief + final score" },
            { day: 284, topic: "Final mock interviews — Round 2: LLD + behavioral (company-level)", project: "Full post-interview debrief + final score" },
            { day: 285, topic: "12-month comprehensive assessment — 3-hour exam (DSA + OOP + Design)", project: "Final assessment submission + automated grading" },
            { day: 286, topic: "Capstone presentation — present project to mentor + peers (20 min)", project: "Final capstone demo + Q&A + feedback" },
            { day: 287, topic: "Graduation prep — certificate, portfolio handoff, alumni network intro", project: "Graduate portfolio package (GitHub + LinkedIn + Resume)" },
            { day: 288, topic: "GRADUATION DAY — Certificate ceremony + Internship placement guidance", project: "— 12-Month Java Mastery Certificate Awarded —" },
          ],
        },
      ],
    },
  ],
};

const dailyFormat = [
  { icon: "📖", label: "Study Material", desc: "30–45 min curated reading + video" },
  { icon: "💡", label: "Practice Questions", desc: "5–10 concept MCQs & short answers" },
  { icon: "🔧", label: "Problem Statement", desc: "Real task that builds toward the project" },
  { icon: "🛠️", label: "Micro Project", desc: "Build a working tool by end of day" },
];

function Badge({ category }) {
  const cat = CATEGORIES[category] || CATEGORIES.java;
  return (
    <span style={{
      display: "inline-block",
      padding: "2px 10px",
      borderRadius: 20,
      fontSize: 11,
      fontWeight: 500,
      backgroundColor: cat.bg,
      color: cat.color,
      whiteSpace: "nowrap",
    }}>
      {cat.label}
    </span>
  );
}

function DayRow({ day }) {
  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: "56px 1fr auto",
      gap: 12,
      padding: "10px 0",
      borderBottom: "0.5px solid var(--color-border-tertiary)",
      alignItems: "flex-start",
    }}>
      <div style={{
        fontSize: 12,
        fontWeight: 500,
        color: "var(--color-text-secondary)",
        paddingTop: 2,
      }}>Day {day.day}</div>
      <div>
        <div style={{ fontSize: 13.5, color: "var(--color-text-primary)", lineHeight: 1.5 }}>
          {day.topic}
        </div>
        <div style={{ fontSize: 12, color: "var(--color-text-secondary)", marginTop: 4, display: "flex", alignItems: "center", gap: 5 }}>
          <span style={{ opacity: 0.7 }}>🛠️</span> {day.project}
        </div>
      </div>
    </div>
  );
}

function WeekCard({ week }) {
  const [open, setOpen] = useState(false);
  const cat = CATEGORIES[week.category] || CATEGORIES.java;
  return (
    <div style={{
      marginBottom: 8,
      border: "0.5px solid var(--color-border-tertiary)",
      borderRadius: 10,
      overflow: "hidden",
      backgroundColor: "var(--color-background-primary)",
    }}>
      <button
        onClick={() => setOpen(o => !o)}
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "12px 16px",
          background: "none",
          border: "none",
          cursor: "pointer",
          textAlign: "left",
          gap: 12,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 10, flex: 1, minWidth: 0 }}>
          <span style={{
            fontSize: 11,
            fontWeight: 500,
            color: cat.color,
            background: cat.bg,
            padding: "2px 8px",
            borderRadius: 20,
            whiteSpace: "nowrap",
            flexShrink: 0,
          }}>
            Wk {week.week}
          </span>
          <span style={{ fontSize: 14, fontWeight: 500, color: "var(--color-text-primary)" }}>
            {week.title}
          </span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 8, flexShrink: 0 }}>
          <Badge category={week.category} />
          <span style={{ fontSize: 12, color: "var(--color-text-secondary)", transform: open ? "rotate(180deg)" : "none", transition: "transform 0.2s" }}>▼</span>
        </div>
      </button>
      {open && (
        <div style={{ padding: "0 16px 12px" }}>
          {week.days.map(d => <DayRow key={d.day} day={d} />)}
        </div>
      )}
    </div>
  );
}

function MonthSection({ month, idx }) {
  const [open, setOpen] = useState(idx === 0);
  return (
    <div style={{ marginBottom: 16 }}>
      <button
        onClick={() => setOpen(o => !o)}
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          gap: 16,
          padding: "16px 20px",
          background: "var(--color-background-secondary)",
          border: "0.5px solid var(--color-border-secondary)",
          borderRadius: 12,
          cursor: "pointer",
          textAlign: "left",
          marginBottom: open ? 8 : 0,
        }}
      >
        <div style={{
          width: 40, height: 40,
          borderRadius: 10,
          background: "var(--color-background-primary)",
          border: "0.5px solid var(--color-border-secondary)",
          display: "flex", alignItems: "center", justifyContent: "center",
          fontWeight: 500, fontSize: 15,
          color: "var(--color-text-primary)",
          flexShrink: 0,
        }}>
          M{month.month}
        </div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ fontWeight: 500, fontSize: 15, color: "var(--color-text-primary)" }}>
            Month {month.month}: {month.title}
          </div>
          <div style={{ fontSize: 12, color: "var(--color-text-secondary)", marginTop: 2 }}>
            {month.theme}
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 8, flexShrink: 0 }}>
          <span style={{ fontSize: 12, color: "var(--color-text-tertiary)" }}>
            {month.weeks.length} weeks · {month.weeks.length * 6} days
          </span>
          <span style={{ fontSize: 12, color: "var(--color-text-secondary)", transform: open ? "rotate(180deg)" : "none", transition: "transform 0.2s" }}>▼</span>
        </div>
      </button>
      {open && (
        <div style={{ paddingLeft: 0 }}>
          {month.weeks.map(w => <WeekCard key={w.week} week={w} />)}
        </div>
      )}
    </div>
  );
}

const TRACKS = [
  {
    key: 3,
    label: "3 Months",
    subtitle: "Core Java + Basic DSA",
    color: "#1D9E75",
    bg: "#E1F5EE",
    months: 3,
    weeks: 12,
    days: 72,
    description: "Perfect for: Absolute beginners who want a strong Java + DSA foundation",
    outcome: "Can solve Easy–Medium LeetCode, implement all basic data structures",
    tags: ["Java Basics", "OOP", "Collections", "Sorting", "Stacks", "Queues", "Linked Lists"],
  },
  {
    key: 6,
    label: "6 Months",
    subtitle: "+ Trees, Graphs & DP",
    color: "#185FA5",
    bg: "#E6F1FB",
    months: 6,
    weeks: 24,
    days: 144,
    description: "Perfect for: Intermediate learners aiming for placement in product companies",
    outcome: "Can crack most interview rounds at startups and mid-tier product companies",
    tags: ["Trees", "BST", "Heaps", "Graphs", "DP", "Backtracking", "Mock Interviews"],
  },
  {
    key: 12,
    label: "12 Months",
    subtitle: "+ Competitive + Internship",
    color: "#993C1D",
    bg: "#FAECE7",
    months: 12,
    weeks: 48,
    days: 288,
    description: "Perfect for: Students targeting FAANG-level companies and competitive programming",
    outcome: "Interview-ready for FAANG/MAANG. Competitive programmer (Codeforces Div. 2+)",
    tags: ["Advanced DSA", "CP", "FAANG Prep", "Java Internals", "Concurrency", "Capstone"],
  },
];

export default function Syllabus() {
  const [activeTrack, setActiveTrack] = useState(3);

  const currentTrack = TRACKS.find(t => t.key === activeTrack);

  const allMonths = [];
  if (activeTrack >= 3) allMonths.push(...syllabus[3]);
  if (activeTrack >= 6) allMonths.push(...syllabus[6]);
  if (activeTrack >= 12) allMonths.push(...syllabus[12]);

  return (
    <div style={{ fontFamily: "var(--font-sans)", padding: "1.5rem 0", maxWidth: 720 }}>
      <h2 className="sr-only">Java Programming Mentorship Syllabus — 3, 6, and 12 Month Tracks</h2>

      <div style={{ marginBottom: 24 }}>
        <div style={{ fontSize: 11, fontWeight: 500, color: "var(--color-text-secondary)", textTransform: "uppercase", letterSpacing: 1, marginBottom: 6 }}>
          Java Programming Mentorship
        </div>
        <div style={{ fontSize: 22, fontWeight: 500, color: "var(--color-text-primary)", marginBottom: 8 }}>
          Full Curriculum — 3 / 6 / 12 Months
        </div>
        <div style={{ fontSize: 14, color: "var(--color-text-secondary)", lineHeight: 1.6 }}>
          Every day includes study material, practice questions, a real problem statement, and a working micro project you build from scratch.
        </div>
      </div>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: 10,
        marginBottom: 24,
        padding: "14px 16px",
        background: "var(--color-background-secondary)",
        borderRadius: 12,
        border: "0.5px solid var(--color-border-tertiary)",
      }}>
        {dailyFormat.map(f => (
          <div key={f.label} style={{ textAlign: "center" }}>
            <div style={{ fontSize: 18, marginBottom: 4 }}>{f.icon}</div>
            <div style={{ fontSize: 12, fontWeight: 500, color: "var(--color-text-primary)", marginBottom: 2 }}>{f.label}</div>
            <div style={{ fontSize: 11, color: "var(--color-text-secondary)", lineHeight: 1.4 }}>{f.desc}</div>
          </div>
        ))}
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 10, marginBottom: 24 }}>
        {TRACKS.map(t => (
          <button
            key={t.key}
            onClick={() => setActiveTrack(t.key)}
            style={{
              padding: "14px 12px",
              border: activeTrack === t.key ? `2px solid ${t.color}` : "0.5px solid var(--color-border-tertiary)",
              borderRadius: 12,
              background: activeTrack === t.key ? t.bg : "var(--color-background-primary)",
              cursor: "pointer",
              textAlign: "left",
              transition: "all 0.15s",
            }}
          >
            <div style={{ fontSize: 15, fontWeight: 500, color: activeTrack === t.key ? t.color : "var(--color-text-primary)", marginBottom: 2 }}>
              {t.label}
            </div>
            <div style={{ fontSize: 11, color: activeTrack === t.key ? t.color : "var(--color-text-secondary)", marginBottom: 8 }}>
              {t.subtitle}
            </div>
            <div style={{ display: "flex", gap: 12 }}>
              {[["M", t.months], ["W", t.weeks], ["D", t.days]].map(([lbl, val]) => (
                <div key={lbl} style={{ textAlign: "center" }}>
                  <div style={{ fontSize: 15, fontWeight: 500, color: activeTrack === t.key ? t.color : "var(--color-text-primary)" }}>{val}</div>
                  <div style={{ fontSize: 10, color: "var(--color-text-secondary)" }}>{lbl === "M" ? "months" : lbl === "W" ? "weeks" : "days"}</div>
                </div>
              ))}
            </div>
          </button>
        ))}
      </div>

      <div style={{
        padding: "14px 16px",
        background: "var(--color-background-secondary)",
        borderRadius: 12,
        border: "0.5px solid var(--color-border-tertiary)",
        marginBottom: 20,
      }}>
        <div style={{ fontSize: 13, color: "var(--color-text-secondary)", marginBottom: 6 }}>{currentTrack.description}</div>
        <div style={{ fontSize: 13, fontWeight: 500, color: "var(--color-text-primary)", marginBottom: 10 }}>
          🎯 Outcome: {currentTrack.outcome}
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
          {currentTrack.tags.map(tag => (
            <span key={tag} style={{
              fontSize: 11,
              padding: "3px 10px",
              borderRadius: 20,
              background: currentTrack.bg,
              color: currentTrack.color,
              fontWeight: 500,
            }}>{tag}</span>
          ))}
        </div>
      </div>

      <div style={{ marginBottom: 12, fontSize: 12, color: "var(--color-text-secondary)" }}>
        Click a month to expand it, then click a week to see the full daily breakdown.
      </div>

      {allMonths.map((month, idx) => (
        <MonthSection key={month.month} month={month} idx={idx} />
      ))}

      <div style={{
        marginTop: 24,
        padding: "14px 16px",
        border: "0.5px solid var(--color-border-tertiary)",
        borderRadius: 12,
        background: "var(--color-background-secondary)",
      }}>
        <div style={{ fontSize: 12, fontWeight: 500, color: "var(--color-text-primary)", marginBottom: 8 }}>Category Legend</div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
          {Object.values(CATEGORIES).map(cat => (
            <span key={cat.label} style={{
              fontSize: 11,
              padding: "3px 10px",
              borderRadius: 20,
              background: cat.bg,
              color: cat.color,
              fontWeight: 500,
            }}>{cat.label}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
