/*
What is Function Definition and Execution?
*/

/*
Function Definition
*/
// A function is a block of reusable code that performs a specific task.
// It is defined using the `function` keyword, followed by a name, parameters, and a body.

/*
Example: Simple Function
*/
function MyFunction() {
    console.log("A");
    console.log("M");
    console.log("I");
    console.log("T");
}

/*
Key Points:
- Use the `function` keyword to define a function.
- Parameters act as placeholders for inputs.
*/

/*
Function Execution
*/
// A function is executed (or called) by using its name followed by parentheses `()`.
// If the function has parameters, arguments are passed inside the parentheses.

/*
Example: Executing a Function
*/
MyFunction(); // Output: A M I T (each on a new line)

/*
Key Points:
- Call the function using its name followed by parentheses.
- Pass arguments to the function if it has parameters.
*/

/*
Function with Parameters
*/
// Functions can accept parameters (inputs) to perform operations.

/*
Example: Function with Parameters
*/
function addTwoNumbers(number1, number2) {
    console.log(number1 + number2);
}

/*
Calling the Function with Different Arguments
*/
addTwoNumbers(3, "4"); // Output: "34" (string concatenation)
addTwoNumbers(3, 4); // Output: 7 (number addition)
addTwoNumbers(3, null); // Output: 3 (null is treated as 0)

/*
Key Points:
- Parameters are placeholders for values passed to the function.
- JavaScript performs type coercion, so `3 + "4"` results in string concatenation.
*/

/*
Returning Values from a Function
*/
// Functions can return a value using the `return` keyword.
// Once `return` is executed, the function stops running.

/*
Example: Function with Return
*/
function addTwoNumber(number1, number2) {
    let result = number1 + number2;
    return result;
    console.log("Amit"); // This line will never execute
}

const result1 = addTwoNumber(50, 50);
console.log("Result", result1); // Output: Result 100

/*
Key Points:
- Use `return` to send a value back from the function.
- Code after `return` is not executed.
*/

/*
Default Parameters
*/
// Default parameters allow you to set default values for function parameters.
// If no argument is provided, the default value is used.

/*
Example: Function with Default Parameter
*/
function loginUserMessage(username = "sam") {
    if (!username) {
        console.log("Please Enter a username");
        return;
    }
    return `${username} just logged in`;
}

/*
Calling the Function with Different Arguments
*/
console.log(loginUserMessage("Amit")); // Output: "Amit just logged in"
console.log(loginUserMessage()); // Output: "sam just logged in" (default value used)
console.log(loginUserMessage(" ")); // Output: "  just logged in" (empty space is a valid value)

/*
Key Points:
- Provide fallback values for parameters using default parameters.
- Useful for handling missing arguments.
*/

/*
Common Mistakes and Tips
*/
// 1. Forgetting to call the function:
//    - `MyFunction` refers to the function itself.
//    - `MyFunction()` executes the function.

// 2. Not using `return`:
//    - If a function does not return a value, it returns `undefined` by default.

// 3. Misunderstanding type coercion:
//    - Be careful when mixing numbers and strings in operations.

/*
Example: Function Without Return
*/
const result = addTwoNumbers(50, 50);
console.log("Result", result); // Output: Result undefined (no return statement)

/*
Key Points:
- Always use `return` if you need the function to produce a value.
- Understand how JavaScript handles different data types in operations.
*/

/*
Summary of Key Concepts
*/
// 1. Function Definition:
//    - Use the `function` keyword to define a function.
//    - Parameters are placeholders for inputs.

// 2. Function Execution:
//    - Call the function using its name followed by parentheses.
//    - Pass arguments to the function if it has parameters.

// 3. Return Statement:
//    - Use `return` to send a value back from the function.
//    - Code after `return` is not executed.

// 4. Default Parameters:
//    - Provide fallback values for parameters.
//    - Useful for handling missing arguments.

// 5. Common Mistakes:
//    - Forgetting to call the function.
//    - Not using `return` when needed.
//    - Misunderstanding type coercion.