// Declare a variable 'score' and assign a string value "33a"
let score = "33a";

// typeof is used to check the data type of a variable
console.log(typeof score);        // Output: "string"
// Reason: 'score' is assigned a string, so typeof returns "string"

console.log(typeof(score));       // Output: "string"
// Reason: typeof is an operator, not a function, but parentheses are allowed

// Convert 'score' to a number using the Number() constructor
let valueInNumber = Number(score);

// Check the type of the result after conversion
console.log(typeof valueInNumber);  // Output: "number"
// Reason: In JavaScript, NaN (Not a Number) is still of type "number"

// Print the actual value
console.log(valueInNumber);         // Output: NaN
// Reason: "33a" cannot be fully parsed as a number, so Number("33a") gives NaN


// "33" => 33
// "33abc" => NaN
// true => 1; false => 0




let isLoggedIn1 = 1

let boolenIsLoggedIn1 = Boolean(isLoggedIn1)
console.log(boolenIsLoggedIn1);

let isLoggedIn2 = " "
let boolenIsLoggedIn2 = Boolean(isLoggedIn2)
console.log(boolenIsLoggedIn2);

let isLoggedIn3 = "abc"
let boolenIsLoggedIn3 = Boolean(isLoggedIn3)
console.log(boolenIsLoggedIn3);

// 1 => true
// 0 => false
// "" => false
// " " => true
// "abc" => true
// 0 => false
// 1 => true
// NaN => false
// null => false
// undefined => false
// Infinity => true
// -Infinity => true
// [] => true
// {} => true
// [1,2,3] => true
// [0] => true
// [0,0,0] => true
// [false] => true
// [false, false, false] => true
// [true] => true
// [true, true, true] => true
// [null] => true
// [undefined] => true
// [Infinity] => true
// [NaN] => true
// [{}] => true
// [null, undefined] => true
// [null, undefined, NaN] => true
// [null, undefined, NaN, 0] => true
// [null, undefined, NaN, 0, ""] => true
// [null, undefined, NaN, 0, "", false] => true
// [null, undefined, NaN, 0, "", false, true] => true
// [null, undefined, NaN, 0, "", false, true, 1] => true
// [null, undefined, NaN, 0, "", false, true, 1, "abc"] => true
// [null, undefined, NaN, 0, "", false, true, 1, "abc", " "] => true
// [null, undefined, NaN, 0, "", false, true, 1, "abc", " ", "0"] => true
// [null, undefined, NaN, 0, "", false, true, 1, "abc", " ", "0", "1"] => true
// [null, undefined, NaN, 0, "", false, true, 1, "abc", " ", "0", "1", "true"] => true
// [null, undefined, NaN, 0, "", false, true, 1, "abc", " ", "0", "1", "true", "false"] => true
// [null, undefined, NaN, 0, "", false, true, 1, "abc", " ", "0", "1", "true", "false", "null"] => true
// [null, undefined, NaN, 0, "", false, true, 1, "abc", " ", "0", "1", "true", "false", "null", "undefined"] => true
// [null, undefined, NaN, 0, "", false, true, 1, "abc", " ", "0", "1", "true", "false", "null", "undefined", "Infinity"] => true
// [null, undefined, NaN, 0, "", false, true, 1, "abc", " ", "0", "1", "true", "false", "null", "undefined", "Infinity", "Infinity"] => true
// [null, undefined, NaN, 0, "", false, true, 1, "abc", " ", "0", "1", "true", "false", "null", "undefined", "Infinity", "Infinity", "Infinity"] => true


let someNumber = 33
let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);   // string   "33"   

let someBoolean = true
let stringBoolean = String(someBoolean)
console.log(stringBoolean);
console.log(typeof stringBoolean);   // string   "true"

let someArray = [1,2,3]
let stringArray = String(someArray)
console.log(stringArray);
console.log(typeof stringArray);   // string   "1,2,3"

