import React, { useState } from "react";
import WeatherForecast from "./WeatherForecast";

const App = () => {
  const [selectedDay, setSelectedDay] = useState(null);

  const handleDayClick = (day) => {
    setSelectedDay(day);
  };

  return (
    <div className="app">
      <WeatherForecast onSelectDay={handleDayClick} selectedDay={selectedDay} />
    </div>
  );
};

export default App;
