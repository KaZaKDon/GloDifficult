const animate = ({timing, draw, duration}) => {

    let start = performance.now();

    requestAnimationFrame(function animate(time) {
        // timeFraction изменяется от 0 до 1
        let timeFraction = (time - start) / duration;
        if (timeFraction > 1) timeFraction = 1;

        // вычисление текущего состояния анимации
        let progress = timing(timeFraction);

        draw(progress); // отрисовать её

        if (timeFraction < 1) {
        requestAnimationFrame(animate);
        }

    });
}
// Функция для анимации числа
function animateNumber(element, startValue, endValue, duration) {
    if (startValue === endValue) return;

    const startTime = performance.now();

    function update(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);

        // Опционально: добавить easing для плавности (ease-out)
        const easedProgress = 1 - Math.pow(1 - progress, 3);  // Кубическая ease-out

        const currentValue = Math.floor(startValue + (endValue - startValue) * easedProgress);

        // Кастомное форматирование (пробелы вместо запятых)
        element.textContent = currentValue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');

        if (progress < 1) {
            requestAnimationFrame(update);
        }
    }

    requestAnimationFrame(update);
}

export { animate, animateNumber }