function Metrics(unit, value) {
  this.unit = unit;
  this.value = value;
}

Metrics.prototype.toString = function metricsToString() {
  return `${this.unit}=${this.value}`;
};

const firstTaskJson =
  '[{"unit":"cm","value":100},{"unit":"m","value":1},{"unit":"ft","value":3.28},{"unit":"in","value":39.37}]';

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
        database.find((metrics) => metrics.unit === convert).value +
      " " +
      convert;
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

const secondTaskJson =
  '[{"name":"John","email":"john1@mail.com","user":"john1@mail.com","rating":25,"disabled":true},{"name":"John","email":"john2@mail.com","user":"john2@mail.com","rating":23,"disabled":false},{"name":"John","email":"john3@mail.com","user":"john3@mail.com","rating":28,"disabled":false},{"name":"Jane","email":"jane@mail.com","user":"jane@mail.com","rating":27,"disabled":true},{"name":"Mike","email":"mike@mail.com","user":"mike@mail.com","rating":20,"disabled":false},{"name":"Greg","email":"greg@mail.com","user":"greg@mail.com","rating":14,"disabled":false}]';

const personDatabase = [];
JSON.parse(secondTaskJson).forEach((person) => {
  personDatabase.push(
    new Person(
      person["name"],
      person["email"],
      person["user"],
      person["rating"],
      person["disabled"]
    )
  );
});

Person.prototype.toString = function personToString() {
  return `[${this.name}-${this.email}-${this.user}-${this.rating}-${this.disabled}] <br>`;
};

const include = [{ name: "John" } /*, { email: "john1@mail.com" }*/];
const exclude = [{ name: "John" } /*, { email: "jane@mail.com" }*/];
const sort = { sort_by: "rating" };
const condition = { include, exclude, sort };

console.log(personDatabase);
document.querySelector(".personDatabase").innerHTML = [personDatabase];

//сделать фильтрацию массива объектов, мы принимаем ключ-значение NAME и возращаем результат все варианты электронной почты этого имени
function includeFunction() {
  let resultInclude = personDatabase.slice();
  condition.include.forEach((inc) => {
    Object.keys(inc).forEach((key) => {
      resultInclude.forEach((person) => {
        if (person[key] !== inc[key]) {
          resultInclude.splice(resultInclude.indexOf(person));
        }
      });
    });
  });
  resultInclude.sort(
    (a, b) => a[condition.sort.sort_by] - b[condition.sort.sort_by]
  );
  console.log(resultInclude);
  //выводим в DOM
  document.querySelector(".includeFunction").innerHTML = resultInclude;
}
includeFunction();

function excludeFunction() {
  let resultExclude = personDatabase.slice();
  let counter = 0;
  console.log(resultExclude);
  condition.exclude.forEach((exc) => {
    Object.keys(exc).forEach((key) => {
      for (let i = 0; i < resultExclude.length; i++) {
        if (resultExclude[i][key] === exc[key]) {
          resultExclude.splice(i--, 1);
        }
      }
    });
  });
  resultExclude.sort(
    (a, b) => a[condition.sort.sort_by] - b[condition.sort.sort_by]
  );
  console.log(resultExclude);
  document.querySelector(".excludeFunction").innerHTML = resultExclude;
}
excludeFunction();

//Third Task
console.log("Third Task");

function taskThird() {
  console.log(`Рандомно созданные координаты нашей точки [x, y, z]`);
  const randomPoint = [0, 0, 0];

  const newRandomPoint = randomPoint.map((user) => {
    return (randomPoint[user] = Math.trunc(Math.random() * 100));
  });
  console.log(newRandomPoint);

  let x, y, z;
  let user = [0, 0, 0];

  let xRan = newRandomPoint[0];
  let yRan = newRandomPoint[1];
  let zRan = newRandomPoint[2];
  let calc = 0;

  function userValue() {
    x = Number(document.querySelector(".inputX").value);
    y = Number(document.querySelector(".inputY").value);
    z = Number(document.querySelector(".inputZ").value);
    document.querySelector(".userPoint").innerHTML = [
      "Координата по оси X=" + x,
      "<br>Координата по оси Y=" + y,
      "<br>Координата по оси Z=" + z,
    ];
    user = [x, y, z];

    compareArray(x, y, z);
  }

  document.querySelector(".buttonXYZ").onclick = userValue;

  function compareArray(compareX, compareY, compareZ) {
    let compareUser = [compareX, compareY, compareZ];
    //обворачиваем все в цикл, чтоб проверять количество итераций
    while (
      compareUser[0] !== newRandomPoint[0] ||
      compareUser[1] !== newRandomPoint[1] ||
      compareUser[2] !== newRandomPoint[2]
    ) {
      if (
        compareUser[0] !== newRandomPoint[0] ||
        compareUser[1] !== newRandomPoint[1] ||
        compareUser[2] !== newRandomPoint[2]
      ) {
        //если массивы разные, выполняем этот блок кода:
        for (i = 0; i < compareUser.length; i++) {
          //берем разницу длины между массивом по каждому из элементов, делим на два и отнимаем от от существующего массива, все перезаписываем в новый массив, который будет в два раза ближе к существующему
          let difference = compareUser[i] - newRandomPoint[i];
          // console.log("Разница: " + difference);
          // difference < 0 ? Math.trunc(user[i]) : Math.trunc(user[i]);
          compareUser[i] =
            difference !== 1
              ? compareUser[i] - difference / 2
              : compareUser[i] - difference;
          compareUser[i] = Math.round(compareUser[i]);
          // console.log(user[i]);
          //приводим к целому, округляя значение (я пришел к мысли) нужно сделать отдельную переменную разница, и если разница отрицательная, то записываем с помощью метода round() а если положительная, то с помощью метода trunc(), запишим все это тернарным оператором:
          // user[i] = Math.round(user[i]);
        }
        // console.log("Новый массив: " + compareUser);
        calc++;
      } else {
        console.log(
          `Какое везение, наша рандомно сгенерированная точка равна точке, что задал пользователь, 100% попадание с первого раза. Сегодня явно твой день, счастливчик!`
        );
      }
    }
    console.log("Количество итераций, за которые мы шашли координаты: " + calc);
    document.querySelector(".final").innerHTML = calc;

    document.querySelector(".randomPoint").innerHTML = newRandomPoint;
  }
}
taskThird();

