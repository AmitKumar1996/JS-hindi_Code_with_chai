/*
Truthy and Falsy Values in JavaScript
*/

/*
1. What are Truthy and Falsy Values?
*/
// In JavaScript, values are evaluated as either "truthy" or "falsy" in a boolean context.
// - **Truthy**: Values that evaluate to `true`.
// - **Falsy**: Values that evaluate to `false`.

/*
Example: Truthy and Falsy in `if` Statements
*/
const userEmail = "a@gmail.com";

if (userEmail) {
    console.log("Got the Email"); // Output: Got the Email
} else {
    console.log("Don't have user Email");
}

/*
Key Points:
- `userEmail` is a non-empty string, so it is truthy.
- The `if` block executes because the condition is truthy.
*/

/*
2. Falsy Values
*/
// The following values are considered falsy in JavaScript:
// - `false`
// - `0` (zero)
// - `-0` (negative zero)
// - `0n` (BigInt zero)
// - `""` (empty string)
// - `null`
// - `undefined`
// - `NaN` (Not a Number)

/*
Example: Falsy Values
*/
if (false) {
    console.log("This will not execute");
}

if (0) {
    console.log("This will not execute");
}

if ("") {
    console.log("This will not execute");
}

if (null) {
    console.log("This will not execute");
}

if (undefined) {
    console.log("This will not execute");
}

if (NaN) {
    console.log("This will not execute");
}

/*
Key Points:
- Falsy values cause the `if` condition to evaluate to `false`.
- The `else` block (if present) will execute instead.
*/

/*
3. Truthy Values
*/
// All values that are not falsy are considered truthy. Some common truthy values include:
// - `true`
// - `"0"` (string with a zero)
// - `'false'` (string with the word "false")
// - `" "` (string with a space)
// - `[]` (empty array)
// - `{}` (empty object)
// - `function() {}` (empty function)

/*
Example: Truthy Values
*/
if (true) {
    console.log("This will execute"); // Output: This will execute
}

if ("0") {
    console.log("This will execute"); // Output: This will execute
}

if ('false') {
    console.log("This will execute"); // Output: This will execute
}

if (" ") {
    console.log("This will execute"); // Output: This will execute
}

if ([]) {
    console.log("This will execute"); // Output: This will execute
}

if ({}) {
    console.log("This will execute"); // Output: This will execute
}

if (function () {}) {
    console.log("This will execute"); // Output: This will execute
}

/*
Key Points:
- Truthy values cause the `if` condition to evaluate to `true`.
- The `if` block will execute.
*/

/*
4. Real-Life Examples of Truthy and Falsy
*/

/*
Example 1: Checking if a User Email Exists
*/
const userEmail1 = "a@gmail.com";

if (userEmail1) {
    console.log("Got the Email"); // Output: Got the Email
} else {
    console.log("Don't have user Email");
}

/*
Example 2: Checking if an Array is Empty
*/
const emptyArray = [];

if (emptyArray.length === 0) {
    console.log("Array is empty"); // Output: Array is empty
}

/*
Example 3: Checking if an Object is Empty
*/
const emptyObj = {};

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty"); // Output: Object is empty
}

/*
Key Points:
- Use truthy and falsy values to simplify conditions.
- Check for empty arrays or objects using `.length` or `Object.keys()`.
*/

/*
5. Special Cases: Loose Equality (`==`)
*/
// JavaScript's loose equality (`==`) can lead to unexpected results when comparing falsy values.

/*
Example: Loose Equality
*/
console.log(false == 0); // Output: true
console.log(false == ''); // Output: true
console.log(0 == ''); // Output: true

/*
Key Points:
- Avoid using loose equality (`==`) when comparing falsy values.
- Use strict equality (`===`) to avoid unexpected behavior.
*/

/*
6. Best Practices
*/
// 1. Use strict equality (`===`) to compare values.
// 2. Use truthy and falsy values to simplify conditions.
// 3. Check for empty arrays or objects using `.length` or `Object.keys()`.
// 4. Avoid relying on loose equality (`==`) for falsy value comparisons.

/*
Summary of Key Concepts
*/
// 1. Truthy Values:
//    - Values that evaluate to `true` in a boolean context.
//    - Examples: `true`, `"0"`, `'false'`, `" "`, `[]`, `{}`, `function() {}`.

// 2. Falsy Values:
//    - Values that evaluate to `false` in a boolean context.
//    - Examples: `false`, `0`, `-0`, `0n`, `""`, `null`, `undefined`, `NaN`.

