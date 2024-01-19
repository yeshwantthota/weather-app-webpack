import React from "react";

const DayDetails = ({ day }) => {
  return (
    <div className="bg-gray-200 p-5 m-10 rounded-xl">
      <h3 className="p-5 text-lg">{day.day} Hourly Forecast</h3>
      <ul className="">
        {day.hourly.map((hourData, index) => (
          <li key={index}>
            <p>{hourData.time}</p>
            <p>Temperature: {hourData.temperature}°C</p>
            <div>
              {hourData.condition === "sunny" && (
                <img
                  src="https://cdn-icons-png.flaticon.com/512/979/979585.png"
                  alt={day.condition}
                  className="h-[50px] w-[50px]"
                />
              )}
              {hourData.condition === "rainy" && (
                <img
                  src="https://png.pngtree.com/png-vector/20201128/ourmid/pngtree-a-few-blue-clouds-and-rain-png-image_2478511.jpg"
                  alt={day.condition}
                  className="h-[50px] w-[50px]"
                />
              )}
              {hourData.condition === "cloudy" && (
                <img
                  src="https://img.freepik.com/free-psd/cloud-png-isolated-transparent-background_191095-18056.jpg?size=338&ext=jpg&ga=GA1.1.632798143.1705507200&semt=ais"
                  alt={day.condition}
                  className="h-[50px] w-[50px]"
                />
              )}
              {hourData.condition === "snowy" && (
                <img
                  src="https://static.vecteezy.com/system/resources/thumbnails/012/806/416/small/3d-cartoon-weather-icon-snow-clouds-and-snowflakes-sign-isolated-on-transparent-background-3d-render-illustration-png.png"
                  alt={day.condition}
                  className="h-[50px] w-[50px]"
                />
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DayDetails;
