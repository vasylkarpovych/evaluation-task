// function Metrics(unit, value) {
//   this.unit = unit;
//   this.value = value;
// }

// Metrics.prototype.toString = function metricsToString() {
//   return `${this.unit}=${this.value}`;
// };

// // our database, JSON format:

// const jsonStringFirstJSON =
//   '[{"unit":"cm","value":100},{"unit":"m","value":1},{"unit":"ft","value":3.28},{"unit":"in","value":39.37}]';

// const databaseFirstNoJson = [
//   new Metrics("cm", 100),
//   new Metrics("in", 39.37),
//   new Metrics("ft", 3.28),
//   new Metrics("m", 1),
// ];

// const databaseFirst = JSON.parse(jsonStringFirstJSON);

// console.log(databaseFirst);
// console.log(databaseFirstNoJson);

// function convert() {
//   let unit = document.querySelector(".unit-input").value;
//   let value = document.querySelector(".value-input").value;
//   let convert = document.querySelector(".convert-input").value;

//   if (
//     databaseFirst.some((metrics) => metrics.unit === unit) &&
//     databaseFirst.some((metrics) => metrics.unit === convert)
//   ) {
//     document.querySelector(".result").innerHTML =
//       (value / databaseFirst.find((metrics) => metrics.unit === unit).value) *
//       databaseFirst.find((metrics) => metrics.unit === convert).value;
//   } else {
//     document.querySelector(".result").innerHTML =
//       "Unknown unit. Pelase verify input.";
//   }
// }

// function addUnit() {
//   let unit = document.querySelector(".unit-creation-input").value;
//   let value = document.querySelector(".value-creation-input").value;
//   databaseFirst.push(new Metrics(unit, value));
//   document.querySelector(".resultMeter").innerHTML = databaseFirst;
// }

// document.querySelector(".resultMeter").innerHTML = databaseFirst;
// document.querySelector(".convert-button").onclick = convert;
// document.querySelector(".save-unit-button").onclick = addUnit;

// //Second Task

// function Person(name, email, user, rating, disabled) {
//   this.name = name;
//   this.email = email;
//   this.user = user;
//   this.rating = rating;
//   this.disabled = disabled;
// }

// let personDatabase = [
//   new Person("John", "john1@mail.com", "john1@mail.com", 25, true),
//   new Person("John", "john2@mail.com", "john2@mail.com", 26, false),
//   new Person("John", "john3@mail.com", "john3@mail.com", 28, false),
//   new Person("Jane", "jane@mail.com", "jane@mail.com", 27, true),
//   new Person("Mike", "mike@mail.com", "mike@mail.com", 20, false),
//   new Person("Greg", "greg@mail.com", "greg@mail.com", 14, false),
// ];

// Person.prototype.toString = function personToString() {
//   return `${this.name}-${this.email}-${this.user}-${this.rating}-${this.diasbled}`;
// };

// const include = { name: "John", disabled: false };

// console.log(personDatabase);

// //сделать фильтрацию массива объектов, мы принимаем ключ-значение NAME и возращаем результат все варианты электронной почты этого имени

// function include() {
//   //   console.log(personDatabase);
//   Object.keys(include).forEach((key) => {
//     let result = [];
//     personDatabase.forEach((person) => {
//       if (person[key] === include[key]) {
//         result.push(person);
//       }
//     });
//     personDatabase = result;
//   });
//   console.log(personDatabase);
// }

// // let newListName = [];

// // for (let i of dataPersonEmail) {
// //   if (i.name == "John") {
// //     newListName.push(i);
// //   }
// // }
// // console.log(newListName);

// // //сделать фильтрацию массива объектов, мы принимаем ключ-значение DISABLET допускается ли человек к работе, и возращаем все варианты, где человек не допускается, значение FALSE

// // let newListDelete = [];

// // for (let j of dataPerson) {
// //   if (j.disabled == false) {
// //     newListDelete.push(j);
// //   }
// // }
// // console.log(newListDelete);

// console.log(include());

// //Third Task

/* 
Алгоритм для решения третей задачи:
1. Мы генерируем точку 'r' в трех плоскостях x,y,z
2. Вторую точку 'a' задает пользователь вручную, путем введения кооринат x,y,z в промежутке от 0 до 100
3. Мы создадим фунцию, которая будет сравнивать кординаты по трем осям нашей рандомной точки 'r' и точки 'a'
4. Алгоритм будет по каждой из трех осей, мы вычитаем значение distance[x] = r[x] - a[x] и записываем модуль числа |distance[x]|
5. к примеру: х1=10 х2=50 ... х3=10-50=-40=40
              х1=40 х2=10 ... х3=40-10=30

            отрицательный или положительный знак будет показывать в какую сторону сдвигать на половину наши координаты, отнимаем мы или прибавляем от исходной точки

Я предлагаю, что мы дистанцию делим на два и повторям в цикле, когда координаты первой и второй точки равны, то мы нашли искомую точку
х1=8 х2=9 ... 8-9=-1=1
остаток от деления мы каждый раз просто отбрасываем, именно отбрасываем, а не откугляем
ну да, все будет работать:
8-9=-1=1 получается, что мы отнимаем половину от большего = 9-0,5 = 8,5 ...отбрасываем десятичные, и получаем искомые результат, посчитали операции, все готово!
*/

console.log(`Random array [x, y, z]`);
const userArrayES6 = [0, 0, 0];

const newNumber = userArrayES6.map((user) => {
  return (userArrayES6[user] = Math.trunc(Math.random() * 100));
});
console.log(newNumber);

console.log(`User array [x, y, z]`);
let x = 10,
  y = 20,
  z = 50;
