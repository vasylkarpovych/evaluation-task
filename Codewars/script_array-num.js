/* 
Создать функцию, которая будет принимать как аргумент массив из чисел, где все числа одниковые, ктоме одного, нужно найти и вернуть то число, что отличается от всех остальных:

Пример:
[1, 1, 2] ==> 2
[17, 17, 3, 17, 17, 17, 17] ==> 3
*/
/*
// получилось:
const num = [1, 1, 1, 1, 1, 1, 1, 1, 1];

let first = num[0];
let second = num[1];
let third = num[num.length - 1];

if (first !== third) {
  if (first !== second) {
    return console.log(first);
  } else {
    return console.log(third);
  }
} else if (first !== second) {
  return console.log(second);
} else {
  for (let i = 2; i < num.length; i++) {
    if (first !== num[i]) {
      return console.log(num[i]);
    } else {
      return console.log("В массиве все числа одинаковые!");
    }
  }
}
*/

function stray(numbers) {
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[0] !== numbers[numbers.length - 1]) {
      if (numbers[0] !== numbers[1]) {
        return console.log(numbers[0]);
      } else {
        return console.log(numbers[numbers.length - 1]);
      }
    } else if (numbers[0] !== numbers[1]) {
      return console.log(numbers[1]);
    } else {
      loop: for (let i = 2; i < numbers.length; i++) {
        if (numbers[0] !== numbers[i]) {
          return console.log(numbers[i]);
        } else {
          continue loop;
          // return console.log("В массиве все числа одинаковые!");
        }
      }
    }
  }
  console.log("В массиве все числа одинаковые!");
}

stray([1, 1, 1, 1, 1, 1, 1, 1, 1, 9]);

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

// console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));
// console.log(createPhoneNumber([1, 1, 1, 1, 1, 1, 7, 8, 9, 0]));
