

/* JavaScript Comparison Operators Notes */

// Basic Comparisons
console.log(1 > 2); // false
console.log(1 < 2); // true
console.log(1 >= 2); // false
console.log(1 <= 2); // true
console.log(1 == 2); // false
console.log(1 != 2); // true
console.log(1 === 2); // false
console.log(1 !== 2); // true

/*
== vs ===:
- "==" performs type coercion, meaning different types can be considered equal.
- "===" is a strict comparison that checks both value and type.
*/

// Comparing Number and String
console.log(1 === '1'); // false
console.log(1 == '1'); // true
console.log(1 != '1'); // false
console.log(1 !== '1'); // true

/*
- 1 == '1' is true because JavaScript converts the string '1' to a number.
- 1 === '1' is false because their types are different.
*/

// Comparing Number and Boolean
console.log(1 == true); // true
console.log(1 === true); // false
console.log(1 == false); // false
console.log(1 === false); // false
console.log(0 == false); // true
console.log(0 === false); // false
console.log(0 == true); // false
console.log(0 === true); // false

/*
- true is treated as 1 and false as 0.
- 0 == false is true because both convert to the same value.
*/

// Comparing Empty String with Boolean
console.log('' == false); // true
console.log('' === false); // false
console.log('' == true); // false
console.log('' === true); // false

/*
- An empty string ('') is considered false in a boolean context.
- '' == false is true due to type conversion.
*/

// Comparing String '0' with Boolean
console.log('0' == false); // true
console.log('0' === false); // false
console.log('0' == true); // false
console.log('0' === true); // false

/*
- '0' is treated as 0 when using "==" with false, hence true.
- Strict comparison fails because their types are different.
*/

// Comparing Null and Undefined
console.log(null == false); // false
console.log(null === false); // false
console.log(undefined == false); // false
console.log(undefined === false); // false
console.log(null == undefined); // true
console.log(null === undefined); // false

/*
- null and undefined are only equal to each other using "==".
- They are not strictly equal as they are different types.
*/

// Comparing Null and Numbers
console.log(null == 0); // false
console.log(null === 0); // false
console.log(undefined == 0); // false
console.log(undefined === 0); // false
console.log(null == ''); // false
console.log(null === ''); // false
console.log(undefined == ''); // false
console.log(undefined === ''); // false
console.log(null == '0'); // false
console.log(null === '0'); // false

// Null and Undefined with Relational Operators
console.log(null > 0); // false
console.log(null < 0); // false
console.log(null >= 0); // true
console.log(null <= 0); // true
console.log(undefined > 0); // false
console.log(undefined < 0); // false
console.log(undefined >= 0); // false
console.log(undefined <= 0); // false
console.log(null > undefined); // false
console.log(null < undefined); // false
console.log(null >= undefined); // false
console.log(null <= undefined); // false

/*
- Comparisons with null can be tricky because null is treated as 0 in numerical comparisons but not in equality checks.
- undefined behaves differently and is not equal to any number.
*/

// Comparing Null with Empty String
console.log(null > ''); // false
console.log(null < ''); // false
console.log(null >= ''); // true
console.log(null <= ''); // true
console.log(undefined > ''); // false
console.log(undefined < ''); // false
console.log(undefined >= ''); // false
console.log(undefined <= ''); // false

// Comparing Null with String '0'
console.log(null > '0'); // false
console.log(null < '0'); // false
console.log(null >= '0'); // true
console.log(null <= '0'); // true
console.log(null > '1'); // false
console.log(null < '1'); // false
console.log(null >= '1'); // false
console.log(null <= '1'); // false

// Comparing Undefined with String '0' and '1'
console.log(undefined > '0'); // false
console.log(undefined < '0'); // false
console.log(undefined >= '0'); // false
console.log(undefined <= '0'); // false
console.log(undefined > '1'); // false
console.log(undefined < '1'); // false
console.log(undefined >= '1'); // false
console.log(undefined <= '1'); // false

// Comparing Empty String with String Numbers
console.log('' > '0'); // false
console.log('' < '0'); // true
console.log('' >= '0'); // true
console.log('' <= '0'); // false
console.log('' > '1'); // false
console.log('' < '1'); // true
console.log('' >= '1'); // false

/*
Summary:
- Use "==" when you want type conversion.
- Use "===" for strict comparisons (recommended for better accuracy).
- Be cautious when comparing null, undefined, and falsy values.
*/

//********************************************************************* */






