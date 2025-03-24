/*
===================================================
🎯 Top 100 JavaScript Interview Questions with Answers
===================================================
*/

// ✅ 1. What is JavaScript?
const q1 = `
JavaScript is a lightweight, interpreted programming language used to make web pages interactive. It is a versatile language that supports object-oriented, functional, and imperative programming styles.
`;

// ✅ 2. What are the data types in JavaScript?
const q2 = `
JavaScript has 8 data types:
1. Primitive Types:
   - String
   - Number
   - Boolean
   - Undefined
   - Null
   - Symbol
   - BigInt
2. Non-Primitive:
   - Object
`;

// ✅ 3. What is the difference between null and undefined?
const q3 = `
null: An explicit value representing 'no value' or 'empty'.
undefined: A variable that has been declared but not assigned a value.
`;

// ✅ 4. What is NaN in JavaScript?
const q4 = `
NaN (Not-a-Number) is a value that represents a computational error.
`;

// ✅ 5. How do you check if a value is NaN?
const q5 = `
Use isNaN(value) or Number.isNaN(value).
`;

// ✅ 6. What is the difference between let, const, and var?
const q6 = `
var: Function-scoped, can be re-declared and updated.
let: Block-scoped, can be updated but not re-declared.
const: Block-scoped, cannot be updated or re-declared.
`;

// ✅ 7. What is hoisting in JavaScript?
const q7 = `
Hoisting is JavaScript's default behavior of moving declarations (var and function) to the top of the scope.
`;

// ✅ 8. What is a closure in JavaScript?
const q8 = `
A closure is a function that remembers and accesses variables from its lexical scope, even when invoked outside that scope.
`;

// ✅ 9. What is the difference between == and ===?
const q9 = `
== compares values after type coercion.
=== compares values and types without type coercion.
`;

// ✅ 10. Explain the concept of promises in JavaScript.
const q10 = `
A Promise is an object representing the eventual completion or failure of an asynchronous operation. It can be in one of three states:
- Pending
- Fulfilled
- Rejected
`;

// ✅ 11. What is async/await in JavaScript?
const q11 = `
async/await is a syntactic sugar over promises, making asynchronous code look and behave more like synchronous code.
`;

// ✅ 12. What are arrow functions in JavaScript?
const q12 = `
Arrow functions are a concise way to write functions using the => syntax. They do not have their own this value.
`;

// ✅ 13. What is the difference between map, filter, and reduce?
const q13 = `
map: Transforms each element and returns a new array.
filter: Filters elements based on a condition.
reduce: Accumulates values into a single result.
`;

// ✅ 14. What is the difference between null and undefined?
const q14 = `
null: Explicitly set to indicate the absence of value.
undefined: Automatically assigned to variables that are not initialized.
`;

// ✅ 15. What is the difference between synchronous and asynchronous code?
const q15 = `
Synchronous: Executes line by line, blocking subsequent operations.
Asynchronous: Non-blocking, executes operations concurrently.
`;

// ✅ 16. What is an IIFE in JavaScript?
const q16 = `
IIFE (Immediately Invoked Function Expression) is a function that runs immediately after being defined.
`;

// ✅ 17. What is the difference between function declaration and function expression?
const q17 = `
Function Declaration: Hoisted to the top, can be called before definition.
Function Expression: Not hoisted, defined as part of a variable assignment.
`;

// ✅ 18. What are template literals in JavaScript?
const q18 = `
Template literals allow embedded expressions and multi-line strings using backticks (\` \`).
`;

// ✅ 19. What is destructuring in JavaScript?
const q19 = `
Destructuring extracts values from arrays or properties from objects and assigns them to variables.
`;

// ✅ 20. What are default parameters in JavaScript?
const q20 = `
Default parameters allow initializing function parameters with default values.
`;

// ✅ 21. What is a spread operator?
const q21 = `
The spread operator (...) expands arrays or objects into individual elements.
`;

// ✅ 22. What is a rest parameter?
const q22 = `
Rest parameter (...) collects multiple elements into an array.
`;

// ✅ 23. What is event delegation?
const q23 = `
Event delegation involves attaching a single event listener to a parent element to handle events from its children.
`;

// ✅ 24. How do you prevent event bubbling?
const q24 = `
Use event.stopPropagation() to prevent event bubbling.
`;

