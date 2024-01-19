import React from 'react';
import ForecastDay from './ForecastDay';
import DayDetails from './DayDetails';

const WeatherForecast = ({ onSelectDay, selectedDay }) => {
  const forecastData = [
    {
      day: 'Monday',
      high: 25,
      low: 15,
      condition: 'sunny',
      hourly: [
        { time: '8 AM', temperature: 20, condition: 'sunny' },
        { time: '12 PM', temperature: 22, condition: 'sunny' },
        { time: '4 PM', temperature: 24, condition: 'rainy' },
      ],
    },
    {
      day: 'Tuesday',
      high: 22,
      low: 14,
      condition: 'rainy',
      hourly: [
        { time: '8 AM', temperature: 16, condition: 'rainy' },
        { time: '12 PM', temperature: 18, condition: 'sunny' },
        { time: '4 PM', temperature: 20, condition: 'rainy' },
      ],
    },
    {
      day: 'Wednesday',
      high: 23,
      low: 15,
      condition: 'cloudy',
      hourly: [
        { time: '8 AM', temperature: 16, condition: 'sunny' },
        { time: '12 PM', temperature: 18, condition: 'sunny' },
        { time: '4 PM', temperature: 20, condition: 'rainy' },
      ],
    },
    {
      day: 'Thrusday',
      high: 26,
      low: 15,
      condition: 'sunny',
      hourly: [
        { time: '8 AM', temperature: 16, condition: 'rainy' },
        { time: '12 PM', temperature: 18, condition: 'sunny' },
        { time: '4 PM', temperature: 20, condition: 'sunny' },
      ],
    },
    {
      day: 'Friday',
      high: 22,
      low: 15,
      condition: 'cloudy',
      hourly: [
        { time: '8 AM', temperature: 16, condition: 'rainy' },
        { time: '12 PM', temperature: 18, condition: 'sunny' },
        { time: '4 PM', temperature: 20, condition: 'sunny' },
      ],
    }
  ];


  return (
    <div className="flex flex-col justify-center items-center mb-5">
      <h2 className='m-5 text-xl'>5-Day Weather Forecast</h2>
      <div className="flex gap-10">
        {forecastData.map((day, index) => (
          <ForecastDay
            key={index}
            day={day}
            onSelectDay={onSelectDay}
            isSelected={selectedDay === day}
          />
        ))}
      </div>
      {selectedDay && <DayDetails day={selectedDay} />}
    </div>
  );
};

export default WeatherForecast;