// 3. Real-Life Examples:
//    - Checking if a user email exists.
//    - Checking if an array or object is empty.

// 4. Loose Equality (`==`):
//    - Can lead to unexpected results when comparing falsy values.
//    - Use strict equality (`===`) instead.

/*
Best Practices
*/
// 1. Use strict equality (`===`) to avoid unexpected behavior.
// 2. Use truthy and falsy values to simplify conditions.
// 3. Check for empty arrays or objects using `.length` or `Object.keys()`.

/*
Nullish Coalescing Operator (??) and Ternary Operator in JavaScript
*/

/*
1. Nullish Coalescing Operator (`??`)
*/
// The Nullish Coalescing Operator (`??`) is used to provide a default value for `null` or `undefined`.
// It returns the right-hand side value only if the left-hand side value is `null` or `undefined`.

/*
Why Use `??`?
*/
// - It is useful when you want to handle `null` or `undefined` specifically.
// - Unlike the logical OR (`||`), it does not consider falsy values like `0`, `""`, or `false`.

/*
Example: Nullish Coalescing Operator
*/
let val1;
let val2;

val1 = 5 ?? 10;
console.log(val1); // Output: 5 (left-hand side is not null or undefined)

val2 = null ?? 10;
console.log(val2); // Output: 10 (left-hand side is null)

val2 = undefined ?? 15;
console.log(val2); // Output: 15 (left-hand side is undefined)

let val3 = null ?? 10 ?? 20;
console.log(val3); // Output: 10 (first non-null/undefined value)

/*
Key Points:
- `??` returns the right-hand side value only if the left-hand side is `null` or `undefined`.
- It is useful for providing default values without considering other falsy values.
*/

/*
2. Ternary Operator
*/
// The Ternary Operator is a concise way to write conditional statements.
// It evaluates a condition and returns one of two values based on whether the condition is `true` or `false`.

/*
Syntax:
*/
condition ? expressionIfTrue : expressionIfFalse;

/*
Example: Ternary Operator
*/
const iceTeaPrice = 100;

iceTeaPrice >= 80
    ? console.log("Less than or equal to 80") // Output: Less than or equal to 80
    : console.log("Greater than 80");

/*
Key Points:
- The Ternary Operator is a shorthand for `if-else` statements.
- It is useful for simple conditions and concise code.
*/

/*
3. Real-Life Examples
*/

/*
Example 1: Nullish Coalescing Operator
*/
const userInput = null;
const defaultValue = "Guest";

const username = userInput ?? defaultValue;
console.log(username); // Output: Guest (userInput is null)

/*
Example 2: Ternary Operator
*/
const age = 20;
const isAdult = age >= 18 ? "Yes" : "No";
console.log(isAdult); // Output: Yes

/*
4. Comparison with Logical OR (`||`)
*/
// The logical OR (`||`) operator considers all falsy values (`false`, `0`, `""`, `null`, `undefined`, `NaN`).

/*
Example: Logical OR (`||`)
*/
const value1 = 0 || 10;
console.log(value1); // Output: 10 (0 is falsy)

const value2 = 0 ?? 10;
console.log(value2); // Output: 0 (0 is not null or undefined)

/*
Key Points:
- Use `??` when you only want to handle `null` or `undefined`.
- Use `||` when you want to handle all falsy values.
*/

/*
5. Best Practices
*/
// 1. Use `??` for default values when you only care about `null` or `undefined`.
// 2. Use the Ternary Operator for concise conditional logic.
// 3. Avoid using `??` and `||` interchangeably; understand their differences.

/*
Summary of Key Concepts
*/
// 1. Nullish Coalescing Operator (`??`):
//    - Returns the right-hand side value if the left-hand side is `null` or `undefined`.
//    - Useful for providing default values without considering other falsy values.

// 2. Ternary Operator:
//    - A concise way to write `if-else` statements.
//    - Syntax: `condition ? expressionIfTrue : expressionIfFalse`.

// 3. Comparison with `||`:
//    - `||` considers all falsy values (`false`, `0`, `""`, `null`, `undefined`, `NaN`).
//    - `??` only considers `null` and `undefined`.

/*
Best Practices
*/
// 1. Use `??` for handling `null` or `undefined`.
// 2. Use the Ternary Operator for simple and concise conditions.
// 3. Understand the difference between `??` and `||` to avoid bugs.