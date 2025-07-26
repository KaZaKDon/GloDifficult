const lang = "ru";
let arr;

if (lang == "ru") {
  arr = ["пн", "вт", "ср", "чт", "пт", "сб", "вс"];
} else if (lang == "en") {
  arr = ["mn", "ts", "wd", "th", "fr", "st", "sn"];
}

console.log(arr);

const lang1 = "ru";
let arr1;

switch (true) {
  case lang1 == "ru":
    arr1 = ["пн", "вт", "ср", "чт", "пт", "сб", "вс"];
    break;
  case lang1 == "en":
    arr1 = ["mn", "ts", "wd", "th", "fr", "st", "sn"];
}

console.log(arr1);

let langObj = "en";

let obj = {
  ru: ["пн", "вт", "ср", "чт", "пт", "сб", "вс"],
  en: ["mn", "ts", "wd", "th", "fr", "st", "sn"],
};

let arrObj = obj[langObj];

console.log(arrObj);

const namePerson = prompt("Введите Ваше имя:");

switch (true) {
  case namePerson == "Артем":
    console.log("Директор");
    break;
  case namePerson == "Александр":
    console.log("Преподователь");
    break;
  default:
    console.log("Студент");
}
