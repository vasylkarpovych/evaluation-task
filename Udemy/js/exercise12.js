"use strict";

const someString = "This is some strange string";

function reverse(str) {
  if (typeof str !== "string") {
    return "Ошибка";
  } else {
    return str.split("").reverse().join("");
  }
}
// console.log(reverse(someString));

/*
4) Один банк основной с базовыми валютами, второй дополнительный с прочими валютами:
const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];
Вам нужно создать главную функцию банкомата availableCurr, которая принимает два аргумента: первый - это массив со всеми доступными валютами из двух банков сразу (сейчас представим, что они не могут повторяться), второй - необязательный аргумент, который указывает ту валюту, которая сейчас закончилась в банкомате. Если массив в первом аргументе пустой - то функция возвращает строку 'Нет доступных валют'. Функция возвращает строку в нужном виде.

availableCurr(['UAH', 'RUB', 'CNY'], 'CNY')
Вернет строку:
Доступные валюты:
UAH
RUB

- CNY (юань) исчез из списка валют, значит такая валюта закончилась
- После валюты: стоит перенос строки \n, и после каждой валюты тоже. Это важно для тестов
- Данные для первого аргумента должны приходить сразу из двух банков, причем сначала baseCurrencies, потом additionalCurrencies по порядку
*/

const baseCurrencies = ["USD", "EUR"];
const additionalCurrencies = ["UAH", "RUB", "CNY"];
// массив со всеми валютами
const arrFull = baseCurrencies.concat(additionalCurrencies);
// массив с валютами, которых нет на данный момент
const arrStop = [];
console.log(arrFull);
console.log(typeof arrStop[0]);
console.log(undefined === undefined);

function availableCurr(arr, missingCurr) {
  if (arr[0] === undefined) {
    return "Нет доступных валют";
  } else {
    let strCurrency = "Доступные валюты:\n";
    for (let item of arr) {
      if (item !== missingCurr) {
        strCurrency += item + "\n";
      }
    }
    return strCurrency;
  }
}

console.log(availableCurr(arrFull, "RUB"));
