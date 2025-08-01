"use strict";

const appData = {
  title: "",
  screens: [],
  screenPrice: 0,
  rollback: 10,
  fullPrice: 0,
  servicePercentPrice: 0,
  adaptive: true,
  services: {},
  allServicePrices: 0,
  asking: function () {
    do {
      appData.title = prompt("Как называется Ваш проект?");
    } while (!isNaN(appData.title));

    for (let i = 0; i < 2; i++) {
      do {
        screen = prompt("Какие типы экранов нужно разработать?");
      } while (!isNaN(screen));

      let price = 0;
      do {
        price = +prompt("Сколько будет стоить данная работа?");
      } while (!appData.isNumber(price));

      appData.screens.push({ id: i, name: screen, price: price });
    }

    for (let i = 0; i < 2; i++) {
      let name = "";
      do {
        name = prompt("Какой дополнительный тип услуги нужен?");
      } while (!isNaN(name));
      let price = 0;

      do {
        price = +prompt("Сколько это будет стоить?");
      } while (!appData.isNumber(price));
      if (name in appData.services) {
        name = name + "1";
      }
      appData.services[name] = +price;
    }
    appData.adaptive = confirm("Нужен ли адаптив на сайте?");
  },
  addPrices: function () {
    for (let screen of appData.screens) {
      appData.screenPrice += screen.price;
    }

    for (let key in appData.services) {
      appData.allServicePrices += appData.services[key];
    }
  },
  isNumber: function (num) {
    return !isNaN(parseFloat(num)) && isFinite(num);
  },
  getFullPrice: function (screenPrice, allServicePrices) {
    appData.fullPrice = screenPrice + allServicePrices;
  },
  getTitle: function (titleNew) {
    titleNew = titleNew.trim().toLowerCase();
    appData.title = titleNew[0].toUpperCase() + titleNew.slice(1);
  },
  getServicePercentPrices: function (fullPrice, rollback) {
    appData.servicePercentPrice = Math.ceil(
      fullPrice - fullPrice * (rollback / 100)
    );
  },
  getRollbackMessage: function (price) {
    if (price >= 30000) {
      return "Даем скидку 10%.";
    } else if (15000 <= price && price < 30000) {
      return "Даем скидку 5%.";
    } else if (15000 >= price && price >= 0) {
      return "Скидка не предусмотрена.";
    } else {
      return "Что то пошло не так";
    }
  },
  getRollbackPrice: function (price) {
    if (price >= 30000) {
      appData.fullPrice = price - (price * 10) / 100;
    } else if (15000 <= price && price < 30000) {
      appData.fullPrice = price - (price * 5) / 100;
    } else if (15000 >= price && price >= 0) {
      appData.fullPrice;
    } else {
      return "Что то пошло не так";
    }
  },
  logger: function () {
    console.log(
      `стоимости верстки и стоимости дополнительных услуг, минус скидка ${appData.fullPrice}`
    );
    console.log(appData.title);
    console.log(
      ` итоговая стоимость минус сумма отката ${appData.servicePercentPrice}`
    );
    console.log(appData.services);
  },
  start: function () {
    appData.asking();
    appData.addPrices();
    appData.getFullPrice(appData.screenPrice, appData.allServicePrices);
    appData.getRollbackPrice(appData.fullPrice);
    appData.getTitle(appData.title);
    appData.getServicePercentPrices(appData.fullPrice, appData.rollback);
    appData.logger();
  },
};

appData.start();
