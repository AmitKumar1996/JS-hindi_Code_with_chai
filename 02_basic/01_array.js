/** JS Important Topic
 * var, Let, Const
 * Hosting
 * Debouncing
 * Prototype Inheritence
 * Closures
 * Event Loop
 */

/** React Important Topics 
 * Hooks
 * Performance Optimization
 * Vertual DOM
 * React Suspense
 * State Management
 */




// JavaScript Arrays  
// Arrays in JavaScript are dynamic, can hold mixed data types, and have built-in methods.

const myArr = [0, 1, 2, 3, 4, 5];
console.log(myArr); // Output: [0, 1, 2, 3, 4, 5]

// Important Array Methods:
myArr.push(6);      // Adds element at the end
myArr.pop();        // Removes last element
myArr.shift();      // Removes first element
myArr.unshift(0);   // Adds element at the beginning
myArr.splice(2, 1); // Removes element at index 2
console.log(myArr); // Modified array

// Shallow Copy vs Deep Copy  

// Shallow Copy: Copies references, changes in copied array affect the original.
const shallowCopy = myArr; 
shallowCopy[0] = 10;  
console.log(myArr); // Affected: [10, 1, 3, 4, 5]

// Deep Copy: Creates an independent copy, changes do not affect the original.
const deepCopy = [...myArr]; // Spread operator (shallow for nested objects)
deepCopy[0] = 0;  
console.log(myArr); // Unaffected: [10, 1, 3, 4, 5]

// Alternative Deep Copy methods:
const deepCopy2 = JSON.parse(JSON.stringify(myArr)); // Works for primitive values

// Important Concepts:  
// 1. JavaScript arrays are mutable and can hold different data types.  
// 2. Arrays are 0-based indexed.  
// 3. The spread operator `[...]` creates a shallow copy, not a deep copy.  
// 4. `JSON.stringify()` + `JSON.parse()` creates a deep copy but doesn’t work with functions.  
// 5. `structuredClone(obj)` (modern JS) creates a deep copy with full support.  

// Interview Questions with Answers:

// Q1: What is the difference between shallow copy and deep copy?
// Answer: 
// - A shallow copy copies only references for objects, so changes affect the original array.
// - A deep copy creates a completely independent copy, preventing changes from affecting the original object.

// Q2: How can you create a deep copy of an object in JavaScript?
// Answer:
// - Using `JSON.parse(JSON.stringify(obj))` (works only for primitive values).
// - Using `structuredClone(obj)` (modern JS, supports functions).
// - Using recursion for complex objects.
// - Using libraries like Lodash (`_.cloneDeep(obj)`).

// Q3: Explain the difference between `.map()`, `.forEach()`, and `.reduce()` in arrays.
// Answer:
// - `.map()`: Creates a new array by transforming each element.
// - `.forEach()`: Iterates over an array but does not return anything.
// - `.reduce()`: Reduces an array to a single value by applying a function.

// Example:
const numbers = [1, 2, 3, 4];
const doubled = numbers.map(num => num * 2); // [2, 4, 6, 8]
numbers.forEach(num => console.log(num)); // Prints 1, 2, 3, 4
const sum = numbers.reduce((acc, num) => acc + num, 0); // 10

// Q4: What are the different ways to clone an array in JavaScript?
// Answer:
// - Using spread operator `[...arr]`
// - Using `Array.from(arr)`
// - Using `slice() -> arr.slice()`
// - Using `map() -> arr.map(el => el)`

// Q5: How do you remove duplicates from an array?
const uniqueArr = [...new Set(myArr)]; // Using Set to remove duplicates
console.log(uniqueArr); // Prints unique elements
