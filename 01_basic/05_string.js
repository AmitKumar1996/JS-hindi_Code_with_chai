// 📌 SHORT NOTES ON STRINGS IN JAVASCRIPT


// 1️⃣ String Declaration
let myName = "Dev Amit";   // Using double quotes
let myName2 = 'Dev Amit';  // Using single quotes
let myName3 = `Dev Amit`;  // Using backticks (Template Literals) ✅ why we use this because we can use variable inside this string Interpolation 
// what is string interpolation?
// String interpolation is the process of evaluating string literals containing one or more placeholders.
// These placeholders are replaced with corresponding values to generate the final string.
// String interpolation is also known as string templating.
// Benefits of String Interpolation:
// ✅ Easier to read and write
// ✅ Supports multi-line strings
// ✅ Allows embedding variables directly inside strings
// ✅ Supports expressions and functions inside placeholders
// ✅ Improves code maintainability and readability
// ✅ Reduces the need for string concatenation
// ✅ Enhances code consistency and quality
// ✅ Facilitates internationalization and localization
// ✅ Improves developer productivity and efficiency
// ✅ Supports dynamic content generation
// ✅ Enables conditional and loop-based string generation
// ✅ Enhances error handling and debugging
// ✅ Simplifies string formatting and manipulation
// ✅ Supports advanced string operations and transformations like escaping, encoding, etc.
// ✅ Improves code performance and optimization
// ✅ Enhances code portability and compatibility

const gameName = new String(`PUBG`); // Using String object
console.log(gameName); // String { 'PUBG' } (Object)
console.log(typeof gameName); // object
console.log(gameName[0]); // P
console.log(gameName._proto_); // 4
console.log(gameName.length); // 4
console.log(gameName.toUpperCase()); // PUBG
console.log(gameName.toLowerCase()); // pubg
console.log(gameName.includes("P")); // true
console.log(gameName.indexOf("U")); // 2
console.log(gameName.replace("PUBG", "COD")); // COD
console.log(gameName.split("")); // [ 'P', 'U', 'B', 'G' ]
console.log(gameName.slice(0, 2)); // PU
console.log(gameName.substring(0, 2)); // PU
console.log(gameName.substr(0, 2)); // PU
console.log(gameName.trim()); // PUBG
console.log(gameName.concat(" Mobile")); // PUBG Mobile
console.log(gameName.charAt(0)); // P
console.log(gameName.charCodeAt(0)); // 80 (ASCII value) 
console.log(gameName.startsWith("P")); // true
console.log(gameName.endsWith("G")); // true
console.log(gameName.repeat(2)); // PUBGPUBG
console.log(gameName.search("U")); // 1
console.log(gameName.match("U")); // [ 'U', index: 1, input: 'PUBG', groups: undefined ]
console.log(gameName.padStart(10, "0")); // 000000PUBG
console.log(gameName.padEnd(10, "0")); // PUBG000000
console.log(gameName.valueOf()); // PUBG
console.log(gameName.toString()); // PUBG
console.log(gameName.toLocaleUpperCase()); // PUBG
console.log(gameName.toLocaleLowerCase()); // pubg
console.log(gameName.normalize()); // PUBG
console.log(gameName.codePointAt(0)); // 80
console.log(gameName.localeCompare("PUBG")); // 0
console.log(gameName.trimStart()); // PUBG
console.log(gameName.trimEnd()); // PUBG
console.log(gameName.trimLeft()); // PUBG       // trimLeft() is an alias of trimStart()
console.log(gameName.trimRight()); // PUBG      // trimRight() is an alias of trimEnd()
console.log(gameName.valueOf()); // PUBG
console.log(gameName.toString()); // PUBG // toString() is an alias of valueOf()
console.log(gameName.toLocaleUpperCase()); // PUBG  // toLocaleUpperCase() is an alias of toUpperCase()
console.log(gameName.toLocaleLowerCase()); // pubg // toLocaleLowerCase() is an alias of toLowerCase()

// benifits of using String object
// ✅ Provides additional properties and methods
// ✅ Supports string manipulation and formatting
// ✅ Enables string comparison and conversion
// ✅ Facilitates string validation and verification
// ✅ Enhances string processing and analysis
// ✅ Improves string handling and management





// 2️⃣ String Concatenation (Not Recommended)
console.log("Dev" + " Amit"); 
console.log(myName + " is a good person"); // Dev Amit is a good person 

// 3️⃣ Template Literals (Recommended) ✅
const repoCount = 100;
const name = "Dev Amit";
console.log(`Hello, my name is ${name} and my repo count is ${repoCount}`);  //Benifits of Template Literals
// ✅ Easier to read and write
// ✅ Supports multi-line strings
// ✅ Allows embedding variables directly inside strings
// ✅ Supports expressions and functions inside placeholders
// ✅ Improves code maintainability and readability
// ✅ Reduces the need for string concatenation
// ✅ Enhances code consistency and quality
// ✅ Facilitates internationalization and localization
// ✅ Improves developer productivity and efficiency
// ✅ Supports dynamic content generation
// ✅ Enables conditional and loop-based string generation
// ✅ Enhances error handling and debugging 

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
