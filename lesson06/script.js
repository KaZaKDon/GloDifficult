"use strict";

let attemptUser = 10;

function gameStart() {
  const randomNumber = Math.floor(Math.random() * 100) + 1;
  console.log("Загаданное число:" + randomNumber);

  function askUser() {
    const userInput = prompt(
      `Угадай число от 1 до 100. У Вас ${attemptUser} попыток`
    );

    if (userInput === null) {
      alert("Игра окончена");
      return;
    }

    const number = Number(userInput);

    if (isNaN(number)) {
      alert("Введите число!");
      askUser();
      return;
    }

    if (attemptUser === 0) {
      if (confirm(" У Вас закончились попытки!!! Хотели бы сыграть еще? ")) {
        gameStart();
      } else {
        alert("Игра окончена");
        return;
      }
    } else {
      attemptUser = attemptUser - 1;
      if (number === randomNumber) {
        if (confirm(" Поздравляю, Вы угадали!!! Хотели бы сыграть еще? ")) {
          gameStart();
        } else {
          alert("Игра окончена");
          return;
        }
      } else if (number > randomNumber) {
        alert(`Загаданное число меньше. У Вас ${attemptUser} попыток `);
      } else if (number < randomNumber) {
        alert(`Загаданное число больше. У Вас ${attemptUser} попыток`);
      }
      askUser();
    }
  }
  askUser();
}

gameStart();
