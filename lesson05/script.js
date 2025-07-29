"use strict";

// Усложненое 1. 1

const isNumber = function (num) {
  if (num.length == 0) {
    console.log("Пустая строка");
  } else return (num = num.replace(/\D/g, ""));
};

let number = prompt("Введите число");

while (!isNumber(number)) {
  number = prompt("Введите число");
}

console.log(isNumber(number));

// Усложненое 1. 2
let arr = ["32", "27", "755", "104", "47", "78", "477"]; // в виде строк

for (let i = 0; i < arr.length; i++) {
  if (arr[i].startsWith("2") || arr[i].startsWith("4")) {
    console.log(arr[i]);
  }
}

// Усложненое 2. 2
function checkNum(num) {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return num !== 1;
}

function printNumb(max) {
  for (let i = 2; i <= max; i++) {
    if (checkNum(i)) console.log(i);
  }
}

printNumb(100);
