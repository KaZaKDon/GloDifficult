/**
 * Анимирует изменение числа в элементе от startValue к endValue за duration мс
 * @param {HTMLElement} element - элемент, в котором показываем число
 * @param {number} startValue - начальное число
 * @param {number} endValue - конечное число
 * @param {number} duration - длительность анимации в миллисекундах
 */
function animateNumber(element, startValue, endValue, duration) {
  if (startValue === endValue) return; 

    const startTime = performance.now();

    function update(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1); 

    const currentValue = Math.floor(startValue + (endValue - startValue) * progress);

    element.textContent = currentValue.toLocaleString();

    if (progress < 1) {
        requestAnimationFrame(update);
    } else {}
    }

    requestAnimationFrame(update);
}

const calc = (price = 100) => {
    const calcBlock = document.querySelector('.calc-block');
    const calcType = document.querySelector('.calc-type');
    const calcSquare = document.querySelector('.calc-square');
    const calcCount = document.querySelector('.calc-count');
    const calcDay = document.querySelector('.calc-day');
    const total = document.getElementById('total');

    let previousTotal = 0;

    const countCalc = () => {
        const calcTypeValue = +calcType.options[calcType.selectedIndex].value;
        const calcSquareValue = calcSquare.value;

        let totalValue = 0;
        let calcCountValue = 1;
        let calcDayValue = 1;

        if (calcCount.value > 1) {
            calcCountValue += +calcCount.value / 10;
        }

        if (calcDay.value && calcDay.value < 5) {
            calcDayValue = 2;
        } else if (calcDay.value && calcDay.value < 10) {
            calcDayValue = 1.5;
        }

        if (calcType.value && calcSquare.value) {
            totalValue = price * calcTypeValue * calcSquareValue * calcCountValue * calcDayValue;
        } else {
            totalValue = 0;
        }

        animateNumber(total, previousTotal, totalValue, 1000); 

        previousTotal = totalValue;
    };

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