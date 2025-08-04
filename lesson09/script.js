"use strict";

const monthArr = [
  "января",
  "февраля",
  "марта",
  "апреля",
  "мая",
  "июня",
  "июля",
  "августа",
  "сентября",
  "октября",
  "ноября",
  "декабря",
];
const weekArr = [
  "понедельник",
  "вторник",
  "среда",
  "четверг",
  "пятница",
  "суббота",
  "воскресенье",
];

function getDateTime() {
  let now = new Date();
  let year = now.getFullYear();
  let month = now.getMonth();
  let day = now.getDate();
  let hour = now.getHours();
  let minute = now.getMinutes();
  let second = now.getSeconds();
  let hourStr = "";

  if (hour == 1 || hour == 21) {
    hourStr = "час";
  }
  if (hour > 1 || hour < 20) {
    hourStr = "часов";
  }
  if (hour > 21 || (hour > 1 && hour == 4)) {
    hourStr = "часа";
  }
  console.log(
    `Сегодня , ${day} ${monthArr[month]} ${year}, ${hour}  ${minute}   ${second}`
  );
  let time = `Сегодня , ${day} ${monthArr[month]} ${year}года, ${hour} ${hourStr}  ${minute}минут  ${second}секунд`;

  document.getElementById("clock").innerText = time;
}

function getDateTime1() {
  let now = new Date();
  let year = now.getFullYear();
  let month = now.getMonth() + 1;
  let day = now.getDate();
  let hour = now.getHours();
  let minute = now.getMinutes();
  let second = now.getSeconds();

  hour = test(hour);
  minute = test(minute);
  second = test(second);
  day = test(day);
  month = test(month);

  let time1 = `${day} ${month} ${year}, ${hour}:${minute}:${second}`;

  document.getElementById("clock1").innerHTML = time1;
}

function test(value) {
  return value > 10 ? value : `0${value}`;
}

function startClock() {
  setInterval(function () {
    getDateTime();
  }, 1000);
}

function startClock1() {
  setInterval(function () {
    getDateTime1();
  }, 1000);
}
startClock();
startClock1();

/*if (hour.toString().length == 1) {
    hour = "0" + hour;
  }
  if (minute.toString().length == 1) {
    minute = "0" + minute;
  }
  if (second.toString().length == 1) {
    second = "0" + second;
  }
  if (day.toString().length == 1) {
    day = "0" + day;
  }
  if (month.toString().length == 1) {
    month = "0" + month;
  }*/
