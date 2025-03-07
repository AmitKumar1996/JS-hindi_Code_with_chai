/*
Understanding the Document Object Model (DOM) in JavaScript
*/

/*
1. What is the DOM?
*/
// The DOM (Document Object Model) is a programming interface for web documents.
// It represents the structure of an HTML document as a tree of objects, where each object corresponds to a part of the document (e.g., elements, attributes, text).

/*
Key Points:
- The DOM allows JavaScript to interact with and manipulate HTML and CSS.
- It provides a structured representation of the document.
- Changes to the DOM are reflected in the browser's rendering of the page.
*/

/*
2. DOM Tree Structure
*/
// The DOM represents an HTML document as a tree of nodes.
// Each node is an object with properties and methods.

/*
Example: DOM Tree
*/
/*
<html>
  <head>
    <title>My Page</title>
  </head>
  <body>
    <h1>Hello, World!</h1>
    <p>This is a paragraph.</p>
  </body>
</html>
*/

/*
Key Points:
- The `document` object is the root of the DOM tree.
- Elements like `<html>`, `<head>`, `<body>`, `<h1>`, and `<p>` are nodes in the tree.
- Text inside elements (e.g., "Hello, World!") is also a node.
*/

/*
3. Accessing DOM Elements
*/
// JavaScript provides methods to access and manipulate DOM elements.

/*
Example: Accessing Elements
*/
// Access by ID
const heading1 = document.getElementById("heading");
console.log(heading1); // Output: <h1 id="heading">Hello, World!</h1>

// Access by Class Name
const paragraphs = document.getElementsByClassName("text");
console.log(paragraphs); // Output: HTMLCollection of elements with class "text"

// Access by Tag Name
const headings = document.getElementsByTagName("h1");
console.log(headings); // Output: HTMLCollection of <h1> elements

// Access by CSS Selector
const firstParagraph = document.querySelector("p");
console.log(firstParagraph); // Output: First <p> element

const allParagraphs = document.querySelectorAll("p");
console.log(allParagraphs); // Output: NodeList of all <p> elements

/*
Key Points:
- `getElementById`: Returns a single element by its ID.
- `getElementsByClassName`: Returns a collection of elements by class name.
- `getElementsByTagName`: Returns a collection of elements by tag name.
- `querySelector`: Returns the first element matching a CSS selector.
- `querySelectorAll`: Returns a NodeList of all elements matching a CSS selector.
*/

/*
4. Manipulating DOM Elements
*/
// JavaScript allows you to modify the content, attributes, and styles of DOM elements.

/*
Example: Modifying Content
*/
const heading = document.getElementById("heading");
heading.textContent = "Welcome to My Page"; // Change text content
heading.innerHTML = "<em>Welcome</em> to My Page"; // Change HTML content

/*
Example: Modifying Attributes
*/
const image = document.getElementById("myImage");
image.src = "new-image.jpg"; // Change the `src` attribute
image.alt = "A new image"; // Change the `alt` attribute

/*
Example: Modifying Styles
*/
const paragraph = document.querySelector("p");
paragraph.style.color = "blue"; // Change text color
paragraph.style.fontSize = "20px"; // Change font size

/*
Key Points:
- Use `textContent` or `innerHTML` to modify element content.
- Use `element.attribute` to modify element attributes.
- Use `element.style` to modify inline CSS styles.
*/

/*
5. Adding and Removing Elements
*/
// You can dynamically add or remove elements from the DOM.

/*
Example: Adding Elements
*/
const newParagraph = document.createElement("p"); // Create a new <p> element
newParagraph.textContent = "This is a new paragraph."; // Set its content
document.body.appendChild(newParagraph); // Add it to the end of the <body>

/*
Example: Removing Elements
*/
const oldParagraph = document.getElementById("oldParagraph");
oldParagraph.remove(); // Remove the element from the DOM

/*
Key Points:
- Use `createElement` to create new elements.
- Use `appendChild` or `insertBefore` to add elements to the DOM.
- Use `remove` to remove elements from the DOM.
*/

/*
6. Event Handling
*/
// JavaScript allows you to handle user interactions (e.g., clicks, keypresses) using event listeners.

/*
Example: Adding an Event Listener
*/
const button = document.getElementById("myButton");

button.addEventListener("click", () => {
    console.log("Button clicked!");
});

/*
Key Points:
- Use `addEventListener` to attach event handlers to elements.
- Common events include `click`, `mouseover`, `keydown`, etc.
*/

/*
7. Real-Life Example: Dynamic Form Validation
*/
// Use the DOM to validate user input in real-time.

/*
Example: Form Validation
*/
const form = document.getElementById("myForm");
const input = document.getElementById("myInput");

form.addEventListener("submit", (event) => {
    if (input.value === "") {
        event.preventDefault(); // Prevent form submission
        alert("Input cannot be empty!");
    }
});

/*
Key Points:
- Use the DOM to interact with form elements.
- Use `event.preventDefault()` to stop form submission if validation fails.
*/

/*
8. Summary of Key Concepts
*/
// 1. DOM:
//    - Represents an HTML document as a tree of objects.
//    - Allows JavaScript to interact with and manipulate the document.

// 2. Accessing Elements:
//    - Use methods like `getElementById`, `querySelector`, etc.

// 3. Manipulating Elements:
//    - Modify content, attributes, and styles using JavaScript.

// 4. Adding/Removing Elements:
//    - Use `createElement`, `appendChild`, and `remove`.

// 5. Event Handling:
//    - Use `addEventListener` to handle user interactions.

// 6. Real-Life Use Cases:
//    - Dynamic content updates, form validation, interactive UIs.

/*
Best Practices
*/
// 1. Use `querySelector` and `querySelectorAll` for flexible element selection.
// 2. Minimize direct DOM manipulation for better performance.
// 3. Use event delegation for handling events on multiple elements.



