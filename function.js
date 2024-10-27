function info() {
  //   var total = a + b;
  const a = parseInt(prompt("enter any number:"));
  const b = parseInt(prompt("enter any number:"));
  const total = a + b;
  console.log("Information" + " " + total);
}
info();
// info();
const anonimas = function (a, b) {
  var sum = a + b;
  console.log(sum);
};
anonimas(23, 12);
const could = (a, b) => a + b;
console.log(could(13, 43));

(function (x, y) {
  console.log(x + y);
})(3, 9);
function newsmy() {
  window.alert("Hello Md Ismail");
}
