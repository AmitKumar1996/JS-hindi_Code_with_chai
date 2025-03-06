/*
Loops and Iteration in JavaScript
*/

/*
1. `do-while` Loop
*/
// The `do-while` loop executes a block of code at least once, then repeats the loop as long as the condition is true.

/*
Syntax:
*/
do {
    // Code to execute
} while (condition);

/*
Example: `do-while` Loop
*/
let i = 0;

do {
    console.log(i); // Output: 0, 1, 2
    i++;
} while (i < 3);

/*
Key Points:
- The code inside the `do` block is executed at least once.
- The loop continues as long as the `condition` is true.
*/

/*
2. `for-of` Loop
*/
// The `for-of` loop is used to iterate over iterable objects like arrays, strings, and maps.

/*
Syntax:
*/
for (const element of iterable) {
    // Code to execute
}

/*
Example: `for-of` Loop with Arrays
*/
const arr = [1, 2, 3, 4, 5];

for (const num of arr) {
    console.log(num); // Output: 1, 2, 3, 4, 5
}

/*
Key Points:
- `for-of` iterates over the values of an iterable object.
- It is simpler and more readable than traditional `for` loops.
*/

/*
Example: `for-of` Loop with Strings
*/
const s1 = "Amit ji hello";

for (const char of s1) {
    console.log(char); // Output: A, m, i, t,  , j, i,  , h, e, l, l, o
}

/*
Key Points:
- Strings are iterable, so `for-of` can be used to loop through each character.
*/

/*
3. Maps in JavaScript
*/
// A `Map` is a collection of key-value pairs where keys can be of any type.

/*
Example: Creating and Using Maps
*/
const maps = new Map();
maps.set("IN", "India");
maps.set("USA", "United States");
maps.set("Fr", "France");

console.log(maps); // Output: Map(3) { 'IN' => 'India', 'USA' => 'United States', 'Fr' => 'France' }

/*
Key Points:
- Maps maintain the insertion order of keys.
- Keys can be of any type (e.g., strings, numbers, objects).
*/

/*
Example: Iterating Over Maps with `for-of`
*/
for (const [key, value] of maps) {
    console.log(key, ":-", value);
    // Output:
    // IN :- India
    // USA :- United States
    // Fr :- France
}

/*
Key Points:
- Use `for-of` to iterate over the key-value pairs of a Map.
- Destructure the key and value using `[key, value]`.
*/

/*
4. `for-of` Loop with Objects (Not Working)
*/
// The `for-of` loop does not work directly with plain objects because they are not iterable by default.

/*
Example: Attempting to Use `for-of` with Objects
*/
const myObject = {
    game1: "NFS",
    game2: "Spiderman"
};

// This will throw an error
// for (const [key, value] of myObject) {
//     console.log(key, ":-", value);
// }

/*
Key Points:
- Plain objects are not iterable, so `for-of` cannot be used directly.
- Use `for-in` or `Object.entries()` to iterate over objects.
*/

/*
5. Iterating Over Objects
*/
// Use `for-in` or `Object.entries()` to iterate over the properties of an object.

/*
Example: Using `for-in` Loop
*/
for (const key in myObject) {
    console.log(key, ":-", myObject[key]);
    // Output:
    // game1 :- NFS
    // game2 :- Spiderman
}

/*
Example: Using `Object.entries()`
*/
for (const [key, value] of Object.entries(myObject)) {
    console.log(key, ":-", value);
    // Output:
    // game1 :- NFS
    // game2 :- Spiderman
}

/*
Key Points:
- `for-in` iterates over the keys of an object.
- `Object.entries()` returns an array of key-value pairs, which can be iterated with `for-of`.
*/

/*
6. Best Practices
*/
// 1. Use `for-of` for iterating over arrays, strings, and maps.
// 2. Use `for-in` or `Object.entries()` for iterating over objects.
// 3. Use `do-while` when you need to execute the loop body at least once.

/*
Summary of Key Concepts
*/
// 1. `do-while` Loop:
//    - Executes the loop body at least once.
//    - Continues as long as the condition is true.

// 2. `for-of` Loop:
//    - Iterates over the values of iterable objects (arrays, strings, maps).
//    - Does not work with plain objects.

// 3. Maps:
//    - A collection of key-value pairs.
//    - Maintains insertion order.
//    - Use `for-of` to iterate over key-value pairs.

// 4. Iterating Over Objects:
//    - Use `for-in` or `Object.entries()`.

/*
Best Practices
*/
// 1. Use `for-of` for arrays, strings, and maps.
// 2. Use `for-in` or `Object.entries()` for objects.
// 3. Use `do-while` when the loop body must execute at least once.