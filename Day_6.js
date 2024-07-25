let num = [1, 2, 3, 4, 5];
console.log(num);
// Output: [1, 2, 3, 4, 5]

let num1 = [1, 2, 3, 4, 5, 7];
const first = num1[0];
const last = num1[num1.length - 1];
console.log(first, last);
// Output: 1 7

function func() {
  let arr = [14, 23, 4, 5, 67, 56];
  let newArr = arr.push("26");
  console.log(newArr);
}
func();
