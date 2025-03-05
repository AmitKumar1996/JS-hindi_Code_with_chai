/*
Understanding `this`, Function Declarations, and Arrow Functions
*/

/*
1. The `this` Keyword in JavaScript
*/
// `this` refers to the context in which a function is executed.
// Its value depends on how the function is called.

/*
Example: `this` in Object Methods
*/
const user = {
    username: "Amit",
    price: 999,
    welcomeMessage: function () {
        console.log(`${this.username}, welcome to the website`); // `this` refers to the `user` object
        console.log(this); // Logs the `user` object
    }
};

user.welcomeMessage(); // Output: Amit, welcome to the website
user.username = "sam"; // Modify the `username` property
user.welcomeMessage(); // Output: sam, welcome to the website

/*
Key Points:
- In object methods, `this` refers to the object that owns the method.
- When `user.welcomeMessage()` is called, `this` refers to `user`.
*/

/*
Example: `this` in Global Scope
*/
console.log(this); // Output: {} (In Node.js, `this` refers to an empty object in the global scope)
// In browsers, `this` refers to the `window` object.

/*
Key Points:
- In the global scope, `this` refers to the global object (`window` in browsers, `global` in Node.js).
*/

/*
Example: `this` in Regular Functions
*/
let username = "Amit";

function chai() {
    console.log(this); // `this` refers to the global object (or undefined in strict mode)
    console.log(this.username); // Output: undefined (global object does not have `username`)
}

chai();

/*
Key Points:
- In regular functions, `this` refers to the global object (or `undefined` in strict mode).
- Regular functions do not have their own `this` context.
*/

/*
2. Types of Function Declarations
*/

/*
a. Regular Function Declaration
*/
function regularFunction() {
    console.log(this); // `this` refers to the global object (or undefined in strict mode)
}

regularFunction();

/*
b. Function Expression
*/
const chai1 = function () {
    let username = "Amitk";
    console.log(this.username); // Output: undefined (global object does not have `username`)
};

chai1();

/*
c. Arrow Function
*/
const chai2 = () => {
    let username = "Amitk";
    console.log(this.username); // Output: undefined (arrow functions do not have their own `this`)
};

chai2();

/*
Key Points:
- Regular functions and function expressions have their own `this` context.
- Arrow functions do not have their own `this`; they inherit `this` from the surrounding scope.
*/

/*
3. Arrow Functions
*/
// Arrow functions provide a concise syntax for writing functions.
// They do not have their own `this` context.

/*
Example: Arrow Function with Explicit Return
*/
const addTwo = (num1, num2) => {
    return num1 + num2; // Explicit return
};

console.log(addTwo(3, 4)); // Output: 7

/*
Example: Arrow Function with Implicit Return
*/
const addTwo_IMP = (num1, num2) => num1 + num2; // Implicit return (no curly braces)

console.log(addTwo_IMP(3, 5)); // Output: 8

/*
Example: Arrow Function with Parentheses for Implicit Return
*/
const addTwo_IMP2 = (num1, num2) => (num1 + num2); // Implicit return with parentheses

console.log(addTwo_IMP2(3, 5)); // Output: 8

/*
Example: Arrow Function Returning an Object
*/
const addTwo_IMP3 = (num1, num2) => ({ username: "Amit Kumar" }); // Implicit return of an object

console.log(addTwo_IMP3(3, 5)); // Output: { username: "Amit Kumar" }

/*
Key Points:
- Arrow functions with a single expression can use implicit return (no `return` keyword).
- Use parentheses `()` to return an object implicitly.
*/

/*
4. Explicit vs Implicit Return
*/
// Explicit return: Use the `return` keyword.
// Implicit return: Omit the `return` keyword (only for single expressions).

/*
Example: Explicit Return
*/
const explicitReturn = (a, b) => {
    return a + b; // Explicit return
};

/*
Example: Implicit Return
*/
const implicitReturn = (a, b) => a + b; // Implicit return

/*
Key Points:
- Use explicit return for multi-line functions.
- Use implicit return for concise, single-expression functions.
*/

/*
5. Additional Examples for Better Understanding
*/

/*
Example: `this` in Event Listeners
*/
const button = document.querySelector("button");
button.addEventListener("click", function () {
    console.log(this); // `this` refers to the button element
});

/*
Example: `this` in Arrow Functions (Event Listeners)
*/
button.addEventListener("click", () => {
    console.log(this); // `this` refers to the surrounding scope (global object or undefined)
});

/*
Key Points:
- In event listeners, regular functions use `this` to refer to the element.
- Arrow functions do not bind `this` to the element.
*/

/*
Example: Arrow Functions in Object Methods
*/
const obj = {
    name: "Amit",
    greet: () => {
        console.log(`Hello, ${this.name}`); // Output: Hello, undefined (arrow function does not bind `this`)
    }
};

obj.greet();

/*
Key Points:
- Avoid using arrow functions for object methods if you need to access `this`.
*/

/*
Summary of Key Concepts
*/
// 1. `this` Keyword:
//    - Refers to the context in which a function is executed.
//    - In object methods, `this` refers to the object.
//    - In regular functions, `this` refers to the global object (or undefined in strict mode).
//    - Arrow functions do not have their own `this`; they inherit `this` from the surrounding scope.

// 2. Function Declarations:
//    - Regular functions and function expressions have their own `this` context.
//    - Arrow functions do not have their own `this`.

// 3. Arrow Functions:
//    - Concise syntax for writing functions.
//    - Implicit return for single expressions.
//    - Use parentheses `()` to return objects implicitly.

// 4. Best Practices:
//    - Use regular functions for object methods.
//    - Use arrow functions for concise, single-expression functions.
//    - Avoid using arrow functions for object methods if you need to access `this`.





/*
Example: `this` in Object Methods
*/
const user = {
    username: "Amit",
    price: 999,
    welcomeMessage: function () {
        console.log(`${this.username}, welcome to the website`);
        console.log(this);
    }
};

user.welcomeMessage(); // Output: Amit, welcome to the website
user.username = "sam";
user.welcomeMessage(); // Output: sam, welcome to the website

/*
Example: `this` in Regular Functions
*/
let username5 = "Amit";

function chai() {
    console.log(this); // `this` refers to the global object (or undefined in strict mode)
    console.log(this.username); // Output: undefined
}

chai();

/*
Example: Arrow Function with Implicit Return
*/
const addTwo_IMP4 = (num1, num2) => num1 + num2;

console.log(addTwo_IMP4(3, 5)); // Output: 8

/*
Example: Arrow Function Returning an Object
*/
const addTwo_IMP5 = (num1, num2) => ({ username: "Amit Kumar" });

console.log(addTwo_IMP5(3, 5)); // Output: { username: "Amit Kumar" }