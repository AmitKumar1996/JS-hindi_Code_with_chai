// Date: 06-07-2025

"use strict";  // Treat all JS code as newer version

// alert("hello") // We are using Node.js, not a browser

// Code readability should be high
console.log(3 + 3);
console.log("Amit Kumar");


// =========================
// Data Types in JavaScript
// =========================
// 1. Primitive Data Types
// -----------------------
// - number => 2^53
// - bigint
// - string => ""
// - boolean => true/false
// - undefined => no value assigned
// - null => empty value
// - symbol

// 2. Non-Primitive (Reference) Data Types
// ----------------------------------------
// - object => {}
// - function
// - array
// - date => new Date()
// - regex => new RegExp()
// - map => new Map()
// - set => new Set()
// - weakmap => new WeakMap()
// - weakset => new WeakSet()
// - promise => new Promise()
// - generator => function* () { }
// - class => class { }
// - module => import/export
// - buffer => new Buffer()
// - arraybuffer => new ArrayBuffer()
// - sharedarraybuffer => new SharedArrayBuffer()
// - dataview => new DataView()
// - typedarray => new Int8Array(), Uint8Array(), etc.


// =========================
// typeof Operator Examples
// =========================
console.log(typeof name); // undefined (if not declared)
console.log(typeof age);
console.log(typeof isLogin);

// Special Cases
console.log(typeof null);       // object (historical JS bug)
console.log(typeof undefined);  // undefined
console.log(typeof NaN);        // number
console.log(typeof Infinity);   // number
console.log(typeof -Infinity);  // number
console.log(typeof 0);          // number
console.log(typeof 1);          // number


// =========================
// typeof for Different Objects
// =========================
console.log(typeof {});                 // object
console.log(typeof []);                 // object (arrays are objects)
console.log(typeof function(){});       // function
console.log(typeof new Date());         // object
console.log(typeof new RegExp());       // object
console.log(typeof new Map());          // object
console.log(typeof new Set());          // object
console.log(typeof new WeakMap());      // object
console.log(typeof new WeakSet());      // object
console.log(typeof new Promise(() => {})); // object
console.log(typeof function*(){});      // function (generators)
console.log(typeof class {});           // function (class is a function internally)
console.log(typeof new ArrayBuffer());  // object
console.log(typeof new SharedArrayBuffer()); // object
console.log(typeof new DataView(new ArrayBuffer(8))); // object
console.log(typeof new Int8Array());    // object
console.log(typeof new Uint8Array());   // object
console.log(typeof new Int16Array());   // object
console.log(typeof new Uint16Array());  // object
console.log(typeof new Int32Array());   // object
console.log(typeof new Uint32Array());  // object
console.log(typeof new Float32Array()); // object
console.log(typeof new Float64Array()); // object


// =========================
// Console Table Examples
// =========================
console.table({ name, age, isLogin });  // Object
console.table([name, age, isLogin]);    // Array
console.table({ name: "Amit Kumar", age: 25, isLogin: true });  // Object
console.table([]);  // Empty table
