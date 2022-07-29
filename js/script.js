const date = new Date();


function showTime() {
        const date = new Date();

        const currentTime = date.toLocaleTimeString();
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();

        if (hours < 10) hours = "0" + hours;
        if (minutes < 10) minutes = "0" + minutes;
        if (seconds < 10) seconds = "0" + seconds;
        
        const clock = hours + ":" + minutes + ":" + seconds;
        let time = document.querySelector('.time').innerHTML = clock;

        const options = {weekday: 'long',  day: 'numeric', month: 'long'}
        const currentDate = date.toLocaleDateString('en-En', options);

        time = document.querySelector('.date').innerHTML = currentDate;

        setTimeout(showTime, 1000);
}
showTime();

let hours = date.getHours()

function getTimeOfDay() {
    if ((hours / 6) <= 1) {
        return 'night';
    } else if
        ((hours / 6) <= 2) {
            return 'morning'
        } else if
            ((hours / 6) <= 3) {
            return 'afternoon';
        }
            ((hours / 6) <= 4);
            return 'evening';
    }


function showGreeting() {
        getTimeOfDay();
        const timeOfDay = getTimeOfDay();
        const greetingText = `Welcome! Good ${timeOfDay},`;
        document.querySelector('.greeting').innerHTML = greetingText;
        }
showGreeting();



let name = document.querySelector('.name')
function setLocalStorage() {

    localStorage.setItem('savename', name.value);
}
window.addEventListener('beforeunload', setLocalStorage)

function getLocalStorage() {
    if(localStorage.getItem('savename')) {
        name.value = localStorage.getItem('savename');
    }
}
window.addEventListener('load', getLocalStorage)

// NAME LOCAL STORAGE END

// SLIDER BEGIN

function getRandomNum(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
let bgNum = getRandomNum(1, 20).toString().padStart(2, '0')


function setBg() {
    const timeOfDay = getTimeOfDay()
    const body = document.querySelector('body')

    const img = new Image();



    if (timeOfDay == 'morning') {
        img.src = `https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/morning/${bgNum}.jpg`
        img.onload = () => {
        body.style.backgroundImage = "url('" + img.src + "')";
    }}

    if (timeOfDay == 'afternoon') {
        img.src = `https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/afternoon/${bgNum}.jpg`
        img.onload = () => {
        body.style.backgroundImage = "url('" + img.src + "')";
    }}

    if (timeOfDay == 'evening') {
        img.src = `https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/evening/${bgNum}.jpg`
        img.onload = () => {
        body.style.backgroundImage = "url('" + img.src + "')";
    }}

    if (timeOfDay == 'night') {
        img.src = `https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/night/${bgNum}.jpg`
        img.onload = () => {
        body.style.backgroundImage = "url('" + img.src + "')";
    }}
}
setBg();

const slideNext = document.querySelector('.slide-next')
const slidePrev = document.querySelector('.slide-prev')

function getSlideNext() {
    let next = (Number(bgNum) + 1)

    bgNum = next.toString().padStart(2, '0')

    if (next > 20) {
        bgNum = '01'
    }

    setBg()
}
slideNext.addEventListener('click', getSlideNext)

function getSlidePrev() {
    let next = (Number(bgNum) - 1)

    bgNum = next.toString().padStart(2, '0')

    if (next < 1) {
        bgNum = '20'
    }

    setBg()
}
slidePrev.addEventListener('click', getSlidePrev)

// SLIDER END