let someObject = {name: "John"}
let stringObject = String(someObject)
console.log(stringObject);
console.log(typeof stringObject);   // string   "[object Object]"
// [object Object] => string
// [object Array] => string
// [object Number] => string
// [object Boolean] => string
// [object String] => string
// [object Undefined] => string
// [object Null] => string
// [object Function] => string
// [object Symbol] => string
// [object BigInt] => string
// [object Date] => string
// [object RegExp] => string
// [object Math] => string
// [object JSON] => string
// [object Error] => string
// [object TypeError] => string
// [object ReferenceError] => string
// [object SyntaxError] => string
// [object RangeError] => string
// [object EvalError] => string
// [object URIError] => string
// [object InternalError] => string
// [object AggregateError] => string
// [object ArrayBuffer] => string
// [object DataView] => string
// [object SharedArrayBuffer] => string
// [object Atomics] => string
// [object DataView] => string
// [object Float32Array] => string
// [object Float64Array] => string
// [object Int8Array] => string
// [object Int16Array] => string
// [object Int32Array] => string
// [object Uint8Array] => string
// [object Uint8ClampedArray] => string
// [object Uint16Array] => string
// [object Uint32Array] => string
// [object BigInt64Array] => string
// [object BigUint64Array] => string
// [object Map] => string
// [object Set] => string
// [object WeakMap] => string
// [object WeakSet] => string
// [object Promise] => string
// [object Generator] => string
// [object GeneratorFunction] => string
// [object AsyncFunction] => string
// [object Proxy] => string
// [object Reflect] => string
// [object Module] => string
// [object WebAssembly] => string
// [object WebAssembly.Module] => string
// [object WebAssembly.Instance] => string
// [object WebAssembly.Memory] => string
// [object WebAssembly.Table] => string
// [object WebAssembly.CompileError] => string
// [object WebAssembly.LinkError] => string
// [object WebAssembly.RuntimeError] => string
// [object WebAssembly.Memory] => string
// [object WebAssembly.Table] => string
// [object WebAssembly.CompileError] => string
// [object WebAssembly.LinkError] => string
// [object WebAssembly.RuntimeError] => string
// [object WebAssembly.Memory] => string
// [object WebAssembly.Table] => string
// [object WebAssembly.CompileError] => string
// [object WebAssembly.LinkError] => string     
// [object WebAssembly.RuntimeError] => string
// [object WebAssembly.Memory] => string
// [object WebAssembly.Table] => string
// [object WebAssembly.CompileError] => string
// [object WebAssembly.LinkError] => string
// [object WebAssembly.RuntimeError] => string
// [object WebAssembly.Memory] => string
// [object WebAssembly.Table] => string
// [object WebAssembly.CompileError] => string
// [object WebAssembly.LinkError] => string
// [object WebAssembly.RuntimeError] => string
// [object WebAssembly.Memory] => string
// [object WebAssembly.Table] => string
// [object WebAssembly.CompileError] => string
// [object WebAssembly.LinkError] => string
// [object WebAssembly.RuntimeError] => string
// [object WebAssembly.Memory] => string
// [object WebAssembly.Table] => string
// [object WebAssembly.CompileError] => string
// [object WebAssembly.LinkError] => string
// [object WebAssembly.RuntimeError] => string
// [object WebAssembly.Memory] => string
// [object WebAssembly.Table] => string
// [object WebAssembly.CompileError] => string
// [object WebAssembly.LinkError] => string
// [object WebAssembly.RuntimeError] => string
// [object WebAssembly.Memory] => string
// [object WebAssembly.Table] => string
// [object WebAssembly.CompileError] => string
// [object WebAssembly.LinkError] => string
// [object WebAssembly.RuntimeError] => string
// [object WebAssembly.Memory] => string    

let someFunction = function(){}
let stringFunction = String(someFunction)
console.log(stringFunction);    // string   "function (){}" 
console.log(typeof stringFunction);   // string   "function (){}"   

