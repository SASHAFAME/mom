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
    console.log(bgNum)
    setBg()
}
slideNext.addEventListener('click', getSlideNext)

function getSlidePrev() {
    let next = (Number(bgNum) - 1)

    bgNum = next.toString().padStart(2, '0')

    if (next < 1) {
        bgNum = '20'
    }
    console.log(bgNum)
    setBg()
}
slidePrev.addEventListener('click', getSlidePrev)

// SLIDER END

// WEATHER START
const city = document.querySelector('.city');
async function getWeather() {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&lang=en&appid=f35bea9bca3e8ae10cf9816c3942ee16&units=metric`
    const res = await fetch(url);
    const data = await res.json();

    console.log(res)
    if (res.ok == false) {
        weatherDescription.textContent = 'City not found';
        temperature.textContent = ``
        wind.textContent = ``;
        humidity.textContent = ``
    }


    weatherIcon.className = 'weather-icon owf';
    weatherIcon.classList.add(`owf-${data.weather[0].id}`)
    
    temperature.textContent = `${Math.round(data.main.temp)} °C`
    weatherDescription.textContent = `${data.weather[0].description}`;
    wind.textContent = `Speed: ${Math.round(data.wind.speed)} m/s`;
    humidity.textContent = `Relative humidity: ${data.main.humidity}%`



}


let weatherCity = document.querySelector('.city')
function setWeatherLocalStorage() {

    localStorage.setItem('weather', weatherCity.value);
}
window.addEventListener('beforeunload', setWeatherLocalStorage)

function getWeatherLocalStorage() {
    if(localStorage.getItem('weather')) {
        weatherCity.value = localStorage.getItem('weather');
        getWeather()
    }
}
window.addEventListener('load', getWeatherLocalStorage)

const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature');
const weatherDescription = document.querySelector('.weather-description');
const wind = document.querySelector('.wind')
const humidity = document.querySelector('.humidity')


city.addEventListener('change', getWeather)


  
  document.addEventListener('DOMContentLoaded', getWeather);

//   WEATHER END

// QUOTE OF THE DAY START

const quote = document.querySelector('.quote')
const author = document.querySelector('.author')

async function getQuotes() {
    function getRandomQuote(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    let quoteNum = getRandomQuote(0, 7).toString()

    const quotes = 'data.json';
    const res = await fetch(quotes);
    const data = await res.json();
    author.textContent = data[quoteNum].author
    quote.textContent = data[quoteNum].text
}
getQuotes()


const changerQuote = document.querySelector('.change-quote')

changerQuote.addEventListener('click', getQuotes)

// QUOTE OF THE DAY END

// AUDIO START

let isPlay = false;

const audio = document.querySelector('audio');
const playPrev = document.querySelector('.play-prev')
const playNext = document.querySelector('.play-next')
const play = document.querySelector('.play')

function playAudio() {

    if (isPlay === false) {
    audio.currentTime = 0;
    audio.play();
    isPlay = true;
    play.classList.add('pause')

    console.log(isPlay)
} else if (isPlay === true) {
    audio.pause();
    isPlay = false;
    play.classList.remove('pause')

    console.log(isPlay)

}}

play.addEventListener('click', playAudio)

let playNum = 0

function playNextSound() {
    playNum = playNum+1
    if (playNum > 5) {
        playNum = 0
    }
    audio.src = playList[playNum].src;
    console.log(playNum)

    if (isPlay === true) {
        audio.pause();
        audio.play();
    }
    isPlay = true;
    play.classList.add('pause')
    audio.play();
}

function playPrevSound() {
    playNum = playNum-1
    if (playNum < 0) {
        playNum = 5
    }
    audio.src = playList[playNum].src;
    console.log(playNum)

    if (isPlay === true) {
        audio.pause();
        audio.play();
    }
    isPlay = true;
    play.classList.add('pause')
    audio.play();
}

playNext.addEventListener('click', playNextSound)
playPrev.addEventListener('click', playPrevSound)

import playList from './playList.js';
console.log(playList);


const li = document.createElement('li');
const playListUl = document.querySelector('.play-list')
li.classList.add('play-item')

async function playListFunc() {
    const listAudio = 'playList.js'
    const res = fetch(listAudio)
    const data = await res.json()
    playListUl.textContent = data[playNum].title;

}
playListFunc()
// AUDIO END
