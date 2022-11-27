"use strict";

//циклы

let num = 50;

//// 1. WHILE loop
// while (num <= 55) {
//   console.log(num);
//   num++;
// }

//// 2. DO WHILE loop
//do {
//   console.log(num);
//   num++;
// } while (num < 55);

//// 3. FOR loop

for (let i = 1; i < 10; i++) {
  if (3 < i) {
    // break; // этот оператор прерывает цикл и выходит из него
    continue; // этот оператор прерывает цикл только на момент условия и потом цикл продолжается
  }
  console.log(i);
}

//вложенные циклы

// for (let i = 0; i < 3; i++) {
//   console.log(i);
//   for (let j = 0; j < 3; j++) {
//     console.log(j);
//   }
// }

// Сделать задачку, при помощи циклов наритовать пирамидку из звездочек, как показано ниже:
// *
// **
// ***
// ****
// *****
// ******
// *******
// ********

let result = "";
const lengthStar = 9;

for (let i = 1; i < lengthStar; i++) {
  for (let j = 0; j < i; j++) {
    result += "*";
  }

  result += "\n";
}

console.log(result);

//три цикла и CONTINUE и BREAK

first: for (let i = 0; i < 3; i++) {
  console.log(`First level: ${i}`);
  for (let j = 0; j < 3; j++) {
    console.log(`Second level: ${j}`);
    for (let k = 0; k < 3; k++) {
      if (k === 2) {
        break first;
      }
      console.log(`Thrid level: ${k}`);
    }
  }
}
