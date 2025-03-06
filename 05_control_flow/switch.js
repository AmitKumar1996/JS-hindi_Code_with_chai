/*
The `switch` Statement in JavaScript
*/

/*
1. Syntax of `switch`
*/
// The `switch` statement is used to perform different actions based on different conditions.
// It is an alternative to multiple `if-else` statements.

/*
Syntax:
*/
switch (key) {
    case value1:
        // Code to execute if key === value1
        break;

    case value2:
        // Code to execute if key === value2
        break;

    default:
        // Code to execute if key doesn't match any case
        break;
}

/*
Key Points:
- `key`: The expression to evaluate.
- `case`: Each `case` represents a possible value of `key`.
- `break`: Stops the execution of the `switch` block.
- `default`: Executes if no `case` matches the `key`.
*/

/*
2. Example: Basic `switch` Statement
*/
const month = 3;

switch (month) {
    case 1:
        console.log("January");
        break;

    case 2:
        console.log("February");
        break;

    case 3:
        console.log("March"); // Output: March
        break;

    case 4:
        console.log("April");
        break;

    default:
        console.log("Invalid month");
        break;
}

/*
Key Points:
- The `switch` statement evaluates `month` and matches it with the `case` values.
- When a match is found, the corresponding code block is executed.
- The `break` statement prevents fall-through to the next `case`.
- If no `case` matches, the `default` block is executed.
*/

/*
3. Fall-Through Behavior
*/
// If `break` is omitted, the `switch` statement will continue executing the next `case` (fall-through).

/*
Example: Fall-Through
*/
const day = 2;

switch (day) {
    case 1:
        console.log("Monday");
        break;

    case 2:
        console.log("Tuesday"); // Output: Tuesday
        // No break statement, so execution falls through to the next case.

    case 3:
        console.log("Wednesday"); // Output: Wednesday
        break;

    default:
        console.log("Invalid day");
        break;
}

/*
Key Points:
- Fall-through can be useful when multiple cases should execute the same code.
- Always use `break` unless fall-through is intentional.
*/

/*
4. Using `default`
*/
// The `default` case is executed when no `case` matches the `key`.

/*
Example: Using `default`
*/
const fruit = "apple";

switch (fruit) {
    case "banana":
        console.log("It's a banana");
        break;

    case "orange":
        console.log("It's an orange");
        break;

    default:
        console.log("Unknown fruit"); // Output: Unknown fruit
        break;
}

/*
Key Points:
- The `default` case acts as a fallback for unmatched values.
- It is optional but recommended for handling unexpected cases.
*/

/*
5. `switch` with Multiple Cases
*/
// Multiple cases can share the same code block.

/*
Example: Multiple Cases
*/
const grade = "B";

switch (grade) {
    case "A":
    case "B":
    case "C":
        console.log("Pass"); // Output: Pass
        break;

    case "D":
    case "F":
        console.log("Fail");
        break;

    default:
        console.log("Invalid grade");
        break;
}

/*
Key Points:
- Multiple cases can execute the same code block.
- This is useful for grouping similar conditions.
*/

/*
6. `switch` with Expressions
*/
// The `key` in a `switch` statement can be an expression.

/*
Example: Using Expressions
*/
const num = 10;

switch (true) {
    case num > 0:
        console.log("Positive number"); // Output: Positive number
        break;

    case num < 0:
        console.log("Negative number");
        break;

    default:
        console.log("Zero");
        break;
}

/*
Key Points:
- The `key` can be an expression (e.g., `true`).
- Each `case` evaluates a condition.
*/

/*
7. Best Practices
*/
// 1. Always use `break` to prevent fall-through unless intentional.
// 2. Use `default` to handle unexpected values.
// 3. Group similar cases to avoid code duplication.
// 4. Use `switch` for multiple conditions instead of deeply nested `if-else` statements.

/*
Summary of Key Concepts
*/
// 1. `switch` Statement:
//    - Evaluates a `key` and matches it with `case` values.
//    - Executes the corresponding code block.

// 2. `case`:
//    - Represents a possible value of the `key`.

// 3. `break`:
//    - Stops the execution of the `switch` block.

// 4. `default`:
//    - Executes if no `case` matches the `key`.

// 5. Fall-Through:
//    - Occurs when `break` is omitted, causing execution to continue to the next `case`.

// 6. Multiple Cases:
//    - Share the same code block for similar conditions.

// 7. Expressions:
//    - The `key` can be an expression for dynamic conditions.
