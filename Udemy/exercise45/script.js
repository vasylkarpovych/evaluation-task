const btns = document.querySelectorAll("button"),
  overlay = document.querySelector(".overlay");

// btn.onclick = () => {
//   alert("Yo, hi!");
// };

// btn.onclick = () => {
//   alert("Second hi!");
// };

// btn.addEventListener("mouseenter", () => {
//   console.log("Yo, hi!");
// });

// btn.addEventListener("click", () => {
//   alert("Second hi!");
// });

// btn.addEventListener("click", (e) => {
//   //   console.log(e.target); // показывает на каком элементе  было событие
//   //   console.log("Yo, hi!");
//   e.target.remove();
// });
// let i = 0;
const deleteElement = (e) => {
  console.log(e.target);
  console.log(e.type);
  //   i++;
  //   if (i === 1) {
  //     btn.removeEventListener("click", deleteElement);
  //   }
};

// btn.addEventListener("click", deleteElement);
// overlay.addEventListener("click", deleteElement);

btns.forEach((btn) => {
  btn.addEventListener("click", deleteElement, { once: true }); // once: true не обязательный параметр, который  говорит, что обработчик выполнится только 1 раз
});

const link = document.querySelector("a");

link.addEventListener("click", (event) => {
  event.preventDefault(); //отменяет стандартное поведение браузера, теперь поссылке сразу не переходит!

  console.log(event.target);
});
