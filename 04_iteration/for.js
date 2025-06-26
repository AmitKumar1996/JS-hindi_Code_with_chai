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

//===================================================================
/*
Loops and Iteration in JavaScript
*/

/*
1. `for-in` Loop
*/
// The `for-in` loop is used to iterate over the enumerable properties of an object.

/*
Example: `for-in` Loop with Objects
*/
const myObject1 = {
    js: "JavaScript",
    rb: "ruby",
    cpp: "c++",
    swift: "swift by apple"
};

for (const key in myObject1) {
    console.log(myObject1[key]); // Output: JavaScript, ruby, c++, swift by apple
    console.log(`${key} shortcut is for ${myObject1[key]}`);
    // Output:
    // js shortcut is for JavaScript
    // rb shortcut is for ruby
    // cpp shortcut is for c++
    // swift shortcut is for swift by apple
}

/*
Key Points:
- `for-in` iterates over the keys of an object.
- Use it to access both keys and values of an object.
*/

/*
2. `for-of` Loop
*/
// The `for-of` loop is used to iterate over iterable objects like arrays, strings, and maps.

/*
Example: `for-of` Loop with Arrays
*/
const programming = ["js", "rb", "py", "cpp"];

for (const language of programming) {
    console.log(language); // Output: js, rb, py, cpp
}

/*
Key Points:
- `for-of` iterates over the values of an iterable object.
- It is simpler and more readable than traditional `for` loops.
*/

/*
3. `for-in` vs `for-of`
*/
// - `for-in`: Iterates over the keys of an object.
// - `for-of`: Iterates over the values of an iterable object.

/*
Example: `for-in` with Arrays
*/
for (const index in programming) {
    console.log(index); // Output: 0, 1, 2, 3 (keys/indexes of the array)
}

/*
Example: `for-of` with Arrays
*/
for (const language of programming) {
    console.log(language); // Output: js, rb, py, cpp (values of the array)
}

/*
Key Points:
- Use `for-in` to iterate over object keys or array indexes.
- Use `for-of` to iterate over array values or iterable objects.
*/

/*
4. `forEach` Method
*/
// The `forEach` method is used to execute a function for each element in an array.

/*
Example: `forEach` with Arrays
*/
const coding = ["js", "ruby", "java", "python", "cpp"];

// Method 1: Using a Regular Function
coding.forEach(function (val) {
    console.log(val); // Output: js, ruby, java, python, cpp
});

// Method 2: Using an Arrow Function
coding.forEach((item) => {
    console.log(item); // Output: js, ruby, java, python, cpp
});

// Method 3: Using a Predefined Function
function printMe(item) {
    console.log(item);
}

coding.forEach(printMe); // Output: js, ruby, java, python, cpp

/*
Key Points:
- `forEach` executes a function for each element in the array.
- It does not return a new array (unlike `map`).
*/

/*
5. `forEach` with Index and Array
*/
// The `forEach` method provides access to the current element, its index, and the entire array.

/*
Example: `forEach` with Index and Array
*/
coding.forEach((item, index, arr) => {
    console.log(item, index, arr);
    // Output:
    // js 0 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
    // ruby 1 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
    // java 2 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
    // python 3 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
    // cpp 4 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
});

/*
Key Points:
- The callback function in `forEach` can take three arguments:
  - `item`: The current element.
  - `index`: The index of the current element.
  - `arr`: The entire array.
*/

/*
6. `forEach` with Array of Objects
*/
// `forEach` can be used to iterate over an array of objects.

/*
Example: `forEach` with Array of Objects
*/
const myCoding = [
    {
        languageName: "JavaScript",
        languageFileName: "js"
    },
    {
        languageName: "Java",
        languageFileName: "java"
    },
    {
        languageName: "Python",
        languageFileName: "py"
    },
    {
        languageName: "C++",
        languageFileName: "cpp"
    }
];

myCoding.forEach((item) => {
    console.log(item.languageName); // Output: JavaScript, Java, Python, C++
});




/*
Key Points:
- Use `forEach` to iterate over arrays of objects and access their properties.
*/

/*
7. Why and Where to Use Different Loops
*/
// - `for-in`: Use to iterate over object keys or array indexes.
// - `for-of`: Use to iterate over array values or iterable objects.
// - `forEach`: Use to execute a function for each element in an array.
// - `for`: Use for more control over loop iterations (e.g., custom increments).
// - `while`/`do-while`: Use when the number of iterations is not known in advance.

/*
8. Best Practices
*/
// 1. Use `for-of` for arrays and iterable objects.
// 2. Use `for-in` for objects.
// 3. Use `forEach` for concise iteration over arrays.
// 4. Use `for` or `while` for more complex looping logic.

/*
Summary of Key Concepts
*/
// 1. `for-in` Loop:
//    - Iterates over object keys or array indexes.
//    - Use for objects.

// 2. `for-of` Loop:
//    - Iterates over array values or iterable objects.
//    - Use for arrays, strings, and maps.

// 3. `forEach` Method:
//    - Executes a function for each element in an array.
//    - Use for concise iteration over arrays.

// 4. Use Cases:
//    - `for-in`: Object iteration.
//    - `for-of`: Array and iterable iteration.
//    - `forEach`: Array iteration with a callback.

/*
Best Practices
*/
// 1. Use `for-of` for arrays and iterable objects.
// 2. Use `for-in` for objects.
// 3. Use `forEach` for concise array iteration.
// 4. Use `for` or `while` for complex looping logic.