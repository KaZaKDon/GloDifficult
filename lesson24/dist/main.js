/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_timer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/timer.js */ \"./src/modules/timer.js\");\n/* harmony import */ var _modules_menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/menu.js */ \"./src/modules/menu.js\");\n/* harmony import */ var _modules_modal_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/modal.js */ \"./src/modules/modal.js\");\n/* harmony import */ var _modules_valid_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/valid.js */ \"./src/modules/valid.js\");\n/* harmony import */ var _modules_tabs_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/tabs.js */ \"./src/modules/tabs.js\");\n/* harmony import */ var _modules_slider_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/slider.js */ \"./src/modules/slider.js\");\n/* harmony import */ var _modules_calc_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/calc.js */ \"./src/modules/calc.js\");\n\r\n\r\n\r\n\r\n//import animation from \"./modules/animation.js\"\r\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_modules_timer_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('20 september 2025')\r\n;(0,_modules_slider_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])()\r\n;(0,_modules_menu_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\r\n;(0,_modules_modal_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()\r\n;(0,_modules_valid_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])()\r\n//animation()\r\n;(0,_modules_tabs_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])()\r\n;(0,_modules_calc_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(100)\n\n//# sourceURL=webpack://lesson19/./src/index.js?\n}");

/***/ }),

/***/ "./src/modules/calc.js":
/*!*****************************!*\
  !*** ./src/modules/calc.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/**\r\n * Анимирует изменение числа в элементе от startValue к endValue за duration мс\r\n * @param {HTMLElement} element - элемент, в котором показываем число\r\n * @param {number} startValue - начальное число\r\n * @param {number} endValue - конечное число\r\n * @param {number} duration - длительность анимации в миллисекундах\r\n */\r\nfunction animateNumber(element, startValue, endValue, duration) {\r\n  if (startValue === endValue) return; // Не анимировать, если значения одинаковые\r\n\r\n    const startTime = performance.now();\r\n\r\n    function update(currentTime) {\r\n    const elapsed = currentTime - startTime;\r\n    const progress = Math.min(elapsed / duration, 1); // от 0 до 1\r\n\r\n    // Интерполяция числа (линейная)\r\n    const currentValue = Math.floor(startValue + (endValue - startValue) * progress);\r\n\r\n    element.textContent = currentValue.toLocaleString(); // с разделителями тысяч\r\n\r\n    if (progress < 1) {\r\n        requestAnimationFrame(update);\r\n    } else {\r\n      // Анимация закончена\r\n        }\r\n    }\r\n\r\n    requestAnimationFrame(update);\r\n}\r\n\r\nconst calc = (price = 100) => {\r\n    const calcBlock = document.querySelector('.calc-block');\r\n    const calcType = document.querySelector('.calc-type');\r\n    const calcSquare = document.querySelector('.calc-square');\r\n    const calcCount = document.querySelector('.calc-count');\r\n    const calcDay = document.querySelector('.calc-day');\r\n    const total = document.getElementById('total');\r\n\r\n    // Переменная для хранения предыдущего значения стоимости\r\n    let previousTotal = 0;\r\n\r\n    const countCalc = () => {\r\n        const calcTypeValue = +calcType.options[calcType.selectedIndex].value;\r\n        const calcSquareValue = calcSquare.value;\r\n\r\n        let totalValue = 0;\r\n        let calcCountValue = 1;\r\n        let calcDayValue = 1;\r\n\r\n        if (calcCount.value > 1) {\r\n            calcCountValue += +calcCount.value / 10;\r\n        }\r\n\r\n        if (calcDay.value && calcDay.value < 5) {\r\n            calcDayValue = 2;\r\n        } else if (calcDay.value && calcDay.value < 10) {\r\n            calcDayValue = 1.5;\r\n        }\r\n\r\n        if (calcType.value && calcSquare.value) {\r\n            totalValue = price * calcTypeValue * calcSquareValue * calcCountValue * calcDayValue;\r\n        } else {\r\n            totalValue = 0;\r\n        }\r\n\r\n        // Анимируем изменение стоимости вместо мгновенного присваивания\r\n        animateNumber(total, previousTotal, totalValue, 1000); // 1000 мс = 1 секунда\r\n\r\n        // Обновляем предыдущее значение после анимации\r\n        previousTotal = totalValue;\r\n    };\r\n\r\n    calcBlock.addEventListener('input', (e) => {\r\n        if (e.target === calcType ||\r\n            e.target === calcSquare ||\r\n            e.target === calcCount ||\r\n            e.target === calcDay\r\n        ) {\r\n            countCalc();\r\n        }\r\n    });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calc);\n\n//# sourceURL=webpack://lesson19/./src/modules/calc.js?\n}");

/***/ }),

