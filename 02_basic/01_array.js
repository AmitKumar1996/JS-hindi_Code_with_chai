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
// JavaScript Array reduce() Method  

// The reduce() method executes a reducer function on each element of the array,  
// returning a single accumulated result.  

// Basic Syntax:
const result = array.reduce((accumulator, currentValue) => {
    // Logic to combine elements
    return updatedAccumulator;
}, initialValue);

// Example 1: Sum of all elements in an array
const numbers1 = [1, 2, 3, 4];
const sum1 = numbers1.reduce((acc, num) => acc + num, 0);
console.log(sum1); // Output: 10

// Explanation:
// - `acc` (accumulator) starts with the initial value `0`.
// - Iterates through `[1, 2, 3, 4]` and adds each number to `acc`.
// - Final result: 10.

// Example 2: Find the maximum value in an array
const maxVal = numbers.reduce((max, num) => (num > max ? num : max), numbers[0]);
console.log(maxVal); // Output: 4

// Example 3: Counting occurrences of elements in an array
const fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];
const fruitCount = fruits.reduce((count, fruit) => {
    count[fruit] = (count[fruit] || 0) + 1;
    return count;
}, {});
console.log(fruitCount); // Output: { apple: 3, banana: 2, orange: 1 }

// Example 4: Flattening an array of arrays
const nestedArr = [[1, 2], [3, 4], [5, 6]];
const flatArr = nestedArr.reduce((acc, arr) => acc.concat(arr), []);
console.log(flatArr); // Output: [1, 2, 3, 4, 5, 6]

// Important Concepts:
// 1. `reduce()` works by iterating over the array and accumulating a result.
// 2. The first argument (`acc`) stores the accumulated value.
// 3. The second argument (`currentValue`) is the current element being processed.
// 4. The second parameter to `reduce()` is the initial value of `acc`.
// 5. It is commonly used for operations like summing, filtering, mapping, and aggregating data.

// Interview Questions:
// Q1: What is the purpose of the reduce() method?
// A1: It reduces an array to a single value by applying a function to each element.

// Q2: How is reduce() different from map() and forEach()?
// A2: 
// - `map()` returns a new array with transformed elements.
// - `forEach()` iterates over elements but does not return anything.
// - `reduce()` returns a single value (sum, max, object, array, etc.).

// Q3: How can you use reduce() to count occurrences of elements?
// A3: See Example 3, where `reduce()` creates an object with element counts.

// Q4: Can reduce() return an object or an array instead of a number?
// A4: Yes! `reduce()` can be used to create objects, arrays, strings, etc. (Example 3 and 4).

// Q5: How can you flatten a nested array using reduce()?
// A5: See Example 4, where `reduce()` merges inner arrays into a single array.



// Q4: What are the different ways to clone an array in JavaScript?
// Answer:
// - Using spread operator `[...arr]`
// - Using `Array.from(arr)`
// - Using `slice() -> arr.slice()`
// - Using `map() -> arr.map(el => el)`

// Q5: How do you remove duplicates from an array?
const uniqueArr = [...new Set(myArr)]; // Using Set to remove duplicates
console.log(uniqueArr); // Prints unique elements
