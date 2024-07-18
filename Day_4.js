for (let i = 1; i <= 10; i++) {
  console.log(i);
}
// Output: 1,2,3,4,5,6,7,8,9,10

for (let i = 1; i <= 10; i++) {
  console.log(`5 * ${i} = ${5 * i}`);
}
// Output: 5 * 1 = 5, 5 * 2 = 10, 5 * 3 = 15, 5 * 4 = 20, 5 * 5 = 25, 5 * 6 = 30, 5 * 7 = 35, 5 * 8 = 40, 5 * 9 = 45, 5 * 10 = 50

let sum = 0;
let i = 1;
while (i <= 10) {
  sum += i;
  i++;
}
console.log(`Sum of 1 to 10 is ${sum}`);
// Output: Sum of 1 to 10 is 55

let num = 0;
do {
  num++;
  console.log(num);
} while (num < 5);
// Output: 1,2,3,4,5

let number = 5;
let factorial = 1;
let j = 1;
do {
  factorial *= j;
  j++;
} while (j <= number);
console.log(`factorila of ${number} is ${factorial}`);
// Output: factorila of 5 is 120

let rows = 5;
for (let i = 1; i <= rows; i++) {
  let pattern = "";
  for (let k = 1; k <= i; k++) {
    pattern += "*";
  }
  console.log(pattern);
}
// Output: *,**,***,****,*****

let n = "";
for (let i = 1; i <= 10; i++) {
  if (i == 5) continue;
  n += i;
}
console.log(n);
// Output: 1234678910

for (let i = 1; i <= 10; i++) {
  if (i > 7) {
    break;
  }
  console.log(i);
}
// Output: 1,2,3,4,5,6,7
