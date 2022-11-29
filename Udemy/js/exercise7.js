"use strict";

/*
1) Создайте функцию, которая будет вычислять объем и площадь полной поверхности куба (тоже базовая математика, иногда используется в создании анимаций). Эта функция принимает в себя целое число со значением длины ребра куба. Ответ выведите в формате строки, который изображен в примерах.

Если в функцию попал неправильный аргумент или вычислить значения невозможно - вернуть строку "При вычислении произошла ошибка"

calculateVolumeAndArea(5)  => 'Объем куба: 125, площадь всей поверхности: 150'
*/

// function calculateVolumeAndArea(verge) {
//   if (typeof verge !== "number" || verge < 0 || !Number.isInteger(verge)) {
//     return "При вычислении произошла ошибка";
//   }

//   let volume = 0,
//     area = 0;

//   volume = verge * verge * verge;

//   area = 6 * (verge * verge);

//   return `Объем куба: ${volume}, площадь всей поверхности: ${area}`;
// }

// function calculateVolumeAndArea(verge) {
//   if (typeof length !== "number" || length < 0 || !Number.isInteger(length)) {
//     return "При вычислении произошла ошибка";
//   }

//   let volume = 0,
//     area = 0;

//   volume = verge * verge * verge;
//   // length ** 3 - это тоже самое, что и выше или варианты через цикл.
//   // ** - это оператор степени, напоминаю. Но онлайн редактор его не принимает =/
//   area = verge * verge * 6;

//   return `Объем куба: ${volume}, площадь всей поверхности: ${area}`;
// }

// function calculateVolumeAndArea(verge) {
//   if (typeof verge !== "number" || verge < 0 || !Number.isInteger(verge)) {
//     return "При вычислении произошла оибка!";
//   }

//   let sqr = 0,
//     volume = 0;

//   sqr = verge * verge * verge;
//   volume = 6 * (verge * verge);
//   return `Объем куба: ${sqr}, площадь всей поверхности: ${volume}`;
// }
// console.log(calculateVolumeAndArea(5));
// console.log(calculateVolumeAndArea(15));
// console.log(calculateVolumeAndArea(15.5));
// console.log(calculateVolumeAndArea("15"));
// console.log(calculateVolumeAndArea(-15));

// console.log(typeof calculateVolumeAndArea(5));
// console.log(typeof calculateVolumeAndArea(15.5));

function getCoupeNumber(number) {
  if (typeof number !== "number" || number < 0 || !Number.isInteger(number)) {
    return "Ошибка. Проверьте правильность введенного номера места";
  } else if (number === 0 || number > 36) {
    return "Таких мест в вагоне не существует";
  } else {
    return Math.ceil(number / 4);

    // берем номер купе и делим его на 4, округляем к большему - это номер купе
    // если 15/4 = 3.75 должно быть 4 купе
    // если 17/4 = 4.25 должно быть 5 купе
    // если 1/4 = 0.25 должно быть 1 купе
    // если 8/4 = 2 должно быть 2 купе
    // если 36/4 = 9 должно быть 9 купе
  }
}

console.log(getCoupeNumber(33));
console.log(getCoupeNumber(7));
console.log(getCoupeNumber(300));
console.log(getCoupeNumber(0));
console.log(getCoupeNumber(7.7));
console.log(getCoupeNumber(-10));
console.log(getCoupeNumber("Hello"));
console.log(getCoupeNumber("xv"));
