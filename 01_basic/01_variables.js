const accountId = 144553
let accountEmailId = "hitesh@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"
//accountId = 2   //Not allowed

accountEmailId = "hello@gamil.com"
console.log( accountId );
/*

prefer not use var  because of issue in block scope and functional scope
*/

let accountState;
console.table( [ accountId, accountEmailId, accountPassword, accountState, accountCity ] )




/*
===========================================
📌 DIFFERENCE BETWEEN var, let, AND const
===========================================

FEATURE                 | var                   | let               | const
------------------------------------------------------------------------------------
SCOPE                   | Function-scoped       | Block-scoped      | Block-scoped  
RE-DECLARATION          | ✅ Allowed            | ❌ Not Allowed     | ❌ Not Allowed  
GLOBAL OBJECT PROPERTY  | ✅ Added to window    | ❌ Not added       | ❌ Not added 
RE-ASSIGNMENT           | ✅ Allowed            | ✅ Allowed         | ❌ Not Allowed  
HOISTING                | ✅ Hoisted (undefined)| ✅ Hoisted (TDZ)   | ✅ Hoisted (TDZ)  

NOTES:
- TDZ (Temporal Dead Zone): `let` and `const` are hoisted but cannot be used before initialization.
- `var` is function-scoped, while `let` and `const` are block-scoped.
- Best Practice: Prefer `let` and `const` to avoid scope-related issues.
*/


// ====== Hoisting(Declaration) in JavaScript ======

// Hoisting is JavaScript's default behavior of moving declarations to the top.

// ---- Variable Hoisting ----

console.log(a); // undefined (declaration hoisted)
var a = 10;

var x;
console.log(x); // undefined
x = 10000;

// let & const are hoisted but in TDZ — can't access before initialization
let b = 20;
const c = 30;

// Variable assigned before declaration — works due to var hoisting
p = 1001;
console.log(p); // 1001
var p;

let blockScopedVarOutput;
{
    let blockScopedVar = "I am block scoped";
    blockScopedVarOutput = blockScopedVar;
}

// 🧾 Summary using console.table
console.table([
  { Name: "a",      Type: "var",   AccessBeforeInit: "undefined",     Notes: "Hoisted; declared later" },
  { Name: "x",      Type: "var",   AccessBeforeInit: "undefined",     Notes: "Declared then used" },
  { Name: "b",      Type: "let",   AccessBeforeInit: "Error",         Notes: "TDZ - Cannot access before init" },
  { Name: "c",      Type: "const", AccessBeforeInit: "Error",         Notes: "TDZ - Cannot access before init" },
  { Name: "p",      Type: "var*",  AccessBeforeInit: "1001",          Notes: "Assigned before var declaration" },
  { Name: "blockScopedVar", Type: "let", AccessBeforeInit: blockScopedVarOutput, Notes: "Scoped within block" }
]);

// ---- Function Hoisting ----
greet(); // Works because function declarations are hoisted
function greet()
{
    console.log( "Hello, Hoisting!" );
}

// Function expressions are NOT hoisted
 //sayHello(); // TypeError: sayHello is not a function


var sayHello = function Amit()
{
    console.log( "Amit Hi!" );
};
Amit();

// ====== Summary ======
// ✅ var is hoisted with 'undefined'
// ✅ let & const are hoisted but in TDZ (Temporal Dead Zone)
// ✅ Function declarations are fully hoisted
// ❌ Function expressions & arrow functions are NOT hoisted

/*
What is TDZ (Temporal Dead Zone) in JavaScript?

~> TDZ (Temporal Dead Zone) is the time between when a variable is hoisted and 
   when it is initialized.

    -> Variables declared with let and const are hoisted but cannot be accessed 
        before their declaration due to TDZ.

    -> Trying to access them before initialization results in a ReferenceError.

*/
