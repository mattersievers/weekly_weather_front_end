//lat and lon are hardcoded for Austin. This can be changed
const lat = '30.2671';
const lon = '-97.7431';

export const getWeather = () => {
    return fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=imperial&exclude=minutely,hourly,alerts&appid=${process.env.REACT_APP_API_TOKEN}`);
}