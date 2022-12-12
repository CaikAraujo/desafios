const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minsEl = document.getElementById('mins');
const secondsEl = document.getElementById('seconds');
const countdownEL = document.getElementById('countdown');

const newPromotion = '5 jan 2023';

function countdown(){
    
    const newDatePromotion = new Date(newPromotion);
    const currentDate = new Date();

    const totalSeconds = (newDatePromotion - currentDate) / 1000;

    const days = Math.floor(totalSeconds/ 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const mins = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    daysEl.innerHTML = days;
    hoursEl.innerHTML = formatTime(hours);
    minsEl.innerHTML = formatTime(mins);
    secondsEl.innerHTML = formatTime(seconds);


    function formatTime(time){
        countdownEL.innerHTML = `${days}: ${hours}: ${mins}: ${seconds}`
    }

    
}

countdown();
setInterval(countdown, 1000);