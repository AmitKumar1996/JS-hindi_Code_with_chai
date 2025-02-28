// 📌 SHORT NOTES ON STRINGS IN JAVASCRIPT


// 1️⃣ String Declaration
let myName = "Dev Amit";   // Using double quotes
let myName2 = 'Dev Amit';  // Using single quotes
let myName3 = `Dev Amit`;  // Using backticks (Template Literals)

// 2️⃣ String Concatenation (Not Recommended)
console.log("Dev" + " Amit"); 
console.log(myName + " is a good person"); // Dev Amit is a good person 

// 3️⃣ Template Literals (Recommended) ✅
const repoCount = 100;
const name = "Dev Amit";
console.log(`Hello, my name is ${name} and my repo count is ${repoCount}`);  

// --------------------------------------------------------------
// 🔹 IMPORTANT INTERVIEW QUESTIONS ON STRINGS
// --------------------------------------------------------------

// ❓ How are strings stored in JavaScript?
// ✅ Strings are immutable and stored in the heap memory.

// ❓ What is the difference between `+` (concatenation) and template literals?
// ✅ `+` is used for string concatenation but is less readable.
// ✅ Template literals `${}` allow embedding variables directly inside strings.

// ❓ Different ways to declare strings in JavaScript?
// ✅ Single (' '), Double (" "), and Backticks (` `) (Template Literals).

// ❓ Difference between `.length` and `.trim()`?
let text = "  Hello World  ";
console.log(text.length);     // 🔹 15 (Counts spaces too)
console.log(text.trim().length); // 🔹 11 (Removes spaces)

// ❓ How to check if a string contains a substring?
let str = "JavaScript is awesome";
console.log(str.includes("JavaScript"));  // 🔹 true
console.log(str.indexOf("is"));  // 🔹 11 (index position)

// ❓ What is string interpolation in JavaScript?
// ✅ It refers to using `${}` inside template literals to insert values dynamically.

// ❓ How to convert a string to uppercase/lowercase?
let sampleText = "hello World";
console.log(sampleText.toUpperCase()); // 🔹 "HELLO WORLD"
console.log(sampleText.toLowerCase()); // 🔹 "hello world"

// ❓ How to split a string into an array?
let sentence = "JavaScript is powerful";
console.log(sentence.split(" ")); // 🔹 ["JavaScript", "is", "powerful"]

// ❓ How to replace a word in a string?
let msg = "Hello Dev";
console.log(msg.replace("Dev", "Amit")); // 🔹 "Hello Amit"

// ❓ Difference between `slice()`, `substring()`, and `substr()`?
let strText = "JavaScript";
console.log(strText.slice(0, 4));   // 🔹 "Java" (Supports negative values)
console.log(strText.substring(0, 4)); // 🔹 "Java" (Does NOT support negatives)
console.log(strText.substr(0, 4));   // 🔹 "Java" (Extracts part based on length)

// --------------------------------------------------------------
