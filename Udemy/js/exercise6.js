"use strict";

/*
1) Создайте функцию, которая будет на вход принимать 1 аргумент с именем человека и возвращать строку.

Пример: вызов функции sayHello('Антон') возвращает строку "Привет, Антон!". В решении вызывать функцию не нужно, программа сделает это за вас.

P.S. возвращать - это использовать ключевое слово return.

P.S.S. Это классическая функция-модификатор, которых мы дальше по курсу будем создавать еще много в разных видах.
*/

//  console.log(typeof str);

function sayHello(say) {
  return "Привет, " + say + "!";
}

/*
2) Создайте функцию, которая принимает в себя 1 аргумент в виде целого числа и возвращает массив из трех чисел: одно на 1 меньше, сам аргумент, и число на 1 больше.

Пример: вызов функции returnNeighboringNumbers(5) возвращает массив в виде [4, 5, 6].
*/
function returnNeighboringNumbers(num) {
  const arr = [num - 1, num, num + 1];
  return arr;
}

/*
3) Создайте функцию, которая будет принимать в себя 2 аргумента, оба числа. Первое число - это база, второе число - это сколько раз нужно будет повторить это число в прогрессии. (Смотри пример ниже). Функция должна возвращать строку (или число в особых случаях, о которых ниже), где эти числа идут по порядку, разделенные тремя дефисами "---". После последнего числа их не должно быть.

Если второй аргумент не является числом, равен или меньше нуля - то возвращать просто первый аргумент. (Проверяем через оператор typeof)

Примеры:

Вызов функции getMathResult(5, 3) даст ответ 5---10---15
*/

/* МОЕ РЕШЕНИЕ, вс еработает, но не проптила платформа учебная

function getMathResult(num, mult) {
  let result = "";
  if (typeof mult == "number" && mult > 0) {
    for (let i = 1; i <= mult; i++) {
      if (i < mult) {
        let multip = i * num;
        result += multip + "---";
      } else if (i == mult) {
        let multip = i * num;
        result += multip;
        return result;
      }
    }
  } else {
    result += num;
    return result;
  }
}
*/

function getMathResult(num, mult) {
  
  if (typeof mult !== "number" || mult < 0) {
    console.log(num);
    return num;
  }

  let result = "";

  for (let i = 1; i <= mult; i++) {
    if (i === mult) {
      result += `${num * i}`;
    } else {
      result += `${num * i}---`;
    }
  }
  console.log(result);
  return result;
}

getMathResult(5, 3);
getMathResult(3, 10);
getMathResult(10, 5);
getMathResult(10, "5");
getMathResult(10, 0);
getMathResult(20, -5);
