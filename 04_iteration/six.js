/*
Understanding `forEach`, `filter`, and Explicit Return in JavaScript
*/

/*
1. `forEach` Method
*/
// The `forEach` method is used to execute a function for each element in an array.
// It does not return a new array.

/*
Example: `forEach` with Arrays
*/
const coding = ["js", "ruby", "java", "python", "cpp"];

const values = coding.forEach((item) => {
    console.log(item); // Output: js, ruby, java, python, cpp
    return item; // `forEach` does not return anything
});

console.log(values); // Output: undefined
console.log(typeof values); // Output: undefined

/*
Key Points:
- `forEach` executes a function for each element in the array.
- It does not return a value, so `values` is `undefined`.
*/

/*
2. `filter` Method
*/
// The `filter` method creates a new array with all elements that pass a test (provided as a function).

/*
Example: `filter` with Arrays
*/
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const values1 = myNums.filter((nums) => nums > 4);
console.log(values1); // Output: [5, 6, 7, 8, 9, 10]
console.log(typeof values1); // Output: object (arrays are objects in JavaScript)

/*
Key Points:
- `filter` returns a new array containing elements that satisfy the condition.
- The condition is provided as a callback function.
*/

/*
3. Explicit Return in `filter`
*/
// When using curly braces `{}` in an arrow function, you must use the `return` keyword explicitly.

/*
Example: Explicit Return in `filter`
*/
const values2 = myNums.filter((nums) => {
    return nums > 4; // Explicit return
});

console.log(values2); // Output: [5, 6, 7, 8, 9, 10]
console.log(typeof values2); // Output: object

/*
Key Points:
- Use `return` explicitly when using curly braces `{}` in the callback function.
- Without `return`, the function will return `undefined`, and `filter` will not work as expected.
*/

/*
4. Using `forEach` to Filter Manually
*/
// You can use `forEach` to manually filter elements and push them into a new array.

/*
Example: Manual Filtering with `forEach`
*/
const newNums = [];

myNums.forEach((num) => {
    if (num > 4) {
        newNums.push(num); // Push elements greater than 4 into `newNums`
    }
});

console.log(newNums); // Output: [5, 6, 7, 8, 9, 10]

/*
Key Points:
- `forEach` can be used to manually filter elements, but `filter` is more concise.
*/

/*
5. Real-Life Example: Filtering an Array of Objects
*/
// `filter` is commonly used to filter arrays of objects based on specific criteria.

/*
Example: Filtering Books by Genre and Publish Year
*/
const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];

// Filter books by genre
let userBooks = books.filter((bk) => bk.genre === 'History');
console.log(userBooks);
// Output:
// [
//   { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
//   { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 }
// ]

// Filter books by genre and publish year
userBooks = books.filter((bk) => {
    return bk.publish >= 1995 && bk.genre === "History";
});
console.log(userBooks);
// Output:
// [
//   { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 }
// ]

/*
Key Points:
- Use `filter` to extract elements from an array of objects based on conditions.
- Combine multiple conditions using logical operators (`&&`, `||`).
*/

/*
6. Summary of Key Concepts
*/
// 1. `forEach`:
//    - Executes a function for each element in an array.
//    - Does not return a value.

// 2. `filter`:
//    - Creates a new array with elements that pass a test.
//    - Returns a new array.

// 3. Explicit Return:
//    - Use `return` when using curly braces `{}` in arrow functions.

// 4. Real-Life Use Cases:
//    - Filtering arrays of objects based on specific criteria.

/*
Best Practices
*/
// 1. Use `forEach` for side effects (e.g., logging, updating external variables).
// 2. Use `filter` to create new arrays based on conditions.
// 3. Use explicit `return` when using curly braces `{}` in arrow functions.