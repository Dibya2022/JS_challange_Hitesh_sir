let a = 5;
let b = 8;
console.log(a + b);
// Output: 13

const substraction = (a, b) => {
  return a - b;
};
console.log(substraction(12, 4));
// Output: 8

const multiply = (a, b) => {
  return a * b;
};
console.log(multiply(12, 10));
// Output: 120

const divide = (a, b) => {
  return a / b;
};
console.log(divide(120, 10));
// Output: 12

const remainder = (a, b) => {
  return a % b;
};
console.log(remainder(12, 4));
// Output: 0

let c = 25;
console.log((c += 25));
// Output: 50

let f = 27;
console.log((f -= 22));
// Output: 5

let age = 25;
if (age < 18) {
  console.log("Adult");
} else if (age > 18) {
  console.log("Young");
}
// Output: Young

console.log(5 >= 3);
// Expected output: true

console.log(5 <= 3);
// Expected output: false

console.log(5 == 3);
// Expected output: false

console.log(5 === 3);
// Expected output: false

console.log("5" === "5");
// Expected output: true

const h = 3;
const k = -2;

console.log(h > 0 && k > 0);
// Expected output: false

console.log(h > 0 || k > 0);
// Expected output: true

console.log((h > 0) | (k > 0));
// Expected output: true

let result = 10 > 0 ? true : false;
console.log(result);
// Expected output: true
