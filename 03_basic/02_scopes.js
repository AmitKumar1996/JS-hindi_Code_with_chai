/*
Block Scope vs Global Scope
*/

/*
Global Scope
*/
// Variables declared outside of any function or block have global scope.
// They can be accessed from anywhere in the code.

/*
Example: Global Scope
*/
let a = 800; // Global variable
console.log(a); // Output: 800

/*
Key Points:
- Global variables are accessible throughout the entire program.
- Avoid using global variables excessively to prevent naming conflicts and bugs.
*/

/*
Block Scope
*/
// Variables declared inside a block (e.g., inside `{}`) have block scope.
// They are only accessible within that block.

/*
Example: Block Scope
*/
if (true) {
    let a = 10; // Block-scoped variable
    const b = 20; // Block-scoped variable
    var c = 30; // Not block-scoped (function-scoped or global)

    console.log("INNER:", a); // Output: INNER: 10
}

/*
Key Points:
- `let` and `const` are block-scoped.
- Variables declared with `let` and `const` are only accessible within the block they are defined in.
*/

/*
var vs let/const
*/
// `var` is function-scoped or globally scoped, not block-scoped.
// `let` and `const` are block-scoped.

/*
Example: var Behavior
*/
if (true) {
    var c = 30; // var is not block-scoped
}
console.log(c); // Output: 30 (accessible outside the block)

/*
Key Points:
- `var` is not block-scoped and can lead to unintended behavior.
- Prefer `let` and `const` for block-scoped variables.
*/

/*
Accessing Variables Outside Their Scope
*/
// Attempting to access block-scoped variables outside their scope results in an error.

/*
Example: Accessing Block-Scoped Variables
*/
if (true) {
    const b = 20; // Block-scoped variable
}
console.log(b); // Error: b is not defined

/*
Key Points:
- Block-scoped variables (`let` and `const`) cannot be accessed outside their block.
- This prevents accidental variable access and improves code reliability.
*/

/*
Summary of Key Concepts
*/
// 1. Global Scope:
//    - Variables declared outside any block or function.
//    - Accessible throughout the entire program.

// 2. Block Scope:
//    - Variables declared inside a block (`{}`).
//    - Only accessible within that block.

// 3. `var` vs `let`/`const`:
//    - `var` is function-scoped or globally scoped.
//    - `let` and `const` are block-scoped.

// 4. Best Practices:
//    - Use `let` and `const` for block-scoped variables.
//    - Avoid using `var` to prevent unintended behavior.

// Global variable
let ab = 800;

if (true) {
    // Block-scoped variables
    let ab = 10;
    const b = 20;
    var c = 30; // Not block-scoped

    console.log("INNER:", a); // Output: INNER: 10
}

console.log(ab); // Output: 800 (global variable)
console.log(b); // Error: b is not defined (block-scoped)
console.log(c); // Output: 30 (var is not block-scoped)



/*
Where Errors Will Happen and Why?
*/

/*
Example 1: Nested Functions and Scope
*/
function one() {
    const username = "Amit kumar"; // Outer function variable

    function two() {
        const website = "youtub"; // Inner function variable
        console.log(username); // Accessing outer function variable (works)
    }

    console.log(website); // Error: website is not defined
    two(); // Calling the inner function
}

one(); // Calling the outer function

/*
Key Points:
- `username` is accessible inside `two()` because of lexical scoping.
- `website` is not accessible outside `two()` because it is block-scoped to `two()`.
- Error: `website` is not defined in the scope of `one()`.
*/

/*
Example 2: Nested if Blocks and Scope
*/
if (true) {
    const username = "Amit"; // Outer block variable

    if (username === "Amit") {
        const website = "youtub"; // Inner block variable
        console.log(username + website); // Output: Amityoutub
    }

    console.log(website); // Error: website is not defined
}

console.log(username); // Error: username is not defined

/*
Key Points:
- `username` is accessible inside the inner `if` block because of block scoping.
- `website` is not accessible outside the inner `if` block because it is block-scoped.
- Error: `website` is not defined in the outer `if` block.
- Error: `username` is not defined outside the outer `if` block.
*/

