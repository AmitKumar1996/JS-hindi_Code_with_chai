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