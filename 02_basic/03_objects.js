/*
# JavaScript Object Concepts & Singleton Pattern

## 1. Singleton Pattern
A singleton is an object that is instantiated only once and shared across the entire application.

### Creating Objects in JavaScript:
There are two main ways to create objects:
1. Object Literals → ❌ Not Singleton
2. Object Constructors (Object.create) → ✅ Singleton

### Object Literal (Not Singleton)
*/
const obj1 = { name: "Amit" };
const obj2 = { name: "Amit" };

console.log(obj1 === obj2); 
// Output: false (Both are different instances)

/*
- Each time an object is created using `{}`, a new instance is created.
- Even if the contents are the same, `obj1` and `obj2` are stored at different memory locations.

### Object Constructor (Singleton)
*/
const obj3 = Object.create({ name: "Amit" });
const obj4 = obj3; // Both references point to the same object

console.log(obj3 === obj4); 
// Output: true (Both reference the same instance)

/*
- `Object.create()` creates an object with a specified prototype and returns it.
- If assigned to another variable, both reference the same instance.

---

## 2. Object Literals
An object literal is a collection of key-value pairs.

### Example:
*/
const mySym = Symbol("key1"); // Creating a Symbol

const JsUser = {
    name: "Amit",
    "full name": "Amit Kumar",
    [mySym]: "myKey1", // Symbol as an object key
    age: 18,
    location: "Jaipur",
    email: "kumaramit@gmail.com",
    isLoggedIn: false,
    lastLoginDay: ["Monday", "Saturday"]
};

console.log(JsUser);

/*
#### Output:
{
  name: 'Amit',
  'full name': 'Amit Kumar',
  age: 18,
  location: 'Jaipur',
  email: 'kumaramit@gmail.com',
  isLoggedIn: false,
  lastLoginDay: [ 'Monday', 'Saturday' ],
  [Symbol(key1)]: 'myKey1'
}

### Accessing Object Properties
*/
console.log(JsUser["full name"]);  // Output: Amit Kumar
console.log(JsUser.email);         // Output: kumaramit@gmail.com
console.log(JsUser[mySym]);        // Output: myKey1
console.log(JsUser[1]);            // Output: undefined (Objects do not have numeric indices)

/*
### Modifying Object Properties
*/
JsUser.email = "amit@chatgpt.outlook";
console.log(JsUser.email); 
// Output: amit@chatgpt.outlook

/*
---

## 3. Freezing an Object (`Object.freeze`)
Once an object is frozen, its properties cannot be modified, added, or deleted.
*/
Object.freeze(JsUser);

JsUser.email = "amit@chatgpt.com";  // This won't change
console.log(JsUser.email);  
// Output: amit@chatgpt.outlook (Remains unchanged)

/*
- `Object.freeze()` prevents modification of existing properties.
- Any new properties cannot be added.

---

## 4. Adding Methods to Objects
Objects in JavaScript can have methods (functions inside objects).

### Adding Methods Dynamically
*/
JsUser.greeting = function() {
    console.log("Hello JS User");
};

console.log(JsUser.greeting); 
// Output: [Function: greeting]

console.log(JsUser.greeting());  
// Output: Hello JS User

/*
### Using `this` inside an Object
*/
JsUser.greetingTwo = function() {
    console.log(`Hello JS User ${this.name}`);
};

console.log(JsUser.greetingTwo());
// Output: Hello JS User Amit

/*
- `this` refers to the current object.
- Helps in dynamically accessing object properties.

---

## 5. `null` vs `undefined`
### null (Intentional Absence of Value)
- Explicitly assigned to a variable to indicate that it has no value.
- Used when we want to clear a variable.
*/
let myVar = null;
console.log(myVar);  // Output: null
console.log(typeof myVar);  // Output: object (JavaScript bug)

/*
> Important: `typeof null` is "object" due to a historical bug in JavaScript.

---

### undefined (Variable Declared but Not Assigned)
- A variable that has been declared but not assigned a value.
*/
let myVar2;
console.log(myVar2);  // Output: undefined
console.log(typeof myVar2);  // Output: undefined

/*
### Key Differences
| Feature                | null                | undefined           |
|------------------------|---------------------|---------------------|
| Type                   | Object (bug in JS)  | Undefined           |
| Assigned by Developer? | Yes                 | No                  |
| Indicates Absence of Value? | Yes         | No, it's uninitialized |
| Explicit Value?        | Yes                 | No                  |

### Example Comparison
*/
let a = null;
let b;

console.log(a === b);  // Output: false (Different types)
console.log(a == b);   // Output: true (Both are falsy)

/*
- `===` (Strict Equality) → `null !== undefined`
- `==` (Loose Equality) → `null == undefined` (because both are falsy)

---

# Interview Questions & Answers
### Q1: What is the difference between an Object Literal and `Object.create()`?
Answer:
- Object Literal (`{}`) creates a new object every time, so it is not a singleton.
- `Object.create()` creates an object with a specified prototype and can be a singleton.

### Q2: How do you use Symbols as Object Keys?
Answer:
*/
const obj = { [mySym]: "value" };
console.log(obj[mySym]);  
// Output: "value"

/*
- Symbols must be wrapped in `[]` when used as object keys.

### Q3: What happens if you modify a frozen object?
Answer:
*/
const frozenObj = { name: "Amit" };
Object.freeze(frozenObj);
frozenObj.name = "Kumar";  // ❌ This won't work
console.log(frozenObj.name);  
// Output: "Amit" (unchanged)

/*
### Q4: What is `null` vs `undefined`?
Answer:
- `null` → Explicitly set by the developer to indicate "no value".
- `undefined` → Automatically assigned when a variable is declared but not initialized.
*/