let someSymbol = Symbol()
let stringSymbol = String(someSymbol)
console.log(stringSymbol);    // string   "Symbol()"
console.log(typeof stringSymbol);   // string   "Symbol()"
// Symbol() => string
// Symbol("abc") => string
// Symbol(" ") => string
// Symbol(33) => string
// Symbol(true) => string
// Symbol(false) => string
// Symbol(null) => string
// Symbol(undefined) => string
// Symbol(Infinity) => string
// Symbol(-Infinity) => string



let someBigInt = BigInt(33)
let stringBigInt = String(someBigInt)
console.log(stringBigInt);    // string   "33n"
console.log(typeof stringBigInt);   // string   "33n"

let someDate = new Date()
let stringDate = String(someDate)
console.log(stringDate);    // string   "Tue Nov 30 2021 22:28:40 GMT+0300 (GMT+03:00)"
console.log(typeof stringDate);   // string   "Tue Nov 30 2021 22:28:40 GMT+0300 (GMT+03:00)"

let someRegExp = new RegExp()
let stringRegExp = String(someRegExp)
console.log(stringRegExp);    // string   "/(?:)/"
console.log(typeof stringRegExp);   // string   "/(?:)/"

let someMath = Math
let stringMath = String(someMath)
console.log(stringMath);    // string   "[object Math]"
console.log(typeof stringMath);   // string   "[object Math]"
// Math => string
// JSON => string
// Error => string
// TypeError => string
// ReferenceError => string
// SyntaxError => string
// RangeError => string
// EvalError => string
// URIError => string
// InternalError => string
// AggregateError => string
// ArrayBuffer => string
// DataView => string
// SharedArrayBuffer => string
// Atomics => string
// DataView => string
// Float32Array => string
// Float64Array => string
// Int8Array => string
// Int16Array => string
// Int32Array => string
// Uint8Array => string
// Uint8ClampedArray => string
// Uint16Array => string
// Uint32Array => string
// BigInt64Array => string
// BigUint64Array => string
// Map => string     
// Set => string
// WeakMap => string
// WeakSet => string
// Promise => string
// Generator => string
// GeneratorFunction => string
// AsyncFunction => string
// Proxy => string
// Reflect => string
// Module => string
// WebAssembly => string
// WebAssembly.Module => string
// WebAssembly.Instance => string
// WebAssembly.Memory => string
// WebAssembly.Table => string
// WebAssembly.CompileError => string
// WebAssembly.LinkError => string
// WebAssembly.RuntimeError => string
// WebAssembly.Memory => string
// WebAssembly.Table => string
// WebAssembly.CompileError => string
// WebAssembly.LinkError => string
// WebAssembly.RuntimeError => string
// WebAssembly.Memory => string
// WebAssembly.Table => string
// WebAssembly.CompileError => string
// WebAssembly.LinkError => string
// WebAssembly.RuntimeError => string
// WebAssembly.Memory => string     




/********************************************** Operations *********************************************/

let  value = 3
let negvalue = -value
console.log(negvalue);    // -3

