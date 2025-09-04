const valid = () => {
    // Функция, которая разрешает ввод только цифр
        function allowOnlyNumbers(event) {
            const key = event.key;
            if (!/^\d$/.test(key) && key !== 'Backspace' && key !== 'Delete') {
                event.preventDefault();
            }
        }

        // Применяем обработчик событий к полям ввода
        document.querySelector('.calc-square').addEventListener('keydown', allowOnlyNumbers);
        document.querySelector('.calc-count').addEventListener('keydown', allowOnlyNumbers);
        document.querySelector('.calc-day').addEventListener('keydown', allowOnlyNumbers);

        // Проверка отображения текста выбранного значения в SELECT
        document.querySelector('.calc-type').addEventListener('change', function() {
            const selectedOption = this.options[this.selectedIndex].text;
            console.log("Выбранный тип объекта:", selectedOption);
            alert("Выбранный тип объекта: " + selectedOption);
        });
    
    // Функция для валидации и коррекции имени
    function formatName(value) {
        return value
            .replace(/[^а-яА-ЯёЁ\s\-]/g, '') // Удаление недопустимых символов
            .replace(/[\s\-]+/g, ' ') // Замена нескольких пробелов или дефисов на один
            .trim() // Удаление пробелов в начале и конце
            .split(' ')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()) // Первая буква каждого слова в верхнем регистре
            .join(' ');
    }

    // Функция для коррекции email
    function formatEmail(value) {
        return value.replace(/[^a-zA-Z0-9@._!~*'\-]/g, ''); // Удаление недопустимых символов
    }

    // Функция для коррекции телефона
    function formatPhone(value) {
        return value.replace(/[^0-9\s\(\)\-]/g, '') // Удаление недопустимых символов
            .replace(/[\s\-]+/g, ' ') // Замена нескольких пробелов или дефисов на один
            .trim(); // Удаление пробелов в начале и конце
    }

    // Обработчик события blur для всех форм
    function handleBlur(event) {
        const input = event.target;
        let formattedValue;

        switch (input.type) {
            case 'text':
                formattedValue = formatName(input.value);
                break;
            case 'email':
                formattedValue = formatEmail(input.value);
                break;
            case 'tel':
                formattedValue = formatPhone(input.value);
                break;
        }

        input.value = formattedValue;
    }

    // Применяем обработчики событий к полям ввода после загрузки DOM
    document.addEventListener('DOMContentLoaded', function() {
        // Форма 1
        document.getElementById('form1-name').addEventListener('blur', handleBlur);
        document.getElementById('form1-email').addEventListener('blur', handleBlur);
        document.getElementById('form1-phone').addEventListener('blur', handleBlur);

        // Форма 2
        document.getElementById('form2-name').addEventListener('blur', handleBlur);
        document.getElementById('form2-email').addEventListener('blur', handleBlur);
        document.getElementById('form2-phone').addEventListener('blur', handleBlur);

        // Форма 3
        document.getElementById('form3-name').addEventListener('blur', handleBlur);
        document.getElementById('form3-email').addEventListener('blur', handleBlur);
        document.getElementById('form3-phone').addEventListener('blur', handleBlur);
    });
}
export default valid;