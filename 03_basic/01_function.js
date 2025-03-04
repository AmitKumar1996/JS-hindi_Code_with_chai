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

/*
Function Concepts in JavaScript
*/

/*
Rest Operator (`...`) in Functions
*/
// The rest operator (`...`) allows a function to accept an indefinite number of arguments as an array.
// It is useful when you don't know how many arguments will be passed to the function.

/*
Example: Using Rest Operator
*/
function calculateCartPrice(val1, val2, ...num1) {
    return num1;
}

console.log(calculateCartPrice(200, 100, 300, 1000)); // Output: [300, 1000]

/*
Key Points:
- val1 and val2 are regular parameters.
- ...num1 collects all remaining arguments into an array.
- The rest operator must be the last parameter in the function.
*/

/*
Passing Objects to Functions
*/
// Objects can be passed as arguments to functions.
// You can access object properties inside the function.

/*
Example: Passing Objects to Functions
*/
const user = {
    username: "Amit",
    price: 199
};

function handleObject(anyObject) {
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}

handleObject(user); // Output: Username is Amit and price is 199
handleObject({
    username: "Amit Kumar",
    price: 1999
}); // Output: Username is Amit Kumar and price is 1999

/*
Key Points:
- Objects are passed by reference.
- You can pass an object directly or create one on the fly.
*/

/*
Passing Arrays to Functions
*/
// Arrays can also be passed as arguments to functions.
// You can access array elements inside the function.

/*
Example: Passing Arrays to Functions
*/
const MyNewArray = [200, 400, 100, 600];

function returnSecondValue(getArray) {
    return getArray[1];
}

console.log(returnSecondValue(MyNewArray)); // Output: 400
console.log(returnSecondValue([100, 400, 100, 700])); // Output: 400

/*
Key Points:
- Arrays are passed by reference.
- You can pass an array directly or create one on the fly.
*/

/*
Extra Complex Examples
*/

/*
Example 1: Combining Rest Operator and Object Handling
*/
function processUserData(user, ...additionalData) {
    console.log(`Username: ${user.username}`);
    console.log(`Additional Data: ${additionalData.join(", ")}`);
}

const user1 = {
    username: "Amit"
};

processUserData(user1, "Admin", "Premium", "Active");
// Output:
// Username: Amit
// Additional Data: Admin, Premium, Active

/*
Key Points:
- Combines object handling and the rest operator.
- Useful for processing user data with additional metadata.
*/

/*
Example 2: Nested Object Handling
*/
function processNestedObject(user) {
    console.log(`Username: ${user.username}`);
    console.log(`Address: ${user.address.city}, ${user.address.country}`);
}

const user2 = {
    username: "Amit",
    address: {
        city: "Jaipur",
        country: "India"
    }
};

processNestedObject(user2);
// Output:
// Username: Amit
// Address: Jaipur, India

/*
Key Points:
- Demonstrates accessing nested object properties.
- Useful for working with complex data structures.
*/

/*
Example 3: Array Manipulation in Functions
*/
function manipulateArray(arr) {
    // Double each element in the array
    const doubledArray = arr.map(num => num * 2);
    // Filter elements greater than 100
    const filteredArray = doubledArray.filter(num => num > 100);
    return filteredArray;
}

const numbers = [50, 60, 70, 80, 90];
console.log(manipulateArray(numbers)); // Output: [120, 140, 160, 180]

/*
Key Points:
- Demonstrates array manipulation using map and filter.
- Useful for processing arrays in functions.
*/

/*
Example 4: Combining Arrays and Objects
*/
function processUserOrders(user, ...orders) {
    console.log(`Username: ${user.username}`);
    console.log(`Total Orders: ${orders.length}`);
    console.log(`Order IDs: ${orders.join(", ")}`);
}

const user3 = {
    username: "Amit"
};

processUserOrders(user3, 101, 102, 103);
// Output:
// Username: Amit
// Total Orders: 3
// Order IDs: 101, 102, 103

/*
Key Points:
- Combines object handling and the rest operator.
- Useful for processing user orders or related data.
*/

/*
Example 5: Default Parameters with Objects
*/
function createUserProfile(username, options = { isAdmin: false, isActive: true }) {
    console.log(`Username: ${username}`);
    console.log(`Admin: ${options.isAdmin}`);
    console.log(`Active: ${options.isActive}`);
}

createUserProfile("Amit");
// Output:
// Username: Amit
// Admin: false
// Active: true

createUserProfile("Amit Kumar", { isAdmin: true });
// Output:
// Username: Amit Kumar
// Admin: true
// Active: true

/*
Key Points:
- Demonstrates default parameters with objects.
- Useful for providing optional configuration.
*/

/*
Summary of Key Concepts
*/
// 1. Rest Operator (`...`):
//    - Collects remaining arguments into an array.
//    - Must be the last parameter in the function.

// 2. Passing Objects to Functions:
//    - Objects are passed by reference.
//    - Access properties using dot notation.

// 3. Passing Arrays to Functions:
//    - Arrays are passed by reference.
//    - Access elements using indices or array methods.

// 4. Complex Examples:
//    - Combine rest operator, objects, and arrays for advanced use cases.
//    - Use default parameters for optional configurations.