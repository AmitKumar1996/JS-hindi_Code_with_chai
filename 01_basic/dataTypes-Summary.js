/* JavaScript Data Types - Detailed Notes */

// Primitive Data Types
// There are 7 primitive data types in JavaScript:
// 1. String
// 2. Number
// 3. Boolean
// 4. Null
// 5. Undefined
// 6. Symbol
// 7. BigInt

// Non-Primitive (Reference Types)
// - Objects
// - Arrays
// - Functions

// Object: A collection of key-value pairs
const user = { key: 'value' };

// Array: A collection of elements
const numbers = [1, 2, 3];

// Function: A block of code that performs a specific task
function greet() {
    console.log('Hello');
}

// JavaScript as a Dynamically Typed Language
// JavaScript is dynamically typed, meaning the type of a variable is determined at runtime.
// It is also a loosely typed and weakly typed language.

// Example:
let variable = 10;  // Number
variable = "Hello"; // String
variable = true; // Boolean
variable = null; // Null
variable = undefined; // Undefined
variable = Symbol(); // Symbol
variable = 10n; // BigInt
variable = {}; // Object
variable = []; // Array
variable = function() {}; // Function

// Checking Variable Types
const score = 10;
console.log(score, typeof score); // 10, number

const scoreValue = 100.3;
console.log(scoreValue, typeof scoreValue); // 100.3, number

const isTrue = true;
console.log(isTrue, typeof isTrue); // true, boolean

const outsideTemp = null;
console.log(outsideTemp, typeof outsideTemp); // null, object (this is a known JavaScript quirk)

let userEmailAddress;
console.log(userEmailAddress, typeof userEmailAddress); // undefined, undefined

const uniqueId = Symbol('123');
const anotherUniqueId = Symbol('123');
console.log(uniqueId, typeof uniqueId); // Symbol(123), symbol
console.log(anotherUniqueId, typeof anotherUniqueId); // Symbol(123), symbol
console.log(uniqueId === anotherUniqueId); // false (Symbols are always unique)

const bigNumber = 10n;
console.log(bigNumber, typeof bigNumber); // 10n, bigint

const users = [];
console.log(users, typeof users); // [], object

const myFunction = function() {
    console.log('Hello');
};
console.log(myFunction, typeof myFunction); // function, function

// JavaScript is dynamically typed because the type of a variable is determined at runtime.
// Dynamically Typed Language: Type is determined at runtime.
// Statically Typed Language: Type is determined at compile time.

// Example of Reference Types
const heroes = ['Shaktiman', 'Superman', 'Batman'];
let myObject = {
    name: 'John',
    age: 30
};

// Function Example
const myFunctionExample = function() {
    console.log('Hello');
};

