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
