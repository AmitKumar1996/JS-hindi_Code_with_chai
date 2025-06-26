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

const myArr0 = [0, 1, 2, 3, 4, 5];
console.log(myArr0); // Output: [0, 1, 2, 3, 4, 5]

// Important Array Methods:
myArr0.push(6);      // Adds element at the end
console.log(myArr0); // Output: [0, 1, 2, 3, 4, 5, 6]
myArr0.pop();        // Removes last element
console.log(myArr0); // Output: [0, 1, 2, 3, 4, 5]
myArr0.shift();      // Removes first element
console.log(myArr0); // Output: [1, 2, 3, 4, 5]
myArr0.unshift(0);   // Adds element at the beginning
console.log(myArr0); // Output: [0, 1, 2, 3, 4, 5]

// Original array for reference
const original = [0, 1, 2, 3, 4, 5];

// 1️⃣ Remove 1 element at index 2
const arr1 = [...original];
arr1.splice(2, 1);
console.log("1. Remove 1 at index 2:", arr1); // [0, 1, 3, 4, 5]

// 2️⃣ Remove all elements from index 2
const arr2 = [...original];
arr2.splice(2);
console.log("2. Remove all from index 2:", arr2); // [0, 1]

// 3️⃣ Remove 2 elements from index 1
const arr3 = [...original];
arr3.splice(1, 2);
console.log("3. Remove 2 at index 1:", arr3); // [0, 3, 4, 5]

// 4️⃣ Insert 99, 100 at index 2 (no deletion)
const arr4 = [...original];
arr4.splice(2, 0, 99, 100);
console.log("4. Insert 99,100 at index 2:", arr4); // [0, 1, 99, 100, 2, 3, 4, 5]

// 5️⃣ Replace 2 elements at index 2 with 99, 100
const arr5 = [...original];
arr5.splice(2, 2, 99, 100);
console.log("5. Replace 2 items with 99,100:", arr5); // [0, 1, 99, 100, 4, 5]

// 6️⃣ Remove all elements (clear array)
const arr6 = [...original];
arr6.splice(0);
console.log("6. Remove all elements:", arr6); // []

// 7️⃣ Remove last 2 elements using negative index
const arr7 = [...original];
arr7.splice(-2);
console.log("7. Remove last 2 elements:", arr7); // [0, 1, 2, 3]
// 8️⃣ Remove first 2 elements using negative index
const arr8 = [...original];
arr8.splice(0, 2);
console.log("8. Remove first 2 elements:", arr8); // [2, 3, 4, 5]

console.log(myArr0); // Output: [0, 1, 3, 4, 5]
console.log(myArr0); // Modified array
//=======================================================================

// JavaScript Array Methods  
// Arrays in JavaScript are dynamic and have built-in methods for manipulation.  

const myArr = [0, 1, 2, 3, 4, 5];
console.log(myArr); // Output: [0, 1, 2, 3, 4, 5]

// 1. push() - Adds an element at the end  
myArr.push(6);  
console.log(myArr); // Output: [0, 1, 2, 3, 4, 5, 6]

// 2. pop() - Removes the last element  
myArr.pop();  
console.log(myArr); // Output: [0, 1, 2, 3, 4, 5]

// 3. shift() - Removes the first element  
myArr.shift();  
console.log(myArr); // Output: [1, 2, 3, 4, 5]

// 4. unshift() - Adds an element at the beginning  
myArr.unshift(0);  
console.log(myArr); // Output: [0, 1, 2, 3, 4, 5]

// 5. splice() - Removes/Replaces/Adds elements  
// Removes 1 element at index 2  
myArr.splice(2, 1);  
console.log(myArr); // Output: [0, 1, 3, 4, 5]

// Adds elements at index 2  
myArr.splice(2, 0, 2);  
console.log(myArr); // Output: [0, 1, 2, 3, 4, 5]

// Replaces element at index 2  
myArr.splice(2, 1, 9);  
console.log(myArr); // Output: [0, 1, 9, 3, 4, 5]

// 6. slice() - Returns a portion of an array  
const slicedArr = myArr.slice(1, 4);  
console.log(slicedArr); // Output: [1, 9, 3] (from index 1 to 3, excluding 4)

// 7. concat() - Merges arrays  
const newArr = myArr.concat([6, 7, 8]);  
console.log(newArr); // Output: [0, 1, 9, 3, 4, 5, 6, 7, 8]

// 8. indexOf() - Finds the index of an element  
console.log(myArr.indexOf(3)); // Output: 3

// 9. includes() - Checks if an element exists  
console.log(myArr.includes(4)); // Output: true
console.log(myArr.includes(10)); // Output: false

// 10. forEach() - Iterates over elements  
myArr.forEach(num => console.log(num * 2)); // Output: 0 2 18 6 8 10 (prints doubled values)

// 11. map() - Creates a new array with transformed elements  
const doubledArr = myArr.map(num => num * 2);  
console.log(doubledArr); // Output: [0, 2, 18, 6, 8, 10]