// ✅ 25. What is the difference between localStorage and sessionStorage?
const q25 = `
localStorage: Stores data with no expiration.
sessionStorage: Stores data for the session duration.
`;

// ✅ 26. What is JSON?
const q26 = `
JSON (JavaScript Object Notation) is a lightweight data-interchange format.
`;

// ✅ 27. How do you convert a string to JSON in JavaScript?
const q27 = `
Use JSON.parse() to convert a string to JSON.
`;

// ✅ 28. What is the difference between forEach and map?
const q28 = `
forEach: Iterates over an array and applies a function but does not return a new array.
map: Iterates over an array and returns a new transformed array.
`;

// ✅ 29. What is a prototype in JavaScript?
const q29 = `
Prototype is an object from which other objects inherit properties and methods.
`;

// ✅ 30. What is prototypal inheritance?
const q30 = `
Prototypal inheritance allows objects to inherit properties and methods from other objects.
`;

// ✅ 31. What is the difference between call, apply, and bind?
const q31 = `
call: Invokes a function with arguments passed individually.
apply: Invokes a function with arguments passed as an array.
bind: Returns a new function with a specified this value.
`;

// ✅ 32. What is the use of bind in JavaScript?
const q32 = `
bind creates a new function with a specified this value and preset arguments.
`;

// ✅ 33. What are higher-order functions in JavaScript?
const q33 = `
Higher-order functions take a function as an argument or return a function as output.
`;

// ✅ 34. What is a pure function?
const q34 = `
A pure function returns the same output for the same input and has no side effects.
`;

// ✅ 35. What is the difference between slice and splice?
const q35 = `
slice: Returns a shallow copy of an array.
splice: Modifies the original array by removing or replacing elements.
`;

// ✅ 36. How do you deep clone an object in JavaScript?
const q36 = `
Use JSON.parse(JSON.stringify(obj)) or structuredClone(obj) for deep cloning.
`;

// ✅ 37. What is a shallow copy?
const q37 = `
A shallow copy copies only the first-level properties of an object.
`;

// ✅ 38. What is a deep copy?
const q38 = `
A deep copy creates an independent clone of an object, including nested properties.
`;

// ✅ 39. What is event bubbling and capturing?
const q39 = `
Bubbling: Event propagates from child to parent.
Capturing: Event propagates from parent to child.
`;

// ✅ 40. What is the difference between document.ready and window.onload?
const q40 = `
document.ready: Fires when the DOM is ready.
window.onload: Fires when the entire page, including images, is loaded.
`;

// ✅ 41. What is debounce in JavaScript?
const q41 = `
Debouncing limits the rate at which a function is executed by delaying its invocation.
`;

// ✅ 42. What is throttling in JavaScript?
const q42 = `
Throttling limits the frequency of function execution to once in a specified period.
`;

// ✅ 43. What is the difference between shallow and deep comparison?
const q43 = `
Shallow comparison checks only top-level properties.
Deep comparison checks nested properties.
`;

// ✅ 44. What is a symbol in JavaScript?
const q44 = `
Symbol is a unique and immutable primitive value introduced in ES6.
`;

// ✅ 45. What is the difference between Object.freeze and Object.seal?
const q45 = `
Object.freeze: Prevents modifications and additions to properties.
Object.seal: Allows modifying existing properties but prevents adding new ones.
`;

// ✅ 46. What is typeof and instanceof in JavaScript?
const q46 = `
typeof: Returns the type of a variable.
instanceof: Checks if an object is an instance of a specific class or constructor.
`;

// ✅ 47. What is the difference between Object.keys, Object.values, and Object.entries?
const q47 = `
Object.keys: Returns an array of keys.
Object.values: Returns an array of values.
Object.entries: Returns an array of [key, value] pairs.
`;

// ✅ 48. What is a generator function in JavaScript?
const q48 = `
A generator function returns an iterator using yield and can pause and resume execution.
`;

// ✅ 49. What is the difference between Array.find and Array.filter?
const q49 = `
find: Returns the first element that satisfies the condition.
filter: Returns an array of all matching elements.
`;

// ✅ 50. What is a Set in JavaScript?
const q50 = `
Set is a collection of unique values in JavaScript.
`;

