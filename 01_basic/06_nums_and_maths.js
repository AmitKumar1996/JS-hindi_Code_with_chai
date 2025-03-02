const score = 100;
console.log(score + 1); // 101
console.log(score - 1); // 99
console.log(score * 2); // 200
console.log(score / 2); // 50
console.log(score % 2); // 0
console.log(score ** 2); // 10000
console.log(score ** 2); // Uncaught SyntaxError: Unexpected token '**'
console.log(score + 1 * 2); // 102
console.log((score + 1) * 2); // 202


const balance = new Number(100);
console.log(balance); // Number {100} // 100 is a primitive value and not an object
console.log(typeof balance); // object
console.log(balance + 1); // 101
console.log(balance - 1); // 99
console.log(balance.toString()); // '100'
console.log(balance.toString().length); // 3
console.log(balance.valueOf()); // 100
console.log(balance.toFixed(2)); // '100.00'
console.log(balance.toPrecision(2)); // '1e+2'
console.log(balance.toExponential(2)); // '1.00e+2'
console.log(balance.toPrecision(3)); // '100'
console.log(balance.toExponential(3)); // '1.00e+2'
console.log(balance.toPrecision(4)); // '100.0'
console.log(balance.toExponential(4)); // '1.000e+2'
console.log(balance.toPrecision(5)); // '100.00'
console.log(balance.toExponential(5)); // '1.0000e+2'
console.log(balance.toPrecision(6)); // '100.000'

const otherNumber = 23.46789

console.log(otherNumber.toPrecision(3)); // '23.5'
console.log(otherNumber.toPrecision(4)); // '23.47'
console.log(otherNumber.toPrecision(5)); // '23.468'

const hundreds = 100000000
console.log(hundreds.toLocaleString()); // '100,000,000' // default
console.log(hundreds.toLocaleString('en-US')); // '100,000,000' // default 
console.log(hundreds.toLocaleString('es-ES')); // '100.000.000' // Spain
console.log(hundreds.toLocaleString('de-DE')); // '100.000.000' // Germany
console.log(hundreds.toLocaleString('fr-FR')); // '100 000 000' // France
console.log(hundreds.toLocaleString('en-I')); // '100,000,000' // India
console.log(hundreds.toLocaleString('en-GB')); // '100,000,000' // UK
console.log(hundreds.toLocaleString('en-CA')); // '100,000,000' // Canada
console.log(hundreds.toLocaleString('en-AU')); // '100,000,000' // Australia
console.log(hundreds.toLocaleString('en-UAE')); // '100,000,000' // UAE


//Example of Max and Min Numbers
console.log(Number.MAX_VALUE); // 1.7976931348623157e+308
console.log(Number.MIN_VALUE); // 5e-324
console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991
console.log(Number.MIN_SAFE_INTEGER); // -9007199254740991
console.log(Number.EPSILON); // 2.220446049250313e-16
console.log(Number.POSITIVE_INFINITY); // Infinity
console.log(Number.NEGATIVE_INFINITY); // -Infinity
console.log(Number.NaN); // NaN // Not a Number
console.log(Number.isFinite(Infinity)); // false
console.log(Number.isFinite(-Infinity)); // false
console.log(Number.isFinite(NaN)); // false
console.log(Number.isFinite(0)); // true
console.log(Number.isFinite(1)); // true
console.log(Number.isFinite(-1)); // true
console.log(Number.isFinite(1.1)); // true
console.log(Number.isFinite(-1.1)); // true
console.log(Number.isFinite(1.1e+308)); // true



// ======================== Maths Library ========================

console.log(Math); // Math object 
console.log(Math.PI); // 3.141592653589793
console.log(Math.E); // 2.718281828459045
console.log(Math.LN2); // 0.6931471805599453
console.log(Math.LN10); // 2.302585092994046
console.log(Math.LOG2E); // 1.4426950408889634
console.log(Math.LOG10E); // 0.4342944819032518     
console.log(Math.SQRT1_2); // 0.7071067811865476
console.log(Math.SQRT2); // 1.4142135623730951
console.log(Math.abs(-100)); // 100
console.log(Math.abs(100)); // 100
console.log(Math.abs(0)); // 0
console.log(Math.abs(-0)); // 0
console.log(Math.fround(0)); // 0
console.log(Math.fround(0.1)); // 0.10000000149011612
console.log(Math.fround(0.5)); // 0.5
console.log(Math.fround(0.9)); // 0.8999999761581421
console.log(Math.fround(1)); // 1   
console.log(Math.fround(1.1)); // 1.100000023841858
console.log(Math.round(4.6)); // 5
console.log(Math.round(4.4)); // 4
console.log(Math.round(4.5)); // 5
console.log(Math.round(4.1)); // 4
console.log(Math.floor(4.6)); // 4
console.log(Math.ceil(4.4)); // 5
console.log(Math.ceil(4.5)); // 5
console.log(Math.ceil(4.1)); // 5
console.log(Math.trunc(4.6)); // 4
console.log(Math.trunc(4.4)); // 4


