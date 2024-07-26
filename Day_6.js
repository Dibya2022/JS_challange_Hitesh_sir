let num = [1, 2, 3, 4, 5];
console.log(num);
// Output: [1, 2, 3, 4, 5]

let num1 = [1, 2, 3, 4, 5, 7];
const first = num1[0];
const last = num1[num1.length - 1];
console.log(first, last);
// Output: 1 7

function func() {
  let fruits = ["Apple", "Banana", "Grapes", "Pineapple", "Orange"];
  let newArr = fruits.push("Strawberry");
  console.log(newArr);
  console.log(fruits);
}
func();
// Output: 6
// ["Apple", "Banana", "Grapes", "Pineapple", "Orange", "Strawberry"]

let fruits1 = ["Apple", "Banana", "Grapes", "Pineapple", "Orange"];
let pop = fruits1.pop();
console.log(fruits1);
console.log(pop);
// Output: ["Apple", "Banana", "Grapes", "Pineapple"]
// Orange

let fruits2 = ["Apple", "Banana", "Grapes", "Pineapple", "Orange"];
let shift = fruits2.shift();
console.log(fruits2);
console.log(shift);
// Output: ["Banana", "Grapes", "Pineapple", "Orange"]
// Apple

let fruits3 = ["Apple", "Banana", "Grapes", "Pineapple", "Orange"];
let unshift = fruits3.unshift("Strawberry");
console.log(fruits3);

let num2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let doubleNUm = num2.map((Number) => Number * 2);
console.log(doubleNUm);
// Output: [2, 4, 6, 8, 10, 12, 14, 16, 18]

let fruits4 = ["Apple", "Banana", "Grapes", "Pineapple", "Orange"];
let result = fruits4.filter((word) => word.length > 5);
console.log(result);
// Output: ["Pineapple", "Orange"]

let arr1 = [1, 2, 3, 4, 5, 6];
const initalVal = 0;
const sumWithInitial = arr1.reduce(
  (accumulator, curreVal) => accumulator + curreVal,
  initalVal
);
console.log(sumWithInitial);
// Output: 21

let arr2 = [1, 2, 3, 4, 5, 6];
for (let i = 0; i < arr2.length; i++) {
  console.log([i]);
}
// Output: [0], [1], [2], [3], [4], [5]

let arr3 = [1, 2, 3, 4, 5, 6];
arr3.forEach((element) => {
  console.log(element);
});
// Output: 1, 2, 3, 4, 5, 6

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(matrix);
// Output: [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ]

const matrix1 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(matrix[2][1]);
// Output: 8