const userArray = [x, y, z];
console.log(userArray);

userArray.forEach((element) => {
  console.log(`User element: ${element}`);
});

function equalityChek() {
  if (JSON.stringify(userArrayES6) === JSON.stringify(userArray)) {
    console.log(`Наши массивы изначально равны`);
  } else {
    console.log(`Наши массивы не равны`);
  }
}

equalityChek();

function search() {}

/*мы берем первый элемент рандомного массива, и сравнимаем его с первым элементов заданого массива

Два варианта:
Если такой: р91 и ю10, то р91-ю10= 81 
Мы берем и делим на 2 = 81/2 = 40,5 обрезаем десятые = 41
и переприсваеваем ю10+40 = ю50
и эту же проверку по кругу:
91-51= 40= 20 = 51+20=71
91-71 = 20 = 10 = 81
91 - 81 = 10 = 5
91-86 = 6 = 3
91-89 = 2 = 1
91-90 = 1 = 1 
91 - 91 = 0 


Если такой: р10 и ю91, то р10-ю91= -81
Мы берем и делим на 2 = -81/2 = -40,5 обрезаем десятые = -41
и переприсваеваем ю91-41 = ю50
и эту же проверку по кругу:
10-ю50= -40= -20  
10-ю30 = -20 = -10
10 - ю20 = -10 = -5
10-ю15 = -5 = -2,5
10-ю12 = -2 = -1
10-ю11 = -1 = -0,5
10 -ю10,5 = -0,5  


*/
console.log(`TEST`);

let user = [10, 75, 50];
let ran = [91, 15, 45];
let xRan = ran[0];
let yRan = ran[1];
let zRan = ran[2];
let calc = 0;

//Math.trunc() - обрезает дробную часть числа
//Math. round() возвращает число, округлённое к ближайшему целому

// for (let i = 0; i < user.length; i++) {
//   user[i] = user[i]-;
// }
function half(xUser, yUser, zUser) {}

console.log("Миссив, что здал пользователь: " + user);
console.log("Массив, который сгенерировал компьютер: " + ran);

function compareArray() {
  //обворачиваем все в цикл, чтоб проверять количество итераций
  while (user[0] !== ran[0] && user[1] !== ran[1] && user[2] !== ran[2]) {
    if (user[0] !== ran[0] && user[1] !== ran[1] && user[2] !== ran[2]) {
      //если массивы разные, выполняем этот блок кода:
      for (i = 0; i < user.length; i++) {
        //берем разницу длины между массивом по каждому из элементов, делим на два и отнимаем от от существующего массива, все перезаписываем в новый массив, который будет в два раза ближе к существующему
        let difference = user[i] - ran[i];
        console.log("Разница: " + difference);
        difference < 0 ? Math.round(user[i]) : Math.round(user[i]);
        user[i] = user[i] - difference / 2;
        user[i] = Math.round(user[i]);
        console.log(user[i]);
        //приводим к целому, округляя значение (я пришел к мысли) нужно сделать отдельную переменную разница, и если разница отрицательная, то записываем с помощью метода round()б а если положительная, то с помощью метода trunc(), запишим все это тернарным оператором:
        // user[i] = Math.round(user[i]);
      }
      console.log("Новый массив: " + user);
      calc++;
      console.log("Количество итераций: " + calc);
    } else {
      console.log(
        `Какое везение, наша рандомно сгенерированная точка равна точке, что задал пользователь, 100% попадание с первого раза. Сегодня явно твой день, счастливчик!`
      );
    }
  }
}

// console.log(Math.trunc(-12.5));
// console.log(Math.round(-12.5 - 1));

// console.log(Math.trunc(12.5));
// console.log(Math.round(12.5));

compareArray();

//умножить каждый елемент массива на 2

// for (let i = 0; i < a.length; i++) {

// }
// console.log(a[1]);

// let b = a.map(function(currentValue, indet, array){
//   return gogogo;
// });

// let c = a.map(function (x, y) {
//   console.log(y);
//   return x;
// });
// console.log(c);

// console.log("YouTube practics:");

// for (let n = 3; n <= 100; n++) {
//   let flag = true;

//   for (a = 2; a < n; a++) {
//     if (n % a === 0) {
//       flag = false;
//       break;
//       console.log("wowowo");
//     }
//   }

//   if (flag) {
//     console.log(n + " - простое число");
//   } else {
//     console.log(n + " - составное число");
//   }
// }

// for (let y = 1; y <= 5; y++) {
//   let row = "";

//   for (let x = 1; x <= 10; x++) {
//     row += x * y + "\t";
//   }

//   console.log(row);
// }

// let counter = 0;
// for (let i = 0; i < 5; i++) {
//   for (let j = 0; j < 5; j++) {
//     for (let k = 0; k < 5; k++) {
//       counter++;
//       console.log(i, j, k);
//     }
//   }
// }
// console.log(counter);

//1
//2  2
//3  3  3
//4  4  4  4

// for (let n = 1; n < 10; n++) {
//   let str = "";
//   for (i = 1; i <= n; i++) {
//     str += n + " ";
//   }
//   console.log(str);
// }

// for (let i = 0; i < 100; i++) {
//   if (i % 7 === 0) {
//     continue;
//   }
//   console.log(i);
// }

// mainloop: for (let i = 0; i < 5; i++) {
//   for (let j = 0; j < 5; j++) {
//     for (let k = 0; k < 5; k++) {
//       console.log(i, j, k);

//       if (i * j * k >= 10) {
//         break mainloop;
//       }
//     }
//   }
// }

//Task Four
