export const getWeather = () => {
    return fetch('https://api.openweathermap.org/data/2.5/onecall?lat=30.2671&lon=-97.7431&exclude=minutely,hourly,alerts&appid=7f80221f91a53d141aab8c00828a5be0');
}