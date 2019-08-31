const scrollTop = document.getElementById("scrollTop");
const toTopBtn = document.getElementById("toTopBtn");
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

toTopBtn.addEventListener('click', scrollToTop);
rightBtn.addEventListener('click', rightBtnClick);
leftBtn.addEventListener('click', leftBtnClick);
playPauseBtn.addEventListener('click', playPause);
window.addEventListener('scroll', showToTopBtn);
window.addEventListener('keydown', keyPressCheck);

function showToTopBtn() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        toTopBtn.style.display = "block";
      } else {
        toTopBtn.style.display = "none";
      }
}

function scrollToTop() {
    scrollTop.scrollIntoView({behavior: 'smooth', block: 'end'})
}

function keyPressCheck(event) {
    if (event.keyCode === 37) {
        leftBtnClick();
    } else if (event.keyCode === 39) {
        rightBtnClick();
    } else if (event.keyCode === 32) {
        event.preventDefault();
        playPause();
    }
}

function rightBtnClick() {
    carouselScrollRight();
    pauseCarousel();
}

function leftBtnClick() {
    carouselScrollLeft();
    pauseCarousel();
}

function carouselScrollRight() {
    if (position === 4) {
        position = 0;
    } else {
        position++;
    }
    carousel.style.transform = `translate(-${carousel.clientWidth*position}px)`;
}

function carouselScrollLeft() {
    if (position === 0) {
        position = 4;
    } else {
            position--;
    }
    carousel.style.transform = `translate(-${carousel.clientWidth*position}px)`;
}

function playPause() {
    if (carouselIsPlaying) {
        pauseCarousel();
    } else {
        playCarousel();
    }
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