/*
Example 3: Function Declarations vs Function Expressions
*/
function addone(value) {
    return value + 1; // Corrected variable name from `num` to `value`
}

addone(5); // Works fine

console.log(addTwo(5)); // Error: addTwo is not defined (hoisting issue)

const addTwo = function (num) {
    return num + 2; // Corrected variable name from `nium` to `num`
};

console.log(addTwo(5)); // Output: 7 (works after declaration)

/*
Key Points:
- `addone` is a function declaration and is hoisted, so it can be called before its definition.
- `addTwo` is a function expression and is not hoisted, so it cannot be called before its definition.
- Error: `addTwo` is not defined when called before its declaration.
- Typo: `nium` should be `num` in the `addTwo` function.
*/

/*
Summary of Key Concepts
*/
// 1. Scope:
//    - Variables declared with `const` and `let` are block-scoped.
//    - Inner blocks can access variables from outer blocks, but not vice versa.

// 2. Function Declarations vs Function Expressions:
//    - Function declarations are hoisted and can be called before their definition.
//    - Function expressions are not hoisted and cannot be called before their definition.

// 3. Common Errors:
//    - Accessing block-scoped variables outside their scope.
//    - Calling function expressions before their declaration.
//    - Typos in variable names.

/*
Best Practices
*/
// 1. Use `const` and `let` for block-scoped variables.
// 2. Avoid accessing variables outside their scope.
// 3. Declare function expressions before calling them.
// 4. Double-check variable names for typos.


/*
Closures in JavaScript
*/

/*
What is a Closure?
*/
// A closure is a function that remembers the variables from its outer (enclosing) scope
// even after the outer function has finished executing.

/*
Key Points:
- Closures allow functions to "remember" their lexical scope.
- They are created when a function is defined inside another function and returned.
- The inner function retains access to the outer function's variables.
*/

/*
Example of a Closure
*/
function outerFunction(outerVariable) {
    return function innerFunction(innerVariable) {
        console.log(`Outer: ${outerVariable}, Inner: ${innerVariable}`);
    };
}

const closureExample = outerFunction("Hello");
closureExample("World"); // Output: Outer: Hello, Inner: World

/*
Explanation:
1. `outerFunction` takes `outerVariable` as an argument.
2. It returns `innerFunction`, which remembers `outerVariable`.
3. When `closureExample` is called with "World", it still has access to "Hello" from `outerFunction`.
*/

/*
Key Points:
- The inner function (`innerFunction`) forms a closure.
- It retains access to `outerVariable` even after `outerFunction` has finished executing.
*/

/*
Practical Use Cases of Closures
*/

/*
1. Data Encapsulation
*/
// Closures can be used to create private variables.

/*
Example: Data Encapsulation
*/
function createCounter() {
    let count = 0; // Private variable
    return function () {
        count++;
        return count;
    };
}

const counter = createCounter();
console.log(counter()); // Output: 1
console.log(counter()); // Output: 2
console.log(counter()); // Output: 3

/*
Key Points:
- `count` is a private variable that cannot be accessed directly.
- The inner function forms a closure and retains access to `count`.
*/

/*
2. Callback Functions
*/
// Closures are often used in callback functions to maintain state.

/*
Example: Callback Function
*/
function delayedGreeting(name) {
    setTimeout(function () {
        console.log(`Hello, ${name}!`);
    }, 1000);
}

delayedGreeting("Amit"); // Output after 1 second: Hello, Amit!

/*
Key Points:
- The callback function forms a closure and remembers the `name` variable.
*/

/*
3. Function Factories
*/
// Closures can be used to create functions with specific behavior.

/*
Example: Function Factory
*/
function createMultiplier(multiplier) {
    return function (number) {
        return number * multiplier;
    };
}

const double = createMultiplier(2);
const triple = createMultiplier(3);

console.log(double(5)); // Output: 10
console.log(triple(5)); // Output: 15

