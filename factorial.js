// factorial function make

function myfactorial() {
  let n = prompt("enter your number:");
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

// Find Prime numberp
/*const numberp = parseInt(prompt("Enter your number:"));
if (numberp === 0 && numberp === 1) {
  window.alert("tHis is Not");
} else if (numberp >= 2) {
  for (let i = 2; i <= numberp / 2; i++) {
    if (numberp % i === 0) {
      window.alert("tHis is Not");
    }
  }
} else {
  window.alert("this is Prime");
}*/

// const p = parseInt(prompt("enter your number:"));
// if(n<=1){

// }
const star = 5;
for (i = 1; i <= star; i++) {
  console.log(" ".repeat(star - i) + "+".repeat(2 * i - 1));
}
