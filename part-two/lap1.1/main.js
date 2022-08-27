let numberCount = prompt("How many numbers You wan to sum");
console.log(numberCount);
let arr = [];

sumAndAverage();
function sumAndAverage() {
  for (let i = 0; i < numberCount; i++) {
    number = prompt(`Enter Number : ${i + 1}`);
    arr.push(Number(number));
  }
  let sum = 0;
  let average = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  average = sum / arr.length;
  alert(`The Summation is : ${sum}
  The Average Is : ${average}
  `);
}
