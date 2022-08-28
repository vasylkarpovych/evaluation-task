function Metrics(unit, value) {
  this.unit = unit;
  this.value = value;
}

Metrics.prototype.toString = function metricsToString() {
  return `${this.unit}=${this.value}`;
};

const firstTaskJson =
  '[{"unit":"cm","value":100},{"unit":"m","value":1},{"unit":"ft","value":3.28},{"unit":"in","value":39.37}]';

//сделать чтоб через одну переменную. САМ
const database = [];
JSON.parse(firstTaskJson).forEach((metric) => {
  database.push(new Metrics(metric["unit"], metric["value"]));
});

function convert() {
  let unit = document.querySelector(".unit-input").value;
  let value = document.querySelector(".value-input").value;
  let convert = document.querySelector(".convert-input").value;

  if (
    database.some((metrics) => metrics.unit === unit) &&
    database.some((metrics) => metrics.unit === convert)
  ) {
    document.querySelector(".result").innerHTML =
      (value / database.find((metrics) => metrics.unit === unit).value) *
      database.find((metrics) => metrics.unit === convert).value;
  } else {
    document.querySelector(".result").innerHTML =
      "Unknown unit. Pelase verify input.";
  }
}

function addUnit() {
  let unit = document.querySelector(".unit-creation-input").value;
  let value = document.querySelector(".value-creation-input").value;
  database.push(new Metrics(unit, value));
  document.querySelector(".resultMeter").innerHTML = database;
}

document.querySelector(".resultMeter").innerHTML = database;
document.querySelector(".convert-button").onclick = convert;
document.querySelector(".save-unit-button").onclick = addUnit;

//Second Task
console.log("Second Task");

function Person(name, email, user, rating, disabled) {
  this.name = name;
  this.email = email;
  this.user = user;
  this.rating = rating;
  this.disabled = disabled;
}

/*
const firstTaskJson =
  '[{"unit":"cm","value":100},{"unit":"m","value":1},{"unit":"ft","value":3.28},{"unit":"in","value":39.37}]';

//сделать чтоб через одну переменную. САМ
const database = [];
JSON.parse(firstTaskJson).forEach((metric) => {
  database.push(new Metrics(metric["unit"], metric["value"]));
});
*/

let personDatabase = [
  new Person("John", "john1@mail.com", "john1@mail.com", 25, true),
  new Person("John", "john2@mail.com", "john2@mail.com", 23, false),
  new Person("John", "john3@mail.com", "john3@mail.com", 28, false),
  new Person("Jane", "jane@mail.com", "jane@mail.com", 27, true),
  new Person("Mike", "mike@mail.com", "mike@mail.com", 20, false),
  new Person("Greg", "greg@mail.com", "greg@mail.com", 14, false),
];

console.log();

Person.prototype.toString = function personToString() {
  return `[${this.name}-${this.email}-${this.user}-${this.rating}-${this.disabled}] <br>`;
};

const include = [{ name: "John" } /*{ email: "john1@mail.com" }*/];
// const exclude = [{ name: "John" } /*{ email: "john1@mail.com" }*/];
const exclude = [{ name: "John" } /*{ email: "john1@mail.com" }*/];
const sort = { sort_by: "rating" };
const condition = { include, exclude, sort };

console.log(personDatabase);
document.querySelector(".personDatabase").innerHTML = [personDatabase];

//сделать фильтрацию массива объектов, мы принимаем ключ-значение NAME и возращаем результат все варианты электронной почты этого имени

function includeFunction() {
  let result = personDatabase.slice();
  condition.include.forEach((inc) => {
    Object.keys(inc).forEach((key) => {
      result.forEach((person) => {
        if (person[key] !== inc[key]) {
          result.splice(result.indexOf(person));
        }
      });
    });
  });
  result.sort((a, b) => a[condition.sort.sort_by] - b[condition.sort.sort_by]);
  console.log(result);
  //выводим в DOM
  document.querySelector(".includeFunction").innerHTML = result;
}
includeFunction();

//проверка БД, выводится вся, это значит, что мы можем опять работать с ней
console.log(personDatabase);
// let personDatabaseNew = personDatabase;
// //переименовал в новую переменную нашу БД, сейчас буду работать с новой
// console.log(personDatabaseNew);

// //вторая функция
// function excludeFunction() {
//   let result2 = personDatabaseNew.slice();
//   console.log(result2);
//   condition.exclude.forEach((exc) => {
//     Object.keys(exc).forEach((key) => {
//       result2.forEach((person) => {
//         if (person[key] === exc[key]) {
//           result2.splice(result2.indexOf(person));
//         }
//       });
//     });
//   });
//   result2.sort((a, b) => a[condition.sort.sort_by] - b[condition.sort.sort_by]);
//   console.log(result2);
// }
// console.log(excludeFunction());

