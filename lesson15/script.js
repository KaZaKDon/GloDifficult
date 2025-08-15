'use strict'

function DomElement(selector, height, width, bg, fontSize) {
            this.selector = selector;
            this.height = height;
            this.width = width;
            this.bg = bg;
            this.fontSize = fontSize;

            this.createElement = function(text) {
                let element;

                if (this.selector.startsWith('.')) {
                    element = document.createElement('div');
                    element.className = this.selector.slice(1);
                } else if (this.selector.startsWith('#')) {
                    element = document.createElement('p');
                    element.id = this.selector.slice(1);
                } else {
                    console.error('Неверный селектор');
                    return;
                }

                element.style.cssText = `
                    height: ${this.height};
                    width: ${this.width};
                    background: ${this.bg};
                    position: absolute; /* Задаем позицию absolute */
                    font-size: ${this.fontSize};
                `;

                element.textContent = text;
                document.body.appendChild(element);
                return element; // Возвращаем созданный элемент
            };
        }

        document.addEventListener('DOMContentLoaded', () => {
            const square = new DomElement('.square', '100px', '100px', 'red', '16px');
            const squareElement = square.createElement(''); // Создаем квадрат

            let posX = 0;
            let posY = 0;

            // Обработчик события keydown
            document.addEventListener('keydown', (event) => {
                switch (event.key) {
                    case 'ArrowUp':
                        posY -= 10;
                        break;
                    case 'ArrowDown':
                        posY += 10;
                        break;
                    case 'ArrowLeft':
                        posX -= 10;
                        break;
                    case 'ArrowRight':
                        posX += 10;
                        break;
                }
                // Обновляем позицию квадрата
                squareElement.style.transform = `translate(${posX}px, ${posY}px)`;
            });
        });