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

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_timer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/timer.js */ \"./src/modules/timer.js\");\n/* harmony import */ var _modules_menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/menu.js */ \"./src/modules/menu.js\");\n/* harmony import */ var _modules_modal_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/modal.js */ \"./src/modules/modal.js\");\n/* harmony import */ var _modules_valid_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/valid.js */ \"./src/modules/valid.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_modules_timer_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('20 september 2025')\r\n;(0,_modules_menu_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\r\n;(0,_modules_modal_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()\r\n;(0,_modules_valid_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])()\n\n//# sourceURL=webpack://lesson19/./src/index.js?\n}");

/***/ }),

/***/ "./src/modules/menu.js":
/*!*****************************!*\
  !*** ./src/modules/menu.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst menu = () => {\r\n    const menuBtn = document.querySelector('.menu')\r\n    const menu = document.querySelector('menu')\r\n    const closeBtn = menu.querySelector('.close-btn')\r\n    const menuItems = menu.querySelectorAll('ul>li>a')\r\n\r\n\r\n    const handleMenu = () => {\r\n        /*if (!menu.style.transform) {\r\n            menu.style.transform = 'translateX(0)'\r\n        } else {\r\n            menu.style.transform = ''\r\n        }*/\r\n        menu.classList.toggle('active-menu')\r\n    }\r\n\r\n    menuBtn.addEventListener('click', handleMenu)\r\n\r\n    closeBtn.addEventListener('click', handleMenu)\r\n\r\n    menuItems.forEach(menuItem => menuItem.addEventListener('click', handleMenu))\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);\n\n//# sourceURL=webpack://lesson19/./src/modules/menu.js?\n}");

/***/ }),

