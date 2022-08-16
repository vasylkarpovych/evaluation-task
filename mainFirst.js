function Metrics(unit, value) {
  this.unit = unit;
  this.value = value;
}

Metrics.prototype.toString = function metricsToString() {
  return `${this.unit}=${this.value}`;
};

// Our database
const database = [
  new Metrics("cm", 100),
  new Metrics("in", 39.37),
  new Metrics("ft", 3.28),
  new Metrics("m", 1),
];

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
  document.querySelector(".result").innerHTML = database;
}

document.querySelector(".result").innerHTML = database;
document.querySelector(".convert-button").onclick = convert;
document.querySelector(".save-unit-button").onclick = addUnit;
