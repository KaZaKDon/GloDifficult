"use strict";

const title = document.getElementsByTagName("h1")[0];
const buttonPlus = document.querySelector(".screen-btn");
const otherItemsPercent = document.querySelectorAll(".other-items.percent");
const otherNumber = document.querySelectorAll(".other-items.number");

const inputRange = document.querySelector(".rollback input");
const inputRangeValue = document.querySelector(".rollback .range-value");

const startBtn = document.getElementsByClassName("handler_btn")[0];
const resetBtn = document.getElementsByClassName("handler_btn")[1];

const total = document.getElementsByClassName("total-input")[0];
const totalCount = document.getElementsByClassName("total-input")[1];
const totalCountOther = document.getElementsByClassName("total-input")[2];
const fullTotalCount = document.getElementsByClassName("total-input")[3];
const totalCountRollback = document.getElementsByClassName("total-input")[4];

let screens = document.querySelectorAll(".screen");

const appData = {
  title: "",
  screens: [],
  screenPrice: 0,
  screenCount: 0,
  rollback: 0,
  fullPrice: 0,
  fullPriceRollback: 0,
  servicePricesPercent: 0,
  servicePricesNumber: 0,
  adaptive: true,
  servicePercent: {},
  serviceNumber: {},
  allServicePrices: 0,
  init: function () {
    appData.addTitle();
    startBtn.addEventListener("click", appData.start);
    buttonPlus.addEventListener("click", appData.addScreenBlock);
    inputRange.addEventListener("change", appData.addRollback);
  },
  addTitle: function () {
    document.title = title.textContent;
  },
  addScreenBlock: function () {
    const cloneScreen = screens[0].cloneNode(true);
    screens[screens.length - 1].after(cloneScreen);
  },
  addScreens: function () {
    screens = document.querySelectorAll(".screen");
    screens.forEach(function (screen, index) {
      const select = screen.querySelector("select");
      const input = screen.querySelector("input");
      const selectName = select.options[select.selectedIndex].textContent;
      console.log(appData.screens);

      if (selectName == "Тип экранов" || +input.value == 0) {
        alert("Не выбраны ЭКРАНЫ или их количество");
        appData.screens = [];
        appData.init();
      }
      appData.screens.push({
        id: index,
        name: selectName,
        price: +select.value * +input.value,
        count: +input.value,
      });
    });
    console.log(appData.screens);
  },
  addServices: function () {
    otherItemsPercent.forEach(function (item) {
      const check = item.querySelector("input[type=checkbox]");
      const label = item.querySelector("label");
      const input = item.querySelector("input[type=text]");
      if (check.checked) {
        appData.servicePercent[label.textContent] = +input.value;
      }
    });

    otherNumber.forEach(function (item) {
      const check = item.querySelector("input[type=checkbox]");
      const label = item.querySelector("label");
      const input = item.querySelector("input[type=text]");
      if (check.checked) {
        appData.serviceNumber[label.textContent] = +input.value;
      }
    });
  },
  addRollback: function () {
    inputRangeValue.textContent = inputRange.value;
    return (appData.rollback = inputRange.value);
  },
  addPrices: function () {
    for (let screen of appData.screens) {
      appData.screenPrice += screen.price;
      appData.screenCount += screen.count;
    }

    for (let key in appData.serviceNumber) {
      appData.servicePricesNumber += appData.serviceNumber[key];
    }

    for (let key in appData.servicePercent) {
      appData.servicePricesPercent +=
        appData.screenPrice * (this.servicePercent[key] / 100);
    }

    appData.fullPrice =
      +appData.screenPrice +
      appData.servicePricesPercent +
      appData.servicePricesNumber;
    console.log(appData.fullPrice);
    appData.fullPriceRollback = Math.ceil(
      appData.fullPrice - appData.fullPrice * (appData.rollback / 100)
    );
  },
  showResult: function () {
    total.value = appData.screenPrice;
    totalCount.value = appData.screenCount;
    totalCountOther.value =
      appData.servicePricesPercent + appData.servicePricesNumber;
    fullTotalCount.value = appData.fullPrice;
    totalCountRollback.value = appData.fullPriceRollback;
  },
  /*getFullPrice: function (screenPrice, allServicePrices) {
    appData.fullPrice = +screenPrice + allServicePrices;
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
  },*/
  logger: function () {
    console.log(
      `стоимости верстки и стоимости дополнительных услуг, минус скидка ${appData.fullPrice}`
    );
    console.log(appData.title);
    console.log(
      ` итоговая стоимость минус сумма отката ${appData.servicePercentPrice}`
    );
    console.log(appData.services);
    console.log(
      title,
      handlerBtn,
      plus,
      otherItemsPercent,
      otherNumber,
      inputRange,
      rangeValue,
      totalInput,
      screenAll
    );
  },
  start: function () {
    appData.addScreens();
    appData.addServices();
    appData.addPrices();
    appData.showResult();
    appData.addRollback();

    /*appData.getFullPrice(appData.screenPrice, appData.allServicePrices);
    appData.getRollbackPrice(appData.fullPrice);
    appData.getTitle(appData.title);
    appData.getServicePercentPrices(appData.fullPrice, appData.rollback);
    appData.logger();*/
  },
};

appData.init();
