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

const cmsOpen = document.getElementById("cms-open")
const cmsVariants = document.querySelector(".hidden-cms-variants");

const check = cmsOpen.querySelector("input[type=checkbox]");

const controlsItem = document.getElementById('cms-select')

const appData = {
  title: "",
  screens: [],
  controlsItem: [],
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
    this.addTitle();
    startBtn.addEventListener("click", this.start);
    buttonPlus.addEventListener("click", this.addScreenBlock);
    inputRange.addEventListener("change", this.addRollback);
    resetBtn.addEventListener('click', this.reset)
    cmsOpen.addEventListener('change', this.cmsVariants)

  },
  controlsItem: function() {
    
      let element = controlsItem.value
      console.log(element);
      if(element == "50") {
        console.log(this.fullPrice);
        appData.calculationWordPress(this.fullPrice)
        
      } else if(element == 'other') {
        appData.hiddenCms()

      }else {
        alert('Выберите CMS')
      }
    
  },
  otherCms: function() {

  },
  calculationWordPress: function() {
    appData.fullPrice = appData.fullPrice + appData.fullPrice / 2
    console.log(appData.fullPrice);
    return appData.fullPrice
  },
  hiddenCms: function() {
    const controlInput = cmsVariants.querySelector('.main-controls__input')
    controlInput.style.display = "flex"
    
  },
  cmsVariants: function() {
    if (this.checked) {
      cmsVariants.style.display = "flex"
    } else {
      cmsVariants.style.display = "none"
    }
  },
  addTitle: () => {
    document.title = title.textContent;
  },
  addScreenBlock: () => {
    const cloneScreen = screens[0].cloneNode(true);
    screens[screens.length - 1].after(cloneScreen);
  },
  addScreens: function() {
    screens = document.querySelectorAll(".screen");
    screens.forEach((screen, index) => {
      const select = screen.querySelector("select");
      const input = screen.querySelector("input");
      const selectName = select.options[select.selectedIndex].textContent;

      if (selectName == "Тип экранов" || +input.value == 0) {
        alert("Не выбраны ЭКРАНЫ или их количество");
        this.screens = [];
        this.init();
      }
      this.screens.push({
        id: index,
        name: selectName,
        price: +select.value * +input.value,
        count: +input.value,
      });
    });
  },
  addServices: function() {
    otherItemsPercent.forEach((item) => {
      const check = item.querySelector("input[type=checkbox]");
      const label = item.querySelector("label");
      const input = item.querySelector("input[type=text]");
      if (check.checked) {
        appData.servicePercent[label.textContent] = +input.value;
      }
    });

    otherNumber.forEach((item) => {
      const check = item.querySelector("input[type=checkbox]");
      const label = item.querySelector("label");
      const input = item.querySelector("input[type=text]");
      if (check.checked) {
        appData.serviceNumber[label.textContent] = +input.value;
      }
    });
  },
  addRollback: function() {
    inputRangeValue.textContent = inputRange.value;
    return (appData.rollback = inputRange.value);
  },
  addPrices: function() {
    for (let screen of this.screens) {
      this.screenPrice += screen.price;
      this.screenCount += screen.count;
    }

    for (let key in this.serviceNumber) {
      this.servicePricesNumber += this.serviceNumber[key];
    }

    for (let key in this.servicePercent) {
      this.servicePricesPercent +=
        this.screenPrice * (this.servicePercent[key] / 100);
    }

    this.fullPrice = 
      +this.screenPrice +
      this.servicePricesPercent +
      this.servicePricesNumber;
    appData.controlsItem() 

    this.fullPriceRollback = Math.ceil(
      this.fullPrice - this.fullPrice * (this.rollback / 100)
    );
  },
  showResult: function() {
    total.value = this.screenPrice;
    totalCount.value = this.screenCount;
    totalCountOther.value =
      this.servicePricesPercent + this.servicePricesNumber;
    fullTotalCount.value = this.fullPrice;
    totalCountRollback.value = this.fullPriceRollback;
  },
  logger: function () {
    console.log(
      `стоимости верстки и стоимости дополнительных услуг, минус скидка ${appData.fullPrice}`
    );
    console.log(appData.title);
    console.log(
      ` итоговая стоимость минус сумма отката ${appData.servicePercentPrice}`
    );
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
  blocking: function() {
    otherItemsPercent.forEach((item) => {
      const check = item.querySelector("input[type=checkbox]");
      const input = item.querySelector("input[type=text]");
      input.disabled = true
      check.disabled = true
    });

    otherNumber.forEach((item) => {
      const check = item.querySelector("input[type=checkbox]");
      const input = item.querySelector("input[type=text]");
      input.disabled = true
      check.disabled = true
    });
    screens.forEach((screen) => {
      const select = screen.querySelector("select");
      const input = screen.querySelector("input");
      input.disabled = true
      select.disabled = true
    })    
  },
  replacement: function() {
    startBtn.style.display = 'none'
    resetBtn.style.display = 'block'
  },
  reset: function() {
    otherItemsPercent.forEach((item) => {
      const check = item.querySelector("input[type=checkbox]");
      check.disabled = false
      check.checked = false
    });

    otherNumber.forEach((item) => {
      const check = item.querySelector("input[type=checkbox]");
      check.disabled = false
      check.checked = false
    });
    screens.forEach((screen) => {
      const select = screen.querySelector("select");
      const input = screen.querySelector("input");
      input.disabled = false
      input.value = ''
      select.disabled = false
      select.value = ''
    })
    startBtn.style.display = 'block'
    resetBtn.style.display = 'none'
    inputRange.value = '0';
    appData.addRollback()
    appData.showResultZero()
    appData.resetScreens()
    appData.resetCms()
  },
  resetCms: function() {
    cmsOpen.checked = false
    cmsVariants.style.display = "none"
  },
  resetScreens: function() {
    let i = screens.length
    screens.forEach((item) => {
      i--
      if (i > 0) {
        item.remove()
      } 
    })
  },
  showResultZero: function() {
    total.value = 0;
    totalCount.value = 0;
    totalCountOther.value =0;
    fullTotalCount.value = 0;
    totalCountRollback.value = 0;
    appData.screens = []
    appData.screenPrice = 0
    appData.screenCount = 0
    appData.rollback = 0
    appData.fullPrice = 0
    appData.fullPriceRollback = 0
    appData.servicePricesPercent = 0
    appData.servicePricesNumber = 0
    appData.adaptive = true
    appData.servicePercent = {}
    appData.serviceNumber = {}
    appData.allServicePrices = 0
  },
  start: function() {
    appData.addScreens();
    appData.addServices();
    appData.addRollback;
    appData.addPrices();   
    appData.showResult();
    appData.blocking();
    appData.replacement()
    
  },
};

appData.init();
