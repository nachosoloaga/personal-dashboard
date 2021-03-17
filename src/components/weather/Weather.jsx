import React, { useEffect, useState } from 'react';
import './weather.css';

const initialWeatherData = {
  name: '',
  weather: [{ main: '' }],
  main: {
    temp: '',
    humidity: '',
    pressure: '',
  },
};

const avgPressure = 1013.25;

const Weather = () => {
  const [weatherData, setWeatherData] = useState(initialWeatherData);

  useEffect(() => {
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=La%20Plata&appid=482d8db2329aeedaf85bba7c32cfc25c&units=metric`
    )
      .then((res) => res.json())
      .then((data) => {
        setWeatherData(data);
      })
      .catch(console.log('Error fetching weather data'));
  }, []);

  return (
    <div className="container">
      <img
        src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
        alt="Weather icon"
        className="weather-icon"
      />
      <h1 className="weather-text weather-title">{weatherData.name}</h1>
      <h3 className="weather-text">{weatherData.weather[0].main}</h3>
      <h3 className="weather-text">{`Temperatura: ${weatherData.main.temp} C`}</h3>
      <h3 className="weather-text">{`Humedad: ${weatherData.main.humidity}`}</h3>
      <h3 className="weather-text">{`Presion: ${weatherData.main.pressure} (${
        weatherData.main.pressure < avgPressure ? 'Baja' : 'Alta'
      })`}</h3>
    </div>
  );
};

export default Weather;
