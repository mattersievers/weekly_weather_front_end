function DayWeather(props){
    let {daily} = props.weatherData;    
    let {dayNumber} = props;

    //Gives the string for the day of the week when input Unix time from the weather API
    let dayOfWeek = (day) => {
        const weekdays = ['Sun','Mon','Tues','Wed','Thurs','Fri','Sat']
        var dayNum = new Date(day.dt * 1000).getDay();
        return weekdays[dayNum];
    }

    if(!props){
        return (
            <div>Rendering...</div>
        )
    }

    return (
        <div class="dayContainer">
            <div className="day">{dayOfWeek(daily[dayNumber])}</div>
            <img src={`http://openweathermap.org/img/wn/${daily[dayNumber].weather[0].icon}@2x.png`} alt={daily[dayNumber].weather[0].description}/>
            <div className="maxTemp">{parseInt(daily[dayNumber].temp.max)} °  <span className="minTemp">{parseInt(daily[dayNumber].temp.min)} ° </span></div>
        </div>
    )
}

export default DayWeather;
