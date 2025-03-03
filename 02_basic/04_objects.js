/*
Difference Between Singleton and Non-Singleton Objects
*/

/*
Singleton Objects
*/
// Created using the `new Object()` syntax.
// Only one instance of the object exists in memory.
// Changes to the object are reflected across all references to it.

/*
Non-Singleton Objects
*/
// Created using the object literal syntax `{}`.
// Each time `{}` is used, a new instance of the object is created.
// Changes to one object do not affect other instances.

/*
Code Example
*/
const tinderUser = new Object(); // Singleton Object
const tinderUser1 = {}; // Non-Singleton Object

console.log(tinderUser); // Output: {}
console.log(tinderUser1); // Output: {}

tinderUser.id = "123abc";
tinderUser.name = "Sammy";
tinderUser.isLoggedIn = false;

console.log(tinderUser); // Output: { id: '123abc', name: 'Sammy', isLoggedIn: false }
console.log(tinderUser1); // Output: {} (Remains unchanged)

/*
Nested Objects
*/
// Objects can contain other objects as properties, creating a nested structure.
// Use dot notation to access nested properties.

/*
Code Example
*/
const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userFullname: {
            fullname: "Amit Kumar",
            firstname: "Amit",
            lastname: "Kumar"
        }
    }
};

console.log(regularUser.fullname.userFullname.firstname); // Output: "Amit"

/*
Optional Chaining (`?.`)
*/
// Used to safely access nested properties without causing an error if a property is `undefined` or `null`.
// If any part of the chain is `undefined` or `null`, the expression short-circuits and returns `undefined`.

/*
Code Example
*/
console.log(regularUser.fullname?.userFullname?.firstname); // Output: "Amit"
// If `fullname` or `userFullname` is undefined, it won't throw an error.

/*
Merging Objects
*/
// Objects can be merged using `Object.assign()` or the spread operator (`...`).

/*
Using `Object.assign()`
*/
// Syntax: `Object.assign(target, source1, source2, ...)`
// Copies properties from source objects to the target object.
// The target object is modified and returned.

/*
Code Example
*/
const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "a", 4: "b" };
const obj4 = { 5: "a", 6: "b" };

const obj3 = Object.assign({}, obj1, obj2, obj4); // Target is an empty object
console.log(obj3); // Output: { '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }

/*
Using Spread Operator (`...`)
*/
// The spread operator is a modern and recommended way to merge objects.
// Creates a new object without modifying the original objects.

/*
Code Example
*/
const obj5 = { ...obj1, ...obj2 };
console.log(obj5); // Output: { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

/*
Arrays of Objects
*/
// Arrays can store multiple objects, and you can access their properties using indices.

/*
Code Example
*/
const users = [
    {}, // Empty object
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 2,
        email: "chatgpt@gmail.com"
    }
];

console.log(users[1].email); // Output: "h@gmail.com"

/*
Object Methods
*/
// JavaScript provides built-in methods to work with objects.

/*
`Object.keys()`
*/
// Returns an array of the object's keys.

/*
`Object.values()`
*/
// Returns an array of the object's values.

/*
`Object.entries()`
*/
// Returns an array of key-value pairs.

/*
`hasOwnProperty()`
*/
// Checks if an object has a specific property.

/*
Code Example
*/
console.log(tinderUser); // Output: { id: '123abc', name: 'Sammy', isLoggedIn: false }
console.log(typeof Object.keys(tinderUser)); // Output: "object" (Array is an object in JS)
console.log(typeof Object.values(tinderUser)); // Output: "object"
console.log(typeof Object.entries(tinderUser)); // Output: "object"

console.log(tinderUser.hasOwnProperty('isLoggedIn')); // Output: true
console.log(tinderUser.hasOwnProperty('isLogged')); // Output: false

/*
Key Takeaways
*/
// 1. Singleton vs Non-Singleton:
//    - Singleton: `new Object()` creates a single instance.
//    - Non-Singleton: `{}` creates a new instance each time.

// 2. Nested Objects:
//    - Use dot notation to access nested properties.
//    - Optional chaining (`?.`) prevents errors when accessing undefined properties.

// 3. Merging Objects:
//    - Use `Object.assign()` or the spread operator (`...`).

// 4. Object Methods:
//    - `Object.keys()`, `Object.values()`, `Object.entries()`, and `hasOwnProperty()` are useful for working with objects.

/*
Use Case for Singleton Objects
*/
// Use Case: When you need a single shared instance of an object across your application (e.g., a configuration object or a shared state).

/*
Example
*/
const config = new Object();
config.apiUrl = "https://api.example.com";
config.timeout = 5000;

// Access the same instance everywhere
console.log(config.apiUrl); // Output: "https://api.example.com"