/*
Key Points:
- `createMultiplier` returns a function that remembers the `multiplier` value.
- The returned function can be reused with different inputs.
*/

/*
Common Mistakes with Closures
*/

/*
1. Accidental Closures in Loops
*/
// Closures in loops can lead to unexpected behavior if not handled properly.

/*
Example: Accidental Closure in Loop
*/
for (var i = 1; i <= 3; i++) {
    setTimeout(function () {
        console.log(i); // Output: 4, 4, 4
    }, 1000);
}

/*
Explanation:
- `var` is function-scoped, so all iterations share the same `i`.
- By the time the timeout executes, `i` has already reached 4.

/*
Fix: Use `let` (block-scoped) instead of `var`.
*/
for (let i = 1; i <= 3; i++) {
    setTimeout(function () {
        console.log(i); // Output: 1, 2, 3
    }, 1000);
}

/*
Key Points:
- Use `let` to create a new block scope for each iteration.
*/

/*
2. Memory Leaks
*/
// Closures can cause memory leaks if they retain references to large objects unnecessarily.

/*
Example: Memory Leak
*/
function createHeavyClosure() {
    const largeObject = new Array(1000000).fill("data");
    return function () {
        console.log(largeObject[0]);
    };
}

const heavyClosure = createHeavyClosure();
// `largeObject` is retained in memory even if it's no longer needed.

/*
Key Points:
- Avoid retaining unnecessary references in closures.
*/

/*
Summary of Key Concepts
*/
// 1. Closures:
//    - Functions that remember their lexical scope.
//    - Created when a function is defined inside another function and returned.

// 2. Use Cases:
//    - Data encapsulation (private variables).
//    - Callback functions.
//    - Function factories.

// 3. Common Mistakes:
//    - Accidental closures in loops (use `let` instead of `var`).
//    - Memory leaks (avoid retaining unnecessary references).

/*
Best Practices
*/
// 1. Use closures for encapsulation and maintaining state.
// 2. Be cautious with closures in loops (use `let`).
// 3. Avoid memory leaks by not retaining unnecessary references.





/*
Example of a Closure
*/
function outerFunction(outerVariable) {
    return function innerFunction(innerVariable) {
        console.log(`Outer: ${outerVariable}, Inner: ${innerVariable}`);
    };
}

const closureExample1 = outerFunction("Hello");
closureExample("World"); // Output: Outer: Hello, Inner: World

/*
Practical Use Cases
*/

/*
1. Data Encapsulation
*/
function createCounter() {
    let count = 0; // Private variable
    return function () {
        count++;
        return count;
    };
}

const counter1 = createCounter();
console.log(counter()); // Output: 1
console.log(counter()); // Output: 2
console.log(counter()); // Output: 3

/*
2. Callback Functions
*/
function delayedGreeting(name) {
    setTimeout(function () {
        console.log(`Hello, ${name}!`);
    }, 1000);
}

delayedGreeting("Amit"); // Output after 1 second: Hello, Amit!

/*
3. Function Factories
*/
function createMultiplier(multiplier) {
    return function (number) {
        return number * multiplier;
    };
}

const double1 = createMultiplier(2);
const triple1 = createMultiplier(3);

console.log(double(5)); // Output: 10
console.log(triple(5)); // Output: 15

/*
Common Mistakes
*/

/*
1. Accidental Closures in Loops
*/
for (var i = 1; i <= 3; i++) {
    setTimeout(function () {
        console.log(i); // Output: 4, 4, 4
    }, 1000);
}

// Fix: Use `let`
for (let i = 1; i <= 3; i++) {
    setTimeout(function () {
        console.log(i); // Output: 1, 2, 3
    }, 1000);
}

/*
2. Memory Leaks
*/
function createHeavyClosure() {
    const largeObject = new Array(1000000).fill("data");
    return function () {
        console.log(largeObject[0]);
    };
}

const heavyClosure1 = createHeavyClosure();
// `largeObject` is retained in memory even if it's no longer needed.