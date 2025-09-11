import { animate } from '../modules/helpers';  // Импорт функции animate из helpers.js (путь укажите в зависимости от структуры проекта)

const modal = () => {
    const modal = document.querySelector('.popup');
    const buttons = document.querySelectorAll('.popup-btn');
    const closeBtn = modal.querySelector('.popup-close');
    const modalContent = modal.querySelector('.popup-content');

    function openModal() {
        if (window.innerWidth < 768) {
            // Для мобильных: мгновенное открытие
            modal.style.display = 'flex';
            modal.style.opacity = '1';
            modalContent.style.opacity = '1';
            modalContent.style.transform = 'scale(1)';
        } else {
            // Для десктопа: анимация открытия с помощью animate
            modal.style.display = 'flex';

            animate({
                timing: (t) => t,  // Линейный тайминг
                draw: (progress) => {
                    const opacity = progress;
                    const scale = 0.8 + progress * 0.2;
                    modal.style.backgroundColor = `rgba(0, 0, 0, ${opacity * 0.5})`;
                    modalContent.style.opacity = opacity;
                    modalContent.style.transform = `scale(${scale})`;
                },
                duration: 300
            });
        }
    }

    function closeModal() {
        if (window.innerWidth < 768) {
            // Для мобильных: мгновенное закрытие
            modal.style.display = 'none';
        } else {
            // Для десктопа: анимация закрытия с помощью animate
            animate({
                timing: (t) => t,  // Линейный тайминг
                draw: (progress) => {
                    const opacity = 1 - progress;
                    const scale = 1 - progress * 0.2;
                    modal.style.backgroundColor = `rgba(0, 0, 0, ${opacity * 0.5})`;
                    modalContent.style.opacity = opacity;
                    modalContent.style.transform = `scale(${scale})`;
                },
                duration: 300
            });

            // После завершения анимации скрываем модальное окно
            setTimeout(() => {
                modal.style.display = 'none';
            }, 300);
        }
    }

    buttons.forEach(btn => {
        btn.addEventListener('click', openModal);
    });

    closeBtn.addEventListener('click', closeModal);

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.style.display === 'flex') {
            closeModal();
        }
    });
};
export default modal;