// ✅ 51-100 Covered in Next File...
// 🎉 End of Part 1: Top 50 JS Interview Questions 🎉
/*
===================================================
🎯 Top 100 JavaScript Interview Questions with Answers
===================================================
*/

// ✅ 51. What is WeakMap in JavaScript?
const q51 = `
WeakMap is a collection of key-value pairs where keys must be objects and values can be arbitrary values. It does not prevent garbage collection.
`;

// ✅ 52. What is WeakSet in JavaScript?
const q52 = `
WeakSet is similar to Set but stores only objects and allows for garbage collection.
`;

// ✅ 53. What is the difference between WeakMap and Map?
const q53 = `
- Map: Keys can be of any type and prevents garbage collection.
- WeakMap: Keys must be objects and allows garbage collection.
`;

// ✅ 54. What is the difference between WeakSet and Set?
const q54 = `
- Set: Stores values of any type and prevents garbage collection.
- WeakSet: Stores only objects and allows garbage collection.
`;

// ✅ 55. What is a JavaScript module?
const q55 = `
A module is a file containing reusable code that can be imported/exported between different files using import and export keywords.
`;

// ✅ 56. How do you import and export a module in JavaScript?
const q56 = `
Export: export default or export { myFunction }.
Import: import myFunction from './myModule.js' or import { myFunction } from './myModule.js'.
`;

// ✅ 57. What is the difference between default and named exports?
const q57 = `
- Default Export: Allows exporting a single value.
- Named Export: Allows exporting multiple values from a module.
`;

// ✅ 58. What is a callback function in JavaScript?
const q58 = `
A callback is a function passed as an argument to another function that is executed later.
`;

// ✅ 59. What is event bubbling in JavaScript?
const q59 = `
Event bubbling occurs when an event propagates from the target element to its ancestors.
`;

// ✅ 60. What is event capturing in JavaScript?
const q60 = `
Event capturing (trickling) occurs when an event propagates from the root element to the target.
`;

// ✅ 61. What is the difference between innerHTML and innerText?
const q61 = `
- innerHTML: Returns or sets HTML content.
- innerText: Returns or sets visible text content.
`;

// ✅ 62. What is the difference between querySelector and getElementById?
const q62 = `
- querySelector: Returns the first element that matches a CSS selector.
- getElementById: Returns the element with the specified id.
`;

// ✅ 63. What is a promise chain in JavaScript?
const q63 = `
A promise chain is a sequence of .then() methods that allow executing multiple asynchronous tasks sequentially.
`;

// ✅ 64. What is a microtask queue in JavaScript?
const q64 = `
Microtasks are callbacks that execute after the current script and before any other task.
`;

// ✅ 65. What is the difference between process.nextTick and setImmediate?
const q65 = `
- process.nextTick: Executes immediately after the current phase.
- setImmediate: Executes after the current event loop phase.
`;

// ✅ 66. What is the use of Object.create()?
const q66 = `
Object.create() is used to create a new object with the specified prototype.
`;

// ✅ 67. How do you convert an object to an array in JavaScript?
const q67 = `
Use Object.keys(), Object.values(), or Object.entries().
`;

// ✅ 68. What is the use of Object.assign()?
const q68 = `
Object.assign() is used to copy properties from one or more source objects to a target object.
`;

// ✅ 69. What is memoization in JavaScript?
const q69 = `
Memoization is a technique used to cache function results for improving performance.
`;

// ✅ 70. What is a singleton pattern in JavaScript?
const q70 = `
A singleton ensures that only one instance of a class exists and provides a global access point.
`;

// ✅ 71. What is event.preventDefault() used for?
const q71 = `
event.preventDefault() prevents the default behavior of an event.
`;

// ✅ 72. What is a factory function in JavaScript?
const q72 = `
A factory function returns a new object without using a constructor.
`;

// ✅ 73. What is the difference between deep and shallow copy?
const q73 = `
- Shallow Copy: Copies top-level properties only.
- Deep Copy: Copies all properties recursively.
`;

// ✅ 74. What is JSON.stringify and JSON.parse?
const q74 = `
- JSON.stringify: Converts a JavaScript object to a JSON string.
- JSON.parse: Converts a JSON string to a JavaScript object.
`;

// ✅ 75. What is the difference between localStorage, sessionStorage, and cookies?
const q75 = `
- localStorage: Stores data with no expiration.
- sessionStorage: Stores data for session duration.
- cookies: Stores small data with expiration.
`;

