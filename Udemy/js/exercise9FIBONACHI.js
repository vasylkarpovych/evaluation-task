"use strict";

function fib(number) {
  if (typeof number !== "number" || number <= 0 || !Number.isInteger(number)) {
    return "";
  } else if (number === 1) {
    return "0";
  } else if (number === 2) {
    return "0 1";
  } else if (number === 3) {
    return "0 1 1";
  } else if (number > 3) {
    let sum = "0 1 1";
    let a = 1;
    let b = 1;
    let c;

    for (let i = 4; i <= number; i++) {
      c = a + b;
      sum += " " + c;
      a = b;
      b = c;
    }
    return sum;
  }
}

console.log(fib(4));
console.log(fib(7));
console.log(fib("7"));
console.log(fib(1));
console.log(fib(0));
