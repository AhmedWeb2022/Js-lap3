let userName = document.querySelector(".uname");
let pass = document.querySelector(".pass");
let result = document.querySelector(".result");
let submit = document.querySelector(".submit").addEventListener("click", () => {
  if (userName.value === "admin" && pass.value === "421$$") {
    result.innerHTML = "Welcome login success";
  } else {
    if (userName.value !== "admin" && pass.value !== "421$$") {
      result.innerHTML = `Your Username And Password Is Wrong
    Try To Enter It Again `;
    } else if (userName.value !== "admin") {
      result.innerHTML = `Your Username Is Wrong
    Try To Enter It Again `;
    } else {
      result.innerHTML = `Your  Password Is Wrong
    Try To Enter It Again `;
    }
  }
});
