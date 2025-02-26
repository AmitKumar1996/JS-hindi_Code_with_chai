"use strict";  // treat all JS code as newer version

//alert("hello") // we are using nodeJs , not browser

// code redability that should high 
console.log(3 + 3);
console.log("Amit kumar");
/*
 documentation 
--> tc39.com
-->mdn
*/

let name = "Amit kumar"
let age = 25
let isLogin = true

// data types in JS     
// number => 2 to power 53
// bigint
// string => ""
// boolean=> true/false
// undefined => no value
// null => empty value
// object => {}
// symbol
// function
// array
// date
// regex
// map
// set
// weakmap
// weakset
// promise
// generator
// class
// module
// buffer
// arraybuffer  // binary data
// sharedarraybuffer
// dataview
// typedarray
// int8array
// uint8array
// int16array
// uint16array
// int32array
// uint32array  // 0 to 2^32-1
// float32array
// float64array             

console.log(typeof name)
console.log(typeof age)
console.log(typeof isLogin) 

// null => object   
// undefined => undefined
// NaN => number
// Infinity => number
// -Infinity => number  // -Infinity
// 0 => number
// 1 => number

console.log(typeof null) // object
console.log(typeof undefined) // undefined
console.log(typeof NaN) // number
console.log(typeof Infinity)  // number   
console.log(typeof -Infinity)   
console.log(typeof 0)  // number
console.log(typeof 1)   // number

// object => {}
// array => []
// function => function
// date => new Date()
// regex => new RegExp()
// map => new Map()
// set => new Set()
// weakmap => new WeakMap()
// weakset => new WeakSet()
// promise => new Promise()
// generator => function* () { }
// class => class { }   
// module => import/export
// buffer => new Buffer()
// arraybuffer => new ArrayBuffer()
// sharedarraybuffer => new SharedArrayBuffer()
// dataview => new DataView()
// typedarray => new Int8Array()
// int8array => new Int8Array()
// uint8array => new Uint8Array()
// int16array => new Int16Array()
// uint16array => new Uint16Array()
// int32array => new Int32Array()






console.log(typeof {})  
console.log(typeof []) // object
console.log(typeof function () { })     
console.log(typeof new Date())  // object
console.log(typeof new RegExp())    // object
console.log(typeof new Map())      // object
console.log(typeof new Set())   // object
console.log(typeof new WeakMap())  // object
console.log(typeof new WeakSet())       // object
console.log(typeof new Promise(() => { })) // object
console.log(typeof function* () { })     // function
console.log(typeof class { })       // function
console.log(typeof new ArrayBuffer()) // object
console.log(typeof new SharedArrayBuffer()) // object
console.log(typeof new DataView()) // object
console.log(typeof new Int8Array())  // object
console.log(typeof new Uint8Array()) // object
console.log(typeof new Int16Array())   // object  
console.log(typeof new Uint16Array())   // object
console.log(typeof new Int32Array())   // object
console.log(typeof new Uint32Array())   // object
console.log(typeof new Float32Array())  
console.log(typeof new Float64Array())  // object


// console.table
console.table({ name, age, isLogin })  // object
console.table([name, age, isLogin])    // array
console.table({ name: "Amit kumar", age: 25, isLogin: true })  // object
console.table([name, age, isLogin])    // array



