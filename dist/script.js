/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/playList.js":
/*!****************************!*\
  !*** ./src/js/playList.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const playList = [{
  title: 'Aqua Caelestis',
  src: '../src/sounds/Aqua Caelestis.mp3',
  duration: '00:39'
}, {
  title: 'River Flows In You',
  src: '../src/sounds/River Flows In You.mp3',
  duration: '01:37'
}, {
  title: 'Ennio Morricone',
  src: '../src/sounds/Ennio Morricone.mp3',
  duration: '01:37'
}, {
  title: 'Summer Wind',
  src: '../src/sounds/Summer Wind.mp3',
  duration: '01:50'
}];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (playList);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_js_playList_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/js/playList.js */ "./src/js/playList.js");
// date and time
if (!localStorage.getItem('lang')) {
  localStorage.setItem('lang', 'en');
}
;
if (!localStorage.getItem('photoSourse')) {
  localStorage.setItem('photoSourse', 'github');
}
;
if (!localStorage.getItem('blocks')) {
  localStorage.setItem('blocks', 'time,date,greeting,quote,weather,audio,links');
}
const timeElem = document.querySelector('.time');
const dateElem = document.querySelector('.date');
showTime();
function showTime() {
  const date = new Date();
  const currentTime = date.toLocaleTimeString();
  timeElem.textContent = currentTime;
  showDate();
  setTimeout(showTime, 1000);
}
function showDate() {
  const date = new Date();
  const options = {
    weekday: 'long',
    month: 'long',
    day: 'numeric'
  };
  let langArea = localStorage.getItem('lang') === 'ru' ? 'ru-RU' : 'en-US';
  const currentDate = date.toLocaleDateString(langArea, options);
  dateElem.textContent = currentDate;
}

// greeting

const greetingContainer = document.querySelector('.greeting-container');
const greeting = greetingContainer.querySelector('.greeting');
showGreeting();
function showGreeting() {
  if (localStorage.getItem('lang') === 'ru') {
    greeting.textContent = getTimeOfDayRu();
  } else {
    const timeOfDay = getTimeOfDay();
    greeting.textContent = `Good ${timeOfDay},`;
  }
}
function getTimeOfDay() {
  const date = new Date();
  const hours = date.getHours();
  if (hours >= 6 && hours < 12) {
    return 'morning';
  } else if (hours >= 12 && hours < 18) {
    return 'afternoon';
  } else if (hours >= 18 && hours <= 23) {
    return 'evening';
  } else {
    return 'night';
  }
}
;
function getTimeOfDayRu() {
  const date = new Date();
  const hours = date.getHours();
  if (hours >= 6 && hours < 12) {
    return 'Доброе утро,';
  } else if (hours >= 12 && hours < 18) {
    return 'Добрый день,';
  } else if (hours >= 18 && hours <= 23) {
    return 'Добрый вечер,';
  } else {
    return 'Доброй ночи';
  }
}

// localStorage

const name = greetingContainer.querySelector('.name');
window.addEventListener('beforeunload', setNameLocalStorage);
window.addEventListener('load', getNameLocalStorage);
function setNameLocalStorage() {
  localStorage.setItem('name', name.value);
}
;
function getNameLocalStorage() {
  if (localStorage.getItem('name')) {
    name.value = localStorage.getItem('name');
  }
}

