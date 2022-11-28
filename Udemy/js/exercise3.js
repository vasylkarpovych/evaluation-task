function firstTask() {
  let number = 5;

  while (number <= 10) {
    console.log(number);
    number++;
  }
}

function secondTask() {
  for (let num = 20; num >= 10; num--) {
    console.log(num);
    if (num === 14) {
      break;
    }
  }
}
// Место для третьей задачи
function thirdTask() {
  // Пишем решение вот тут
  let num = 1;

  for (let i = 0; i < 11; i++) {
    if (num % 2 === 0) {
      console.log(num);
    }
    num++;
  }
}

// Место для четвертой задачи

// Цикл, который нужно переписать:

// for (let i = 2; i <= 16; i++) {
//     if (i % 2 === 0) {
//         continue;
//     } else {
//         console.log(i);
//     }
// }

function fourthTask() {
  // Пишем решение вот тут

  let num = 3;

  while (num <= 15) {
    if (num % 2) {
      console.log(num);
    } else {
      num++;
      continue;
    }
    num++;
  }
}

// Место для пятой задачи

function fifthTask() {
  const arrayOfNumbers = [];

  // Пишем решение вот тут
  let elem = 5;

  for (let i = 0; i < 6; i++) {
    arrayOfNumbers[i] = elem;
    elem++;
  }
  console.log(arrayOfNumbers);

  // Не трогаем
  return arrayOfNumbers;
}
