const timer = (deadline) => {
    const timerHours = document.getElementById('timer-hours');
    const timerMinutes = document.getElementById('timer-minutes');
    const timerSeconds = document.getElementById('timer-seconds');
    
    

    const formatTime = (time) => {
        return time < 10 ? `0${time}` : time;
    };
    
    const getTimeRemaining = () => {
        const dateStop = new Date(deadline).getTime();
        const dateNow = new Date().getTime();
        const timeRemaining = (dateStop - dateNow) / 1000;

        if (timeRemaining <= 0) {
            return { timeRemaining: 0, hours: 0, minutes: 0, seconds: 0 };
        }

        const hours = Math.floor(timeRemaining / 3600);
        const minutes = Math.floor((timeRemaining % 3600) / 60);
        const seconds = Math.floor(timeRemaining % 60);

        return { timeRemaining, hours, minutes, seconds };
    };

    const updateClock = () => {
        const getTime = getTimeRemaining();
        const timerInterval = setInterval(updateClock, 1000);

        timerHours.textContent = formatTime(getTime.hours);
        timerMinutes.textContent = formatTime(getTime.minutes);
        timerSeconds.textContent = formatTime(getTime.seconds);

        if (getTime.timeRemaining <= 0) {
            clearInterval(timerInterval);
        }
    };
    
    if (getTimeRemaining().timeRemaining <= 0) {
        timerHours.textContent = '00';
        timerMinutes.textContent = '00';
        timerSeconds.textContent = '00';
    } else {
        const timerInterval = setInterval(updateClock, 1000);
        timerInterval
    }

    updateClock()
};


export default timer;