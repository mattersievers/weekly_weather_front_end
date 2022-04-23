import React, { useEffect, useState } from "react";
import DayWeather from "./components/DayWeather";
import { getWeather } from "./utils/API";
import './App.css';

function App() {
  const [weatherData, setWeatherData] = useState();
  
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
    <DayWeather
    weatherData = {weatherData}
    />
    </div>
  );
}

export default App;
