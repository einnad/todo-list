import "./Weather.css";
import React, { useEffect, useState } from "react";
import axios from "axios";

function Weather() {
  const [area, setArea] = useState("");
  const [weather, setWeather] = useState(null);

  async function getData() {
    try {
      const coords = await axios.get(
        `http://api.openweathermap.org/geo/1.0/direct?q=${area}&appid=d01e6dbcbfb1d4dabbe6fd3c216ab180`
      );

      console.log(coords.data);
      const { lat, lon } = coords.data[0];

      const result = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=d01e6dbcbfb1d4dabbe6fd3c216ab180`
      );
      console.log(result);
      setWeather(result.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  function handleInput(e) {
    setArea(e.target.value);
  }

  function handleWeather(e) {
    e.preventDefault();
    getData();
  }

  return (
    <div className="weather-container">
      <div className="weather">
        <form onSubmit={handleWeather}>
          <input
            type="text"
            placeholder="Enter location"
            value={area}
            onChange={handleInput}
          />
          <button type="submit">Check Weather</button>
        </form>

        {weather ? (
          <>
            <h2>
              {weather.name}, {weather.sys.country}
            </h2>
            <p>{weather.main.temp}°C</p>
            <p>{weather.weather[0].description}</p>
            <p>Feels like : {weather.main.feels_like}°C</p>
            <p>Humidity : {weather.main.humidity}%</p>
            <p>Wind Speed : {weather.wind.speed}m/s</p>
          </>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default Weather;
