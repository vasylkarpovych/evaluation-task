function Metrics(unit, value) {
  this.unit = unit;
  this.value = value;
}

Metrics.prototype.toString = function metricsToString() {
  return `${this.unit}=${this.value}`;
};
// our database, JSON format:

// const jsonStringFirstJSON =
//   '[{"unit":"cm","value":100},{"unit":"m","value":1},{"unit":"ft","value":3.28},{"unit":"in","value":39.37}]';

const databaseFirst = [
  new Metrics("cm", 100),
  new Metrics("in", 39.37),
  new Metrics("ft", 3.28),
  new Metrics("m", 1),
];

// const databaseFirstJSON = JSON.parse(jsonStringFirstJSON);

// console.log(databaseFirst);
// console.log(databaseFirstJSON);

function convert() {
  let unit = document.querySelector(".unit-input").value;
  let value = document.querySelector(".value-input").value;
  let convert = document.querySelector(".convert-input").value;

  if (
    databaseFirst.some((metrics) => metrics.unit === unit) &&
    databaseFirst.some((metrics) => metrics.unit === convert)
  ) {
    document.querySelector(".result").innerHTML =
      (value / databaseFirst.find((metrics) => metrics.unit === unit).value) *
      databaseFirst.find((metrics) => metrics.unit === convert).value;
  } else {
    document.querySelector(".result").innerHTML =
      "Unknown unit. Pelase verify input.";
  }
}

function addUnit() {
  let unit = document.querySelector(".unit-creation-input").value;
  let value = document.querySelector(".value-creation-input").value;
  databaseFirst.push(new Metrics(unit, value));
  document.querySelector(".resultMeter").innerHTML = databaseFirst;
}

document.querySelector(".resultMeter").innerHTML = databaseFirst;
document.querySelector(".convert-button").onclick = convert;
document.querySelector(".save-unit-button").onclick = addUnit;
