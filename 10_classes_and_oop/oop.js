/*
==================================================
Objects in JavaScript
==================================================
*/

// Objects are collections of properties (key-value pairs) and methods (functions).
// Example:
const user = {
    username: "Amit",
    loginCount: 8,
    signedIn: true,

    // Method to get user details
    getUserDetails: function ()
    {
        console.log( "Got user details from database" );
        console.log( `Username: ${ this.username }` );
        console.log( this ); // `this` refers to the current object (user)
    },
};

// Accessing object properties
console.log( user.username ); // Output: "Amit"

// Calling object methods
console.log( user.getUserDetails() );
// Output:
// "Got user details from database"
// "Username: Amit"
// { username: "Amit", loginCount: 8, signedIn: true, getUserDetails: [Function] }

// `this` in the global context
console.log( this ); // Output: {} (empty object in Node.js) or `window` in the browser

/*
==================================================
Constructor Functions
==================================================
*/

// Constructor functions are used to create multiple objects with the same structure.
// They are called with the `new` keyword.

// Example:
function User( username, loginCount, isLoggedIn )
{
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    // Methods can also be added (but it's better to use prototypes for methods)
    this.greet = function ()
    {
        console.log( `Welcome, ${ this.username }` );
    };

    // `this` refers to the newly created object
    return this; // Explicitly returning `this` is optional
}

// Creating instances using the `new` keyword
const userOne = new User( "Amit", 12, true );
const userTwo = new User( "AmitTheCoder", 11, false );

console.log( userOne );
// Output: User { username: "Amit", loginCount: 12, isLoggedIn: true, greet: [Function] }

console.log( userTwo );
// Output: User { username: "AmitTheCoder", loginCount: 11, isLoggedIn: false, greet: [Function] }

// Accessing the constructor property
console.log( userOne.constructor ); // Output: [Function: User]
// The `constructor` property refers to the function that created the instance.

/*
==================================================
The `new` Keyword
==================================================
*/

// The `new` keyword does the following:
// 1. Creates an empty object (`{}`).
// 2. Sets `this` to point to the newly created object.
// 3. Executes the constructor function.
// 4. Returns the newly created object (unless another object is explicitly returned).

// Example:
const userThree = new User( "John", 5, true );
console.log( userThree ); // Output: User { username: "John", loginCount: 5, isLoggedIn: true }

/*
==================================================
The `instanceof` Operator
==================================================
*/

// The `instanceof` operator checks if an object is an instance of a specific constructor function or class.
// Example:
console.log( userOne instanceof User ); // Output: true
console.log( userOne instanceof Object ); // Output: true (all objects inherit from `Object`)

/*
==================================================
Interview Questions
==================================================
*/

// 1. What is an object in JavaScript?
//    - An object is a collection of properties (key-value pairs) and methods (functions).

// 2. What is a constructor function?
//    - A constructor function is used to create multiple objects with the same structure.
//    - It is called with the `new` keyword.

// 3. What does the `new` keyword do?
//    - The `new` keyword:
//      1. Creates an empty object.
//      2. Sets `this` to point to the new object.
//      3. Executes the constructor function.
//      4. Returns the new object.

// 4. What is the `this` keyword in JavaScript?
//    - The `this` keyword refers to the current object.
//    - In a constructor function, `this` refers to the newly created object.

// 5. What is the `constructor` property?
//    - The `constructor` property refers to the function that created the object.

// 6. What is the `instanceof` operator?
//    - The `instanceof` operator checks if an object is an instance of a specific constructor function or class.

// 7. Why use constructor functions?
//    - Constructor functions allow you to create multiple objects with the same structure and behavior.

// 8. What is the difference between an object literal and a constructor function?
//    - An object literal creates a single object, while a constructor function can create multiple objects with the same structure.

/*
==================================================
Best Practices
==================================================
*/

// 1. Use constructor functions to create multiple objects with the same structure.
// 2. Use the `new` keyword to create instances of constructor functions.
// 3. Add methods to the prototype of a constructor function to avoid duplicating methods in each instance.
// 4. Use `instanceof` to check the type of an object.

/*
==================================================
Example: Adding Methods to Prototype
==================================================
*/

function User( username, loginCount, isLoggedIn )
{
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;
}

// Adding a method to the prototype
User.prototype.greet = function ()
{
    console.log( `Welcome, ${ this.username }` );
};

const userFour = new User( "Jane", 7, true );
userFour.greet(); // Output: "Welcome, Jane"

/*
==================================================
End of Notes
==================================================
*/