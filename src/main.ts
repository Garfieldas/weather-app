import showModal from "./showModal";
import closeModal from "./closeModal";
import apiCall from "./api";

const modal =  document.querySelector<HTMLElement>('#forecast-modal');
const modalBackground = document.querySelector('.modal-background');
const addForecastBtn = document.querySelector('#add-forecast-btn');
const closeModalBtn = document.querySelector('#close-modal-btn');

addForecastBtn?.addEventListener('click', () => showModal(modal));
closeModalBtn?.addEventListener('click', () => closeModal(modal));
modalBackground?.addEventListener('click', () => closeModal(modal));

let search = prompt("Please enter city")

if (search !== null){
apiCall(search)
}