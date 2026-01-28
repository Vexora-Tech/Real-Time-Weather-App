import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import axios from "axios";
import WeatherCart from "./components/WeatherCart";

function App() {
  const [Weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const API_KEY = import.meta.env.VITE_API_KEY;
  const API_URL = `https://api.openweathermap.org/data/2.5/weather`;

  const fetchWeather = async (city) => {
    setLoading(true);
    setError("");

    try {
      const url = `${API_URL}?q=${city}&units=metric&appid=${API_KEY}`;
      const response = await axios.get(url);
      console.log(response.data);
      setWeather(response.data);
    } catch (err) {
      if (err.response && err.response.status === 404) {
        setError("city not found. please try again");
      } else {
        setError("An error occured please try again later");
      }
      setWeather(null);
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <div className="flex flex-col min-h-screen justify-center items-center bg-linear-to-br from-blue-200 via-indigo-200 to-purple-200">
        <div className="bg-zinc-800/90 text-white rounded-lg shadow-lg p-8 max-w-md w-full">
          <h1 className="text-3xl font-bold text-center mb-6">Weather App</h1>
          <SearchBar fetchWeather={fetchWeather} />
          {Weather && <WeatherCart Weather={Weather} />}
        </div>
      </div>
    </>
  );
}

export default App;
