/*
==================================================
Q1: Does JavaScript have classes?
==================================================
*/

// Yes, JavaScript has classes. However, they are primarily syntactic sugar over JavaScript's existing prototype-based inheritance.
// Classes were introduced in ES6 (ECMAScript 2015) to make it easier to work with OOP concepts.

/*
==================================================
JavaScript and Classes
==================================================
*/

// JavaScript is a prototype-based language, but it supports OOP principles through:
// 1. Object literals
// 2. Constructor functions
// 3. Prototypes
// 4. Classes (introduced in ES6)

/*
==================================================
OOP (Object-Oriented Programming)
==================================================
*/

// OOP is a programming paradigm based on the concept of "objects," which can contain:
// - Data (properties)
// - Code (methods)

/*
==================================================
4 Pillars of OOP
==================================================
*/

// 1. Abstraction:
//    - Hiding complex implementation details and showing only the necessary features.
//    - Example: Using a function to perform a task without knowing its internal logic.

// 2. Encapsulation:
//    - Wrapping data and methods into a single unit (e.g., a class).
//    - Example: Using private properties and methods in a class.

// 3. Inheritance:
//    - A class can inherit properties and methods from another class.
//    - Example: A `Car` class inheriting from a `Vehicle` class.

// 4. Polymorphism:
//    - The ability of an object to take on many forms.
//    - Example: A method in a child class overriding a method in the parent class.

/*
==================================================
Objects in JavaScript
==================================================
*/

// Objects are collections of properties and methods.
// Example:
const user = {
  name: "John",
  age: 30,
  greet: function () {
    console.log(`Hello, my name is ${this.name}`);
  },
};

// Methods like `toLowerCase()` and `toUpperCase()` are built-in methods for strings.
const text = "Hello World";
console.log(text.toLowerCase()); // "hello world"
console.log(text.toUpperCase()); // "HELLO WORLD"

/*
==================================================
Why Use OOP?
==================================================
*/

// 1. Modularity: Code is organized into reusable components (objects/classes).
// 2. Maintainability: Easier to debug and update code.
// 3. Reusability: Inheritance allows code reuse.
// 4. Scalability: Easier to manage large codebases.

/*
==================================================
Parts of OOP in JavaScript
==================================================
*/

// 1. Object Literal:
//    - Simplest way to create an object.
//    - Example:
const person = {
  name: "Alice",
  age: 25,
  greet: function () {
    console.log(`Hi, I'm ${this.name}`);
  },
};

// 2. Constructor Function:
//    - A function used to create objects.
//    - Example:
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.greet = function () {
    console.log(`Hi, I'm ${this.name}`);
  };
}
const alice = new Person("Alice", 25);
alice.greet(); // "Hi, I'm Alice"

// 3. Prototypes:
//    - Every object in JavaScript has a prototype, which is an object itself.
//    - Prototypes allow objects to inherit properties and methods.
//    - Example:
Person.prototype.sayHello = function () {
  console.log(`Hello, I'm ${this.name}`);
};
alice.sayHello(); // "Hello, I'm Alice"

// 4. Classes:
//    - Introduced in ES6, classes are syntactic sugar over constructor functions and prototypes.
//    - Example:
class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hi, I'm ${this.name}`);
  }
}
const bob = new User("Bob", 30);
bob.greet(); // "Hi, I'm Bob"

// 5. Instances (new, this):
//    - Instances are objects created from a class or constructor function.
//    - The `new` keyword is used to create an instance.
//    - The `this` keyword refers to the current instance.

/*
==================================================
Interview Questions
==================================================
*/

// 1. Does JavaScript have classes?
//    - Yes, JavaScript has classes, but they are syntactic sugar over prototype-based inheritance.

// 2. What are the 4 pillars of OOP?
//    - Abstraction, Encapsulation, Inheritance, and Polymorphism.

// 3. What is the difference between a class and an object?
//    - A class is a blueprint for creating objects, while an object is an instance of a class.

// 4. What is the purpose of the `new` keyword?
//    - The `new` keyword is used to create an instance of a class or constructor function.

// 5. What is the `this` keyword in JavaScript?
//    - The `this` keyword refers to the current instance of an object.

// 6. What is a prototype in JavaScript?
//    - A prototype is an object from which other objects inherit properties and methods.

// 7. How does inheritance work in JavaScript?
//    - Inheritance is achieved using prototypes or classes. A child class can inherit properties and methods from a parent class.

// 8. What is polymorphism in JavaScript?
//    - Polymorphism allows a method to behave differently based on the object that calls it.

/*
==================================================
Best Practices
==================================================
*/

// 1. Use classes for better code organization and readability.
// 2. Use encapsulation to hide implementation details.
// 3. Use inheritance to reuse code and avoid duplication.
// 4. Use polymorphism to write flexible and reusable code.

/*
==================================================
End of Notes
==================================================
*/
