// Primitive 
// 7 Types : String, Number, Boolean, Null, undefined, Symbol, BigInt


// Non-Primitive(REFRANCE TYPE)
// Objects, Array, Function  // Object is a collection of key-value pairs
// Object : {key: value}
// Array : [value1, value2, value3]
// Function : function name() {}    // function is a block of code that can be called by name   // function is a sub-routine that contains a sequence of statements to perform a specific task


// Why JavaScript is called a dynamicaly typed language or statically typed language?
// Dynamically Typed Language : The type of variable is determined at runtime.
// Statically Typed Language : The type of variable is determined at compile time.
// JavaScript is called a dynamicaly typed language because the type of variable is determined at runtime.  // JavaScript is a loosely typed language   // JavaScript is a weakly typed language
// Example :
// var a = 10;  // Number   // Dynamically Typed Language
// a = "Hello";  // String
// a = true;  // Boolean
// a = null;  // Null
// a = undefined;  // Undefined
// a = Symbol();  // Symbol  // Symbol is a primitive data type introduced in ES6   // Symbol is a unique and immutable data type
// a = 10n;  // BigInt  // BigInt is a primitive data type introduced in ES11   // BigInt is used to represent integers that are larger than 2^53 - 1   // BigInt is used to represent integers with arbitrary precision
// a = {};  // Object       // Dynamically Typed Language
// a = [];  // Array    // Dynamically Typed Language   // Array is a collection of elements
// a = function() {};  // Function   // Dynamically Typed 

// type of veriable is determined at runtime

const score = 10;
console.log(score);  // 10
console.log(typeof score);  // number

const scoreValue = 100.3;
console.log(scoreValue);  // 100.3
console.log(typeof scoreValue);  // number

const isTrue = true;
console.log(isTrue);  // true
console.log(typeof isTrue);  // boolean

const outsideTemp = null;
console.log(outsideTemp);  // null
console.log(typeof outsideTemp);  // object

let userEmailAddress;
console.log(userEmailAddress);  // undefined
console.log(typeof userEmailAddress);  // undefined

const uniqueId = Symbol('123');
console.log(uniqueId);  // Symbol(123)
console.log(typeof uniqueId);  // symbol

const anotherUniqueId = Symbol('123');
console.log(anotherUniqueId);  // Symbol(123)
console.log(typeof anotherUniqueId);  // symbol

console.log(uniqueId === anotherUniqueId);  // false

const bigNumber = 10n;
console.log(bigNumber);  // 10n
console.log(typeof bigNumber);  // bigint

const user = {};
console.log(user);  // {}
console.log(typeof user);  // object

const users = [];
console.log(users);  // []
console.log(typeof users);  // object

const greet = function() {
    console.log('Hello');
}
console.log(greet);  // [Function: greet]
console.log(typeof greet);  // function // function is a sub-routine that contains a sequence of statements to perform a specific task

// JavaScript is a dynamically typed language because the type of variable is determined at runtime.  // JavaScript is a loosely typed language   // JavaScript is a weakly typed language

// Dynamically Typed Language : The type of variable is determined at runtime.
// Statically Typed Language : The type of variable is determined at compile time.

const herose = ['Shaktiman', 'Superman', 'Batman'];
let myobject = {
    name: 'John',
    age: 30

}

// function 
const myFunction =function (){
    console.log('Hello');
}
console.log(myFunction);  // [Function: myFunction]
console.log(typeof myFunction);  // function

// *********************************** Memory in JavaScript **********************************************

/**
 * Memory in JavaScript
 * Memory is a storage area that stores data and instructions for processing. It is a temporary storage area.
 *
 * Types of Memory in JavaScript:
 * 1. Stack Memory(LINEAR, PRIMITIVE)
 * 2. Heap Memory(NON-LINEAR, REFERENCE, NON-PRIMITIVE)
 */

// Differences Between Stack and Heap Memory

console.table([
    { Feature: "Structure", Stack: "Linear (LIFO - Last In First Out)", Heap: "Non-linear (Dynamic)" },
    { Feature: "Storage Type", Stack: "Stores primitive & reference types", Heap: "Stores reference types" },
    { Feature: "Size", Stack: "Fixed-size", Heap: "Dynamic-size" },
    { Feature: "Speed", Stack: "Faster", Heap: "Slower" },
    { Feature: "Execution", Stack: "Synchronous", Heap: "Asynchronous" },
    { Feature: "Threading", Stack: "Single-threaded", Heap: "Multi-threaded" },
    { Feature: "Memory Allocation", Stack: "Contiguous", Heap: "Non-contiguous" },
    { Feature: "Limitations", Stack: "Limited memory", Heap: "Unlimited memory" },
    { Feature: "Usage", Stack: "Small memory footprint", Heap: "Large memory footprint" },
    { Feature: "Complexity", Stack: "Simple", Heap: "Complex" },
    { Feature: "Memory Management", Stack: "Automatic", Heap: "Manual" },
    { Feature: "Type", Stack: "Linear memory", Heap: "Non-linear memory" }
]);

/**
 * Summary:
 * - Stack Memory is used for primitive data types and references.
 * - Heap Memory is used for objects and reference data types.
 * - Stack is faster due to its contiguous allocation and LIFO mechanism.
 * - Heap is flexible but slower because of its dynamic allocation.
 *
 * Understanding memory management is crucial for optimizing JavaScript applications and preventing memory leaks.
 */

