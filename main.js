const data = {
  input: {
    distance: {
      unit: "cm",
      value: 50,
    },
    convert_to: "in",
  },
  metrics: {
    m: {
      cm: 100,
      in: 39.37,
      ft: 3.28,
    },
  },
};

function convert() {
  let unit = data.input.distance.unit;
  let value = data.input.distance.value;
  let convert = data.input.convert_to;
  switch (unit) {
    case "cm":
      value = value / data.metrics.m.cm;
      break;
    case "in":
      value = value / data.metrics.m.in;
      break;
    case "ft":
      value = value / data.metrics.m.ft;
      break;
    case "m":
      break;
    default:
      alert("Нет таких значений"); //на анлг нет такого измерения
  }

  let result;
  switch (convert) {
    case "cm":
      result = value * data.metrics.m.cm;
      break;
    case "in":
      result = value * data.metrics.m.in;
      break;
    case "ft":
      result = value * data.metrics.m.ft;
      break;
    case "m":
      result = value;
      break;
    default:
      alert("Нет таких значений"); //на анлг нет такого измерения
  }
  document.querySelector(".result").innerHTML = result;
}

document.querySelector(".button").onclick = convert;

function myClick() {
  let myText = document.querySelector(".input").value;
  let arrayCount = Array.from(myText);
  document.querySelector(".result").innerHTML = arrayCount.length;
  console.log(input);
  console.log(metrics);
}

//прочитать файл input.json в объект,
//прочитать файл metrics.json в объект,
//конвертировать и выдать результат в поле просмотра результата в виде JSON
//
