// factorial function make

/*
// for loops

for (let x = 1; x <= 10; x++) {
  console.log(x);
}
// let z = prompt("number:");
for (z = prompt("number:"); z >= 0; z--) {
  document.write(z + "<br>");
}

// while loops
let r = prompt("number:");
while (r <= 100) {
  console.log(r);
  r++;
}*/
/*
const height = 5; // Change this value for a taller or shorter pyramid

for (let i = 1; i <= height; i++) {
  let row = "";
  // Print spaces
  for (let j = 0; j < height - i; j++) {
    row += " ";
  }
  // Print asterisks
  for (let j = 0; j < 2 * i - 1; j++) {
    row += "s";
  }
  console.log(row);
}

*/

// do whiles
// let x = prompt("number:");
// let x = 1;
// do {
//   console.log(x);
//   x++;
// } while (x <= 20);

// let x = "Md Ismail";
// for (b in x) {
//   console.log(b);
// }

// v

// let r = prompt("Please enter your letter:");
// r = r.toUpperCase();
// switch (true) {
//   case r === "a" || r === "e" || r === "i" || r === "o" || r === "u":
//     window.alert("this is vowel");
//     break;
//   default:
//     window.alert("not vowel");
// }
/*

}*/

// const p = parseInt(prompt("enter your number:"));
// if(n<=1){

// }
// const star = 5;
// for (i = 1; i <= star; i++) {
//   console.log(" ".repeat(star - i) + "+".repeat(2 * i - 1));
// }
function myfactorial() {
  let n = prompt("enter f:");
  if (n < 0) return undefined;

  let factorial = 1;
  for (let i = 2; i <= n; i++) {
    factorial *= i;
  }
  window.alert(factorial);
  {
    // window.alert(myfactorial());
  }
}
// myfactorial();

// fibonacci
// const fibonum = parseInt(prompt("Enter your number:"));
const fibonum = 10;
let sum = 0;
let num1 = 0;
let num2 = 1;
for (let i = 2; i < fibonum; i++) {
  sum = num1 + num2;
  console.log(`${num1}+${num2}:${sum}`);
  num1 = num2;
  num2 = sum;
}
// window.alert(`Fibonacci numberis: ${sum}`);
console.log(sum);
