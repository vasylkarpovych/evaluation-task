const dataPersonEmail = [
  { name: "John", email: "john1@mail.com" },
  { name: "John", email: "john2@mail.com" },
  { name: "Jane", email: "john2@mail.com" },
];

const dataPerson = [
  { user: "make@mail.com", rating: 20, disabled: false },
  { user: "greg@mail.com", rating: 14, disabled: false },
  { user: "john2@mail.com", rating: 25, disabled: true },
];

const conditionEmail = {
  include: [{ name: "John" }],
  soort_by: ["email"],
};

const conditionDisablet = {
  exclude: [{ disabled: true }],
  soort_by: ["rating"],
};

//сделать фильтрацию массива объектов, мы принимаем ключ-значение NAME и возращаем результат все варианты электронной почты этого имени

let newListName = [];

for (let i of dataPersonEmail) {
  if (i.name == "John") {
    newListName.push(i);
  }
}
console.log(newListName);

//сделать фильтрацию массива объектов, мы принимаем ключ-значение DISABLET допускается ли человек к работе, и возращаем все варианты, где человек не допускается, значение FALSE

let newListDelete = [];

for (let j of dataPerson) {
  if (j.disabled == false) {
    newListDelete.push(j);
  }
}
console.log(newListDelete);