function Questions(question, responses, match) {
  this.question = question;
  this.responses = responses;
  this.match = match;
}

const sportDatabaseJSON =
  '[{"question":"Какой спорт Вам больше нравится?","responses":["Зимние виды спорта!","Летние виды спорта!"],"match":"Давай по новой!"},{"question":"Что бы Вы предпочли из зимних видов?","responses":["Лыжи и сноуборд!","Коньки и санки!"],"match":"Зимние виды спорта!"},{"question":"Что бы Вы предпочли из летних видов?","responses":["Коммандные виды спорта!","Одиночные виды спорта!"],"match":"Летние виды спорта!"},{"question":"Давайте все же определимся? Лыжи или сноуборд?","responses":["Лыжи!","Сноуборд!"],"match":"Лыжи и сноуборд!"},{"question":"Давайте все же определимся? Коньки или санки?","responses":["Коньки!","Санки!"],"match":"Коньки и санки!"},{"question":"Что бы Вы выбрали? Футбол или волейбол?","responses":["Игра в футбол!","Игра в волейбол!"],"match":"Коммандные виды спорта!"},{"question":"Что бы Вы выбрали? Плаванье или бокс?","responses":["Плаванье!","Бокс!"],"match":"Одиночные виды спорта!"},{"question":"Попробуем еще разок?","responses":["Давай по новой!","Давай по новой!"],"match":"Плаванье!"},{"question":"Попробуем еще разок?","responses":["Давай по новой!","Давай по новой!"],"match":"Бокс!"},{"question":"Попробуем еще разок?","responses":["Давай по новой!","Давай по новой!"],"match":"Игра в футбол!"},{"question":"Попробуем еще разок?","responses":["Давай по новой!","Давай по новой!"],"match":"Игра в волейбол!"},{"question":"Попробуем еще разок?","responses":["Давай по новой!","Давай по новой!"],"match":"Коньки!"},{"question":"Попробуем еще разок?","responses":["Давай по новой!","Давай по новой!"],"match":"Санки!"},{"question":"Попробуем еще разок?","responses":["Давай по новой!","Давай по новой!"],"match":"Лыжи!"},{"question":"Попробуем еще разок?","responses":["Давай по новой!","Давай по новой!"],"match":"Сноуборд!"}]';

const sportDatabase = [];
JSON.parse(sportDatabaseJSON).forEach((questions) => {
  sportDatabase.push(
    new Questions(
      questions["question"],
      questions["responses"],
      questions["match"]
    )
  );
});

//перезапишу в переменные, чтоб проще читать код
let btnOneDOM = document.querySelector(".buttonAnswer1");
let btnTwoDOM = document.querySelector(".buttonAnswer2");

function drawQuestion(question) {
  document.querySelector(".questions").innerHTML = question.question;
  btnOneDOM.innerHTML = question.responses[0];
  btnTwoDOM.innerHTML = question.responses[1];
}

function whatAnswerQuestion() {
  drawQuestion(sportDatabase[0]);
  btnOneDOM.onclick = findFirstQuestion;
  btnTwoDOM.onclick = findSecondQuestion;
}

function findFirstQuestion() {
  let match = btnOneDOM.innerHTML;
  let question = sportDatabase.find((question) => question.match === match);
  drawQuestion(question);
}

function findSecondQuestion() {
  let match = btnTwoDOM.innerHTML;
  let question = sportDatabase.find((question) => question.match === match);
  drawQuestion(question);
}

whatAnswerQuestion();
