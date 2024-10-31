function myprime() {
  let number = parseInt(prompt("Enter your number:"));
  let count = 0;
  if (number === 0 || number === 1) {
    document.write("not prime and consipt ");
  } else {
    for (let i = 2; i < number; i++) {
      if (number % i == 0) {
        count++;
        break;
      }
    }
    if (count == 0) {
      document.write("it's prime");
    } else {
      document.write("Not prime");
    }
  }
}

function mymaximum() {
  let n1 = parseInt(prompt("1st number:"));
  let n2 = parseInt(prompt("2nd number:"));
  let n3 = parseInt(prompt("3rd number:"));
  if (n1 > n2 && n1 > n3) {
    document.write(`${n1},${n2}and${n3}:The Maximum number is ${n1}`);
  } else if (n2 > n1 && n2 > n3) {
    document.write(`${n1},${n2}and${n3}:The Maximum number is ${n2}`);
  } else {
    document.write(`${n1},${n2}and${n3}:The Maximum number is ${n3}`);
  }
}
function mygrade() {
  let mark = parseInt(prompt("Enter your mark:"));
  if (mark >= 90 && mark <= 100) {
    document.write(`${mark}: your grade A+`);
  } else if (mark >= 101) {
    document.write(`${mark}: This mark is not vaild `);
  } else if (mark >= 80 && mark < 90) {
    document.write(`${mark}: your grade A`);
  } else if (mark >= 70 && mark < 80) {
    document.write(`${mark}: your grade B+`);
  } else if (mark >= 60 && mark < 70) {
    document.write(`${mark}: your grade C+`);
  } else {
    document.write(`${mark}: Your are Fall ,F,`);
  }
}
function myvowle() {
  let r = prompt("Please enter your letter:");
  r = r.toLowerCase();
  switch (true) {
    case r === "a" || r === "e" || r === "i" || r === "o" || r === "u":
      window.alert("this is vowel");
      break;
    default:
      window.alert("not vowel");
  }
}
function myfibo() {
  const fibo = parseInt(prompt("number:"));
  let sum = 0;
  let n1 = 0;
  let n2 = 1;
  document.write(`The ${fibo}fibonacci series:`);
  for (let i = 2; i < fibo; i++) {
    sum = n1 + n2;
    document.write(`${n1} `);
    n1 = n2;
    n2 = sum;
  }
  document.write(sum + " ");
}
