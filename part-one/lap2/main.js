let operator = document.querySelector(".op");
let num1 = document.querySelector(".num1");
let num2 = document.querySelector(".num2");
let submit = document.querySelector(".submit");
let result = document.querySelector(".result");

function operation() {
  switch (operator.value) {
    case "+":
      result.innerHTML = Number(num1.value) + Number(num2.value);
      num1.value = result.innerHTML;
      num2.value = "";
      break;
    case "-":
      result.innerHTML = Number(num1.value) - Number(num2.value);
      num1.value = result.innerHTML;
      num2.value = "";
      break;
    case "/":
      result.innerHTML = Number(num1.value) / Number(num2.value);
      num1.value = result.innerHTML;
      num2.value = "";
      break;
    case "*":
      result.innerHTML = Number(num1.value) * Number(num2.value);
      num1.value = result.innerHTML;
      num2.value = "";
      break;
    default:
      console.log("error");
  }
}

submit.addEventListener("click", operation);
