/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

"use strict";

const movieDB = {
  movies: [
    "Логан",
    "Лига справедливости",
    "Ла-ла лэнд",
    "Одержимость",
    "Скотт Пилигрим против...",
  ],
};

const advertising = document.querySelectorAll(".promo__adv img"),
  poster = document.querySelector(".promo__bg"),
  genre = poster.querySelector(".promo__genre"),
  films = document.querySelector(".promo__interactive-list");

advertising.forEach((item) => {
  item.remove();
});

genre.textContent = "ДРАМА";

poster.style.backgroundImage = 'url("./img/bg.jpg")';

movieDB.movies.sort();

films.innerHTML = "";

movieDB.movies.forEach((film, i) => {
  films.innerHTML += `<li class='promo__interactive-item'>${
    i + 1
  }. ${film}<div class='delete'></div></li>`;
});

// <li class="promo__interactive-item">ЛОГАН<div class="delete"></div></li>

// const advertising = document.querySelectorAll(".promo__adv img"),
//   poster = document.querySelector(".promo__bg"),
//   genre = poster.querySelector(".promo__genre"),
//   films = document.querySelector(".promo__interactive-list");

// advertising.forEach((item) => {
//   item.remove();
// });

// genre.textContent = "ДРАМА";
// // genre.innerHTML = '<div class="promo__genre">ДРАМА</div>';

// poster.style.backgroundImage = "url('./img/bg.jpg')";

// films.innerHTML = "";

// movieDB.movies.sort();
// movieDB.movies.forEach((item, i) => {
//   films.innerHTML += `<li class='promo__interactive-item'>${
//     i + 1
//   }. ${item}<div class='delete'></div></li>`;
// });

// console.log(films);

/*
  films.innerHTML = "<li class='promo__interactive-item'>ЛОГАН<div class='delete'></div></li>"
*/
