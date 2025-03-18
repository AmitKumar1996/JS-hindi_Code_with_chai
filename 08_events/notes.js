/*
==================================================
JavaScript: Synchronous and Single-Threaded
==================================================
*/

// JavaScript is synchronous by default, meaning it executes code line by line.
// It is also single-threaded, meaning it has only one call stack and can execute one task at a time.

// Example:
console.log(1); // Executes first
console.log(2); // Executes second
// Output: 1 2

/*
==================================================
Execution Context
==================================================
*/

// The Execution Context is the environment in which JavaScript code is executed.
// It consists of:
// 1. Variable Environment: Stores variables, functions, and arguments.
// 2. Scope Chain: Determines the accessibility of variables.
// 3. `this` Binding: Refers to the current object.

// Types of Execution Context:
// 1. Global Execution Context (GEC): Created when the script first runs.
// 2. Function Execution Context (FEC): Created when a function is called.

// Example:
console.log("Global Context"); // Executes in the global context
function foo() {
  console.log("Function Context"); // Executes in the function context
}
foo();
// Output: Global Context, Function Context

/*
==================================================
Call Stack
==================================================
*/

// The Call Stack is a data structure that keeps track of function calls.
// It follows the Last In, First Out (LIFO) principle.

// Example:
function first() {
  console.log("First");
}
function second() {
  first();
  console.log("Second");
}
second();
// Call Stack:
// - second()
// - first()
// Output: First, Second

// Stack Overflow:
// If the call stack exceeds its limit (e.g., due to infinite recursion), a stack overflow error occurs.

/*
==================================================
Memory Heap
==================================================
*/

// The Memory Heap is a region of memory where objects, variables, and functions are stored.
// It is used for dynamic memory allocation.

// Example:
let obj = { name: "John" }; // Stored in the heap

/*
==================================================
Summary of Key Concepts
==================================================
*/

// Synchronous: Executes code line by line, one at a time.
// Single-Threaded: Has only one call stack, executing one task at a time.
// Execution Context: Environment where code is executed (global or function context).
// Call Stack: Tracks function calls in a LIFO manner.
// Memory Heap: Stores objects, variables, and functions dynamically.

/*
==================================================
Why These Concepts Matter
==================================================
*/

// Predictability: Synchronous execution makes JavaScript predictable and easy to understand.
// Performance: Single-threaded nature can lead to performance bottlenecks for CPU-intensive tasks.
// Memory Management: The memory heap and garbage collector ensure efficient memory usage.

/*
==================================================
Example
==================================================
*/

console.log("Start"); // Executes first

function foo() {
  console.log("Inside foo"); // Executes third
}

foo(); // Executes second

console.log("End"); // Executes fourth
// Output: Start, Inside foo, End

/*
==================================================
Visualization
==================================================
*/

// Call Stack:
// - Global Execution Context
// - foo()

// Memory Heap:
// - Stores variables and objects like `foo`.

/*
==================================================
Asynchronous JavaScript
==================================================
*/

// JavaScript uses asynchronous programming to handle tasks like network requests, file I/O, and timers.
// Key mechanisms:
// 1. Callbacks: Functions passed as arguments to other functions.
// 2. Promises: Represent the eventual completion (or failure) of an asynchronous operation.
// 3. Async/Await: Syntactic sugar for working with promises.

// Example:
console.log("Start");

setTimeout(() => {
  console.log("Timeout");
}, 1000);

console.log("End");
// Output: Start, End, Timeout

/*
==================================================
Event Loop
==================================================
*/

// The Event Loop is responsible for handling asynchronous tasks.
// It continuously checks the call stack and the callback queue.
// When the call stack is empty, it pushes callbacks from the queue to the stack for execution.

/*
==================================================
Garbage Collection
==================================================
*/

// JavaScript automatically manages memory using a garbage collector.
// It frees up memory by removing unused objects from the heap.

/*
==================================================
Additional Notes
==================================================
*/

// JavaScript is single-threaded, but it can handle asynchronous tasks using the Event Loop.
// The Event Loop allows JavaScript to perform non-blocking I/O operations, even though it is single-threaded.

// Example of Asynchronous Code:
console.log("Start");

setTimeout(() => {
  console.log("Timeout 1");
}, 2000);

setTimeout(() => {
  console.log("Timeout 2");
}, 1000);

console.log("End");
// Output: Start, End, Timeout 2, Timeout 1

/*
==================================================
Event Loop Phases
==================================================
*/

// The Event Loop has several phases:
// 1. Timers: Executes setTimeout and setInterval callbacks.
// 2. Pending Callbacks: Executes I/O-related callbacks.
// 3. Poll: Retrieves new I/O events.
// 4. Check: Executes setImmediate callbacks.
// 5. Close Callbacks: Executes close event callbacks (e.g., socket.on('close')).

/*
==================================================
Microtasks and Macrotasks
==================================================
*/

// JavaScript tasks are divided into two categories:
// 1. Microtasks: Higher priority tasks (e.g., Promises, process.nextTick).
// 2. Macrotasks: Lower priority tasks (e.g., setTimeout, setInterval, setImmediate).

// The Event Loop processes all microtasks before moving to the next macrotask.

// Example:
console.log("Start");

setTimeout(() => {
  console.log("Timeout"); // Macrotask
}, 0);

Promise.resolve().then(() => {
  console.log("Promise"); // Microtask
});

console.log("End");
// Output: Start, End, Promise, Timeout

/*
==================================================
Common Pitfalls
==================================================
*/

// 1. Blocking the Event Loop:
//    Avoid long-running synchronous code, as it blocks the Event Loop and makes the application unresponsive.

// 2. Callback Hell:
//    Nested callbacks can make code hard to read and maintain. Use Promises or async/await instead.

// 3. Memory Leaks:
//    Unused objects in the memory heap can cause memory leaks. Use tools like Chrome DevTools to debug memory issues.

/*
==================================================
Best Practices
==================================================
*/

// 1. Use Promises or async/await for asynchronous code.
// 2. Avoid blocking the Event Loop with long-running tasks.
// 3. Use tools like Chrome DevTools to monitor performance and memory usage.
// 4. Write clean and modular code to avoid callback hell.

