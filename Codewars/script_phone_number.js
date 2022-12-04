/* 
Создать функцию, которая будет принимать как аргумент массив, 
а выдавать строку в формате номера телефона, 
как показано на примере ниже:

createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
*/

/*
function createPhoneNumber(numbers) {
  let str = "(";

  for (let i in numbers) {
    if (i < 3) {
      str += numbers[i];
    } else if (i == 3) {
      str += ") " + numbers[i];
    } else if (i == 6) {
      str += "-" + numbers[i];
    } else {
      str += numbers[i];
    }
  }

  return str;
*/

//Классное решение:
/*
  function createPhoneNumber(numbers) {
  let format = "(xxx) xxx-xxxx";
  for (let i = 0; i < numbers.length; i++) {
    format = format.replace("x", numbers[i]);
  }
  return format;
}
*/

// еще интересное решение:
/*
function createPhoneNumber(numbers) {
  numbers = numbers.join("");
  return (
    "(" +
    numbers.substring(0, 3) +
    ") " +
    numbers.substring(3, 6) +
    "-" +
    numbers.substring(6)
  );
}
*/

/*
// Офигеть какое решение:
function createPhoneNumber(numbers) {
  return numbers.join("").replace(/(...)(...)(.*)/, "($1) $2-$3");
}
*/

/*
// интересно
function createPhoneNumber(numbers){
   return numbers.reduce((p,c) => p.replace('x',c), "(xxx) xxx-xxxx");
}
*/

/*
// вот тоже удобно
function createPhoneNumber(numbers) {
  let n = numbers;
  return (
    "(" +
    n[0] +
    n[1] +
    n[2] +
    ") " +
    n[3] +
    n[4] +
    n[5] +
    "-" +
    n[6] +
    n[7] +
    n[8] +
    n[9]
  );
}
*/

/*
// это даже и не понимаю пока, но как коротко <3
createPhoneNumber = (n) => "(###) ###-####".replace(/#/g, () => n.shift());
*/

/*
// Еще такой варант:
const createPhoneNumber = ([a, b, c, d, e, f, g, h, i, j]) =>
  `(${a}${b}${c}) ${d}${e}${f}-${g}${h}${i}${j}`;
*/

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));
console.log(createPhoneNumber([1, 1, 1, 1, 1, 1, 7, 8, 9, 0]));