// background-slider
const body = document.querySelector('body');
let rundomNum = getRundomNum(20, 1);
function setBg() {
  const img = new Image();
  const imgURL = 'https://raw.githubusercontent.com/kuljeanne/stage1-tasks/assets/images/';
  let timeOfDay = getTimeOfDay();
  let bgNum = rundomNum.toString().padStart(2, '0');
  img.src = `${imgURL}${timeOfDay}/${bgNum}.jpg`;
  img.onload = () => {
    body.style.backgroundImage = `url(${img.src})`;
  };
}
function getRundomNum(max, min) {
  let number = Math.floor(Math.random() * (max - min + 1) + min);
  return number;
}
const slidePrev = body.querySelector('.slide-prev');
const slideNext = body.querySelector('.slide-next');
function getSlidePrev() {
  rundomNum--;
  if (rundomNum < 1) {
    rundomNum = 20;
  }
  setBg();
}
;
function getSlideNext() {
  if (localStorage.getItem('photoSourse') === 'unsplash') {
    changeSourseUnsplash();
  } else if (localStorage.getItem('photoSourse') === 'flickr') {
    changeSourseFlickr();
  } else {
    rundomNum++;
    if (rundomNum > 20) {
      rundomNum = 1;
    }
    setBg();
  }
}
;
slidePrev.addEventListener('click', getSlidePrev);
slideNext.addEventListener('click', getSlideNext);
changeBackgroundAPI();
function changeBackgroundAPI() {
  if (localStorage.getItem('photoSourse') === 'unsplash') {
    changeSourseUnsplash();
  } else if (localStorage.getItem('photoSourse') === 'flickr') {
    changeSourseFlickr();
  } else {
    setBg();
  }
}
;
async function changeSourseUnsplash() {
  const img = new Image();
  let tag = document.querySelector('#tag').value ? document.querySelector('#tag').value : getTimeOfDay();
  let url = `https://api.unsplash.com/photos/random?orientation=landscape&query=${tag}&client_id=8fg8aQ8yLdG18_c91M1RIF_f1CtnxmhlO625pT61igA`;
  let res = await fetch(url);
  let data = await res.json();
  img.src = `${data.urls.regular}`;
  img.onload = () => {
    body.style.backgroundImage = `url(${img.src})`;
  };
}
;
async function changeSourseFlickr() {
  const img = new Image();
  let tag = document.querySelector('#tag').value ? document.querySelector('#tag').value : getTimeOfDay();
  let url = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=cbb779b4af280f2b223288bae40b36f7&tags=${tag}&extras=url_l&format=json&nojsoncallback=1`;
  let res = await fetch(url);
  let data = await res.json();
  let num = getRundomNum(data.photos.photo.length, 1);
  img.src = `${data.photos.photo[num].url_l}`;
  img.onload = () => {
    body.style.backgroundImage = `url(${img.src})`;
  };
}
;

// weather
const weatherIcon = body.querySelector('.weather-icon');
const temperature = body.querySelector('.temperature');
const weatherDescription = body.querySelector('.weather-description');
const windSpeed = body.querySelector('.wind');
const humidity = body.querySelector('.humidity');
const cityName = body.querySelector('.city');
cityName.value = 'Minsk';
window.addEventListener('beforeunload', setCityLocalStorage);
window.addEventListener('load', getCityLocalStorage);
function setCityLocalStorage() {
  localStorage.setItem('city', cityName.value);
}
;
function getCityLocalStorage() {
  if (localStorage.getItem('city')) {
    cityName.value = localStorage.getItem('city');
  }
  ;
}
;
getWeather();
async function getWeather() {
  getCityLocalStorage();
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName.value}&lang=${localStorage.getItem("lang")}&appid=6adf52378471885747632e28adc308bf&units=metric`;
  const res = await fetch(url);
  const data = await res.json();
  const errorWeather = body.querySelector('.weather-error');
  if (data.cod === 200) {
    weatherIcon.className = 'weather-icon owf';
    weatherIcon.classList.add(`owf-${data.weather[0].id}`);
    temperature.textContent = `${Math.round(data.main.temp)}°C`;
    weatherDescription.textContent = data.weather[0].description;
    if (localStorage.getItem("lang") === 'ru') {
      windSpeed.textContent = `Ветер: ${Math.round(data.wind.speed)} м/с`;
      humidity.textContent = `Влажность: ${Math.round(data.main.humidity)} %`;
    } else {
      windSpeed.textContent = `Wind speed: ${Math.round(data.wind.speed)} m/s`;
      humidity.textContent = `Humidity: ${Math.round(data.main.humidity)} %`;
    }
    errorWeather.textContent = "";
    weatherIcon.style.visibility = 'visible';
  } else {
    errorWeather.textContent = `Error! ${data.message} for "${cityName.value}"`;
    weatherIcon.style.visibility = 'hidden';
    temperature.textContent = "";
    weatherDescription.textContent = "";
    windSpeed.textContent = '';
    humidity.textContent = '';
  }
}
;
cityName.addEventListener('change', () => {
  setCityLocalStorage();
  getWeather();
});

//quotes

const quote = body.querySelector('.quote');
const author = body.querySelector('.author');
const changeQuoteBtn = body.querySelector('.change-quote');
getQuotes();
async function getQuotes() {
  const quotes = `../src/data/quotes-${localStorage.getItem("lang")}.json`;
  const res = await fetch(quotes);
  const data = await res.json();
  let quoteNumber = getRundomNum(19, 0);
  quote.textContent = `"${data[quoteNumber].text}"`;
  author.textContent = data[quoteNumber].author;
}
changeQuoteBtn.addEventListener('click', getQuotes);

