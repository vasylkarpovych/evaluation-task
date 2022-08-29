// let x, y, z;

// function mostImportant() {
//   x = Number(document.querySelector(".i1").value);
//   y = Number(document.querySelector(".i2").value);
//   z = Number(document.querySelector(".i3").value);
//   document.querySelector(".p").innerHTML = sum(x, y, z);
//   console.log(x, y, z);
//   return x + y + z;
// }
// console.log(mostImportant());

// document.querySelector(".b1").onclick = mostImportant;

// function sum(value1, value2, value3) {
//   return value1 + value2 + value3;
// }

// function(1)(2)  = 3
//вторые скобки вызывают функцию что только что была создана

// function ok(a) {
//   a += 1;
//   console.log(a);
// }

// каррирование

function sum(a, b, c) {
  return a + b + c;
}

function multi(a, b, c) {
  return a * b * c;
}

function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn.apply(this, args);
    }
    return function test(...newArgs) {
      return curried.apply(this, args.concat(newArgs));
    };
  };
}

const curriedSum = curry(sum);
// const curriedMulti = curry(multi);

// console.log(sum(2, 4, 5)); //11
// console.log(multi(2, 4, 5)); //40
// console.log(curriedSum(2, 4, 5));
// console.log(curriedSum(2)(4)(5)); //11

console.log(curriedSum(2, 1)(8)); //9
