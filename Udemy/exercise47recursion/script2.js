"use strict";

let students = {
  js: [
    {
      name: "John",
      progress: 100,
    },
    {
      name: "Ivan",
      progress: 60,
    },
  ],

  html: {
    basic: [
      {
        name: "Peter",
        progress: 20,
      },
      {
        name: "Ann",
        progress: 18,
      },
    ],
    pro: [
      {
        name: "Sam",
        progress: 10,
      },
    ],
    semi: {
      students: [
        {
          name: "Test",
          progress: 100,
        },
      ],
    },
  },
};

// задача посчитать средний прогресс, учитывая всех студентов. Сперва напигем с помощью цикла, потом применим рекурсию:

// function getTotalProgressByIteration(data) {
//   let total = 0;
//   let students = 0;

//   for (let course of Object.values(data)) {
//     if (Array.isArray(course)) {
//       students += course.length;

//       for (let i = 0; i < course.length; i++) {
//         total += course[i].progress;
//       }
//     } else {
//       for (let subCourse of Object.values(course)) {
//         students += subCourse.length;

//         for (let i = 0; i < subCourse.length; i++) {
//           total += subCourse[i].progress;
//         }
//       }
//     }
//   }

//   return total / students;
// }
// console.log(getTotalProgressByIteration(students));

function getTotalProgressByRecursion(date) {
  if (Array.isArray(date)) {
    let total = 0;

    for (let i = 0; i < date.length; i++) {
      total += date[i].progress;
    }

    return [total, date.length];
  } else {
    let total = [0, 0];

    for (let subDate of Object.values(date)) {
      const subDateArr = getTotalProgressByRecursion(subDate);
      total[0] += subDateArr[0];
      total[1] += subDateArr[1];
    }
    return total;
  }
}

const result = getTotalProgressByRecursion(students);

console.log(result[0] / result[1]);
