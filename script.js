const carousel = document.getElementById("carouselImages");
const playPauseBtn = document.getElementById("playBtn");
const leftBtn = document.getElementById("leftBtn");
const rightBtn = document.getElementById("rightBtn");
const playBtnPause = document.getElementById("playBtnPause");
const playBtnPlay = document.getElementById("playBtnPlay");
let carouselInterval = setInterval(carouselScrollRight, 3000);
let carouselIsPlaying = true;
let position = 0;

playBtnPlay.hidden = true;

rightBtn.addEventListener('click', rightBtnClick);
leftBtn.addEventListener('click', leftBtnClick);
playPauseBtn.addEventListener('click', playPause);

function carouselScrollRight() {
    if (position === 4) {
        position = 0;
    } else {
        position++;
    }
    carousel.style.transform = `translate(-${carousel.clientWidth*position}px)`; //ES6 string templating
}

function rightBtnClick () {
    carouselScrollRight();
    pauseCarousel();
}

function carouselScrollLeft() {
    if (position === 0) {
        position = 4;
    } else {
            position--;
    }
    carousel.style.transform = `translate(-${carousel.clientWidth*position}px)`;
}

function leftBtnClick () {
    carouselScrollLeft();
    pauseCarousel();
}

function playCarousel() {
    carouselInterval = setInterval(carouselScrollRight, 2000);
    playBtnPlay.hidden = true;
    playBtnPause.hidden = false;
    carouselIsPlaying = true;
}

function pauseCarousel() {
    clearInterval(carouselInterval);
    playBtnPause.hidden = true;
    playBtnPlay.hidden = false;
    carouselIsPlaying = false;
}

function playPause() {
    if (carouselIsPlaying) {
        pauseCarousel();
    } else {
        playCarousel();
    }
}