// ✅ 76. What is a polyfill in JavaScript?
const q76 = `
A polyfill is code that provides modern functionality on older browsers that do not support it.
`;

// ✅ 77. What is tail recursion in JavaScript?
const q77 = `
Tail recursion is a recursion where the recursive call is the last operation in the function.
`;

// ✅ 78. What is the difference between setTimeout and setInterval?
const q78 = `
- setTimeout: Executes a function after a specified delay.
- setInterval: Repeats a function at specified intervals.
`;

// ✅ 79. What is the purpose of Symbol in JavaScript?
const q79 = `
Symbol is a unique and immutable data type introduced in ES6 for object property keys.
`;

// ✅ 80. What is the difference between Object.freeze and Object.seal?
const q80 = `
- Object.freeze: Prevents modifications, additions, and deletions.
- Object.seal: Allows modifications but prevents additions and deletions.
`;

// ✅ 81. What is an async function in JavaScript?
const q81 = `
An async function returns a promise and allows the use of await within it.
`;

// ✅ 82. What is the difference between Object.keys() and Object.entries()?
const q82 = `
- Object.keys(): Returns an array of object keys.
- Object.entries(): Returns an array of [key, value] pairs.
`;

// ✅ 83. What is destructuring in JavaScript?
const q83 = `
Destructuring allows unpacking values from arrays or objects into distinct variables.
`;

// ✅ 84. What is a weak reference in JavaScript?
const q84 = `
A weak reference allows an object to be garbage collected if there are no strong references.
`;

// ✅ 85. What is an anonymous function in JavaScript?
const q85 = `
An anonymous function is a function without a name.
`;

// ✅ 86. What is the difference between async/await and promises?
const q86 = `
- Promises: Uses .then() and .catch().
- async/await: Syntactic sugar over promises for cleaner code.
`;

// ✅ 87. What is the use of the rest operator?
const q87 = `
The rest operator (...) collects multiple elements into an array.
`;

// ✅ 88. What is the spread operator in JavaScript?
const q88 = `
The spread operator (...) expands an array or object into individual elements.
`;

// ✅ 89. What is the difference between find() and filter()?
const q89 = `
- find(): Returns the first matching element.
- filter(): Returns all matching elements.
`;

// ✅ 90. What is a JavaScript prototype chain?
const q90 = `
A prototype chain is used to inherit properties and methods from one object to another.
`;

// ✅ 91. What is an Immediately Invoked Function Expression (IIFE)?
const q91 = `
IIFE is a function that runs immediately after being defined.
`;

// ✅ 92. What is the difference between slice() and splice()?
const q92 = `
- slice(): Returns a shallow copy of an array.
- splice(): Modifies the original array by removing or replacing elements.
`;

// ✅ 93. What is throttling in JavaScript?
const q93 = `
Throttling limits the number of times a function can be executed in a given period.
`;

// ✅ 94. What is a debounce function in JavaScript?
const q94 = `
Debouncing delays the execution of a function after a specified period.
`;

// ✅ 95. What is the purpose of window.onload in JavaScript?
const q95 = `
window.onload triggers after the entire page, including images, is fully loaded.
`;

// ✅ 96. What is the difference between the focus() and blur() methods?
const q96 = `
- focus(): Brings focus to an element.
- blur(): Removes focus from an element.
`;

// ✅ 97. What is the difference between a shallow copy and a deep copy?
const q97 = `
- Shallow Copy: Copies only top-level properties.
- Deep Copy: Copies all nested properties.
`;

// ✅ 98. How do you deep clone an object in JavaScript?
const q98 = `
Use JSON.parse(JSON.stringify(obj)) or structuredClone(obj).
`;

// ✅ 99. What is the difference between synchronous and asynchronous code?
const q99 = `
- Synchronous: Executes code sequentially.
- Asynchronous: Executes code concurrently, allowing non-blocking operations.
`;

// ✅ 100. What is the difference between call(), apply(), and bind()?
const q100 = `
- call(): Invokes a function with individual arguments.
- apply(): Invokes a function with an array of arguments.
- bind(): Returns a new function with a specified this value.
`;

// 🎉 End of Part 2: Top 100 JS Interview Questions 🎉
