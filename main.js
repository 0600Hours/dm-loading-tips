const TIP_DISPLAY_DURATION = 30 * 1000;

const tipElement = document.getElementById('tip-content');

const loadRandomTip = () => {
    tipElement.classList.remove('fade-in');
    tipElement.classList.add('fade-out');
    setTimeout(() => {
        tipElement.textContent =
            tipsArray[Math.floor(Math.random() * tipsArray.length)];
        tipElement.classList.remove('fade-out');
        tipElement.classList.add('fade-in');
    }, 1000)
    
}

tipElement.textContent =
    tipsArray[Math.floor(Math.random() * tipsArray.length)];
setInterval(loadRandomTip, TIP_DISPLAY_DURATION);
