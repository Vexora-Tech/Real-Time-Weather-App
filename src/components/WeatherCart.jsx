import React from "react";

function WeatherCart({ weather }) {
  return (
    <>
      <div className="mt-6">
        <h2 className="text-2xl text-center">
          {weather.name}, {weather.sys.country}
        </h2>
        <div className="flex justify-center items-center mt-4">
          <img
            src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
            alt={weather.weather[0].description}
            className="w-16 h-16"
          />
          <p className="text-4xl font-semibold">
            {Math.round(weather.main.temp)}°C
          </p>
        </div>
        <p className="text-center text-zinc-500/90 capitalize">
          {weather.weather[0].description}
        </p>
        <div className="grid grid-cols-2 gap-4 mt-6">
          <div className="text-center">
            <p className="text-zinc-400">Humidity</p>
            <p className="font-medium">{weather.main.humidity} %</p>
          </div>
          <div className="text-center">
            <p className="text-zinc-400">Wind</p>
            <p className="font-medium">{weather.wind.speed} m/s</p>
          </div>
          <div className="text-center">
            <p className="text-zinc-400">Pressure</p>
            <p className="font-medium">{weather.main.pressure} hpa</p>
          </div>
          <div className="text-center">
            <p className="text-zinc-400">Feels Like</p>
            <p className="font-medium">
              {Math.round(weather.main.feels_like)}°C
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default WeatherCart;