console.log(3 + 5);    // 8
console.log(3 - 5);    // -2
console.log(3 * 5);    // 15
console.log(3 / 5);    // 0.6
console.log(3 % 5);    // 3
console.log(3 ** 5);    // 243  3^5 = 3*3*3*3*3 = 243
console.log(3 + 5 * 2);    // 13
console.log((3 + 5) * 2);    // 16
console.log(3 + "5");    // 35
console.log(3 - "5");    // -2
console.log(3 * "5");    // 15
console.log(3 / "5");    // 0.6
console.log(3 % "5");    // 3
console.log(3 ** "5");    // 243
console.log(3 + "5" * 2);    // 13  
console.log((3 + "5") * 2);    // 16
console.log(3 + "5" + 2);    // 352 
console.log(3 - "5" + 2);    // 02
console.log(3 * "5" + 2);    // 152
console.log(3 / "5" + 2);    // 2.6
console.log(3 % "5" + 2);    // 5
console.log(3 ** "5" + 2);    // 245
console.log(3 + "5" * "2");    // 13
console.log((3 + "5") * "2");    // 16
console.log(3 + "5" + "2");    // 352
console.log(3 - "5" - "2");    // -4
console.log(3 * "5" * "2");    // 30
console.log(3 / "5" / "2");    // 0.3
console.log(3 % "5" % "2");    // 1
console.log(3 ** "5" ** "2");    // 243
console.log(3 + "5" * "2" + "3");    // 133
console.log((3 + "5") * "2" + "3");    // 163
console.log(3 + "5" + "2" + "3");    // 3523
console.log(3 - "5" - "2" - "3");    // -7
console.log(3 * "5" * "2" * "3");    // 90  
console.log(3 / "5" / "2" / "3");    // 0.1 
console.log(3 % "5" % "2" % "3");    // 1
console.log(3 ** "5" ** "2" ** "3");    // 243  
console.log(3 + "5" * "2" + "3" * "4");    // 133
console.log((3 + "5") * "2" + "3" * "4");    // 163
console.log(3 + "5" + "2" + "3" + "4");    // 35234
console.log(3 - "5" - "2" - "3" - "4");    // -9
console.log(3 * "5" * "2" * "3" * "4");    // 360       
console.log(3 / "5" / "2" / "3" / "4");    // 0.1   
console.log(3 % "5" % "2" % "3" % "4");    // 1
console.log(3 ** "5" ** "2" ** "3" ** "4");    // 243  
console.log(3 + "5" * "2" + "3" * "4" + "5");    // 1335
console.log((3 + "5") * "2" + "3" * "4" + "5");    // 1635
console.log(3 + "5" + "2" + "3" + "4" + "5");    // 352345
console.log(3 - "5" - "2" - "3" - "4" - "5");    // -14
console.log(3 * "5" * "2" * "3" * "4" * "5");    // 1800
console.log(3 / "5" / "2" / "3" / "4" / "5");    // 0.1 
console.log(3 % "5" % "2" % "3" % "4" % "5");    // 1
console.log(3 ** "5" ** "2" ** "3" ** "4" ** "5");    // 243
console.log(3 + "5" * "2" + "3" * "4" + "5" * "6");    // 1335
console.log((3 + "5") * "2" + "3" * "4" + "5" * "6");    // 1635    
console.log(3 + "5" + "2" + "3" + "4" + "5" + "6");    // 3523456
console.log(3 - "5" - "2" - "3" - "4" - "5" - "6");    // -20
console.log(3 * "5" * "2" * "3" * "4" * "5" * "6");    // 5400
console.log(3 / "5" / "2" / "3" / "4" / "5" / "6");    // 0.1
console.log(3 % "5" % "2" % "3" % "4" % "5" % "6");    // 1
console.log(3 ** "5" ** "2" ** "3" ** "4" ** "5" ** "6");    // 243         
console.log(3 + "5" * "2" + "3" * "4" + "5" * "6" + "7");    // 13357
console.log((3 + "5") * "2" + "3" * "4" + "5" * "6" + "7");    // 16357
console.log(3 + "5" + "2" + "3" + "4" + "5" + "6" + "7");    // 35234567    
console.log(3 - "5" - "2" - "3" - "4" - "5" - "6" - "7");    // -27
console.log(3 * "5" * "2" * "3" * "4" * "5" * "6" * "7");    // 12600
console.log(3 / "5" / "2" / "3" / "4" / "5" / "6" / "7");    // 0.1
console.log(3 % "5" % "2" % "3" % "4" % "5" % "6" % "7");    // 1
console.log(3 ** "5" ** "2" ** "3" ** "4" ** "5" ** "6" ** "7");    // 243
console.log(3 + "5" * "2" + "3" * "4" + "5" * "6" + "7" * "8");    // 13357
console.log((3 + "5") * "2" + "3" * "4" + "5" * "6" + "7" * "8");    // 16357
console.log(3 + "5" + "2" + "3" + "4" + "5" + "6" + "7" + "8");    // 352345678
console.log(3 - "5" - "2" - "3" - "4" - "5" - "6" - "7" - "8");    // -36
console.log(3 * "5" * "2" * "3" * "4" * "5" * "6" * "7" * "8");    // 50400
console.log(3 / "5" / "2" / "3" / "4" / "5" / "6" / "7" / "8");    // 0.1
console.log(3 % "5" % "2" % "3" % "4" % "5" % "6" % "7" % "8");    // 1
console.log(3 ** "5" ** "2" ** "3" ** "4" ** "5" ** "6" ** "7" ** "8");    // 243
console.log(3 + "5" * "2" + "3" * "4" + "5" * "6" + "7" * "8" + "9");    // 133579
console.log((3 + "5") * "2" + "3" * "4" + "5" * "6" + "7" * "8" + "9");    // 163579
console.log(3 + "5" + "2" + "3" + "4" + "5" + "6" + "7" + "8" + "9");    // 3523456789
console.log(3 - "5" - "2" - "3" - "4" - "5" - "6" - "7" - "8" - "9");    // -45
console.log(3 * "5" * "2" * "3" * "4" * "5" * "6" * "7" * "8" * "9");    // 453600  


