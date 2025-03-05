/*
Immediately Invoked Function Expressions (IIFE)
*/

/*
What is an IIFE?
*/
// An IIFE is a function that is executed immediately after it is defined.
// It is a design pattern used to create a local scope and avoid polluting the global scope.

/*
Syntax:
*/
(function () {
    // Function body
})();

/*
Key Points:
- The function is wrapped in parentheses `()` to make it an expression.
- The trailing `()` immediately invokes the function.
*/

/*
Example 1: Named IIFE
*/
(function chai(name) {
    console.log(`DB CONNECTED ONE ${name}`);
})("Raja"); // Output: DB CONNECTED ONE Raja

/*
Explanation:
1. The function `chai` is defined and wrapped in parentheses.
2. The trailing `("Raja")` immediately invokes the function with the argument `"Raja"`.
3. The function logs `DB CONNECTED ONE Raja`.
*/

/*
Key Points:
- The function `chai` is not accessible outside the IIFE.
- The argument `"Raja"` is passed to the function during invocation.
*/

/*
Example 2: Anonymous IIFE (Arrow Function)
*/
((name) => {
    console.log(`DB CONNECTED TWO ${name}`);
})("Amit"); // Output: DB CONNECTED TWO Amit

/*
Explanation:
1. An arrow function is defined and wrapped in parentheses.
2. The trailing `("Amit")` immediately invokes the function with the argument `"Amit"`.
3. The function logs `DB CONNECTED TWO Amit`.
*/

/*
Key Points:
- Arrow functions can also be used in IIFEs.
- The function is anonymous and cannot be referenced later.
*/

/*
Why Use IIFEs?
*/

/*
1. Avoid Polluting the Global Scope
*/
// IIFEs create a local scope, preventing variables from being added to the global scope.

/*
Example: Avoiding Global Scope Pollution
*/
(function () {
    const localVar = "I am local";
    console.log(localVar); // Output: I am local
})();

console.log(localVar); // Error: localVar is not defined

/*
Key Points:
- `localVar` is only accessible inside the IIFE.
- It does not pollute the global scope.
*/

/*
2. Encapsulation
*/
// IIFEs can be used to encapsulate code and create private variables.

/*
Example: Encapsulation with IIFE
*/
const counter = (function () {
    let count = 0; // Private variable
    return function () {
        count++;
        return count;
    };
})();

console.log(counter()); // Output: 1
console.log(counter()); // Output: 2
console.log(counter()); // Output: 3

/*
Key Points:
- `count` is a private variable accessible only inside the IIFE.
- The returned function forms a closure and retains access to `count`.
*/

/*
3. Module Pattern
*/
// IIFEs are often used to create modules with private and public members.

/*
Example: Module Pattern
*/
const module = (function () {
    const privateVar = "I am private";

    function privateMethod() {
        console.log(privateVar);
    }

    return {
        publicMethod: function () {
            privateMethod();
        }
    };
})();

module.publicMethod(); // Output: I am private

/*
Key Points:
- `privateVar` and `privateMethod` are private members.
- `publicMethod` is a public member that can access private members.
*/

/*
Common Mistakes with IIFEs
*/

/*
1. Missing Parentheses
*/
// Forgetting to wrap the function in parentheses can cause syntax errors.

/*
Example: Missing Parentheses
*/
// function incorrectIIFE() {
//     console.log("This is not an IIFE");
// }(); 
// SyntaxError: Unexpected token ')'

/*
Fix: Wrap the function in parentheses.
*/
(function correctIIFE() {
    console.log("This is an IIFE");
})(); // Output: This is an IIFE

/*
Key Points:
- Always wrap the function in parentheses to make it an expression.
*/

/*
2. Semicolon Before IIFE
*/
// If an IIFE follows a statement without a semicolon, it can cause errors.

/*
Example: Missing Semicolon
*/
const x = 5
(function () {
    console.log("IIFE");
})(); // SyntaxError: Unexpected token '('

/*
Fix: Add a semicolon before the IIFE.
*/
const y = 5;
(function () {
    console.log("IIFE");
})(); // Output: IIFE

/*
Key Points:
- Always add a semicolon before an IIFE if it follows another statement.
*/

/*
Summary of Key Concepts
*/
// 1. IIFE:
//    - A function that is executed immediately after it is defined.
//    - Syntax: `(function () { ... })();`

// 2. Use Cases:
//    - Avoid polluting the global scope.
//    - Encapsulation and private variables.
//    - Module pattern.

// 3. Common Mistakes:
//    - Missing parentheses around the function.
//    - Missing semicolon before the IIFE.

/*
Best Practices
*/
// 1. Use IIFEs to create local scopes and avoid global scope pollution.
// 2. Use IIFEs for encapsulation and creating private variables.
// 3. Always wrap the function in parentheses and add a semicolon before the IIFE if needed.



/*
Example 1: Named IIFE
*/
(function chai(name) {
    console.log(`DB CONNECTED ONE ${name}`);
})("Raja"); // Output: DB CONNECTED ONE Raja

/*
Example 2: Anonymous IIFE (Arrow Function)
*/
((name) => {
    console.log(`DB CONNECTED TWO ${name}`);
})("Amit"); // Output: DB CONNECTED TWO Amit

/*
Example: Avoiding Global Scope Pollution
*/
(function () {
    const localVar = "I am local";
    console.log(localVar); // Output: I am local
})();

console.log(localVar); // Error: localVar is not defined

/*
Example: Encapsulation with IIFE
*/
const counter1 = (function () {
    let count = 0; // Private variable
    return function () {
        count++;
        return count;
    };
})();

console.log(counter1()); // Output: 1
console.log(counter1()); // Output: 2
console.log(counter1()); // Output: 3

/*
Example: Module Pattern
*/
const module1 = (function () {
    const privateVar = "I am private";

    function privateMethod() {
        console.log(privateVar);
    }

    return {
        publicMethod: function () {
            privateMethod();
        }
    };
})();

module1.publicMethod(); // Output: I am private