// console.log(1 > 2); // false
// console.log(1 < 2); // true
// console.log(1 >= 2); // false
// console.log(1 <= 2); // true
// console.log(1 == 2); // false
// console.log(1 != 2); // true
// console.log(1 === 2); // false
// console.log(1 !== 2); // true
// console.log(1 === '1'); // false
// console.log(1 == '1'); // true
// console.log(1 != '1'); // false 
// console.log(1 !== '1'); // true
// console.log(1 == true); // true
// console.log(1 === true); // false
// console.log(1 == false); // false
// console.log(1 === false); // false
// console.log(0 == false); // true
// console.log(0 === false); // false
// console.log(0 == true); // false
// console.log(0 === true); // false
// console.log('' == false); // true
// console.log('' === false); // false
// console.log('' == true); // false
// console.log('' === true); // false
// console.log('0' == false); // true
// console.log('0' === false); // false
// console.log('0' == true); // false
// console.log('0' === true); // false
// console.log('1' == false); // false
// console.log('1' === false); // false
// console.log(null == false); // false
// console.log(null === false); // false
// console.log(undefined == false); // false
// console.log(undefined === false); // false
// console.log(null == undefined); // true
// console.log(null === undefined); // false
// console.log(null == 0); // false
// console.log(null === 0); // false
// console.log(undefined == 0); // false
// console.log(undefined === 0); // false
// console.log(null == ''); // false
// console.log(null === ''); // false
// console.log(undefined == ''); // false
// console.log(undefined === ''); // false
// console.log(null == '0'); // false
// console.log(null === '0'); // false
// console.log(null > 0); // false
// console.log(null < 0); // false
// console.log(null >= 0); // true
// console.log(null <= 0); // true
// console.log(undefined > 0); // false
// console.log(undefined < 0); // false
// console.log(undefined >= 0); // false
// console.log(undefined <= 0); // false
// console.log(null > undefined); // false
// console.log(null < undefined); // false
// console.log(null >= undefined); // true
// console.log(null <= undefined); // true
// console.log(null > ''); // false
// console.log(null < ''); // false
// console.log(null >= ''); // true
// console.log(null <= ''); // true    
// console.log(undefined > ''); // false
// console.log(undefined < ''); // false
// console.log(undefined >= ''); // false
// console.log(undefined <= ''); // false
// console.log(null > '0'); // false
// console.log(null < '0'); // false
// console.log(null >= '0'); // true
// console.log(null <= '0'); // true
// console.log(null > '1'); // false
// console.log(null < '1'); // false
// console.log(null >= '1'); // false
// console.log(null <= '1'); // false
// console.log(undefined > '0'); // false
// console.log(undefined < '0'); // false
// console.log(undefined >= '0'); // false
// console.log(undefined <= '0'); // false
// console.log(undefined > '1'); // false
// console.log(undefined < '1'); // false      
// console.log(undefined >= '1'); // false
// console.log(undefined <= '1'); // false
// console.log('' > '0'); // false
// console.log('' < '0'); // true
// console.log('' >= '0'); // true
// console.log('' <= '0'); // false
// console.log('' > '1'); // false
// console.log('' < '1'); // true
// console.log('' >= '1'); // false


//*****************************************************************************/


/* JavaScript Comparison Operators Notes */

// Basic Comparisons
console.log(1 > 2); // false
console.log(1 < 2); // true
console.log(1 >= 2); // false
console.log(1 <= 2); // true
console.log(1 == 2); // false
console.log(1 != 2); // true
console.log(1 === 2); // false
console.log(1 !== 2); // true

// Comparing Number and String
console.log(1 === '1'); // false
console.log(1 == '1'); // true
console.log(1 != '1'); // false
console.log(1 !== '1'); // true

// Comparing Number and Boolean
console.log(1 == true); // true
console.log(1 === true); // false
console.log(1 == false); // false
console.log(1 === false); // false
console.log(0 == false); // true
console.log(0 === false); // false
console.log(0 == true); // false
console.log(0 === true); // false

// Comparing Empty String with Boolean
console.log('' == false); // true
console.log('' === false); // false
console.log('' == true); // false
console.log('' === true); // false

// Comparing String '0' with Boolean
console.log('0' == false); // true
console.log('0' === false); // false
console.log('0' == true); // false
console.log('0' === true); // false

// Comparing Null and Undefined
console.log(null == false); // false
console.log(null === false); // false
console.log(undefined == false); // false
console.log(undefined === false); // false
console.log(null == undefined); // true
console.log(null === undefined); // false

// Comparing Null and Numbers
console.log(null == 0); // false
console.log(null === 0); // false
console.log(undefined == 0); // false
console.log(undefined === 0); // false
console.log(null == ''); // false
console.log(null === ''); // false
console.log(undefined == ''); // false
console.log(undefined === ''); // false
console.log(null == '0'); // false
console.log(null === '0'); // false

// Null and Undefined with Relational Operators
console.log(null > 0); // false
console.log(null < 0); // false
console.log(null >= 0); // true
console.log(null <= 0); // true
console.log(undefined > 0); // false
console.log(undefined < 0); // false
console.log(undefined >= 0); // false
console.log(undefined <= 0); // false
console.log(null > undefined); // false
console.log(null < undefined); // false
console.log(null >= undefined); // false
console.log(null <= undefined); // false

// Comparing Null with Empty String
console.log(null > ''); // false
console.log(null < ''); // false
console.log(null >= ''); // true
console.log(null <= ''); // true
console.log(undefined > ''); // false
console.log(undefined < ''); // false
console.log(undefined >= ''); // false
console.log(undefined <= ''); // false

// Comparing Null with String '0'
console.log(null > '0'); // false
console.log(null < '0'); // false
console.log(null >= '0'); // true
console.log(null <= '0'); // true
console.log(null > '1'); // false
console.log(null < '1'); // false
console.log(null >= '1'); // false
console.log(null <= '1'); // false

// Comparing Undefined with String '0' and '1'
console.log(undefined > '0'); // false
console.log(undefined < '0'); // false
console.log(undefined >= '0'); // false
console.log(undefined <= '0'); // false
console.log(undefined > '1'); // false
console.log(undefined < '1'); // false
console.log(undefined >= '1'); // false
console.log(undefined <= '1'); // false

// Comparing Empty String with String Numbers
console.log('' > '0'); // false
console.log('' < '0'); // true
console.log('' >= '0'); // true
console.log('' <= '0'); // false
console.log('' > '1'); // false
console.log('' < '1'); // true
console.log('' >= '1'); // false

