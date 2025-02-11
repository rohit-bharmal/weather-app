import React, { useEffect, useState } from "react";
import "./Weather.css";

const Weather = () => {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const fetchWeatherData = async (city) => {
    try {
      setErrorMessage(""); // Clear previous error
      if (!city) return;
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${
        import.meta.env.VITE_APP_ID
      }`;
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error("City name might be wrong or we might not have data.");
      }

      const weatherData = await response.json();
      setWeather(weatherData);
    } catch (error) {
      setWeather(null);
      setErrorMessage(error.message);
    }
  };

  const handleSearch = () => {
    fetchWeatherData(city);
  };

  const getWeatherIcon = (condition) => {
    if (!condition) return null;
    if (condition.includes("cloud")) {
      return "https://cdn-icons-png.flaticon.com/512/1163/1163624.png";
    } else if (condition.includes("rain")) {
      return "https://cdn-icons-png.flaticon.com/512/1163/1163657.png";
    } else if (condition.includes("clear")) {
      return "https://cdn-icons-png.flaticon.com/512/1163/1163661.png";
    } else if (condition.includes("snow")) {
      return "https://cdn-icons-png.flaticon.com/512/1163/1163666.png";
    }
    return "https://cdn-icons-png.flaticon.com/512/1163/1163653.png"; // Default icon
  };

  return (
    <div className="weather-container">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      {weather && (
        <div className="weather-info">
          <h2>Weather in {weather.name}</h2>
          <p>Temperature: {(weather.main.temp - 273.15).toFixed(2)} °C</p>
          <p>Condition: {weather.weather[0].description}</p>
          <img
            src={getWeatherIcon(weather.weather[0].description)}
            alt={weather.weather[0].description}
            className="weather-icon"
          />
        </div>
      )}
    </div>
  );
};

export default Weather;
