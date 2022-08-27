let area;
let answer;
let stop = true;
lable: while (stop) {
  let shape = prompt("Enter The shape { triangle | square | circle |rectangle");
  switch (shape) {
    case "triangle":
      let baseLength = prompt("Enter The Triangle Base Length");
      let tHeight = prompt("Enter The Triangle Height");
      area = 0.5 * Number(baseLength) * Number(tHeight);
      alert(`The Triangle Area Is : ${area}`);
      answer = confirm("Do You Want To Continue In Accounting");
      if (answer) {
        continue lable;
      } else {
        stop = false;
      }
      break;
    case "square":
      let lOsfSide = prompt("Enter The Length Of Side");
      area = Number(lOsfSide) * Number(lOsfSide);
      alert(`The Square Area Is : ${area}`);
      answer = confirm("Do You Want To Continue In Accounting");
      if (answer) {
        continue lable;
      } else {
        stop = false;
      }
      break;
    case "circle":
      const PI = 3.14;
      let radius = prompt("Enter Circle Radius");
      area = PI * Math.pow(Number(radius), 2);
      alert(`The Circle Aria Is : ${area}`);
      answer = confirm("Do You Want To Continue In Accounting");
      if (answer) {
        continue lable;
      } else {
        stop = false;
      }
      break;
    case "rectangle":
      let rHeight = prompt("Enter The Rectangle Height");
      let rWidth = prompt("Enter The Rectangle width ");
      area = Number(rHeight) * Number(rWidth);
      alert(`The Rectangle Area Is : ${area}`);
      answer = confirm("Do You Want To Continue In Accounting");
      if (answer) {
        continue lable;
      } else {
        stop = false;
      }
      break;
    default:
      alert("Choose The Correct Shape");
  }
}
