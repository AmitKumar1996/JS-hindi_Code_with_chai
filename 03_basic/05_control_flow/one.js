/*
Conditional Statements in JavaScript
*/

/*
1. The `if` Statement
*/
// The `if` statement executes a block of code if a specified condition is true.

/*
Example: Basic `if` Statement
*/
if (true) {
    // This block will always execute
}

if (false) {
    // This block will never execute
}

if (2 == 2) {
    console.log("executed"); // Output: executed
}

if (2 === "2") {
    console.log("executed"); // This block will not execute (strict equality check)
}

/*
Key Points:
- Use `if` to execute code only when a condition is true.
- `==` checks for equality (type coercion).
- `===` checks for strict equality (no type coercion).
*/

/*
2. Real-Life Example: Checking User Login
*/
const isUserLoggedIn = true;

if (isUserLoggedIn) {
    console.log("User is logged in"); // Output: User is logged in
}

/*
Key Points:
- Use variables in conditions to make decisions based on dynamic values.
*/

/*
3. Comparison Operators
*/
// Comparison operators are used to compare values in conditions.

/*
Example: Comparison Operators
*/
if (2 < 3) {
    console.log("2 is less than 3"); // Output: 2 is less than 3
}

if (3 > 2) {
    console.log("3 is greater than 2"); // Output: 3 is greater than 2
}

if (2 <= 2) {
    console.log("2 is less than or equal to 2"); // Output: 2 is less than or equal to 2
}

if (3 >= 2) {
    console.log("3 is greater than or equal to 2"); // Output: 3 is greater than or equal to 2
}

if (2 == "2") {
    console.log("2 is equal to '2' (loose equality)"); // Output: 2 is equal to '2' (loose equality)
}

if (2 != "3") {
    console.log("2 is not equal to '3'"); // Output: 2 is not equal to '3'
}

if (2 === 2) {
    console.log("2 is strictly equal to 2"); // Output: 2 is strictly equal to 2
}

if (2 !== "2") {
    console.log("2 is not strictly equal to '2'"); // Output: 2 is not strictly equal to '2'
}

/*
Key Points:
- `<`: Less than.
- `>`: Greater than.
- `<=`: Less than or equal to.
- `>=`: Greater than or equal to.
- `==`: Loose equality (type coercion).
- `!=`: Not equal (type coercion).
- `===`: Strict equality (no type coercion).
- `!==`: Strict not equal (no type coercion).
*/

/*
4. Logical Operators
*/
// Logical operators are used to combine multiple conditions.

/*
Example: Logical Operators
*/
if (2 > 1 && 3 > 2) {
    console.log("Both conditions are true"); // Output: Both conditions are true
}

if (2 > 1 || 3 < 2) {
    console.log("At least one condition is true"); // Output: At least one condition is true
}

/*
Key Points:
- `&&`: Logical AND (both conditions must be true).
- `||`: Logical OR (at least one condition must be true).
*/

/*
5. Shorthand Notation
*/
// For single-line `if` statements, you can omit the curly braces `{}`.

/*
Example: Shorthand Notation
*/
const balance = 10000;

if (balance > 5000) console.log("test"), console.log("test2"); // Output: test, test2

/*
Key Points:
- Use shorthand notation for concise single-line `if` statements.
- Avoid using commas for multiple statements; use curly braces `{}` instead.
*/

/*
6. `if`, `else if`, `else` Statements
*/
// Use `else if` and `else` to handle multiple conditions.

/*
Example: Real-Life Example
*/
const temperature = 25;

if (temperature > 30) {
    console.log("It's hot outside");
} else if (temperature > 20) {
    console.log("It's warm outside"); // Output: It's warm outside
} else {
    console.log("It's cold outside");
}

/*
Key Points:
- Use `else if` to check additional conditions.
- Use `else` as a fallback for all other cases.
*/

/*
7. Conditional Rendering
*/
// Conditional rendering is used to display content based on conditions.

/*
Example: Conditional Rendering
*/
const isLoggedIn = true;

if (isLoggedIn) {
    console.log("Welcome back!"); // Output: Welcome back!
} else {
    console.log("Please log in");
}

/*
Key Points:
- Use conditional statements to control what content is displayed or executed.
*/

/*
Summary of Key Concepts
*/
// 1. `if` Statement:
//    - Executes code if a condition is true.

// 2. Comparison Operators:
//    - `<`, `>`, `<=`, `>=`, `==`, `!=`, `===`, `!==`.

// 3. Logical Operators:
//    - `&&` (AND), `||` (OR).

// 4. Shorthand Notation:
//    - Use for single-line `if` statements.

// 5. `if`, `else if`, `else`:
//    - Handle multiple conditions.

// 6. Conditional Rendering:
//    - Display content based on conditions.

/*
Best Practices
*/
// 1. Use strict equality (`===`) to avoid type coercion issues.
// 2. Use curly braces `{}` for multi-line `if` statements.
// 3. Avoid deeply nested `if` statements; use `else if` for clarity.

// D While loop
 do {
    
} while (condition);

// for of
// ["", "", ""]
//[{}, {}, {}]

const arr =[1, 2, 3, 4, 5]

for (const i of arr) {
    console.log(arr[i]);
    
    
}

const s1 = "Amit ji hello"

for(const i of s1 ){
console.log(i);

}

// maps interview Questions

const maps = new Map();
maps.set(`IN`, "Indian")
maps.set(`USA`, "United state")
maps.set(`Fr`, "France")

console.log(maps);

for(const [key, value] of maps){
    console.log(key, ':-', value);
    
}

const myObject ={
    'game1': 'NFS',
    'game2': 'Spiderman'
}

for(const [key, value] of myObject){    // Not working
    console.log(key, ':-', value);
    
}
