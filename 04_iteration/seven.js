/*
Understanding `map` and Method Chaining in JavaScript
*/

/*
1. The `map` Method
*/
// The `map` method creates a new array by applying a function to each element of the original array.
// It does not modify the original array.

/*
Example: Using `map` to Transform Array Elements
*/
const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newNums = myNumbers.map((nums) => {
    return nums + 10; // Add 10 to each element
});

console.log(newNums); // Output: [11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

/*
Key Points:
- `map` returns a new array with the results of applying the callback function to each element.
- The original array (`myNumbers`) remains unchanged.
*/

/*
2. Method Chaining
*/
// Method chaining allows you to call multiple array methods in sequence on the same array.
// Each method in the chain operates on the result of the previous method.

/*
Example: Method Chaining with `map` and `filter`
*/
const newNums1 = myNumbers
    .map((nums) => nums * 10) // Multiply each element by 10
    .map((nums) => nums + 1)  // Add 1 to each element
    .filter((nums) => nums >= 40); // Filter elements greater than or equal to 40

console.log(newNums1); // Output: [41, 51, 61, 71, 81, 91, 101]

/*
Key Points:
- The first `map` multiplies each element by 10: `[10, 20, 30, 40, 50, 60, 70, 80, 90, 100]`.
- The second `map` adds 1 to each element: `[11, 21, 31, 41, 51, 61, 71, 81, 91, 101]`.
- The `filter` method keeps only elements greater than or equal to 40: `[41, 51, 61, 71, 81, 91, 101]`.
*/

/*
3. Real-Life Use Cases
*/

/*
Example: Transforming and Filtering Data
*/
const users = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35 },
    { name: "David", age: 40 }
];

const userNames = users
    .map((user) => user.name.toUpperCase()) // Transform names to uppercase
    .filter((name) => name.startsWith("A") || name.startsWith("B")); // Filter names starting with "A" or "B"

console.log(userNames); // Output: ["ALICE", "BOB"]

/*
Key Points:
- Use `map` to transform data (e.g., convert names to uppercase).
- Use `filter` to extract specific data (e.g., names starting with "A" or "B").
*/

/*
4. Summary of Key Concepts
*/
// 1. `map`:
//    - Creates a new array by applying a function to each element of the original array.
//    - Does not modify the original array.

// 2. Method Chaining:
//    - Allows you to call multiple array methods in sequence.
//    - Each method operates on the result of the previous method.

// 3. Real-Life Use Cases:
//    - Transforming and filtering data in arrays of objects.

/*
Best Practices
*/
// 1. Use `map` for transforming array elements.
// 2. Use method chaining for concise and readable code.
// 3. Avoid excessive chaining to keep code maintainable.