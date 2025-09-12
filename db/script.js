const dbUrl = 'db.json'; 
const apiUrl = 'https://jsonplaceholder.typicode.com/posts';

getData(dbUrl)
    .then(data => {
        console.log('Полученные данные:', data);
        return sendData(apiUrl, data);
    })
    .then(response => {
        console.log('Ответ от сервера:', response);
    })
    .catch(error => {
        console.error('Общая ошибка:', error);
    });

function getData(url) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);

        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status >= 200 && xhr.status < 300) {
                    try {
                        const data = JSON.parse(xhr.responseText);
                        resolve(data);
                    } catch (e) {
                        reject(new Error('Ошибка парсинга ответа: ' + e.message));
                    }
                } else {
                    reject(new Error(`Ошибка HTTP: ${xhr.status}`));
                }
            }
        };

        xhr.onerror = function () {
            reject(new Error('Ошибка сети или запроса'));
        };

        xhr.send();
    });
}

function sendData(url, data) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open('POST', url, true);
        xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');

        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status >= 200 && xhr.status < 300) {
                    try {
                        const response = JSON.parse(xhr.responseText);
                        resolve(response);
                    } catch (e) {
                        reject(new Error('Ошибка парсинга ответа: ' + e.message));
                    }
                } else {
                    reject(new Error(`Ошибка HTTP: ${xhr.status}`));
                }
            }
        };

        xhr.onerror = function () {
            reject(new Error('Ошибка сети или запроса'));
        };

        xhr.send(JSON.stringify(data));
    });
}