//тренировочный
//проверка БД, выводится вся, это значит, что мы можем опять работать с ней
console.log(personDatabase);

const personDatabaseNew = [
  new Person("John", "john1@mail.com", "john1@mail.com", 25, true),
  new Person("John", "john2@mail.com", "john2@mail.com", 23, false),
  new Person("John", "john3@mail.com", "john3@mail.com", 28, false),
  new Person("Jane", "jane@mail.com", "jane@mail.com", 27, true),
  new Person("Mike", "mike@mail.com", "mike@mail.com", 20, false),
  new Person("Greg", "greg@mail.com", "greg@mail.com", 14, false),
];
//переименовал в новую переменную нашу БД, сейчас буду работать с новой
console.log(personDatabaseNew);

// let gggg = [];
//вторая функция
function excludeFunction() {
  let result2 = personDatabaseNew.slice();
  let counter = 0;
  console.log(result2);
  condition.exclude.forEach((exc) => {
    Object.keys(exc).forEach((key) => {
      for (let i = 0; i < result2.length; i++) {
        if (result2[i][key] === exc[key]) {
          result2.splice(i--, 1);
        }
      }
    });
  });
  result2.sort((a, b) => a[condition.sort.sort_by] - b[condition.sort.sort_by]);
  console.log(result2);
  document.querySelector(".excludeFunction").innerHTML = result2;
}
console.log(excludeFunction());

//Third Task

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
console.log(`Random array [x, y, z]`);
const userArrayES6 = [0, 0, 0];

const newNumber = userArrayES6.map((user) => {
  return (userArrayES6[user] = Math.trunc(Math.random() * 100));
});
console.log(newNumber);

console.log(`User array [x, y, z]`);
let x = 10,
  y = 75,
  z = 50;
const userArray = [x, y, z];
console.log(userArray);

console.log(`TEST`);

let user = [7, 99, 57];
// Это я создал массив, для того, чтоб удобно считать с фиксированными значениями, потом просто его удалю! Пока работаю с фиксированными значниями, когда все будет работать, я просто подставлю числа, что будут сгенирированы случайно
let ran = [91, 15, 45];
let xRan = ran[0];
let yRan = ran[1];
let zRan = ran[2];
let calc = 0;

//Math.trunc() - обрезает дробную часть числа
//Math. round() возвращает число, округлённое к ближайшему целому
// || - логическое или
// && - логичнсеок и

console.log("Миссив, что здал пользователь: " + user);
console.log("Массив, который сгенерировал компъютер: " + ran);

function compareArray() {
  //обворачиваем все в цикл, чтоб проверять количество итераций
  while (user[0] !== ran[0] || user[1] !== ran[1] || user[2] !== ran[2]) {
    if (user[0] !== ran[0] || user[1] !== ran[1] || user[2] !== ran[2]) {
      //если массивы разные, выполняем этот блок кода:
      for (i = 0; i < user.length; i++) {
        //берем разницу длины между массивом по каждому из элементов, делим на два и отнимаем от от существующего массива, все перезаписываем в новый массив, который будет в два раза ближе к существующему
        let difference = user[i] - ran[i];
        console.log("Разница: " + difference);
        // difference < 0 ? Math.trunc(user[i]) : Math.trunc(user[i]);
        user[i] =
          difference !== 1 ? user[i] - difference / 2 : user[i] - difference;
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
//У меня по итогу прослема, уверен что связаная с округлением половинок, но выдает почему-то [91, 16, 46] а по идее должно выдавать [91, 16, 46]. Получается когда остаток -1, все работает верно, а когда остаток 1, он ставит на 1 больше, чем мы искали, можно (как вариант) написать условие, что если положительный элемент, то мы просто отнимаем 1. Но у меня уже взравается голова))))

compareArray();

//Task Four

// const databaseQuiz = [{ ques: 1, question: "Какой спорт Вы предпочитаете?", {quest: 2, question:"Зимние виды спотра", "Летние виды спорта"} }];

function Question(question, response, responses) {
  this.text = question;
  this.response = response;
  this.responses = responses;
}

const databaseSport = [
  new Question("Any question 1", "any pesponse 1", [
    "any pesponse 2",
    "any pesponse 3",
  ]),
  new Question("Any question 2", "any pesponse 2", [
    "any pesponse 4",
    "any pesponse 5",
  ]),
  new Question("Any question 3", "any pesponse 3"),
  new Question("Any question 4", "any pesponse 4"),
  new Question("Any question 5", "any pesponse 5"),
];

function doAction() {
  /*
  1. берем первый объект из массива databaseSport  
  2. выводим вопрос на экран из поля question
  3. выводим вариатнты ответов на экран в кнопки из поля responses
  4. считываем выбор пользователя
  5. находим в databaseSport объект в котором response равен выбору пользователя
  6. повторяем из пункта 2 по 5
*/
}

//
