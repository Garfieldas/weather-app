const removeForecast = (id: string) =>
{
    const forecastCard = document.getElementById(id);
    forecastCard?.remove();
}

export default removeForecast;