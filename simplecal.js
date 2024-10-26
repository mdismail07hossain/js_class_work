// function addNum(num) {
//   const show = document.getElementById("display");
//   show.value += num;
// }
// function dispalyClear() {
//   show.value = "";
// }
function addNum(num) {
  const show = document.getElementById("display");
  show.value += num;
}
function addoparetor(um) {
  const show = document.getElementById("display");
  show.value += um;
}

function dispalyClear() {
  document.getElementById("display").value = "";
}

function sumoparetion() {
  const show = document.getElementById("display");
  try {
    show.value = eval(show.value);
  } catch (error) {
    show.value = "Error";
  }
}
