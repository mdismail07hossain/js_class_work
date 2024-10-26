function appendToResult(value) {
  const result = document.getElementById("result");
  result.value += value;
}

function clearResult() {
  document.getElementById("result").value = "";
}

function calculateResult() {
  const result = document.getElementById("result");
  try {
    result.value = eval(result.value);
  } catch (error) {
    result.value = "Error";
  }
}

// let Number = ["c", "d", "e", "a", "b"];

// let find = Number.forEach((value) => {
//   if (value == "a") {
//     console.log("A");
//   } else if (value == "b") {
//     console.log("B");
//   } else if (value == "c") {
//     console.log("C");
//   } else if (value === "d") {
//     console.log("D");
//   } else {
//     console.log("E");
//   }
// });

// const A = ["a", "b", "c"];
// const B = ["d", "e", "e"];

// let arrConcat = A.concat(B, "A", "B", "C", " D");
// console.log(arrConcat);
// let days = [
//   "Monday",
//   "Friday",
//   "Saturday",
//   "Sunday",
//   "Thusday",
//   "Tusday",
//   "Wednesday",
// ];
// let day = [
//   "Saturday",
//   "Sunday",
//   "Monday",
//   "Tusday",
//   "Wednesday",
//   "Thusday",
//   "Friday",
// ];
// let week = days.sort((a, b) => {
//   return day.indexOf(a) - day.indexOf(b);
// });

// console.log(week);

function validataileEm() {
  const emailInput = prompt("Enter your email");
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const result = regex.test(emailInput);
  if (result) {
    window.alert("Valid email!");
  } else {
    window.alert("Invalid email.");
  }
  // Regular expression for validating an email
}
//  validateEmail();

// Example usage
function PersentMark() {
  const mark = prompt("enter your mark:");
  const total = prompt("enter total mark:");
  const MarkTotal = (mark / total) * 100;
  console.log(MarkTotal);
  if (MarkTotal >= 90) {
    window.alert("Your Grade : A+ ");
  } else if (MarkTotal >= 80) {
    window.alert("Your Grade : A ");
  } else if (MarkTotal >= 70) {
    window.alert("Your Grade : B+ ");
  } else if (MarkTotal >= 60) {
    window.alert("Your Grade : C ");
  } else {
    window.alert("fall");
  }
}
