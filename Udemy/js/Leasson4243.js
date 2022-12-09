"use strict";

// Урок 42
/*
const box = document.getElementById("box"); // возвращает елемент по ИД
const btns = document.getElementsByTagName("button"); // возвращает псевдомассив со всеми тегами button

console.log(box);
console.log(btns[1]); // возвращает второй элемент из псевдомассива btns

const circles = document.getElementsByClassName("circle"); // возвращает псевдомассив со всеми классами circle
console.log(circles);

const hearts = document.querySelectorAll(".heart"); // возвращает псевдомассив со всеми классами .heart, пишется через точку, если ИД то через решетку #, если просто селектор, то пишем в скобках селектор: 'div'

hearts.forEach((item) => {
  // есть метод forEach у псевдомассива
  console.log(item);
});

const oneHeart = document.querySelector(".heart"); // возвращает первый попавшийся элемент с классом .heart
console.log(oneHeart);
*/
// Урок 43

const box = document.getElementById("box"),
  btns = document.getElementsByTagName("button"),
  circles = document.getElementsByClassName("circle"),
  hearts = document.querySelectorAll(".heart"),
  oneHeart = document.querySelector(".heart"),
  wrapper = document.querySelector(".wrapper");

// box.style.backgroundColor = "blue";
// box.style.width = "500px";

const num = 500;
box.style.cssText = `background-color: blue; width: ${num}px`;

btns[1].style.borderRadius = "100%";
circles[0].style.backgroundColor = "red";

// for (let i = 0; i < hearts.length; i++) {
//   hearts[i].style.backgroundColor = "green";
// }

hearts.forEach((item) => {
  item.style.backgroundColor = "green";
});

const div = document.createElement("div");
// const text = document.createTextNode("Тут был я");

div.classList.add("black");

wrapper.append(div); // добавить div вконец класса
// wrapper.prepend(div); // добавить div вначало класса

// hearts[1].before(div); // добавить div перед элементом
// hearts[0].after(div); // добавить div после элемента

// circles[0].remove(); // удалить какой-то элемент

// hearts[1].replaceWith(circles[1]); // тут мы второе сердечко hearts[1] меняем на второй кружок  circles[1]

div.innerHTML = "Vasek hi!"; // добавляет содержимое строки в наш элемент div
// div.innerHTML = "<h1>Vasek hi!</h1>"; // в innerHTML можно сразу писать теги, HTML-структуру, например как тут перый заголовок
// div.textContent = "Hello!"; // добавляет текст, но не более, теги будут как строка отображаться

// beforebegin - позволяет вставить непосредственно перед элементом, afterbegin - это ключевое слово свтавляет наш код как бы вначало нашего элемента, beforeend -  если нужно вставить в конец нашего елемента, то есть, перед концом, afterend - это наше значание вставляет уже после элемента div
div.insertAdjacentHTML("afterend", "<h2>Hello</h2>");
