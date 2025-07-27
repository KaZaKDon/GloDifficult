"use strict";

let str = "   gggggghjkjsdhlofhfslkdh xldkjhvsfjkdhv  ";

function test(str1) {
  if (typeof str1 == "string") {
    str = str1.trim();

    if (str.length > 30) {
      str = str.slice(0, 30) + "...";
    }
  } else {
    alert("аргумент не строка");
    return;
  }
  return str;
}

console.log(str);

test(str);

console.log(str);
