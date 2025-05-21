const readStorage = () => {

       const storedForecasts = localStorage.getItem('forecast');
       if (storedForecasts){
            const forecastData = JSON.parse(storedForecasts);
            return forecastData;
       }
       console.log('No records stored in local storage');
}

export default readStorage;