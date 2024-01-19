import React from "react";

const ForecastDay = ({ day, onSelectDay, isSelected }) => {
  const handleClick = () => {
    onSelectDay(day);
  };

  return (
    <div
      className="bg-gray-200 flex flex-col justify-center items-center p-5 rounded-xl cursor-pointer gap-2"
      onClick={handleClick}
    >
      <p>{day.day}</p>

      <div>
        {day.condition === "sunny" && (
          <img
            src="https://cdn-icons-png.flaticon.com/512/979/979585.png"
            alt={day.condition}
            className="h-[50px] w-[50px]"
          />
        )}
        {day.condition === "rainy" && (
          <img
            src="https://png.pngtree.com/png-vector/20201128/ourmid/pngtree-a-few-blue-clouds-and-rain-png-image_2478511.jpg"
            alt={day.condition}
            className="h-[50px] w-[50px]"
          />
        )}
        {day.condition === "cloudy" && (
          <img
            src="https://img.freepik.com/free-psd/cloud-png-isolated-transparent-background_191095-18056.jpg?size=338&ext=jpg&ga=GA1.1.632798143.1705507200&semt=ais"
            alt={day.condition}
            className="h-[50px] w-[50px]"
          />
        )}
        {day.condition === "snowy" && (
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/012/806/416/small/3d-cartoon-weather-icon-snow-clouds-and-snowflakes-sign-isolated-on-transparent-background-3d-render-illustration-png.png"
            alt={day.condition}
            className="h-[50px] w-[50px]"
          />
        )}
      </div>
      <p>High: {day.high}°C</p>
      <p>Low: {day.low}°C</p>
    </div>
  );
};

export default ForecastDay;
