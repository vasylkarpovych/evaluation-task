//создать div
const div = document.createElement("div");
//добавить к нему класс wrapper
div.classList.add("wrapper");
//поместить его внутрь тега body
const body = document.body;
body.appendChild(div);
//создать заголовок H1 "DOM (Document Object Model)"
const header = document.createElement("h1");
header.textContent = "Document Object Model";
// Добавить H1 перед DIV с классом wrapper
div.insertAdjacentElement("beforebegin", header);
// Создать список <ul></ul>
// Добавить в него 3 елемента с текстом "один, два три"

const ul = `
   <ul>
      <li>один</li>
      <li>два</li>
      <li>три</li>
   </ul>
`;

// Поместить список внутрь элемента с классом wrapper
div.innerHTML = ul;
//=========================================

// Создать изображение
const img = document.createElement("img");
// Добавить следующие свойства к изображению
// 1. Добавить атрибую sourse
img.src = "./img/hand.svg";
// 2. Добавить атрибут width со значением 240
img.width = 240;
// 3. Добавить класс super
img.classList.add("super");
// 4. Добавить свойство alt сщ значением "Super Man"
img.alt = "Super Man";
// Поместить изображение внутрь элемента с классом wrapper
div.appendChild(img);
// Использовать HTML строку, создать DIV с классом 'pDiv' + с двумя параграфами
const elemHTML = `
   <div class="pDiv">
      <p>Paragraph 1</p>
      <p>Paragraph 2</p>
   </div>
`;
// Поместить этот div до элемента <ul></ul>
const ullist = div.querySelector("ul");
ullist.insertAdjacentHTML("beforebegin", elemHTML);
// Добавить для второго параграфа класс text
const pDiv = document.querySelector(".pDiv");

pDiv.children[1].classList.add("text");
// Удалить первый параграф
pDiv.firstElementChild.remove();

//=========================================================
// Создать функцию generateAutoCard
// которая принимает 3 аргумента: brand, color, year

const generateAutoCard = (brand, color, year) => {
  const curDate = new Date();
  const curYear = curDate.getFullYear();
  return `
      <div class="autoCard">
         <h2>${brand.toUpperCase()} ${year}</h2>
         <p>Автомобиль ${brand.toUpperCase()} - ${year} - года. Возраст авто - ${
    curYear - year
  } лет.</p>
         <p>Цвет: ${color.toUpperCase()}</p>
         <button type="button" class="btn">Delete</button>
      </div>
   `;
};

// Функция должна возвращать разметку HTML:
//    <div class="autoCard">
//       <h2>BRAND YEAR</h2>
//       <p>Автомобиль BRAND - YEAR - года. Возраст авто -
//       YEARS лет.</p>
//    </div>

// Создать новый div с классом autos

const carsDiv = document.createElement("div");
carsDiv.classList.add("autos");

// Создать 3 карточки авто, используя функцию generateAutoCard

const carsList = [
  { brand: "Tesla", year: 2015, color: "red" },
  { brand: "Lexus", year: 2016, color: "silver" },
  { brand: "Nassan", year: 2012, color: "black" },
];

const carsHTML = carsList
  .map((car) => {
    return generateAutoCard(car.brand, car.color, car.year);
  })
  .join("");
// Поместить эти 3 карточки внутрь DIV с классом autos
carsDiv.innerHTML = carsHTML;

// Поместить DIV с классом autos на страницу DOM - до DIV с классом wrapper
div.insertAdjacentElement("beforebegin", carsDiv);

// Добавить кнопку Удалить на каждую карточку авто

// При клике на кнопку - удалять карточку из струкруты DOM
// 1. Выбрать все кнопки
// 2. Создать функцию удаления
// 3. Использовать цикл - чтобы повемить обратотчик события на каждую кнопку

const buttons = document.querySelectorAll(".btn");

function handleClick(e) {
  const currentButton = e.currentTarget;
  currentButton.closest(".autoCard").remove();
  //   console.log(currentButton.parentElement);
}

buttons.forEach((button) => {
  button.addEventListener("click", handleClick);
});
