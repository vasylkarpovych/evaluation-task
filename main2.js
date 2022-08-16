// function Metrics(unit, value) {
//   this.unit = unit;
//   this.value = value;
// }

// ????????????????????????????????????????????????????????
// Metrics.prototype.toString = function metricsToString() {
//   return `${this.unit}=${this.value}`;
// };

// // Our database
// const database = [
//   new Metrics("cm", 100),
//   new Metrics("in", 39.37),
//   new Metrics("ft", 3.28),
//   new Metrics("m", 1),
// ];

function Person(name, email, user, rating, disabled) {
  this.name = name;
  this.email = email;
  this.user = user;
  this.rating = rating;
  this.disabled = disabled;
}

let personDatabase = [
  new Person("John", "john1@mail.com", "john1@mail.com", 25, true),
  new Person("John", "john2@mail.com", "john2@mail.com", 26, false),
  new Person("John", "john3@mail.com", "john3@mail.com", 28, false),
  new Person("Jane", "jane@mail.com", "jane@mail.com", 27, true),
  new Person("Mike", "mike@mail.com", "mike@mail.com", 20, false),
  new Person("Greg", "greg@mail.com", "greg@mail.com", 14, false),
];

Person.prototype.toString = function personToString() {
  return `${this.name}-${this.email}-${this.user}-${this.rating}-${this.diasbled}`;
};

const include = { name: "John", disabled: false };

//сделать фильтрацию массива объектов, мы принимаем ключ-значение NAME и возращаем результат все варианты электронной почты этого имени

function include() {
  console.log(personDatabase);
  Object.keys(include).forEach((key) => {
    let result = [];
    personDatabase.forEach((person) => {
      if (person[key] === include[key]) {
        result.push(person);
      }
    });
    personDatabase = result;
  });
  console.log(personDatabase);
}

// let newListName = [];

// for (let i of dataPersonEmail) {
//   if (i.name == "John") {
//     newListName.push(i);
//   }
// }
// console.log(newListName);

// //сделать фильтрацию массива объектов, мы принимаем ключ-значение DISABLET допускается ли человек к работе, и возращаем все варианты, где человек не допускается, значение FALSE

// let newListDelete = [];

// for (let j of dataPerson) {
//   if (j.disabled == false) {
//     newListDelete.push(j);
//   }
// }
// console.log(newListDelete);

console.log(include());
