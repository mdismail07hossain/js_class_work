// normal function
/*
function info() {
  //   var total = a + b;
  const a = parseInt(prompt("enter any number:"));
  const b = parseInt(prompt("enter any number:"));
  const total = a + b;
  console.log("Information" + " " + total);
}
info();
// info();

// anonimas function

const anonimas = function (a, b) {
  var sum = a + b;
  console.log(sum);
};
anonimas(23, 12);

// array function

const could = (a, b) => a + b;
console.log(could(13, 43));

// auto invokc function

(function (x, y) {
  console.log(x + y);
})(3, 9);
function newsmy() {
  window.alert("Hello Md Ismail");
}

const now = new Date();
console.log(now);

console.log(now.toLocaleString());
var posVal = 44;
var negVal = -posVal;
var diffVal = posVal - negVal;
console.log(negVal);

const arr = [4, 6, 7, 52, 21, 2];
let large = arr[0];
let small = arr[0];
let sum = 0;
for (i = 0; i < arr.length; i++) {
  if (small > arr[i]) {
    small = arr[i];
  }
  if (large < arr[i]) {
    large = arr[i];
  }
  sum += arr[i];
}
console.log(small);
console.log(large);
console.log(sum);

const array1 = [41, 0, -1, -3, 5, -4, -7, 0, 9, 0, 786, -98, 6];
let positivecounte = 0;
let negitivecounte = 0;
let zerocounte = 0;
let add = 0;
for (let i = 0; i < array1.length; i++) {
  if (array1[i] > 0) {
    positivecounte++;
  } else if (array1[i] < 0) {
    negitivecounte++;
  } else if (array1[i] === 0) {
    zerocounte++;
  }
  add += array1[i];
}
console.log(positivecounte);
console.log(negitivecounte);
console.log(zerocounte);
console.log(add);

// ascil patta
let p = parseInt(prompt("enter any number:"));
for (let i = 0; i < p; i++) {
  for (j = 1; j <= i; j++) {
    document.write("*");
    // console.log(i, j);
  }
  document.write("<br>");
}
let num = parseInt(prompt("enter any number:"));
for (row = 0; row < num; row++) {
  for (col = 1; col <= num - row; col++) {
    document.write("*");
  }
  document.write("<br>");
}
let height = prompt("munber:");
for (let i = 0; i < height; i++) {
  // Print spaces
  for (let j = 0; j < height - i - 1; j++) {
    document.write("&nbsp;"); // Use &nbsp; for proper spacing in HTML
  }
  // Print stars
  for (let k = 0; k < 2 * i + 1; k++) {
    document.write("*");
  }
  // New line after each row
  document.write("<br>");
}*/
// prime number cheack
let nuP = prompt("enter your number:");
let count = 0;
if (nuP == 0 || nuP == 1) {
  window.alert("Not prime NOt composit");
} else {
  for (i = 2; i < nuP; i++) {
    if (nuP % i == 0) {
      count++;
      continue;
    }
  }
  if (count > 0) {
    window.alert(" not prime");
  } else {
    window.alert(" prime");
  }
}
