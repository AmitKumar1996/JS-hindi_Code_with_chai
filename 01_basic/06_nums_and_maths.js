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
