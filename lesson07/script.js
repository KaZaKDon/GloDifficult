"use strict";

const week = [
  "Понедельник",
  "Вторник",
  "Среда",
  "Четверг",
  "Пятница",
  "Суббота",
  "Воскресенье",
];
const day = document.getElementById("fordays");
const todayDay = new Date();

const days = () => {
  week.forEach((item, i) => {
    let newdiv = document.createElement("div");
    if (i === +todayDay.getDay() - 1) {
      console.log(todayDay.getDay());
      newdiv.classList.add("today");
      newdiv.textContent = week[i];
    }
    if (item == "Суббота" || item == "Воскресенье") {
      newdiv.classList.add("italic");
    } else {
      newdiv.textContent = week[i];
    }
    day.appendChild(newdiv);
  });
};
days();