/***/ "./src/modules/menu.js":
/*!*****************************!*\
  !*** ./src/modules/menu.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst menu = () => {\r\n    const menuBtn = document.querySelector('.menu')\r\n    const menu = document.querySelector('menu')\r\n\r\n    const handleMenu = (e) => {\r\n        if (\r\n            e.target === menuBtn ||\r\n            e.target.closest('.close-btn') ||\r\n            e.target.closest('ul > li > a')\r\n        ) {\r\n            menu.classList.toggle('active-menu');\r\n            }\r\n    };\r\n\r\n    menuBtn.addEventListener('click', handleMenu);\r\n\r\n    menu.addEventListener('click', handleMenu);\r\n}\r\n\r\n    /*const closeBtn = menu.querySelector('.close-btn')\r\n    const menuItems = menu.querySelectorAll('ul>li>a')\r\n\r\n\r\n    const handleMenu = () => {\r\n        if (!menu.style.transform) {\r\n            menu.style.transform = 'translateX(0)'\r\n        } else {\r\n            menu.style.transform = ''\r\n        }\r\n        menu.classList.toggle('active-menu')\r\n    }\r\n\r\n    menuBtn.addEventListener('click', handleMenu)\r\n\r\n    closeBtn.addEventListener('click', handleMenu)\r\n\r\n    menuItems.forEach(menuItem => menuItem.addEventListener('click', handleMenu))*/\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);\n\n//# sourceURL=webpack://lesson19/./src/modules/menu.js?\n}");

/***/ }),

/***/ "./src/modules/modal.js":
/*!******************************!*\
  !*** ./src/modules/modal.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst modal = () => {    \r\n    const modal = document.querySelector('.popup');\r\n    const buttons = document.querySelectorAll('.popup-btn');\r\n    const closeBtn = modal.querySelector('.popup-close');\r\n    const modalContent = modal.querySelector('.popup-content');\r\n\r\n\r\n    function openModal() {\r\n\r\n        if (window.innerWidth < 768) {\r\n            modal.style.display = 'flex';\r\n            modal.style.opacity = '1';\r\n            modalContent.style.opacity = '1';\r\n            modalContent.style.transform = 'scale(1)';\r\n        } else {\r\n            modal.style.display = 'flex';\r\n            \r\n            let startTime = null;\r\n            const duration = 300;\r\n            \r\n            function step(timestamp) {\r\n                if (!startTime) startTime = timestamp;\r\n                const progress = Math.min((timestamp - startTime) / duration, 1);\r\n                \r\n                const opacity = progress;\r\n                const scale = 0.8 + progress * 0.2;\r\n                \r\n                modal.style.backgroundColor = `rgba(0, 0, 0, ${opacity * 0.5})`;\r\n                modalContent.style.opacity = opacity;\r\n                modalContent.style.transform = `scale(${scale})`;\r\n                \r\n                if (progress < 1) {\r\n                    requestAnimationFrame(step);\r\n                }\r\n            }\r\n            \r\n            requestAnimationFrame(step);\r\n        }\r\n    }\r\n\r\n\r\n    function closeModal() {\r\n        // Проверка ширины экрана\r\n        if (window.innerWidth < 768) {\r\n            modal.style.display = 'none';\r\n        } else {\r\n            let startTime = null;\r\n            const duration = 300;\r\n            \r\n            function step(timestamp) {\r\n                if (!startTime) startTime = timestamp;\r\n                const progress = Math.min((timestamp - startTime) / duration, 1);\r\n                \r\n                const opacity = 1 - progress;\r\n                const scale = 1 - progress * 0.2;\r\n                \r\n                modal.style.backgroundColor = `rgba(0, 0, 0, ${opacity * 0.5})`;\r\n                modalContent.style.opacity = opacity;\r\n                modalContent.style.transform = `scale(${scale})`;\r\n                \r\n                if (progress < 1) {\r\n                    requestAnimationFrame(step);\r\n                } else {\r\n                    modal.style.display = 'none';\r\n                }\r\n            }\r\n            \r\n            requestAnimationFrame(step);\r\n        }\r\n    }\r\n\r\n    \r\n    buttons.forEach(btn => {\r\n        btn.addEventListener('click', openModal);\r\n    });\r\n\r\n    closeBtn.addEventListener('click', closeModal);\r\n\r\n    modal.addEventListener('click', (e) => {\r\n        if (e.target === modal) {\r\n            closeModal();\r\n        }\r\n    });\r\n\r\n    document.addEventListener('keydown', (e) => {\r\n        if (e.key === 'Escape' && modal.style.display === 'flex') {\r\n            closeModal();\r\n        }\r\n    });\r\n}\r\n\r\n/* закрытие модального окна по клику вне самого окна\r\nmodal.addEventListener('click', (e) => {\r\n    if (!e.target.closest('.popup-content') || e.target.contains('.popup-close')) {\r\n        modal.style.display = 'none'\r\n    }\r\n})*/\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);\n\n//# sourceURL=webpack://lesson19/./src/modules/modal.js?\n}");

