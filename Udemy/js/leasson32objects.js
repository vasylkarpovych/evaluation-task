"use strict";

const options = {
  name: "test",
  width: 1024,
  height: 1024,
  colors: {
    border: "black",
    bg: "red",
  },
  makeTest: function () {
    console.log("Test");
  },
};

// это ДЕСТРУКТУРИЗАЦИЯ
// вот такая структура и называется деструктуризация, то есть мы вытащили кусочки, свойства, которые находятся в объекте, в качестве отдельной переменной

const { border, bg } = options.colors;
console.log(border);

// console.log(options["colors"]["border"]);

// delete options.name;
// console.log(options);

// FOR IN работает для объекта, FOR OF для объекта работать не будет

// let counter = 0;
// for (let key in options) {
//   if (typeof options[key] === "object") {
//     for (let i in options[key]) {
//       console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
//       // counter++;
//     }
//   } else {
//     console.log(`Свойство ${key} имеет значение ${options[key]}`);
//     counter++;
//   }
// }

// console.log(counter);

// console.log(Object.keys(options).length);

// options.makeTest();
