/*
What is Destructuring in Arrays and Objects, and Their Differences
*/

/*
Destructuring in Objects
*/
// Destructuring allows you to extract properties from objects into variables.
// This reduces repetitive code and makes it easier to work with object properties.

/*
Example: Without Destructuring
*/
const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "Amit"
};

console.log(course.courseInstructor); // Output: "Amit"

/*
Example: With Destructuring
*/
const { courseInstructor } = course;
console.log(courseInstructor); // Output: "Amit"

/*
Renaming Variables During Destructuring
*/
const { courseInstructor: instructor } = course;
console.log(instructor); // Output: "Amit"

/*
Key Points:
- Destructuring simplifies accessing object properties.
- It reduces repetitive code.
- You can rename variables during destructuring.
*/

/*
Destructuring in Arrays
*/
// Destructuring works similarly for arrays, but it uses square brackets `[]`.

/*
Example: Array Destructuring
*/
const colors = ["red", "green", "blue"];
const [firstColor, secondColor] = colors;

console.log(firstColor); // Output: "red"
console.log(secondColor); // Output: "green"

/*
Key Points:
- Array destructuring extracts values by position.
- It is useful for working with arrays of data.
*/

/*
Difference Between Object and Array Destructuring
*/
// - Object destructuring uses `{}` and extracts properties by name.
// - Array destructuring uses `[]` and extracts values by position.

/*
Practical Use Case: Destructuring in Function Parameters
*/
const navbar = ({ company }) => {
    console.log(company);
};

navbar({ company: "hitesh" }); // Output: "hitesh"

/*
Key Points:
- Destructuring can be used in function parameters to extract specific values.
- It makes function calls cleaner and more readable.
*/

/*
What is API Concepts in JavaScript
*/
// API (Application Programming Interface) is a way for two systems to communicate.
// In JavaScript, APIs are often used to fetch data from servers.

/*
Key Points:
- APIs allow communication between systems.
- They are commonly used to fetch data from servers.
*/

/*
JSON Format
*/
// JSON (JavaScript Object Notation) is a lightweight data format used for APIs.
// It looks like JavaScript objects but has stricter rules:
// - Keys must be in double quotes.
// - Values can be strings, numbers, arrays, objects, booleans, or null.

/*
Example: JSON Format
*/
/*
{
    "name": "hitesh",
    "coursename": "JS in hindi",
    "price": "999",
    "courseInstructor": "Amit Kumar"
}
*/
/*
Key Points:
- JSON is a lightweight data format.
- It is commonly used in APIs.
- Keys must be in double quotes.
*/

/*
Data in Arrays Format
*/
// APIs often return data in arrays of objects.

/*
Example: Array of Objects
*/

[
    {
        "name": "hitesh",
        "coursename": "JS in hindi",
        "price": "999"
    },
    {
        "name": "Amit",
        "coursename": "React in hindi",
        "price": "1999"
    }
]

/*
Key Points:
- APIs often return data as arrays of objects.
- Arrays of objects are easy to iterate and work with.
*/

/*
Tree Format
*/
// Some APIs return nested data structures (trees).
// Example:
/*
{
    "user": {
        "name": "hitesh",
        "courses": [
            {
                "name": "JS in hindi",
                "price": "999"
            },
            {
                "name": "React in hindi",
                "price": "1999"
            }
        ]
    }
}
*/
/*
Key Points:
- APIs can return nested data structures (trees).
- Trees are useful for representing hierarchical data.
*/

/*
Random User API: How to Understand Data
*/
// The Random User API (https://randomuser.me/) is a popular API for generating random user data.
// Example API Response:
/*
{
    "results": [
        {
            "gender": "male",
            "name": {
                "title": "Mr",
                "first": "John",
                "last": "Doe"
            },
            "location": {
                "street": {
                    "number": 123,
                    "name": "Main St"
                },
                "city": "New York",
                "state": "New York",
                "country": "USA"
            },
            "email": "john.doe@example.com"
        }
    ]
}
*/
/*
Key Points:
- The Random User API generates random user data.
- API responses often include nested objects and arrays.
*/

/*
Tools to Help Understand API Data
*/
// 1. JSON Formatter: Formats raw JSON data into a readable structure.
//    - Online Tool: https://jsonformatter.curiousconcept.com/
// 2. Postman: A tool to test and debug APIs.
//    - Download: https://www.postman.com/
// 3. Browser Developer Tools: Use the "Network" tab to inspect API responses.

/*
Key Points:
- JSON formatters help visualize JSON data.
- Postman is a powerful tool for testing APIs.
- Browser developer tools can inspect API responses.
*/

/*
Example: Using JSON Formatter
*/
// Paste raw JSON data into a JSON formatter to visualize its structure.
// Example Input:
/*
{
    "name": "hitesh",
    "coursename": "JS in hindi",
    "price": "999"
}
*/
// Formatted Output:
/*
{
    "name": "hitesh",
    "coursename": "JS in hindi",
    "price": "999"
}
*/

/*
Key Points:
- JSON formatters make raw JSON data easier to read.
- They are essential for debugging and understanding API responses.
*/


/**
Key Points Added in the Code:
Destructuring:

Simplifies accessing object properties and array values.

Reduces repetitive code.

Can be used in function parameters.

APIs:

Used to fetch data from servers.

Commonly return data in JSON format.

JSON:

A lightweight data format.

Keys must be in double quotes.

Tools:

JSON formatters, Postman, and browser developer tools help understand and debug API data.


 */