// audio


const playBtn = body.querySelector('.play');
const playNextBtn = body.querySelector('.play-next');
const playPrevBtn = body.querySelector('.play-prev');
const playListContainer = body.querySelector('.play-list');
const audio = new Audio();
audio.src = _src_js_playList_js__WEBPACK_IMPORTED_MODULE_0__["default"][0].src;
audio.addEventListener('loadeddata', () => {
  const nameSong = body.querySelector('.song-title');
  nameSong.textContent = _src_js_playList_js__WEBPACK_IMPORTED_MODULE_0__["default"][playNum].title;
  const length = body.querySelector('.length');
  length.textContent = getTimeCode(audio.duration);
  body.querySelector('.current').textContent = getTimeCode(audio.currentTime);
  audio.volume = 0.75;
});
const progressBar = body.querySelector('.progress-bar');
progressBar.addEventListener('click', function (event) {
  const timelineWidth = window.getComputedStyle(progressBar).width;
  const timeToSeek = event.offsetX / parseInt(timelineWidth) * audio.duration;
  audio.currentTime = timeToSeek;
});
function getTimeCode(num) {
  let seconds = parseInt(num);
  let minutes = parseInt(seconds / 60);
  seconds -= minutes * 60;
  return `${minutes}:${String(seconds % 60).padStart(2, 0)}`;
}
;
let isPlay = false;
let playNum = 0;
playBtn.addEventListener('click', toggleAudio);
playNextBtn.addEventListener('click', playNext);
playPrevBtn.addEventListener('click', playPrev);
function toggleAudio() {
  playBtn.classList.toggle('pause');
  if (!isPlay) {
    playAudio();
  } else {
    pauseAudio();
  }
}
;
function playAudio() {
  audio.src = _src_js_playList_js__WEBPACK_IMPORTED_MODULE_0__["default"][playNum].src;
  audio.play();
  isPlay = true;
  playListContainer.children[playNum].classList.toggle('play-item__active');
}
;
function pauseAudio() {
  audio.pause();
  isPlay = false;
  playListContainer.children[playNum].classList.toggle('play-item__active');
}
;
function playNext() {
  playListContainer.children[playNum].classList.toggle('play-item__active');
  playNum++;
  if (playNum > 3) {
    playNum = 0;
  }
  ;
  playAudio();
}
;
function playPrev() {
  playListContainer.children[playNum].classList.toggle('play-item__active');
  playNum--;
  if (playNum < 0) {
    playNum = 3;
  }
  ;
  playAudio();
}
;
_src_js_playList_js__WEBPACK_IMPORTED_MODULE_0__["default"].forEach(elem => createPlayItem(elem));
function createPlayItem(elem) {
  const li = document.createElement('li');
  li.classList.add('play-item');
  li.textContent = elem.title;
  playListContainer.append(li);
}
;
playListContainer.addEventListener('click', function (event) {
  if (isPlay) {
    playListContainer.children[playNum].classList.toggle('play-item__active');
  } else {
    playBtn.classList.toggle('pause');
  }
  ;
  const list = playListContainer.querySelectorAll('li');
  let target = event.target;
  playNum = [].indexOf.call(list, event.target);
  playAudio();
});
setInterval(() => {
  const progressBar = body.querySelector('.progress-length');
  progressBar.style.width = audio.currentTime / audio.duration * 100 + "%";
  body.querySelector('.current').textContent = getTimeCode(audio.currentTime);
}, 500);
const volumeBtn = body.querySelector('.volume-button');
volumeBtn.addEventListener('click', () => {
  if (!audio.muted) {
    audio.muted = true;
    volumeBtn.classList.remove('volume-button_on');
    volumeBtn.classList.add('volume-button_off');
    body.querySelector(".volume-percentage").style.width = 0;
  } else {
    audio.muted = false;
    volumeBtn.classList.add('volume-button_on');
    volumeBtn.classList.remove('volume-button_off');
    body.querySelector(".volume-percentage").style.width = audio.volume * 100 + '%';
  }
});
const volumeSlider = body.querySelector(".volume-slider");
volumeSlider.addEventListener('click', function (event) {
  const sliderWidth = window.getComputedStyle(volumeSlider).width;
  const newVolume = event.offsetX / parseInt(sliderWidth);
  audio.volume = newVolume;
  body.querySelector(".volume-percentage").style.width = newVolume * 100 + '%';
});
audio.addEventListener('ended', () => {
  playListContainer.children[playNum].classList.toggle('play-item__active');
  playNum++;
  if (playNum > 3) {
    playNum = 0;
  }
  ;
  playAudio();
});

