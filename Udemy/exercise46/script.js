// console.log(document.head); // в консоль выводит <head>
// console.log(document.documentElement); // в консоль выводит <html>
// console.log(document.body.childNodes); // в консоль выводит все дочерние ноды (узлы, включая перенос троки) родителя <body>
// console.log(document.body.firstChild); // в консоль первую дочернюю ноду (узел, включая перенос троки) родителя <body>
// console.log(document.body.lastChild); // в консоль последнюю дочернюю ноду (узел, включая перенос троки) родителя <body>

console.log(document.querySelector("#current").parentNode); // получаем родителя элемента с id='current'
console.log(document.querySelector("#current").parentNode.parentNode); // получаем родителя-РОДИТЕЛЯ элемента с id='current'
