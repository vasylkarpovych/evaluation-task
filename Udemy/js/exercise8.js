"use strict";

function getTimeFromMinutes(time) {
  if (typeof time !== "number" || !Number.isInteger(time) || time < 0) {
    return "Ошибка, проверьте данные";
  }
  let hour = Math.trunc(time / 60);
  let min = Math.trunc(((time / 60) % 1) * 60);

  if (hour === 1 || hour >= 21) {
    return `Это ${hour} час и ${min} минут`;
  } else if (hour === 0 || (hour >= 5 && hour <= 20)) {
    return `Это ${hour} часов и ${min} минут`;
  } else if (hour >= 2 && hour <= 4) {
    return `Это ${hour} часа и ${min} минут`;
  }
}

console.log(getTimeFromMinutes(150));
console.log(getTimeFromMinutes(50));
console.log(getTimeFromMinutes(0));
console.log(getTimeFromMinutes(-150));

// 0 часов
// 1 час
// 2 часа
// 3 часа
// 4 часа
// 5 часов
// 6 часов
// 7 часов
// 8 часов
// 9 часов
// 10 часов

// Вторая задача

function findMaxNumber(num1, num2, num3, num4) {
  if (
    typeof num1 !== "number" ||
    typeof num2 !== "number" ||
    typeof num3 !== "number" ||
    typeof num4 !== "number"
  ) {
    return 0;
  }
  return Math.max(num1, num2, num3, num4);
}

console.log(findMaxNumber(1, 5, 6.6, 11));
console.log(findMaxNumber(1, 5, "sss", "111"));
console.log(findMaxNumber());
