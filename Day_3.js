let num = 52;
if (num > 0) {
  console.log("The number is Positive");
} else if (num < 0) {
  console.log("The number is Negetive");
} else {
  console.log("The number is Zero");
}
// Output: The number is Positive

let age = 22;
if (age >= 18) {
  console.log("You are eligible to vote");
} else {
  console.log("You are not eligible to vote");
}
// Output: You are eligible to vote

const findLargest = (num1, num2, num3) => {
  if (num1 >= num2 && num1 >= num3) {
    return num1;
  } else if (num2 >= num1 && num2 >= num3) {
    return num2;
  } else {
    return num3;
  }
};

const largeNum = findLargest(24, 46, 87);
console.log(`The largest number is ${largeNum}`);
// Output: The largest number is 87

switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Thruesday";
    break;
  case 4:
    day = "Friday";
    break;
  case 5:
    day = "Saturday";
}
console.log(`Today is ${day}`);
// Output: Today is Saturday

let score = 79;
switch (true) {
  case score >= 90:
    console.log("A");
    break;
  case score >= 80:
    console.log("B");
    break;
  case score >= 70:
    console.log("C");
    break;
  case score >= 60:
    console.log("D");
    break;
  default:
    console.log("F");
}
// Output: C

let InpNUm = 13;
let isEven = InpNUm % 2 ? "Odd" : "Even";
console.log(`The number is ${isEven}`);
// Output: The number is Odd

const isLeapYear = (year) => {
  if (year % 4 !== 0) {
    return false;
  } else if (year % 100 !== 0) {
    return true;
  } else if (year % 400 !== 0) {
    return false;
  } else {
    return true;
  }
};
console.log(isLeapYear(2019));
// Output: false
