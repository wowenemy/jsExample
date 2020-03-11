function animateNumber(elem, endNumber, inter, steps) {
    let element = document.querySelector(`.${elem}`);

    if (+element.innerHTML === endNumber) return false;

    let startCount = +element.innerHTML;
    let delay = Math.round(inter / (endNumber / steps));

    let interval = setInterval(() => {
        startCount += steps;

        if (startCount > endNumber) startCount = endNumber;

        if (startCount == endNumber) clearInterval(interval);

        element.innerHTML = startCount;
    }, delay);
}

function srollNumberAnimation(elem, endNumber, inter, steps, defaultNumber) {
    let element = document.querySelector(`.${elem}`);
    let onTop = (element.getBoundingClientRect().y + (element.offsetHeight * 0.5)) - document.documentElement.clientHeight;
    let onBottom = (element.getBoundingClientRect().y + element.offsetHeight);

    if (onTop < 0 && onBottom > 0) {
        animateNumber(elem, endNumber, inter, steps)
    }
    else {
        element.innerHTML = defaultNumber;
    };
}

window.addEventListener('scroll', () => srollNumberAnimation('count', 100, 3000, 4, 0));




