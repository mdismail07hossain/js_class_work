// Grade
/*
function mygrade() {
  const sgrade = parseInt(prompt("enter your mark;"));
  if (sgrade >= 80) {
    window.alert("Grade is : A+");
  } else if (sgrade >= 70) {
    window.alert("Grade is : A");
  } else if (sgrade >= 60) {
    window.alert("Grade is : A-");
  } else if (sgrade >= 40) {
    window.alert("Grade is : B");
  } else {
    window.alert("your Fall");
  }
}

// largest number
function mylarg() {
  const num1st = parseInt(prompt("Enter 1st number:"));
  const num2nd = parseInt(prompt("Enter 2nd number:"));
  const num3rd = parseInt(prompt("Enter 3rd number:"));

  if (num1st > num2nd && num1st > num3rd) {
    window.alert("Maximum Number is 1st number : " + num1st);
  } else if (num2nd > num1st && num2nd > num3rd) {
    window.alert("Maximun number is 2nd number :" + num2nd);
  } else {
    window.alert("Maximum number is 3rd number:" + num3rd);
  }
}
// Even and odd
function myeaoddn() {
  const anynum = parseInt(prompt("enter any number:"));
  if (anynum % 2 === 0) {
    window.alert("It's a Even number");
  } else {
    window.alert("It's a Odd number");
  }
}
*/
// Array methods

const arr = ["Monday", "Tuesday", "Thursday", "Friday", "Sunday"];
console.log(arr.shift());
console.log(arr);
// push
console.log(arr.push("Monday"));
console.log(arr);
// slice
const arrslice = arr.slice(2, 3);
console.log(arrslice);
// slpice
console.log(arr.splice(2, 3));
console.log(arr);

// concat
const narr = arr.concat("Saturday", "Wedhnesday");
console.log(narr);

// fibo
const fibo = 10;
let sum = 0;
let n1 = 0;
let n2 = 1;
for (let i = 2; i < fibo; i++) {
  sum = n1 + n2;
  console.log(`${n1}+${n2}:${sum}`);
  n1 = n2;
  n2 = sum;
}
console.log(sum);

// asinding
let a = prompt("Enter first character:");
let b = prompt("Enter second character:");
let c = prompt("Enter third character:");

let smallest, middle, largest;

if (a <= b && a <= c) {
  smallest = a;
  if (b <= c) {
    middle = b;
    largest = c;
  } else {
    middle = c;
    largest = b;
  }
} else if (b <= a && b <= c) {
  smallest = b;
  if (a <= c) {
    middle = a;
    largest = c;
  } else {
    middle = c;
    largest = a;
  }
} else {
  smallest = c;
  if (a <= b) {
    middle = a;
    largest = b;
  } else {
    middle = b;
    largest = a;
  }
}
document.write(smallest + ", " + middle + ", " + largest);
