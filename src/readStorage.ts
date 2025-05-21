const readStorage = () => {

       const storedForecasts = localStorage.getItem('forecast');
       if (storedForecasts){
            const forecastData = JSON.parse(storedForecasts);
            return forecastData;
       }
}

export default readStorage;