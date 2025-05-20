import showModal from "./showModal";
import closeModal from "./closeModal";
import apiCall from "./api";
import renderWeather from "./renderWeather";

const modal =  document.querySelector<HTMLElement>('#forecast-modal');
const modalBackground = document.querySelector('.modal-background');
const addForecastBtn = document.querySelector('#add-forecast-btn');
const closeModalBtn = document.querySelector('#close-modal-btn');
const forecastSearchInput = document.querySelector<HTMLInputElement>('#forecast-search-input');
const searchForecastBtn = document.querySelector('#search-forecast-btn');

addForecastBtn?.addEventListener('click', () => showModal(modal));
closeModalBtn?.addEventListener('click', () => closeModal(modal));
modalBackground?.addEventListener('click', () => closeModal(modal));

searchForecastBtn?.addEventListener('click', async () => {
    const search = forecastSearchInput?.value;
    if (search) {
        const weather = await apiCall(search);
        if (weather) {
        closeModal(modal);
        console.log(weather);
        renderWeather(weather);
        forecastSearchInput.value = '';
    }
    }
})