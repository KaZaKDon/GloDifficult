const modal = () => {
    const modal = document.querySelector('.popup');
    const buttons = document.querySelectorAll('.popup-btn');
    const closeBtn = modal.querySelector('.popup-close');
    const modalContent = modal.querySelector('.popup-content');


    function openModal() {

        if (window.innerWidth < 768) {
            modal.style.display = 'flex';
            modal.style.opacity = '1';
            modalContent.style.opacity = '1';
            modalContent.style.transform = 'scale(1)';
        } else {
            modal.style.display = 'flex';
            
            let startTime = null;
            const duration = 300;
            
            function step(timestamp) {
                if (!startTime) startTime = timestamp;
                const progress = Math.min((timestamp - startTime) / duration, 1);
                
                const opacity = progress;
                const scale = 0.8 + progress * 0.2;
                
                modal.style.backgroundColor = `rgba(0, 0, 0, ${opacity * 0.5})`;
                modalContent.style.opacity = opacity;
                modalContent.style.transform = `scale(${scale})`;
                
                if (progress < 1) {
                    requestAnimationFrame(step);
                }
            }
            
            requestAnimationFrame(step);
        }
    }


    function closeModal() {
        // Проверка ширины экрана
        if (window.innerWidth < 768) {
            modal.style.display = 'none';
        } else {
            let startTime = null;
            const duration = 300;
            
            function step(timestamp) {
                if (!startTime) startTime = timestamp;
                const progress = Math.min((timestamp - startTime) / duration, 1);
                
                const opacity = 1 - progress;
                const scale = 1 - progress * 0.2;
                
                modal.style.backgroundColor = `rgba(0, 0, 0, ${opacity * 0.5})`;
                modalContent.style.opacity = opacity;
                modalContent.style.transform = `scale(${scale})`;
                
                if (progress < 1) {
                    requestAnimationFrame(step);
                } else {
                    modal.style.display = 'none';
                }
            }
            
            requestAnimationFrame(step);
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
}

export default modal