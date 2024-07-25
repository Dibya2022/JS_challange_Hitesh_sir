function isNUmber(num) {
  if (num % 2 == 0) {
    console.log("Number is odd");
  } else {
    console.log("Number is even");
  }
}
isNUmber(9);
// Output: Number is even

function sqrNum(num) {
  return num * num;
}
console.log(sqrNum(2));
// Output: 4

function max(num1, num2) {
  return Math.max(num1, num2);
}
console.log(max(14, 156));
// Output: 156

function concat(str1, str2) {
  return str1.concat(str2);
}
console.log("Dibyaranjan", "Nayak");
// Output: Dibyaranjan Nayak

const sumNum = (a, b) => {
  return a + b;
};
console.log(sumNum(15, 26));
// Output: 41

const containChar = (str, char) => {
  return str.includes(char);
};
console.log(containChar("Hello world", "o"));
// Output: true

const multiply = (a, b = 2) => {
  return a * b;
};
console.log(multiply(12, 10));
// Output: 120
console.log(multiply(14));
// Output: 28

const greet = (name = "Geust", age = "unknown") => {
  return `Hello ${name} your age is ${age}.`;
};
console.log(greet("Dibya", "24+"));
// Output: Hello Dibya your age is 24+.

const repeatFun = (func, times) => {
  for (let i = 0; i < times; i++) {
    func();
  }
};

const sayDibya = () => {
  console.log("Dibya");
};

repeatFun(sayDibya, 5);
// Output: Dibya

const applyFunc = (fun1, fun2, value) => {
  const res1 = fun1(value);
  return fun2(res1);
};

const double = (x) => x * 2;
const squre = (x) => x * x;

const result = applyFunc(double, squre, 5);
console.log(result);
// Output: 100
