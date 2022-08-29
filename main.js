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

function taskThird() {
  console.log(`Рандомно созданные координаты нашей точки [x, y, z]`);
  const randomPoint = [0, 0, 0];

  const newRandomPoint = randomPoint.map((user) => {
    return (randomPoint[user] = Math.trunc(Math.random() * 100));
  });
  console.log(newRandomPoint);

  console.log(`User array [x, y, z]`);
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

    // console.log("Пользователь задал: " + user);
    // console.log("Компьютер задал: " + newRandomPoint);
    compareArray(x, y, z);
  }

  document.querySelector(".buttonXYZ").onclick = userValue;

  // console.log("Миссив, что здал пользователь: \n" + user);
  console.log("Массив, который сгенерировал компъютер: \n" + newRandomPoint);

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
    console.log("Количество итераций: " + calc);
    document.querySelector(".final").innerHTML = calc;

    document.querySelector(".randomPoint").innerHTML = newRandomPoint;
  }
}
taskThird();

const databaseSport = [];

function Questions(question, responses) {
  this.question = question;
  this.responses = responses;
}

databaseSport.push(
  new Questions("Какой спорт Вам больше нравится?", [
    "Зимние виды спорта!",
    "Летние виды спорта!",
  ])
);
databaseSport.push(
  new Questions("Что бы Вы предпочли из зимних видов?", [
    "Лыжи и сноуборд!",
    "Коньки и санки!",
  ])
);
databaseSport.push(
  new Questions("Что бы Вы предпочли из летних видов?", [
    "Коммандные виды спорта!",
    "Одиночные виды спорта!",
  ])
);
databaseSport.push(
  new Questions("Давайте все же определимся? Лыжи или сноуборд?", [
    "Лыжи!",
    "Сноуборд!",
  ])
);
databaseSport.push(
  new Questions("Давайте все же определимся? Коньки или санки?", [
    "Коньки!",
    "Санки!",
  ])
);
databaseSport.push(
  new Questions("Что бы Вы выбрали? Футбол или волейбол?", [
    "Игра в футбол!",
    "Игра в волейбол!",
  ])
);
databaseSport.push(
  new Questions("Что бы Вы выбрали? Плаванье или бокс?", ["Плаванье!", "Бокс!"])
);

console.log(databaseSport);

function questionnare() {
  let quest = document.querySelector(".questions");
  let answer1 = document.querySelector(".answer1");
  let answer2 = document.querySelector(".answer2");

  quest.innerHTML = databaseSport[0].question;
  answer1.innerHTML = databaseSport[0].responses[0];
  answer2.innerHTML = databaseSport[0].responses[1];

  answer1.onclick = chengeButtonsWinter;
  answer2.onclick = chengeButtonsSummer;

  function chengeButtonsWinter() {
    quest.innerHTML = databaseSport[1].question;
    answer1.innerHTML = databaseSport[1].responses[0];
    answer2.innerHTML = databaseSport[1].responses[1];

    answer1.onclick = chengeButtonsSkisOrSnowboard;
    answer2.onclick = chengeButtonsSkatesOrSleds;

    function chengeButtonsSkisOrSnowboard() {
      quest.innerHTML = databaseSport[3].question;
      answer1.innerHTML = databaseSport[3].responses[0];
      answer2.innerHTML = databaseSport[3].responses[1];
    }
    function chengeButtonsSkatesOrSleds() {
      quest.innerHTML = databaseSport[4].question;
      answer1.innerHTML = databaseSport[4].responses[0];
      answer2.innerHTML = databaseSport[4].responses[1];
    }
  }
  function chengeButtonsSummer() {
    quest.innerHTML = databaseSport[2].question;
    answer1.innerHTML = databaseSport[2].responses[0];
    answer2.innerHTML = databaseSport[2].responses[1];

    answer1.onclick = chengeButtonsSummerVariant;
    answer2.onclick = chengeButtonsSwimmingOrBoxing;

    function chengeButtonsSummerVariant() {
      quest.innerHTML = databaseSport[5].question;
      answer1.innerHTML = databaseSport[5].responses[0];
      answer2.innerHTML = databaseSport[5].responses[1];
    }
    function chengeButtonsSwimmingOrBoxing() {
      quest.innerHTML = databaseSport[6].question;
      answer1.innerHTML = databaseSport[6].responses[0];
      answer2.innerHTML = databaseSport[6].responses[1];

      answer1.onclick = chengeButtonsSwimming;
      answer2.onclick = chengeButtonsBoxing;

      function chengeButtonsBoxing() {
        document.querySelector(".resultSport").innerHTML =
          "Бокс - это здорово!";
      }

      function chengeButtonsSwimming() {
        document.querySelector(".resultSport").innerHTML =
          "Плаванье - это здорово!";
      }
    }
  }
}

function questionOption() {}

questionnare();

/*
Понимаю, что сделал то, что не нужно, ты мне это говорил, но я думал, пока буду это делать увижу, что и как тут можно описать функцию! И заметил, что у меня почти все повторяется, кроме индекса моей БД, но как это верно написать, не понимаю, чтоб была одна функция, которая обрабатывала нажатия кнопки и выводила нужные значения...
Вопроы:
- даже в моем исполнении, чего у меня в самых вложенных функциях нажимаются кнопки, я ж не делал внутри обработчик onClick. Например если я дохожу до края дерева: Зимние/коньки и санки/ и тут выбираю коньки...по идее не должно ничего происходить, а после нажатия на кнопку коньки меня выкидывает на вопрос под индексом 3 из массива БД
- подскажи пожалуйста как это реализовать, я хочу ее сделать, могу даже им не отправлять, если ты мне поможешь, как уже ты скажешь. Я просто хочу видеть больше сделанных задач, там быстрее и понимание приходит!
*/
