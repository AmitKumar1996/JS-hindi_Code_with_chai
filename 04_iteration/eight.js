/*
Understanding the `reduce` Method in JavaScript
*/

/*
1. What is `reduce`?
*/
// The `reduce` method executes a reducer function on each element of an array, resulting in a single output value.
// It is commonly used to accumulate values, such as summing up numbers or combining data.

/*
Syntax:
*/
array.reduce((accumulator, currentValue) => {
    // Reducer logic
    return updatedAccumulator;
}, initialValue);

/*
Key Points:
- `accumulator`: The accumulated value from previous iterations.
- `currentValue`: The current element being processed.
- `initialValue`: The initial value of the accumulator (optional).
*/

/*
2. Example: Summing Array Elements
*/
const myNumber = [1, 2, 3, 4];

const myTotal = myNumber.reduce(function (acc, currval) {
    console.log(`acc: ${acc} and currval: ${currval}`);
    return acc + currval; // Add current value to accumulator
}, 0); // Initial value of accumulator is 0

console.log(myTotal); // Output: 10

/*
Key Points:
- The `reduce` method iterates over each element in the array.
- The `acc` starts with the initial value (`0` in this case).
- The `currval` is the current element being processed.
- The result is the sum of all elements: `1 + 2 + 3 + 4 = 10`.
*/

/*
3. Example: Summing Array Elements with Arrow Function
*/
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const myTotal1 = myNums.reduce((acc, curr) => acc + curr, 0);
console.log(myTotal1); // Output: 55

/*
Key Points:
- The arrow function makes the code more concise.
- The initial value of `acc` is `0`.
- The result is the sum of all elements: `1 + 2 + 3 + ... + 10 = 55`.
*/

/*
4. Real-Life Example: Calculating Total Price in a Shopping Cart
*/
// `reduce` is commonly used to calculate the total price of items in a shopping cart.

/*
Example: Summing Prices in a Shopping Cart
*/
const shoppingCart = [
    {
        itemName: "JS Course",
        price: 2999
    },
    {
        itemName: "Python Course",
        price: 1999
    },
    {
        itemName: "React Course",
        price: 3999
    },
    {
        itemName: "Node.js Course",
        price: 4999
    },
    {
        itemName: "Angular Course",
        price: 2999
    }
];

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0);
console.log(priceToPay); // Output: 16995

/*
Key Points:
- The `reduce` method iterates over each item in the `shoppingCart`.
- The `acc` accumulates the total price.
- The result is the sum of all item prices: `2999 + 1999 + 3999 + 4999 + 2999 = 16995`.
*/

/*
5. How `reduce` Works Step-by-Step
*/
// Let's break down how `reduce` works in the shopping cart example:

/*
Step 1: Initialization
- `acc` starts with the initial value (`0`).
- `item` is the first object in the array: `{ itemName: "JS Course", price: 2999 }`.
- `acc + item.price` = `0 + 2999` = `2999`.

Step 2: Second Iteration
- `acc` is now `2999`.
- `item` is the second object: `{ itemName: "Python Course", price: 1999 }`.
- `acc + item.price` = `2999 + 1999` = `4998`.

Step 3: Third Iteration
- `acc` is now `4998`.
- `item` is the third object: `{ itemName: "React Course", price: 3999 }`.
- `acc + item.price` = `4998 + 3999` = `8997`.

Step 4: Fourth Iteration
- `acc` is now `8997`.
- `item` is the fourth object: `{ itemName: "Node.js Course", price: 4999 }`.
- `acc + item.price` = `8997 + 4999` = `13996`.

Step 5: Fifth Iteration
- `acc` is now `13996`.
- `item` is the fifth object: `{ itemName: "Angular Course", price: 2999 }`.
- `acc + item.price` = `13996 + 2999` = `16995`.

Final Result: `16995`.
*/

/*
6. Summary of Key Concepts
*/
// 1. `reduce`:
//    - Executes a reducer function on each element of an array.
//    - Returns a single accumulated value.

// 2. Reducer Function:
//    - Takes two arguments: `accumulator` and `currentValue`.
//    - Returns the updated accumulator.

// 3. Initial Value:
//    - The starting value of the accumulator (optional but recommended).

// 4. Real-Life Use Cases:
//    - Summing up values (e.g., total price in a shopping cart).
//    - Combining data (e.g., flattening arrays, grouping objects).

/*
Best Practices
*/
// 1. Always provide an initial value for the accumulator to avoid unexpected behavior.
// 2. Use `reduce` for accumulating values or combining data.
// 3. Keep the reducer function simple and readable.