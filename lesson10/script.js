"use strict";

const inputAdd = document.querySelector("input");
const listAdd = document.querySelectorAll("ul > li");
const btn = document.querySelector("button");

btn.addEventListener("click", () => {
  const inputText = inputAdd.value;
  listAdd[listAdd.length - 1].insertAdjacentHTML(
    "beforeend",
    `<li>${inputText}</li>`
  );
  inputAdd.value = "";
});
