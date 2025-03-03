/*
JavaScript Array Methods and Operations
*/

/*
1. Using `push()` to Add an Array to Another Array
- `push()` adds elements to the end of an array.
- If an array is pushed into another array, it is added as a single element (nested array).
*/

const marvel_heros = ["thor", "IronMan", "spiderman"];
const dc_heros = ["superman", "_flash_", "batman"];

marvel_heros.push(dc_heros);
console.log(marvel_heros); 
/* Output:
[ 'thor', 'IronMan', 'spiderman', [ 'superman', '_flash_', 'batman' ] ]
*/

console.log(marvel_heros[3][1]); // Accessing nested array element: _flash_

/*
2. Concatenating Arrays using `concat()`
- `concat()` merges two or more arrays into a new array.
- It does not modify the original arrays.
*/

const all_heros = marvel_heros.concat(dc_heros);
console.log(all_heros);
/* Output:
[ 'thor', 'IronMan', 'spiderman', [ 'superman', '_flash_', 'batman' ], 'superman', '_flash_', 'batman' ]
*/

console.log("****************************************");

/*
3. Using Spread Operator (`...`) for Array Merging
- The spread operator (`...`) spreads array elements.
- It provides a cleaner way to merge arrays without nesting.
*/

const all_new_heros = [...marvel_heros, ...dc_heros];
console.log(all_new_heros);
/* Output:
[ 'thor', 'IronMan', 'spiderman', [ 'superman', '_flash_', 'batman' ], 'superman', '_flash_', 'batman' ]
*/

/*
4. Flattening Nested Arrays using `flat()`
- `flat(depth)` flattens nested arrays up to the specified depth.
- `Infinity` flattens the array completely.
*/

const anotherArray = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];
const real_another_array = anotherArray.flat(Infinity);
console.log(real_another_array);
/* Output:
[1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5]
*/

/*
5. Checking if a Value is an Array using `Array.isArray()`
- Returns `true` if the value is an array, otherwise `false`.
*/
console.log(Array.isArray("Amit")); // false

/*
6. Creating an Array from an Iterable using `Array.from()`
- Converts an iterable (like a string) into an array.
*/
console.log(Array.from("Amit")); 
/* Output:
[ 'A', 'm', 'i', 't' ]
*/

/*
7. Handling Objects with `Array.from()`
- If an object is passed, `Array.from()` returns an empty array (unless an iterable property is specified).
*/
console.log(Array.from({ name: "Amit" })); // [] (Interesting behavior!)

/*
8. Creating an Array from Individual Values using `Array.of()`
- `Array.of()` creates an array from individual values.
*/
let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1, score2, score3));
/* Output:
[100, 200, 300]
*/

/*
Summary:
- `push()`: Adds elements to an array (nested if an array is pushed).
- `concat()`: Merges arrays into a new array (no nesting).
- `...` (Spread Operator): Merges arrays without nesting.
- `flat(depth)`: Flattens nested arrays.
- `Array.isArray(value)`: Checks if a value is an array.
- `Array.from(iterable)`: Converts an iterable into an array.
- `Array.of(values)`: Creates an array from individual values.
*/