/***/ }),

/***/ "./src/modules/slider.js":
/*!*******************************!*\
  !*** ./src/modules/slider.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst slider = () => {\r\n    const sliderBlock = document.querySelector('.portfolio-content')\r\n    const slides = document.querySelectorAll('.portfolio-item')\r\n\r\n    const elemLi = () => {\r\n        const ul = document.querySelector('.portfolio-dots');\r\n        ul.innerHTML = '' // очистить перед добавлением, если нужно\r\n        for (let i = 0; i < slides.length; i++) {\r\n            const li = document.createElement('li');\r\n            li.classList.add('dot');\r\n            ul.appendChild(li);\r\n        }\r\n    }\r\n\r\n    elemLi()\r\n\r\n    \r\n    const dots = document.querySelectorAll('.dot')\r\n\r\n    \r\n    let currentSlide = 0\r\n    let interval\r\n\r\n    const prevSlide = (elem, index, strClass) => {\r\n        elem[index].classList.remove(strClass)\r\n    }\r\n\r\n    const nextSlide = (elem, index, strClass) => {\r\n        elem[index].classList.add(strClass)\r\n    }\r\n\r\n    const autoSlide = () => {\r\n        prevSlide(slides, currentSlide, 'portfolio-item-active')\r\n        prevSlide(dots, currentSlide, 'dot-active')\r\n        currentSlide++\r\n\r\n        if (currentSlide >= slides.length) {\r\n            currentSlide = 0\r\n        }\r\n        nextSlide(slides, currentSlide, 'portfolio-item-active')\r\n        nextSlide(dots, currentSlide, 'dot-active')\r\n    }\r\n\r\n    const startSlide = (timer) => {\r\n        interval = setInterval(autoSlide, timer)\r\n    }\r\n\r\n    const stopSlide = () => {\r\n        clearInterval(interval)\r\n    }\r\n\r\n\r\n    sliderBlock.addEventListener('click', (e) => {\r\n        e.preventDefault()\r\n\r\n        if (!e.target.matches('.dot, .portfolio-btn')) {\r\n            return\r\n        }\r\n\r\n        prevSlide(slides, currentSlide, 'portfolio-item-active')\r\n        prevSlide(dots, currentSlide, 'dot-active')\r\n\r\n        if (e.target.matches('#arrow-right')) {\r\n            currentSlide++\r\n        } else if (e.target.matches('#arrow-left')) {\r\n            currentSlide--\r\n        } else if (e.target.classList.contains('dot')) {\r\n            dots.forEach((dot, index) => {\r\n                if (e.target === dot) {\r\n                    currentSlide = index\r\n                }\r\n            })\r\n        }\r\n\r\n        if (currentSlide >= slides.length) {\r\n            currentSlide = 0\r\n        }\r\n\r\n        if (currentSlide < 0) {\r\n            currentSlide = slides.length - 1\r\n        }\r\n\r\n        nextSlide(slides, currentSlide, 'portfolio-item-active')\r\n        nextSlide(dots, currentSlide, 'dot-active')\r\n    })\r\n\r\n    sliderBlock.addEventListener('mouseenter', (e) => {\r\n        if (e.target.matches('.dot, .portfolio-btn')) {\r\n            stopSlide()\r\n        }\r\n    }, true);\r\n\r\n    sliderBlock.addEventListener('mouseleave', (e) => {\r\n        if (e.target.matches('.dot, .portfolio-btn')) {\r\n            startSlide(2000)\r\n        }\r\n    }, true)\r\n\r\n    startSlide(2000)\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);\n\n//# sourceURL=webpack://lesson19/./src/modules/slider.js?\n}");

/***/ }),

