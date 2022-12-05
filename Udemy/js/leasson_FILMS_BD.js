"use strict";

/* Задание на урок:

1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'

2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false

3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
    movies: {
        'logan': '8.1'
    }

Проверить, чтобы все работало без ошибок в консоли */

// function start() {
//   numberOfFilms = +prompt("Сколько фильмов Вы уже посмотрели?", "");

//   while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
//     numberOfFilms = +prompt("Сколько фильмов Вы уже посмотрели?", "");
//   }
// }

const personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
  start: function () {
    personalMovieDB.count = +prompt("Сколько фильмов Вы уже посмотрели?", "");

    while (
      personalMovieDB.count == "" ||
      personalMovieDB.count == null ||
      isNaN(personalMovieDB.count)
    ) {
      personalMovieDB.count = +prompt("Сколько фильмов Вы уже посмотрели?", "");
    }
  },
  rememberMyFilms: function () {
    //цикл FOR
    for (let i = 0; i < 2; i++) {
      let a = prompt("Один из последних просмотренных фильмов?", "");
      let b = prompt("На сколько оцените его?", "");

      if (a == "" || b == "" || a == null || b == null || a.length > 50) {
        i--;
      } else {
        personalMovieDB.movies[a] = b;
      }
    }
  },
  detectPersonalLevel: function () {
    if (numberOfFilms < 10) {
      console.log("Просмотрено довольно мало фильмов!");
    } else if (numberOfFilms >= 10 && numberOfFilms < 30) {
      console.log("Просмотрено довольно мало фильмов!");
    } else if (numberOfFilms >= 30) {
      console.log("Вы киноман!");
    } else {
      console.log("Произошла ошибка!");
    }
  },
  showDB: function (hidden) {
    if (!hidden) {
      console.log(personalMovieDB);
    }
  },
  writeYourGenres: function () {
    // // первый вариант:
    // for (let i = 1; i < 4; i++) {
    //   let genre = prompt(`Ваш любимый жанр под номером ${i}`, "");
    //   personalMovieDB.genres[i - 1] = genre;
    //   if (genre === null || genre === "") {
    //     i--;
    //   }
    // }
    // personalMovieDB.genres.forEach((elem, index) => {
    //   console.log(`Любимый жанр ${index + 1} это ${elem}`);
    // });
    // альтернативыный, второй, вариант:
    for (let i = 1; i < 2; i++) {
      let genres = prompt(
        "Введите Ваши людимые жанры через запятую:"
      ).toLocaleLowerCase();
      if (genres === null || genres === "") {
        i--;
      } else {
        personalMovieDB.genres = genres.split(", ");
        // можем еще и отсортировать массив GENRES:
        personalMovieDB.genres.sort();
      }
      personalMovieDB.genres.forEach((elem, index) => {
        console.log(`Любимый жанр ${index + 1} это ${elem}`);
      });
    }
  },
  toggleVisibleMyDB: function () {
    if (personalMovieDB.privat) {
      personalMovieDB.privat = false;
    } else {
      personalMovieDB.privat = true;
    }
  },
};

// personalMovieDB.start();

// function rememberMyFilms() {
//   //цикл FOR
//   for (let i = 0; i < 2; i++) {
//     let a = prompt("Один из последних просмотренных фильмов?", "");
//     let b = prompt("На сколько оцените его?", "");

//     if (a == "" || b == "" || a == null || b == null || a.length > 50) {
//       i--;
//     } else {
//       personalMovieDB.movies[a] = b;
//     }
//   }
// }

/*
Пример:
showAgeAndLangs: function (personalPlanPete) {
*/

// rememberMyFilms();

// //цикл WHILE
// let iter = 0;
// while (iter < 2) {
//   let a = prompt("Один из последних просмотренных фильмов?", "");
//   let b = prompt("На сколько оцените его?", "");
//   iter++;

//   if (a == '' || b == '' || a == null || b == null || a.length > 50 ) {
//     iter--;
//   } else {
//     personalMovieDB.movies[a] = b;
//   }
// }

// function detectPersonalLevel() {
//   if (numberOfFilms < 10) {
//     console.log("Просмотрено довольно мало фильмов!");
//   } else if (numberOfFilms >= 10 && numberOfFilms < 30) {
//     console.log("Просмотрено довольно мало фильмов!");
//   } else if (numberOfFilms >= 30) {
//     console.log("Вы киноман!");
//   } else {
//     console.log("Произошла ошибка!");
//   }
// }

// detectPersonalLevel();

// function showDB(hidden) {
//   if (!hidden) {
//     console.log(personalMovieDB);
//   }
// }
// showDB(personalMovieDB.privat);

// function writeYourGenres() {
//   for (let i = 1; i < 4; i++) {
//     personalMovieDB.genres[i - 1] = prompt(
//       `Ваш любимый жанр под номером ${i}`,
//       ""
//     );
//   }
// }

// writeYourGenres();
