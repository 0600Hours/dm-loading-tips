const TIP_DISPLAY_DURATION = 20 * 1000;

const loadRandomTip = () => {
    document.getElementById('tip-content').innerText =
        tipsArray[Math.floor(Math.random() * tipsArray.length)];
}

loadRandomTip();
setInterval(loadRandomTip, TIP_DISPLAY_DURATION);