/***/ "./src/modules/tabs.js":
/*!*****************************!*\
  !*** ./src/modules/tabs.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst tabs = () => {\r\n    const tabPanel = document.querySelector('.service-header')\r\n    const tabContent = document.querySelectorAll('.service-tab')\r\n    const tabs = document.querySelectorAll('.service-header-tab')\r\n\r\n\r\n    tabPanel.addEventListener('click', (e) => {\r\n        //if (e.target.classList.contains('service-header-tab')) { если есть в div другие теги, клик на них не сработает\r\n        if (e.target.closest('.service-header-tab')) {\r\n            const tabBtn = e.target.closest('.service-header-tab')\r\n            tabs.forEach((tab, index) => {\r\n                if (tab === tabBtn) {\r\n                    tab.classList.add('active')\r\n                    tabContent[index].classList.remove('d-none')\r\n                } else {\r\n                    tab.classList.remove('active')\r\n                    tabContent[index].classList.add('d-none')\r\n                }\r\n            })\r\n        }\r\n    })\r\n    \r\n};\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tabs);\n\n//# sourceURL=webpack://lesson19/./src/modules/tabs.js?\n}");

/***/ }),

/***/ "./src/modules/timer.js":
/*!******************************!*\
  !*** ./src/modules/timer.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst timer = (deadline) => {\r\n    const timerHours = document.getElementById('timer-hours');\r\n    const timerMinutes = document.getElementById('timer-minutes');\r\n    const timerSeconds = document.getElementById('timer-seconds');\r\n    \r\n    \r\n\r\n    const formatTime = (time) => {\r\n        return time < 10 ? `0${time}` : time;\r\n    };\r\n    \r\n    const getTimeRemaining = () => {\r\n        const dateStop = new Date(deadline).getTime();\r\n        const dateNow = new Date().getTime();\r\n        const timeRemaining = (dateStop - dateNow) / 1000;\r\n\r\n        if (timeRemaining <= 0) {\r\n            return { timeRemaining: 0, hours: 0, minutes: 0, seconds: 0 };\r\n        }\r\n\r\n        const hours = Math.floor(timeRemaining / 3600);\r\n        const minutes = Math.floor((timeRemaining % 3600) / 60);\r\n        const seconds = Math.floor(timeRemaining % 60);\r\n\r\n        return { timeRemaining, hours, minutes, seconds };\r\n    };\r\n\r\n    const updateClock = () => {\r\n        const getTime = getTimeRemaining();\r\n        const timerInterval = setInterval(updateClock, 1000);\r\n\r\n        timerHours.textContent = formatTime(getTime.hours);\r\n        timerMinutes.textContent = formatTime(getTime.minutes);\r\n        timerSeconds.textContent = formatTime(getTime.seconds);\r\n\r\n        if (getTime.timeRemaining <= 0) {\r\n            clearInterval(timerInterval);\r\n        }\r\n    };\r\n    \r\n    if (getTimeRemaining().timeRemaining <= 0) {\r\n        timerHours.textContent = '00';\r\n        timerMinutes.textContent = '00';\r\n        timerSeconds.textContent = '00';\r\n    } else {\r\n        const timerInterval = setInterval(updateClock, 1000);\r\n        timerInterval\r\n    }\r\n\r\n    updateClock()\r\n};\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timer);\n\n//# sourceURL=webpack://lesson19/./src/modules/timer.js?\n}");

/***/ }),

