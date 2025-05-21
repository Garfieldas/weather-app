const saveToStorage = (forecast: Array<object>) => {

    localStorage.setItem('forecast', JSON.stringify(forecast))
}

export default saveToStorage;