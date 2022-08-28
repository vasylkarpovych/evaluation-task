let x, y, z;

function mostImportant() {
  x = Number(document.querySelector(".i1").value);
  y = Number(document.querySelector(".i2").value);
  z = Number(document.querySelector(".i3").value);
  document.querySelector(".p").innerHTML = sum(x, y, z);
  console.log(x, y, z);
  return x + y + z;
}
console.log(mostImportant());

document.querySelector(".b1").onclick = mostImportant;

function sum(value1, value2, value3) {
  return value1 + value2 + value3;
}
