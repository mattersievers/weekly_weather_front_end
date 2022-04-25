function DayWeather(props){
    let {daily} = props.weatherData;    

    //Gives the string for the day of the week when input Unix time from the weather API
    let dayOfWeek = (day) => {
        const weekdays = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
        var dayNum = new Date(day.dt * 1000).getDay();
        return weekdays[dayNum];
    }

    if(!props){
        return (
            <div>Rendering...</div>
        )
    }
    console.log(daily)
    return (
        <div>
            <div className="day">{dayOfWeek(daily[0])}</div>
            <img src={`http://openweathermap.org/img/wn/${daily[0].weather[0].icon}@2x.png`} />
            <div className="max">{parseInt(daily[0].temp.max)} °  <span className="min">{parseInt(daily[0].temp.min)} ° </span></div>
        </div>
    )
}

export default DayWeather;