let string1 = "Amit"
let string2 = "Kumar"
let string3 =  string1 + " " + string2
console.log(string3);    // Amit Kumar

console.log(true + true);    // 2
console.log(true + false);    // 1
console.log(false + true);    // 1
console.log(false + false);    // 0
console.log(true + 1);    // 2          
console.log(true + 0);    // 1
console.log(false + 1);    // 1
console.log(false + 0);    // 0 
console.log(1 + true);    // 2
console.log(0 + true);    // 1
console.log(1 + false);    // 1
console.log(0 + false);    // 0 
console.log(1 + 1);    // 2
console.log(1 + 0);    // 1
console.log(+true);    // 1
console.log(+false);    // 0    
console.log(true + "");    // true
console.log(false + "");    // false    
console.log(true + " ");    // true
console.log(false + " ");    // false
console.log(true + "abc");    // trueabc
console.log(false + "abc");    // falseabc
console.log(true + " ");    // true
console.log(false + " ");    // false
console.log(true + "abc");    // trueabc
console.log(false + "abc");    // falseabc  
console.log(true + " ");    // true
console.log(false + " ");    // false
console.log(true + "abc");    // trueabc
console.log(false + "abc");    // falseabc
console.log(true + " ");    // true
console.log(false + " ");    // false
console.log(true + "abc");    // trueabc
console.log(false + "abc");    // falseabc
console.log(true + " ");    // true
console.log(false + " ");    // false
console.log(true + "abc");    // trueabc
console.log(false + "abc");    // falseabc


let num1, num2, num3

num1 = num2 = num3 = 33
console.log(num1);    // 33
console.log(num2);    // 33
console.log(num3);    // 33

num1 = 33
num2 = 44
num3 = 55
console.log(num1);    // 33
console.log(num2);    // 44
console.log(num3);    // 55

let gameCounter = 100
gameCounter++;
console.log(gameCounter);    // 101

let gameCounter1 = 100
gameCounter1--;
console.log(gameCounter1);    // 99

let gameCounter2 = 100
gameCounter2 += 10
console.log(gameCounter2);    // 110

let gameCounter3 = 100
gameCounter3 -= 10
console.log(gameCounter3);    // 90

// prefix increment and decrement
let gameCounter4 = 100
let gameCounter5 = ++gameCounter4
console.log(gameCounter4);    // 101
console.log(gameCounter5);    // 101

let gameCounter6 = 100  
let gameCounter7 = --gameCounter6
console.log(gameCounter6);    // 99
console.log(gameCounter7);    // 99

// postfix increment and decrement
let gameCounter8 = 100
let gameCounter9 = gameCounter8++
console.log(gameCounter8);    // 101
console.log(gameCounter9);    // 100


