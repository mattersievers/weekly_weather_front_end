import React, { useEffect, useState } from "react";
import DayWeather from "./components/DayWeather";
import { getWeather } from "./utils/API";
import './App.css';

function App() {
  const [weatherData, setWeatherData] = useState();
  const dayNumbers = [0,1,2,3,4];
  
  useEffect( () => {
    getWeather()
    .then(response =>
      response.json()
      .then((data) =>
        setWeatherData(data)
      )
    );
  }, [])

  if(!weatherData){
    return (
      <div>Loading...</div>
    )
  }
  return (
    <div className="App">
      <div className="weatherContainer">
        {dayNumbers.map((dayNumber,i) => {
          return(
            <div className={`weatherDayContainer${i}`}>
              <DayWeather
              weatherData = {weatherData}
              dayNumber = {dayNumber}
              /> 
            </div>   
          )
        })}
      </div>    
    </div>
  );
}

export default App;