// 12. filter() - Returns a new array with elements that match a condition  
const evenNumbers = myArr.filter(num => num % 2 === 0);  
console.log(evenNumbers); // Output: [0, 4]

// 13. reduce() - Reduces array to a single value  
const sum0 = myArr.reduce((acc, num) => acc + num, 0);  
console.log(sum0); // Output: 22

// 14. find() - Finds the first element matching a condition  
const firstEven = myArr.find(num => num % 2 === 0);  
console.log(firstEven); // Output: 0

// 15. findIndex() - Finds the index of the first element matching a condition  
const firstEvenIndex = myArr.findIndex(num => num % 2 === 0);  
console.log(firstEvenIndex); // Output: 0

// 16. every() - Checks if all elements pass a test  
console.log(myArr.every(num => num >= 0)); // Output: true

// 17. some() - Checks if at least one element passes a test  
console.log(myArr.some(num => num > 4)); // Output: true

// 18. reverse() - Reverses the array in place  
myArr.reverse();  
console.log(myArr); // Output: [5, 4, 3, 9, 1, 0]

// 19. sort() - Sorts elements (default as strings)  
myArr.sort();  
console.log(myArr); // Output: [0, 1, 3, 4, 5, 9] (sorted as numbers)

// Sorting numerically  
myArr.sort((a, b) => a - b);  
console.log(myArr); // Output: [0, 1, 3, 4, 5, 9]

// 20. join() - Converts an array into a string  
const joinedStr = myArr.join('-');  
console.log(joinedStr); // Output: "0-1-3-4-5-9"

// 21. split() (not an array method, but commonly used with join())  
const splitArr = joinedStr.split('-');  
console.log(splitArr); // Output: ["0", "1", "3", "4", "5", "9"]

// 22. fill() - Fills elements with a value  
myArr.fill(7, 2, 4);  
console.log(myArr); // Output: [0, 1, 7, 7, 5, 9] (fills index 2 to 3 with 7)

// 23. from() - Creates an array from an iterable  
const str = "Hello";  
const charArr = Array.from(str);  
console.log(charArr); // Output: ["H", "e", "l", "l", "o"]

// 24. isArray() - Checks if a value is an array  
console.log(Array.isArray(myArr)); // Output: true
console.log(Array.isArray({})); // Output: false

// 25. flat() - Flattens nested arrays  
const nestedArr2 = [1, [2, [3, 4]], 5];  
console.log(nestedArr2.flat()); // Output: [1, 2, [3, 4], 5]  
console.log(nestedArr2.flat(2)); // Output: [1, 2, 3, 4, 5] (fully flattened)

// 26. flatMap() - Maps and flattens an array  
const flatMappedArr = myArr.flatMap(num => [num, num * 2]);  
console.log(flatMappedArr); // Output: [0, 0, 1, 2, 7, 14, 7, 14, 5, 10, 9, 18]


//=====================================================================



// JavaScript Array join() Method  
// The join() method creates and returns a new string by concatenating all elements  
// in an array, separated by a specified separator (default is a comma `,`).

const myArray = ["Hello", "World", "JavaScript"];
console.log(myArray.join());  
// Output: "Hello,World,JavaScript" (default separator is `,`)

// 1. Using a space separator  
console.log(myArray.join(" "));  
// Output: "Hello World JavaScript"

// 2. Using a hyphen separator  
console.log(myArray.join("-"));  
// Output: "Hello-World-JavaScript"

// 3. Using an empty string (concatenates without any separator)  
console.log(myArray.join(""));  
// Output: "HelloWorldJavaScript"

// 4. Using a custom separator like `|`  
console.log(myArray.join("|"));  
// Output: "Hello|World|JavaScript"

// 5. Using emojis or special characters as a separator  
console.log(myArray.join("🔥"));  
// Output: "Hello🔥World🔥JavaScript"

// 6. Joining an array of numbers  
const numArray = [1, 2, 3, 4, 5];  
console.log(numArray.join("-"));  
// Output: "1-2-3-4-5"

// 7. Joining an array with `null` and `undefined` values  
const mixedArray = [1, null, 2, undefined, 3];  
console.log(mixedArray.join("-"));  
// Output: "1--2--3" (null and undefined are treated as empty strings)

// 8. Joining an array with boolean values  
const boolArray = [true, false, true];  
console.log(boolArray.join(" & "));  
// Output: "true & false & true"

// 9. Joining an array with objects (objects convert to `[object Object]`)  
const objArray = [{ a: 1 }, { b: 2 }, { c: 3 }];  
console.log(objArray.join(", "));  
// Output: "[object Object], [object Object], [object Object]"

// 10. Joining a nested array (nested arrays do not get flattened)  
const nestedArray = [[1, 2], [3, 4], [5, 6]];  
console.log(nestedArray.join("-"));  
// Output: "1,2-3,4-5,6"

