"use strict";

const family = ["Peter", "Ann", "Alex", "Linda"];

function showFamily(arr) {
  if (arr[0] === undefined) {
    return `Семья пуста`;
  } else {
    return console.log(`Семья состоит из: ${arr.join(" ")}`);
  }
}

// showFamily(family);

// const favoriteCities = ["liSBon", "ROME", "miLan", "Dublin"];

// function standardizeStrings(arr) {
//   return `${arr.join("\n").toLowerCase()}`;
// }

const favoriteCities = ["liSBon", "ROME", "miLan", "Dublin"];

function standardizeStrings(arr) {
  // мое решение:
  // let str = "";
  // for (let i = 0; i < arr.length; i++) {
  //   str += i + 1 + " | " + arr[i].toLowerCase() + "\n";
  // }
  // return console.log(str);

  // решение в ответе, через forEach(), будет такое:

  arr.forEach((item) => {
    console.log(item.toLowerCase());
  });
}

standardizeStrings(favoriteCities);
