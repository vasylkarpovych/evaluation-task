"use strict";

const students = [
  "Peter",
  "Andrew",
  "Ann",
  "Mark",
  "Josh",
  "Sandra",
  "Cris",
  "Bernard",
  "Takesi",
  "Sam",
  "Zlata",
];

function sortStudentsByGroups(arr) {
  const arr1 = [];
  const arr2 = [];
  const arr3 = [];
  const arr4 = [];
  let arrResult = [];
  let str = "Оставшиеся студенты: ";
  if (arr.length % 3 === 0) {
    str = "Оставшиеся студенты: -";
  }

  arr.sort();

  arr.forEach((element, i) => {
    //  console.log(element);
    //  console.log(i);
    if (i < 3) {
      arr1.push(element);
    } else if (i < 6) {
      arr2.push(element);
    } else if (i < 9) {
      arr3.push(element);
    } else if (i > 8) {
      arr4.push(element);
    }

    if (arr.length % 3 === 1) {
      str += arr4.join(", ");
    } else if (arr.length % 3 === 2) {
      str = "Оставшиеся студенты: " + arr4.join(", ");
    }
  });
  return (arrResult = [arr1, arr2, arr3, str]);
  //   console.log(arr1, arr2, arr3, str);
}

// sortStudentsByGroups(students);
console.log(sortStudentsByGroups(students));
/*
Задача:

У вас есть список учеников, которые хотят поиграть в игру:

const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam'];
Но команд может быть только 3 по 3 человека. Напишите функцию sortStudentsByGroups, которая принимает в себя массив строк.

Внутри она сначала сортирует имена по алфавиту. Затем распределяет учеников по 3 человека в 3 группы по алфавитному порядку. Эти группы должны быть массивами. Как итог, функция возвращает новый массив с тремя командами и строкой как 4й элемент.

Пример:

sortStudentsByGroups(students)  =>

[
  [ 'Andrew', 'Ann', 'Bernard' ],
  [ 'Cris', 'Josh', 'Mark' ],
  [ 'Peter', 'Sam', 'Sandra' ],
  'Оставшиеся студенты: Takesi'
]
Если убрать одно студента из списка, то результат будет:

[
  [ 'Andrew', 'Ann', 'Bernard' ],
  [ 'Cris', 'Josh', 'Mark' ],
  [ 'Peter', 'Sam', 'Sandra' ],
  'Оставшиеся студенты: -'
]
А если добавить одного, то:

[
  [ 'Andrew', 'Ann', 'Bernard' ],
  [ 'Cris', 'Josh', 'Mark' ],
  [ 'Peter', 'Sam', 'Sandra' ],
  'Оставшиеся студенты: Takesi, Somebody'
]
То есть, меняется содержимое строки. Все оставшиеся ученики попадают туда.

Задача интересная, немного заковыристая, но все необходимое для неё мы уже проходили. Просто распишите логику действий строка за строкой.
*/
