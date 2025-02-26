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

console.log(typeof null)
console.log(typeof undefined)
console.log(typeof NaN)
console.log(typeof Infinity)
console.log(typeof -Infinity)
console.log(typeof 0)
console.log(typeof 1)   // number

console.log(typeof {})
console.log(typeof [])
console.log(typeof function () { })
console.log(typeof new Date())
console.log(typeof new RegExp())    // object
console.log(typeof new Map())
console.log(typeof new Set())
console.log(typeof new WeakMap())
console.log(typeof new WeakSet())       // object
console.log(typeof new Promise(() => { }))
console.log(typeof function* () { })
console.log(typeof class { })       // function
console.log(typeof new ArrayBuffer())
console.log(typeof new SharedArrayBuffer())
console.log(typeof new DataView())
console.log(typeof new Int8Array())
console.log(typeof new Uint8Array())
console.log(typeof new Int16Array())
console.log(typeof new Uint16Array())
console.log(typeof new Int32Array())
console.log(typeof new Uint32Array())
console.log(typeof new Float32Array())
console.log(typeof new Float64Array())  // object



console.table({ name, age, isLogin })  // object
console.table([name, age, isLogin])    // array
console.table({ name: "Amit kumar", age: 25, isLogin: true })  // object
console.table([name, age, isLogin])    // array


