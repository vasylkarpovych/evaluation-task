const sumPositiveNumbers = (a, b) => {
  if (typeof a !== "number" || typeof b !== "number") {
    return "One of the arguments is not a number";
  }
  if (a <= 0 || b <= 0) {
    return "Number are not positive";
  }

  return a + b;
};

console.log(sumPositiveNumbers(48, 8));

const month = 10;

switch (month) {
  case 12:
    console.log("декабрь");
    break;
  case 1:
    console.log("Январь");
    break;
  case 2:
    console.log("Февраль");
    break;
  default:
    console.log("Это не зимний месяц");
    break;
}

console.log("hi");
