"use strict";

/*
Задание:

У вас есть объект с данными о ресторане. Начинающий разработчик создал несколько функций, которые работают неправильно и он не может понять почему. Нужно исправить функции так, чтобы они давали всегда правильный результат.

1) Функция isOpen не хочет правильно работать. Что мы уже не пробовали подставлять в неё - результат все время неправильный. Необходимо найти причины и исправить.

2) Функция isAverageLunchPriceTrue должна брать цены двух любых блюд из меню, складывать их и сравнивать с средним чеком (averageLunchPrice).

Сейчас функция работает, но постоянно выдает неправильный результат. Ведь из представленного меню сумма двух любых цен всегда будет больше 20. Необходимо найти причину и исправить.

3) Функция transferWaitors создана для того, чтобы копировать шаблон данных и передавать их в другой ресторан. Конечно, в другом ресторане будут другие блюда, другие официанты и тп. Сейчас эта функция только в начале разработки и должна менять данные про официантов.

Но в нынешнем виде мы обнаружили, что после её запуска не только копия данных содержит новых официантов, но и основные данные! В restorantData сотрудник Alice исчезает и заменяется Mike! Необходимо найти причину и немедленно исправить, чтобы данные были разделены.
*/

const restorantData = {
  menu: [
    {
      name: "Salad Caesar",
      price: "14$",
    },
    {
      name: "Pizza Diavola",
      price: "9$",
    },
    {
      name: "Beefsteak",
      price: "17$",
    },
    {
      name: "Napoleon",
      price: "7$",
    },
  ],
  waitors: [
    { name: "Alice", age: 22 },
    { name: "John", age: 24 },
  ],
  averageLunchPrice: "20$",
  openNow: true,
};

function isOpen(prop) {
  let answer = "";
  prop ? (answer = "Открыто") : (answer = "Закрыто");

  return answer;
}
// ok
console.log(isOpen(restorantData.openNow));

function isAverageLunchPriceTrue(fDish, sDish, average) {
  if (
    +fDish.price.slice(0, -1) + +sDish.price.slice(0, -1) <
    +average.slice(0, -1)
  ) {
    return "Цена ниже средней";
  } else {
    return "Цена выше средней";
  }
}
// ok
console.log(
  isAverageLunchPriceTrue(
    restorantData.menu[0],
    restorantData.menu[1],
    restorantData.averageLunchPrice
  )
);
/*
function transferWaitors(data) {
    const copy = Object.assign({}, data);

    copy.waitors[0] = {name: 'Mike', age: 32};
    return copy;
}

transferWaitors(restorantData);
*/
function transferWaitors(data) {
  const copy = Object.assign({}, data);

  //   const copy = Object.assign({}, data.waitors);

  data.waitors = Object.assign({}, copy.waitors);

  copy.waitors[0] = { name: "Mike", age: 32 };

  //   console.log(data.waitors);
  //   console.log(copy.waitors);

  return copy;
}

transferWaitors(restorantData);
