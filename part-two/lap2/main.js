let stop = true;
let counter = 0;
let dataObj = {};
let dataArr = [];
rebeat: while (stop) {
  let operation = prompt("What is the operation you need");
  if (operation === "add") {
    counter++;
    let uName = prompt("Enter Your Name");
    let uPhone = prompt("Enter Your Phone");
    // dataObj.name = uName;
    // dataObj.phone = uPhone;
    dataArr.push({ name: uName, phone: uPhone });
    console.log(dataArr);
    let answer = confirm("Do You Need Any Operation");
    if (answer) {
      continue rebeat;
    } else {
      stop = false;
    }
  } else if (operation === "search") {
    let searchName = prompt("Enter The Name You Search on");
    lable: for (let i = 0; i < dataArr.length; i++) {
      if (dataArr[i].name === searchName) {
        alert(`
        Your Name Is : ${dataArr[i].name}.
        Your Phone Is : ${dataArr[i].phone}.
        `);
        let answer = confirm("Do You Need Any Operation");
        if (answer) {
          continue rebeat;
        } else {
          stop = false;
        }
      }
    }
  } else {
    alert("The Operation Is Wrong You Have Two Operation : add  & search");
  }
}
