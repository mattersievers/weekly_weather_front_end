export const getWeather = () => {
    return fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=30.2671&lon=-97.7431&exclude=minutely,hourly,alerts&appid=${process.env.REACT_APP_API_TOKEN}`);
}