/***/ "./src/modules/valid.js":
/*!******************************!*\
  !*** ./src/modules/valid.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst valid = () => {\r\n    // Функция, которая разрешает ввод только цифр\r\n        function allowOnlyNumbers(event) {\r\n            const key = event.key;\r\n            if (!/^\\d$/.test(key) && key !== 'Backspace' && key !== 'Delete') {\r\n                event.preventDefault();\r\n            }\r\n        }\r\n\r\n        // Применяем обработчик событий к полям ввода\r\n        document.querySelector('.calc-square').addEventListener('keydown', allowOnlyNumbers);\r\n        document.querySelector('.calc-count').addEventListener('keydown', allowOnlyNumbers);\r\n        document.querySelector('.calc-day').addEventListener('keydown', allowOnlyNumbers);\r\n\r\n        // Проверка отображения текста выбранного значения в SELECT\r\n        document.querySelector('.calc-type').addEventListener('change', function() {\r\n            const selectedOption = this.options[this.selectedIndex].text;\r\n            console.log(\"Выбранный тип объекта:\", selectedOption);\r\n            alert(\"Выбранный тип объекта: \" + selectedOption);\r\n        });\r\n    \r\n    // Функция для валидации и коррекции имени\r\n    function formatName(value) {\r\n        return value\r\n            .replace(/[^а-яА-ЯёЁ\\s\\-]/g, '') // Удаление недопустимых символов\r\n            .replace(/[\\s\\-]+/g, ' ') // Замена нескольких пробелов или дефисов на один\r\n            .trim() // Удаление пробелов в начале и конце\r\n            .split(' ')\r\n            .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()) // Первая буква каждого слова в верхнем регистре\r\n            .join(' ');\r\n    }\r\n\r\n    // Функция для коррекции email\r\n    function formatEmail(value) {\r\n        return value.replace(/[^a-zA-Z0-9@._!~*'\\-]/g, ''); // Удаление недопустимых символов\r\n    }\r\n\r\n    // Функция для коррекции телефона\r\n    function formatPhone(value) {\r\n        return value.replace(/[^0-9\\s\\(\\)\\-]/g, '') // Удаление недопустимых символов\r\n            .replace(/[\\s\\-]+/g, ' ') // Замена нескольких пробелов или дефисов на один\r\n            .trim(); // Удаление пробелов в начале и конце\r\n    }\r\n\r\n    // Обработчик события blur для всех форм\r\n    function handleBlur(event) {\r\n        const input = event.target;\r\n        let formattedValue;\r\n\r\n        switch (input.type) {\r\n            case 'text':\r\n                formattedValue = formatName(input.value);\r\n                break;\r\n            case 'email':\r\n                formattedValue = formatEmail(input.value);\r\n                break;\r\n            case 'tel':\r\n                formattedValue = formatPhone(input.value);\r\n                break;\r\n        }\r\n\r\n        input.value = formattedValue;\r\n    }\r\n\r\n    // Применяем обработчики событий к полям ввода после загрузки DOM\r\n    document.addEventListener('DOMContentLoaded', function() {\r\n        // Форма 1\r\n        document.getElementById('form1-name').addEventListener('blur', handleBlur);\r\n        document.getElementById('form1-email').addEventListener('blur', handleBlur);\r\n        document.getElementById('form1-phone').addEventListener('blur', handleBlur);\r\n\r\n        // Форма 2\r\n        document.getElementById('form2-name').addEventListener('blur', handleBlur);\r\n        document.getElementById('form2-email').addEventListener('blur', handleBlur);\r\n        document.getElementById('form2-phone').addEventListener('blur', handleBlur);\r\n\r\n        // Форма 3\r\n        document.getElementById('form3-name').addEventListener('blur', handleBlur);\r\n        document.getElementById('form3-email').addEventListener('blur', handleBlur);\r\n        document.getElementById('form3-phone').addEventListener('blur', handleBlur);\r\n    });\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (valid);\n\n//# sourceURL=webpack://lesson19/./src/modules/valid.js?\n}");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;