//settings

const settingsBlock = body.querySelector('.settings');
const settingsBtn = settingsBlock.querySelector('.settings-btn');
const settingsMenu = settingsBlock.querySelector('.settings-menu');
settingsBtn.addEventListener('click', () => {
  settingsMenu.classList.toggle('settings-menu__hidden');
});
window.addEventListener('click', event => {
  let target = event.target;
  if (!target.closest('.settings') || target.className === 'apply-btn') {
    settingsMenu.classList.add('settings-menu__hidden');
  }
});
const photoSources = settingsMenu.querySelectorAll('.choose-photoSourse input');
const tagBlock = settingsMenu.querySelector('.choose-tag');
photoSources.forEach(source => {
  source.addEventListener('change', () => {
    if (source.value !== 'github') {
      tagBlock.classList.remove('choose-tag__hidden');
    } else {
      tagBlock.classList.add('choose-tag__hidden');
    }
  });
});
window.addEventListener('load', () => {
  if (settingsMenu.querySelector('#github').hasAttribute('checked')) {
    tagBlock.classList.add('choose-tag__hidden');
  } else {
    tagBlock.classList.remove('choose-tag__hidden');
  }
});
const settings = {};
settingsMenu.addEventListener('submit', event => {
  event.preventDefault();
  const formData = new FormData(settingsMenu);
  settings.lang = formData.get('lang');
  settings.photoSourse = formData.get('photoSource');
  settings.tags = formData.get('tag');
  settings.blocks = [];
  for (const [key, value] of formData) {
    if (value === 'on') {
      settings.blocks.push(key);
    }
  }
  ;
  for (const [key, value] of Object.entries(settings)) {
    localStorage.setItem(key, value);
  }
  ;
  showGreeting();
  getWeather();
  getQuotes();
  changeBackgroundAPI();
  changeSettingsLanguage();
  getSavedSettings();
  hideBlocks();
  showBlocks();
});
changeSettingsLanguage();
function changeSettingsLanguage() {
  if (localStorage.getItem('lang') === 'ru') {
    settingsMenu.querySelector('h4').textContent = 'Настройки:';
    settingsMenu.querySelector('.language_title').textContent = 'Язык:';
    settingsMenu.querySelector('.photo-source_title').textContent = 'Источник фона:';
    settingsMenu.querySelector('.shown-blocks_title').textContent = 'Отображать блоки:';
    settingsMenu.querySelector('.apply-btn').textContent = 'Применить';
    settingsMenu.querySelector('.tag_label').textContent = 'Тэг';
    settingsMenu.querySelector('.time_label').textContent = 'Время';
    settingsMenu.querySelector('.date_label').textContent = 'Дата';
    settingsMenu.querySelector('.greetings_label').textContent = 'Приветствие';
    settingsMenu.querySelector('.quote_label').textContent = 'Цитата';
    settingsMenu.querySelector('.weather_label').textContent = 'Погода';
    settingsMenu.querySelector('.audio_label').textContent = 'Аудио';
    settingsMenu.querySelector('.link_label').textContent = 'Ссылки';
    document.querySelector('.name').placeholder = '[Введите имя]';
    document.querySelector('.create-link').textContent = '+ Новая ссылка';
    document.querySelector('.create-btn').textContent = 'Создать';
  } else {
    settingsMenu.querySelector('h4').textContent = 'Settings';
    settingsMenu.querySelector('.language_title').textContent = 'Language:';
    settingsMenu.querySelector('.photo-source_title').textContent = 'Photo source:';
    settingsMenu.querySelector('.shown-blocks_title').textContent = 'Show bloks:';
    settingsMenu.querySelector('.apply-btn').textContent = 'Apply';
    settingsMenu.querySelector('.tag_label').textContent = 'Tag';
    settingsMenu.querySelector('.time_label').textContent = 'Time';
    settingsMenu.querySelector('.date_label').textContent = 'Date';
    settingsMenu.querySelector('.greetings_label').textContent = 'Greeting';
    settingsMenu.querySelector('.quote_label').textContent = 'Quote';
    settingsMenu.querySelector('.weather_label').textContent = 'Weather';
    settingsMenu.querySelector('.audio_label').textContent = 'Audio-player';
    settingsMenu.querySelector('.link_label').textContent = 'Links';
    document.querySelector('.name').placeholder = '[Enter your name]';
    document.querySelector('.create-link').textContent = '+ New link';
    document.querySelector('.create-btn').textContent = 'Create';
  }
  ;
}
;
let hiddenElements = [];
let shownElements;
getSavedSettings();
function getSavedSettings() {
  if (localStorage.getItem('lang') === 'ru') {
    settingsMenu.querySelector('#ru-lang').setAttribute('checked', 'checked');
  }
  ;
  if (localStorage.getItem('photoSourse') === 'unsplash') {
    settingsMenu.querySelector('#unsplash').setAttribute('checked', 'checked');
  } else if (localStorage.getItem('photoSourse') === 'flickr') {
    settingsMenu.querySelector('#flickr').setAttribute('checked', 'checked');
  } else if (localStorage.getItem('photoSourse') === 'github') {
    settingsMenu.querySelector('#github').setAttribute('checked', 'checked');
  }
  ;
  if (localStorage.getItem('tags')) {
    settingsMenu.querySelector('#tag').value = localStorage.getItem('tags');
  }
  ;
  const shownBlocks = settingsMenu.querySelector('.choose-shownBlocks');
  const checkedBlocks = localStorage.getItem('blocks').split(',');
  shownElements = checkedBlocks;
  checkedBlocks.forEach(item => {
    if (item) {
      shownBlocks.querySelector(`#${item}`).setAttribute('checked', 'checked');
    }
  });
  let uncheckedBlocks = shownBlocks.querySelectorAll('input');
  uncheckedBlocks = [].map.call(uncheckedBlocks, item => item.id);
  uncheckedBlocks = uncheckedBlocks.filter(item => !checkedBlocks.includes(item));
  hiddenElements = [];
  uncheckedBlocks.forEach(item => {
    shownBlocks.querySelector(`#${item}`).removeAttribute('checked');
    hiddenElements.push(item);
  });
}
;

