let a = "hello";
let b = 10;
let c = true;

console.log(a); // Display String
console.log(typeof a); // Display type of a

console.log(b); // Display Integer
console.log(typeof b); // Display type of b

console.log(c); // Display Boolean
console.log(typeof c); // Display type of c

// Test type conversions
let y = Number(a); // Convert String to Number
console.log(y); // Display converted value
console.log(typeof y); // Display type of y

let x = String(b); // Convert Integer to String
console.log(x); // Display converted value
console.log(typeof x); // Display type of x

let z = parseFloat("3.14"); // Convert String to Float
console.log(z); // Display converted value
console.log(typeof z); // Display type of z

let w = Boolean(1); // Convert Integer to Boolean
console.log(w); // Display converted value
console.log(typeof w); // Display type of w
