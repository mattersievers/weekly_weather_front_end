import React, { useEffect, useState } from "react";
import DayWeather from "./components/DayWeather";
import { getWeather } from "./utils/API";
import './App.css';

function App() {
  const [daily, setDaily] = useState();
  
  useEffect( () => {
    getWeather()
    .then(response =>
      response.json()
      .then(daily =>
        setDaily(daily)
      )
    );
  }, [])

  if(!daily){
    return (
      <div>Loading...</div>
    )
  }
  return (
    <div className="App">
    <DayWeather
    daily = {daily}
    />
    </div>
  );
}

export default App;
