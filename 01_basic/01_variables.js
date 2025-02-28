const accountId= 144553
let accountEmailId = "hitesh@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"
//accountId = 2   //Not allowed

accountEmailId ="hello@gamil.com"
console.log(accountId);
/*

prefer not use var  because of issue in block scope and functional scope
*/

let accountState;
console.table([accountId, accountEmailId, accountPassword, accountState])




/*
===========================================
📌 DIFFERENCE BETWEEN var, let, AND const
===========================================

FEATURE                 | var               | let               | const
--------------------------------------------------------------
SCOPE                   | Function-scoped   | Block-scoped      | Block-scoped  
RE-DECLARATION          | ✅ Allowed        | ❌ Not Allowed    | ❌ Not Allowed  
RE-ASSIGNMENT           | ✅ Allowed        | ✅ Allowed        | ❌ Not Allowed  
HOISTING                | ✅ Hoisted (undefined) | ✅ Hoisted (TDZ) | ✅ Hoisted (TDZ)  
GLOBAL OBJECT PROPERTY  | ✅ Added to window | ❌ Not added      | ❌ Not added  

NOTES:
- TDZ (Temporal Dead Zone): `let` and `const` are hoisted but cannot be used before initialization.
- `var` is function-scoped, while `let` and `const` are block-scoped.
- Best Practice: Prefer `let` and `const` to avoid scope-related issues.
*/

