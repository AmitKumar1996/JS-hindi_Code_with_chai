/*
==================================================
Prototypes in JavaScript
==================================================
*/

// In JavaScript, every function and object has a `prototype` property.
// Prototypes allow objects to inherit properties and methods from other objects.

/*
==================================================
Example: Adding Properties and Methods to Functions
==================================================
*/

// Functions in JavaScript are also objects, so you can add properties and methods to them.
function multiplyBy5( num )
{
    return num * 5;
}

// Adding a property to the function
multiplyBy5.power = 2;

console.log( multiplyBy5( 5 ) ); // Output: 25
console.log( multiplyBy5.power ); // Output: 2
console.log( multiplyBy5.prototype ); // Output: {}

/*
==================================================
Constructor Functions and Prototypes
==================================================
*/

// Constructor functions are used to create objects with shared properties and methods.
// Methods can be added to the prototype to avoid duplicating them in each instance.

// Example:
function createUser( username, score )
{
    this.username = username;
    this.score = score;
}

// Adding methods to the prototype
createUser.prototype.increment = function ()
{
    this.score++; // Increment the score
};

createUser.prototype.printMe = function ()
{
    console.log( `Price is ${ this.score }` );
};

/*
==================================================
Creating Instances
==================================================
*/

// Use the `new` keyword to create instances of the constructor function.
const chai = new createUser( "chai", 25 );
const tea = new createUser( "tea", 250 );

// Calling methods on instances
chai.printMe(); // Output: "Price is 25"
tea.printMe(); // Output: "Price is 250"

// Incrementing the score
chai.increment();
chai.printMe(); // Output: "Price is 26"

/*
==================================================
Common Mistakes
==================================================
*/

// 1. Forgetting the `new` keyword:
const teaWithoutNew = createUser( "tea", 250 ); // Without `new`, `this` refers to the global object (or undefined in strict mode).
console.log( teaWithoutNew ); // Output: undefined

// 2. Not using `this` correctly:
// If you forget `this` in methods, it will not refer to the instance.
createUser.prototype.wrongIncrement = function ()
{
    score++; // This will throw an error because `score` is not defined.
};

/*
==================================================
Interview Questions
==================================================
*/

// 1. What is a prototype in JavaScript?
//    - A prototype is an object from which other objects inherit properties and methods.

// 2. What is the purpose of the `prototype` property?
//    - The `prototype` property allows you to add methods and properties to all instances of a constructor function.

// 3. What happens if you forget the `new` keyword when creating an instance?
//    - Without `new`, `this` refers to the global object (or undefined in strict mode), and the instance is not created properly.

// 4. How do you add methods to a constructor function?
//    - Methods can be added to the `prototype` of the constructor function.

// 5. What is the difference between `__proto__` and `prototype`?
//    - `prototype` is a property of a constructor function, while `__proto__` is a property of an object that points to its prototype.

// 6. Why use prototypes?
//    - Prototypes allow you to share methods and properties across instances, reducing memory usage and improving performance.

/*
==================================================
Best Practices
==================================================
*/

// 1. Use constructor functions to create objects with shared properties and methods.
// 2. Add methods to the prototype to avoid duplicating them in each instance.
// 3. Always use the `new` keyword when creating instances of a constructor function.
// 4. Use `this` correctly to refer to the current instance.

/*
==================================================
Example: Prototype Inheritance
==================================================
*/

function Person( name, age )
{
    this.name = name;
    this.age = age;
}

Person.prototype.greet = function ()
{
    console.log( `Hello, my name is ${ this.name }` );
};

function Student( name, age, grade )
{
    Person.call( this, name, age ); // Inherit properties from Person
    this.grade = grade;
}

// Inherit methods from Person
Student.prototype = Object.create( Person.prototype );
Student.prototype.constructor = Student;

Student.prototype.study = function ()
{
    console.log( `${ this.name } is studying` );
};

const john = new Student( "John", 20, "A" );
john.greet(); // Output: "Hello, my name is John"
john.study(); // Output: "John is studying"

/*
==================================================
End of Notes
==================================================
*/

/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/