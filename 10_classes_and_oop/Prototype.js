// ============================================
// Code Example
// ============================================

// let myName = "Amit         "
// let mychannel = "Chai "

// console.log( myName.truelength )

let myHeros = [ "thor", "spiderman" ]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function ()
    {
        console.log( `Spidy power is ${ this.spiderman }` );
    }
}

Object.prototype.hitesh = function ()
{
    console.log( `hitesh is present in all objects` );
}

Array.prototype.heyHitesh = function ()
{
    console.log( `hitesh says Hello` );
}

heroPower.hitesh()
myHeros.hitesh()
//heroPower.heyHitesh()

// Inheritance

const USer = {
    name: "Amit",
    email: "amit@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// Modern Syntax
Object.setPrototypeOf( TeachingSupport, Teacher )

let anotherUserName = "chaiAurCode       "

String.prototype.trueLength = function ()
{
    console.log( `True length is: ${ this.trim().length }` );
}

anotherUserName.trueLength()
"hitesh".trueLength()
"iceTea".trueLength()

// ============================================
// Detailed Notes
// ============================================

/*
1. String Manipulation and Prototype Extension
   - The commented code shows an attempt to access a property `truelength` on a string.
   - `truelength` is not a built-in property, so it would throw an error if uncommented.

2. Arrays and Objects
   - `myHeros` is an array containing two strings: `"thor"` and `"spiderman"`.
   - `heroPower` is an object with properties `thor` and `spiderman`, and a method `getSpiderPower`.
   - `getSpiderPower` logs the power of Spiderman using template literals.

3. Prototype Extension
   - A method `hitesh` is added to `Object.prototype`, making it available to all objects.
   - A method `heyHitesh` is added to `Array.prototype`, making it available to all arrays.

4. Using Prototype Methods
   - `heroPower.hitesh()` logs `"hitesh is present in all objects"`.
   - `myHeros.hitesh()` also logs `"hitesh is present in all objects"` because arrays are objects.
   - `heroPower.heyHitesh()` is commented out because `heyHitesh` is not available on `Object.prototype`.

5. Inheritance
   - Four objects are created: `USer`, `Teacher`, `TeachingSupport`, and `TASupport`.
   - `TASupport` inherits from `TeachingSupport` using `__proto__`.
   - `Teacher` inherits from `USer` using `__proto__`.
   - `Object.setPrototypeOf(TeachingSupport, Teacher)` sets `TeachingSupport`'s prototype to `Teacher`.

6. String Prototype Extension
   - A method `trueLength` is added to `String.prototype` to trim strings and log their length.
   - `anotherUserName.trueLength()` logs `"True length is: 11"`.
   - `"hitesh".trueLength()` logs `"True length is: 6"`.
   - `"iceTea".trueLength()` logs `"True length is: 6"`.

Key Concepts:
- Prototype Inheritance: Adding methods to `Object.prototype` and `Array.prototype`.
- Inheritance: Using `__proto__` and `Object.setPrototypeOf`.
- String Manipulation: Trimming strings and calculating their length.
- Object-Oriented Programming: Creating objects, methods, and inheritance relationships.
*/

// ============================================
// Interview Questions
// ============================================

/*
1. What is a prototype in JavaScript?
   - A prototype is an object from which other objects inherit properties and methods.

2. How does prototypal inheritance work in JavaScript?
   - Objects inherit properties and methods from their prototype. If a property/method is not found on an object, JavaScript looks up the prototype chain.

3. What is the difference between `__proto__` and `prototype`?
   - `__proto__` is a property of an object that points to its prototype.
   - `prototype` is a property of a function used to set the prototype of objects created by that function.

4. How do you add a method to all instances of an object?
   - By adding the method to the object's prototype, e.g., `Object.prototype.newMethod = function() {}`.

5. What is the difference between classical and prototypal inheritance?
   - Classical inheritance is class-based (e.g., Java, C++).
   - Prototypal inheritance is object-based (e.g., JavaScript).

6. How do you create an object in JavaScript?
   - Using object literals: `const obj = {}`.
   - Using constructors: `const obj = new Object()`.
   - Using `Object.create()`: `const obj = Object.create(proto)`.

7. What is the `this` keyword in JavaScript?
   - `this` refers to the object that the function is a property of. Its value depends on how the function is called.

8. How do you trim a string in JavaScript?
   - Using the `trim()` method: `"  hello  ".trim()` results in `"hello"`.

9. How do you calculate the length of a string?
   - Using the `length` property: `"hello".length` results in `5`.

10. What is the purpose of adding a custom method to `String.prototype`?
    - To extend the functionality of all string instances, e.g., adding a `trueLength` method.

11. What is the difference between `Object.setPrototypeOf` and `__proto__`?
    - `Object.setPrototypeOf` is a modern and recommended way to set the prototype of an object.
    - `__proto__` is a legacy way to access or set the prototype.

12. What are the potential downsides of modifying built-in prototypes?
    - It can lead to conflicts if multiple libraries modify the same prototype.
    - It can make debugging harder.

13. How do you check if an object has a specific property?
    - Using `hasOwnProperty`: `obj.hasOwnProperty('property')`.

14. What is the prototype chain?
    - The prototype chain is a series of links between objects, where each object points to its prototype.

15. What is the difference between `Object.create()` and `new`?
    - `Object.create()` creates a new object with a specified prototype.
    - `new` creates an instance of a constructor function and sets its prototype to the constructor's `prototype`.
*/

// ============================================
// Potential Improvements
// ============================================

/*
1. Error Handling: Add checks to ensure methods like `trueLength` are only called on strings.
2. Modern Syntax: Use `class` and `extends` for inheritance instead of `__proto__`.
3. Code Organization: Group related functionality into modules or classes for better maintainability.
*/

// ============================================
// End of Notes
// ============================================