/***/ "./src/modules/modal.js":
/*!******************************!*\
  !*** ./src/modules/modal.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst modal = () => {\r\n    const modal = document.querySelector('.popup');\r\n    const buttons = document.querySelectorAll('.popup-btn');\r\n    const closeBtn = modal.querySelector('.popup-close');\r\n    const modalContent = modal.querySelector('.popup-content');\r\n\r\n\r\n    function openModal() {\r\n\r\n        if (window.innerWidth < 768) {\r\n            modal.style.display = 'flex';\r\n            modal.style.opacity = '1';\r\n            modalContent.style.opacity = '1';\r\n            modalContent.style.transform = 'scale(1)';\r\n        } else {\r\n            modal.style.display = 'flex';\r\n            \r\n            let startTime = null;\r\n            const duration = 300;\r\n            \r\n            function step(timestamp) {\r\n                if (!startTime) startTime = timestamp;\r\n                const progress = Math.min((timestamp - startTime) / duration, 1);\r\n                \r\n                const opacity = progress;\r\n                const scale = 0.8 + progress * 0.2;\r\n                \r\n                modal.style.backgroundColor = `rgba(0, 0, 0, ${opacity * 0.5})`;\r\n                modalContent.style.opacity = opacity;\r\n                modalContent.style.transform = `scale(${scale})`;\r\n                \r\n                if (progress < 1) {\r\n                    requestAnimationFrame(step);\r\n                }\r\n            }\r\n            \r\n            requestAnimationFrame(step);\r\n        }\r\n    }\r\n\r\n\r\n    function closeModal() {\r\n        // Проверка ширины экрана\r\n        if (window.innerWidth < 768) {\r\n            modal.style.display = 'none';\r\n        } else {\r\n            let startTime = null;\r\n            const duration = 300;\r\n            \r\n            function step(timestamp) {\r\n                if (!startTime) startTime = timestamp;\r\n                const progress = Math.min((timestamp - startTime) / duration, 1);\r\n                \r\n                const opacity = 1 - progress;\r\n                const scale = 1 - progress * 0.2;\r\n                \r\n                modal.style.backgroundColor = `rgba(0, 0, 0, ${opacity * 0.5})`;\r\n                modalContent.style.opacity = opacity;\r\n                modalContent.style.transform = `scale(${scale})`;\r\n                \r\n                if (progress < 1) {\r\n                    requestAnimationFrame(step);\r\n                } else {\r\n                    modal.style.display = 'none';\r\n                }\r\n            }\r\n            \r\n            requestAnimationFrame(step);\r\n        }\r\n    }\r\n\r\n    \r\n    buttons.forEach(btn => {\r\n        btn.addEventListener('click', openModal);\r\n    });\r\n\r\n    closeBtn.addEventListener('click', closeModal);\r\n\r\n    modal.addEventListener('click', (e) => {\r\n        if (e.target === modal) {\r\n            closeModal();\r\n        }\r\n    });\r\n\r\n    document.addEventListener('keydown', (e) => {\r\n        if (e.key === 'Escape' && modal.style.display === 'flex') {\r\n            closeModal();\r\n        }\r\n    });\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);\n\n//# sourceURL=webpack://lesson19/./src/modules/modal.js?\n}");

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

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst valid = () => {\r\n    // Функция, которая разрешает ввод только цифр\r\n        function allowOnlyNumbers(event) {\r\n            const key = event.key;\r\n            if (!/^\\d$/.test(key) && key !== 'Backspace' && key !== 'Delete') {\r\n                event.preventDefault();\r\n            }\r\n        }\r\n\r\n        // Применяем обработчик событий к полям ввода\r\n        document.querySelector('.calc-square').addEventListener('keydown', allowOnlyNumbers);\r\n        document.querySelector('.calc-count').addEventListener('keydown', allowOnlyNumbers);\r\n        document.querySelector('.calc-day').addEventListener('keydown', allowOnlyNumbers);\r\n\r\n        // Проверка отображения текста выбранного значения в SELECT\r\n        document.querySelector('.calc-type').addEventListener('change', function() {\r\n            const selectedOption = this.options[this.selectedIndex].text;\r\n            console.log(\"Выбранный тип объекта:\", selectedOption);\r\n            alert(\"Выбранный тип объекта: \" + selectedOption);\r\n        });   \r\n        \r\n    function validateName(event) {\r\n        const key = event.key;\r\n        if (!/^[а-яА-ЯёЁ\\s\\-]*$/.test(key) && key !== 'Backspace' && key !== 'Delete' && key !== 'Tab') {\r\n            event.preventDefault();\r\n        }\r\n}\r\n\r\n// Функция для валидации поля \"E-mail\"\r\nfunction validateEmail(event) {\r\n    const key = event.key;\r\n    if (!/^[a-zA-Z0-9@._!~*'\\-]*$/.test(key) && key !== 'Backspace' && key !== 'Delete' && key !== 'Tab') {\r\n        event.preventDefault();\r\n    }\r\n}\r\n\r\n// Функция для валидации поля \"Номер телефона\"\r\nfunction validatePhone(event) {\r\n    const key = event.key;\r\n    if (!/^[0-9\\s\\(\\)\\-]*$/.test(key) && key !== 'Backspace' && key !== 'Delete' && key !== 'Tab') {\r\n        event.preventDefault();\r\n    }\r\n}\r\n\r\nfunction validateMessage(event) {\r\n    const key = event.key;\r\n    if (!/^[а-яА-ЯёЁ\\s\\-]*$/.test(key) && key !== 'Backspace' && key !== 'Delete' && key !== 'Tab') {\r\n        event.preventDefault();\r\n    }\r\n}\r\n\r\n// Применяем обработчики событий к полям ввода после загрузки DOM\r\ndocument.addEventListener('DOMContentLoaded', function() {\r\n    // Форма 1\r\n    document.getElementById('form1-name').addEventListener('keydown', validateName);\r\n    document.getElementById('form1-email').addEventListener('keydown', validateEmail);\r\n    document.getElementById('form1-phone').addEventListener('keydown', validatePhone);\r\n\r\n    // Форма 2\r\n    document.getElementById('form2-name').addEventListener('keydown', validateName);\r\n    document.getElementById('form2-email').addEventListener('keydown', validateEmail);\r\n    document.getElementById('form2-phone').addEventListener('keydown', validatePhone);\r\n    document.getElementById('form2-message').addEventListener('keydown', validateMessage);\r\n\r\n    // Форма 3\r\n    document.getElementById('form3-name').addEventListener('keydown', validateName);\r\n    document.getElementById('form3-email').addEventListener('keydown', validateEmail);\r\n    document.getElementById('form3-phone').addEventListener('keydown', validatePhone);\r\n});\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (valid);\n\n//# sourceURL=webpack://lesson19/./src/modules/valid.js?\n}");

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