//links

const linkBtn = document.querySelector('.links_btn');
const linksContainer = document.querySelector('.links_container');
const formCreateLink = linksContainer.querySelector('.link-creation');
linkBtn.addEventListener('click', () => {
  const sparrow = document.querySelector('.sparrow');
  sparrow.classList.toggle('links_container__hidden');
  linksContainer.classList.toggle('links_container__hidden');
});
window.addEventListener('click', event => {
  let target = event.target;
  if (!target.closest('.links') && !linksContainer.classList.contains('links_container__hidden')) {
    linksContainer.classList.add('links_container__hidden');
    document.querySelector('.sparrow').classList.add('links_container__hidden');
  }
});
const createLinkBtn = linksContainer.querySelector('.create-link');
createLinkBtn.addEventListener('click', () => {
  formCreateLink.style.transform = 'translate(-220px)';
});
const arrowBack = linksContainer.querySelector('.back');
arrowBack.addEventListener('click', () => {
  formCreateLink.style.transform = 'translate(220px)';
});
formCreateLink.addEventListener('submit', event => {
  event.preventDefault();
  const formData = new FormData(formCreateLink);
  const linkName = formData.get('link-name');
  const linkURL = formData.get('link-url');
  createLink(linkName, linkURL);
  formCreateLink.style.transform = 'translate(220px)';
});
function createLink(name, url) {
  const a = document.createElement('a');
  a.textContent = name;
  a.href = url;
  const li = document.createElement('li');
  const img = document.createElement('img');
  img.src = '../src/svg/link-pointer.svg';
  img.alt = 'my-link';
  li.append(img);
  li.append(a);
  li.classList.add('opt-link');
  linksContainer.querySelector('.link-list').append(li);
}
;

// hide blocks

hideBlocks();
showBlocks();
function hideBlocks() {
  hiddenElements.forEach(item => {
    let hidden = document.querySelector(`div[data-block='${item}']`);
    hidden.classList.add('block__hidden');
  });
}
;
function showBlocks() {
  shownElements.forEach(item => {
    let shown = document.querySelector(`div[data-block='${item}']`);
    shown.classList.remove('block__hidden');
  });
}
const search = document.querySelector('.google_search');
search.addEventListener('submit', event => {
  event.preventDefault();
  location.href = `https://www.google.com/search?q=${search.querySelector('#link').value}`;
});
})();

// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
/*!**************************!*\
  !*** ./styles/style.css ***!
  \**************************/
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin

})();

/******/ })()
;
//# sourceMappingURL=script.js.map