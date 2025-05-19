import axios from 'axios'

const apiCall = () => {

const API_KEY = 'b545f223d084995689161a761876e21e'
const city = 'Kaunas'
const country = 'LT'
const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`;
axios.get(API_URL)
.then(response => console.log(response.data.main.temp))
.catch(error => console.error(error));
}

export default apiCall;