// 11. Joining an empty array (returns an empty string)  
const emptyArray = [];  
console.log(emptyArray.join("-"));  
// Output: "" (empty string)

// 12. Using join() to convert an array to a CSV (Comma-Separated Values) format  
const csvArray = ["Name", "Age", "City"];  
console.log(csvArray.join(","));  
// Output: "Name,Age,City"

// 13. Creating a readable sentence from an array  
const sentenceArray = ["JavaScript", "is", "awesome"];  
console.log(sentenceArray.join(" ") + "!");  
// Output: "JavaScript is awesome!"

//======================================================================





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


/****************************************************************************/

/*
JavaScript Prototypes and Prototype Chaining
*/

/*
1. Understanding `prototype` in JavaScript
- In JavaScript, every function (except arrow functions) has a special property called `prototype`.
- The `prototype` property is an object that contains properties and methods shared by all instances created by that function (when used as a constructor).
- Objects created via a constructor function or class inherit properties and methods from the constructor’s prototype.
*/

// Example of `prototype` Property
function Person(name) {
    this.name = name;
}

Person.prototype.greet = function() {
    console.log("Hello, my name is " + this.name);
};

const person1 = new Person("Amit");
const person2 = new Person("Kumar");

person1.greet(); // Hello, my name is Amit
person2.greet(); // Hello, my name is Kumar

console.log(person1.__proto__ === Person.prototype); // true
console.log(person2.__proto__ === Person.prototype); // true

/*
2. Prototype Chaining
- JavaScript uses prototype chaining to look up properties and methods.
- If a property/method is not found on an object, JavaScript looks for it in the object's prototype, then in its prototype’s prototype, and so on, until reaching null.
*/

// Example of Prototype Chain
console.log(person1.toString()); // [object Object]

/*
- `person1` does not have a `toString()` method.
- JavaScript looks in `Person.prototype` → Not found.
- Then it looks in `Object.prototype` (which `Person.prototype` inherits from) → Found!
*/

/*
3. Changing the `prototype` of an Object
- You can manually change an object’s prototype using `Object.setPrototypeOf()`.
*/

// Example: Changing Prototype
const animal = {
    makeSound: function() {
        console.log("Animal sound");
    }
};

const dog = {
    bark: function() {
        console.log("Woof!");
    }
};

// Change the prototype of dog to animal
Object.setPrototypeOf(dog, animal);

dog.bark();      // Woof!
dog.makeSound(); // Animal sound (inherited from animal)

/*
Alternative Way: `__proto__`
*/
const cat = {
    meow: function() {
        console.log("Meow!");
    }
};

cat.__proto__ = animal;  // Changing prototype

cat.makeSound(); // Animal sound

/*
Note: `__proto__` is deprecated and not recommended. Use `Object.setPrototypeOf()` instead.
*/

/*
4. Overriding Prototype Methods
- Child objects can override inherited methods.
*/

// Example: Overriding a Method
Person.prototype.greet = function() {
    console.log("Hello from prototype!");
};

const person3 = new Person("John");

// Override greet for person3
person3.greet = function() {
    console.log("Hi, I'm John!");
};

person3.greet(); // Hi, I'm John! (own method)
delete person3.greet; // Remove override
person3.greet(); // Hello from prototype! (fallback to prototype)

/*
5. `Array(0)` and Prototypes
Understanding `Array(0)`
*/

let arr = new Array(0);
console.log(arr); // []
console.log(arr.length); // 0

/*
- `Array(0)` creates an empty array.
- Since arrays are objects, they inherit methods from `Array.prototype`.
*/

// Example: Checking Prototype of an Array
console.log(arr.__proto__ === Array.prototype); // true
console.log(Array.prototype.__proto__ === Object.prototype); // true
console.log(Object.prototype.__proto__); // null

/*
- Arrays inherit from `Array.prototype`.
- `Array.prototype` inherits from `Object.prototype`.
- `Object.prototype` is the top of the chain.
*/

/*
6. Prototypal Inheritance with `Object.create()`
You can create objects with a specified prototype using `Object.create()`.
*/

// Example: Inheriting from a Prototype
const car = {
    drive: function() {
        console.log("Driving...");
    }
};

const tesla = Object.create(car);
tesla.autoPilot = function() {
    console.log("Self-driving mode activated!");
};

tesla.drive();     // Driving... (inherited from car)
tesla.autoPilot(); // Self-driving mode activated!

/*
- `tesla` inherits from `car`, gaining access to `drive()`.
- It also defines `autoPilot()`, which `car` does not have.
*/

/*
Summary
1. `prototype` is an object that stores shared properties and methods.
2. Objects inherit from their prototype via prototype chaining.
3. Prototypes can be changed using `Object.setPrototypeOf()` or `Object.create()`.
4. Inherited methods can be overridden in child objects.
5. Arrays inherit from `Array.prototype`, which inherits from `Object.prototype`.
6. Use `Object.create()` to create objects with a custom prototype.
*/


