"use strict";

/*
Задача:
У вас есть небольшой кусочек данных о торговом центре, которые записаны в объекте shoppingMallData. Они содержат массив с данными о магазинах, где указана длина и ширина помещения; высоту помещения; стоимость отопления за 1 кубический метр и бюджет на оплату отопления за месяц.

Основная задача - это написать функцию isBudgetEnough, которая буде возвращать строку. Если бюджета хватает для отопления всего объема торгового центра - выводится 'Бюджета достаточно', если нет - 'Бюджета недостаточно'. И все 🙂
Но эта задача содержит несколько подзадач внутри:
- вычисление общей площади всех магазинов, которая вычисляется как длина магазина, умноженная на его ширину;
- вычисление общего объема торгового центра, так как цена отопления указана в кубических метрах;
- определение того, хватает ли бюджета на оплату такого объема;
- все числа идут без единиц измерения для упрощения, просто цифры и все;
- функция должна продолжать работать, даже если изменяется количество магазинов, высота, бюджет или подставляется вообще другой объект.
*/
const shoppingMallData = {
  shops: [
    {
      width: 10,
      length: 5,
    },
    {
      width: 15,
      length: 7,
    },
    {
      width: 20,
      length: 5,
    },
    {
      width: 8,
      length: 10,
    },
  ],
  height: 5,
  moneyPer1m3: 30,
  budget: 50000,
  // areaShoppingMall: function () {
  //   let area = 0;
  //   for (let i = 0; i < shoppingMallData.shops.length; i++) {
  //     area +=
  //       shoppingMallData.shops[i].length * shoppingMallData.shops[i].width;
  //   }
  //   return area;
  // },
};

function isBudgetEnough(data) {
  let area = 0;
  for (let i = 0; i < data.shops.length; i++) {
    area += data.shops[i].length * data.shops[i].width;
  }
  // console.log("Площадь всех помещений: " + area);

  let volume = area * data.height;
  // console.log("Объем всех помещений: " + volume);

  let budgetShoppigMall = data.moneyPer1m3 * volume;
  if (budgetShoppigMall <= data.budget) {
    // console.log(
    //   `Нашего бюджета хватает на оплату аренды, оплата составляет ${budgetShoppigMall}`
    // );
    return "Бюджета достаточно";
  } else {
    // console.log(
    //   `Нашего бюджета не хватает на оплату аренды, оплата составляет ${budgetShoppigMall}`
    // );
    return "Бюджета недостаточно";
  }
}

// isBudgetEnough(shoppingMallData);
console.log(isBudgetEnough(shoppingMallData));
