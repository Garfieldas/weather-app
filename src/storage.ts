const saveToStorage = (forecast: Array<object>) => {

    localStorage.setItem('forecast', JSON.stringify(forecast))
}

const readStorage = () => {

       const storedForecasts = localStorage.getItem('forecast');
       if (storedForecasts){
            const forecastData = JSON.parse(storedForecasts);
            return forecastData;
       }
}

export {saveToStorage, readStorage};