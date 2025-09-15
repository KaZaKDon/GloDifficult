const sendForm = ({ formId, someElem = [] }) => {
    const form = document.getElementById(formId);
    const statusBlock = document.createElement('div');
    statusBlock.id = 'statusBlock'; // Добавил id для стилей (опционально)
    form.appendChild(statusBlock); // Добавляем statusBlock в форму (или куда нужно)

    const loadText = 'Загрузка...';
    const errorText = 'Ошибка отправки. Проверьте соединение.';
    const successText = 'Спасибо! Наш менеджер свяжется с Вами.';

    // Функция валидации (упрощённая, добавь свою логику)
    const validate = (list) => {
        let success = true;
        list.forEach(input => {
            if (input.hasAttribute('required') && !input.value.trim()) {
                input.classList.add('error');
                success = false;
            } else {
                input.classList.remove('error');
                input.classList.add('success');
            }
        });
        return success;
    };

    // Функция отправки с fetch и запасным XMLHttpRequest
    const sendData = (data) => {
        return fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: { "Content-Type": "application/json" }
        })
        .then(res => {
            if (!res.ok) throw new Error(`HTTP ${res.status}`);
            return res.json();
        })
        .catch(fetchError => {
            console.log('Fetch failed, trying XMLHttpRequest:', fetchError);
            // Запасной вариант с XMLHttpRequest
            return new Promise((resolve, reject) => {
                const xhr = new XMLHttpRequest();
                xhr.open('POST', 'https://httpbin.org/post');  // Альтернативный API
                xhr.setRequestHeader('Content-Type', 'application/json');
                xhr.onload = () => {
                    if (xhr.status >= 200 && xhr.status < 300) {
                        resolve(JSON.parse(xhr.responseText));
                    } else {
                        reject(new Error(`XMLHttpRequest failed: ${xhr.status}`));
                    }
                };
                xhr.onerror = () => reject(new Error('XMLHttpRequest network error'));
                xhr.send(JSON.stringify(data));
            });
        });
    };

    const submitForm = () => {
        const formElements = form.querySelectorAll('input, textarea');
        const formData = new FormData(form);
        const formBody = {};

        formData.forEach((val, key) => {
            formBody[key] = val;
        });

        if (validate(formElements)) {
            // Очистка предыдущего статуса
            statusBlock.innerHTML = '';

            // Создание и добавление анимации загрузки
            const loader = document.createElement('div');
            loader.className = 'sk-rotating-plane';  // Анимация #1 для загрузки
            const loaderText = document.createElement('p');
            loaderText.textContent = loadText;
            statusBlock.appendChild(loader);
            statusBlock.appendChild(loaderText);  // Исправлено: добавляем текст

            // Отправка данных
            sendData(formBody)
                .then(data => {
                    console.log('Успех:', data);
                    statusBlock.innerHTML = ''; // Очистка анимации
                    statusBlock.textContent = successText; // Просто текст для успеха
                    form.reset();
                    // Очистка классов ошибок/успеха, если нужно
                    formElements.forEach(input => {
                        input.classList.remove('error', 'success');
                    });
                })
                .catch(error => {
                    console.error('Ошибка:', error);
                    statusBlock.innerHTML = ''; // Очистка предыдущего
                    // Создание и добавление анимации ошибки
                    const errorSpinner = document.createElement('div');
                    errorSpinner.className = 'sk-spinner-pulse';  // Анимация #5 для ошибки
                    const errorTextNode = document.createElement('p');
                    errorTextNode.textContent = errorText;
                    statusBlock.appendChild(errorSpinner);
                    statusBlock.appendChild(errorTextNode);
                });
        } else {
            console.log('Валидация не прошла');
        }
    };

    // Обработчик отправки формы
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            submitForm();
        });
    }
};

export default sendForm;