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
