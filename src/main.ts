import showModal from "./showModal";
import closeModal from "./closeModal";

const modal =  document.querySelector('#forecast-modal');
const addForecastBtn = document.querySelector('#add-forecast-btn');
const closeModalBtn = document.querySelector('#close-modal-btn');

addForecastBtn?.addEventListener('click', () => showModal(modal));
closeModalBtn?.addEventListener('click', () => closeModal(modal));