let questionLable = document.querySelector(".q-lable");
let questionNum = document.querySelector(".q-num");
let okSubmit = document.querySelector(".ok");
let dataContainer = document.querySelector(".data");
let dataLable = document.querySelector(".d-lable");
let number = document.querySelector(".num");
let next = document.querySelector(".next");
let submit = document.querySelector(".submit");
let result = document.querySelector(".result");
var arr = [];
let inputNum = [];
okSubmit.addEventListener("click", () => {
  inputNum.length = Number(questionNum.value);
  questionNum.style.display = "none";
  okSubmit.style.display = "none";
  console.log(inputNum);
  console.log(inputNum.length);
});
next.addEventListener("click", () => {
  if (arr.length >= inputNum.length) {
    next.setAttribute("disabled", "");
    number.setAttribute("disabled", "");
  } else {
    arr.push(Number(number.value));
    number.value = "";
    dataLable.innerHTML = `Number${arr.length}`;
    console.log(arr);
  }
});
submit.addEventListener("click", sumAndAverage);

console.log(arr);
function sumAndAverage() {
  console.log(arr);
  let sum = 0;
  let average = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += Number(arr[i]);
  }
  console.log(sum);
  console.log(arr.length);
  average = sum / arr.length;
  console.log(average);
  result.innerHTML = `
  <span>The summation is : ${sum} </span> 

  <span>The avarage is : ${average}</span>
  `;
  arr = [];
  console.log(arr);
}
