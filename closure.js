// Пример замыкание 1

// function external() {
//   const externalVar = "Я - внешняя функция";

//   function internal() {
//     const internalVar = "Я - внутренняя функция";
//     console.log("internalVar >", internalVar);
//     console.log("externalVar >", externalVar);
//   }
//   return internal;
// }

// const internalFn = external();
// internalFn();

// Пример замыкание 2

// function createAddress(type) {
//   const address = type.toUpperCase();
//   return function (name) {
//     return `${address} ${name}`;
//   };
// }

// const addressGrazhdanin = createAddress("Гражданин");
// const addressGrazhdanka = createAddress("Гражданка");

// console.log(addressGrazhdanin("Василь"));
// console.log(addressGrazhdanka("Василиса"));

// Пример замыкание 3

function createPlayer(name) {
  let score = 0;
  return function scoreCount() {
    score++;
    return `${name} - ${score} баллов!`;
  };
}

const playerOne = createPlayer("Vasyl");
const playerTwo = createPlayer("Inna");
