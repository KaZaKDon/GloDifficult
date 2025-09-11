/**
 * Анимирует изменение числа в элементе от startValue к endValue за duration мс
 * @param {HTMLElement} element - элемент, в котором показываем число
 * @param {number} startValue - начальное число
 * @param {number} endValue - конечное число
 * @param {number} duration - длительность анимации в миллисекундах
 */
import { animateNumber } from '../modules/helpers';  // Импорт функции animate из helpers.js (путь укажите в зависимости от структуры проекта)

const calc = (price = 100) => {
    const calcBlock = document.querySelector('.calc-block');
    const calcType = document.querySelector('.calc-type');
    const calcSquare = document.querySelector('.calc-square');
    const calcCount = document.querySelector('.calc-count');
    const calcDay = document.querySelector('.calc-day');
    const total = document.getElementById('total');

    // Переменная для хранения предыдущего значения стоимости
    let previousTotal = 0;

    const countCalc = () => {
        const calcTypeValue = +calcType.value;  // Прямое получение value (без options)
        const calcSquareValue = +calcSquare.value;  // Преобразование в число

        let totalValue = 0;
        let calcCountValue = 1;
        let calcDayValue = 1;

        // Проверки и валидация
        if (calcCount.value && !isNaN(calcCount.value) && +calcCount.value > 1) {
            calcCountValue += +calcCount.value / 10;
        }

        if (calcDay.value && !isNaN(calcDay.value)) {
            const dayVal = +calcDay.value;
            if (dayVal < 5) {
                calcDayValue = 2;
            } else if (dayVal < 10) {
                calcDayValue = 1.5;
            }
        }

        // Улучшенная проверка: calcTypeValue и calcSquareValue должны быть числами > 0
        if (!isNaN(calcTypeValue) && calcTypeValue > 0 && !isNaN(calcSquareValue) && calcSquareValue > 0) {
            totalValue = price * calcTypeValue * calcSquareValue * calcCountValue * calcDayValue;
        } else {
            totalValue = 0;
        }

        // Анимация
        animateNumber(total, previousTotal, totalValue, 1000);

        previousTotal = totalValue;  // Обновление для следующей анимации
    };

    // Обработчик с валидацией
    calcBlock.addEventListener('input', (e) => {
        if (e.target === calcType ||
            e.target === calcSquare ||
            e.target === calcCount ||
            e.target === calcDay
        ) {
            countCalc();
        }
    });
};

export default calc;