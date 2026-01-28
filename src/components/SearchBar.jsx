import React, { useState } from "react";

function SearchBar({ fetchWeather }) {
  const [city, setCity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim()) {
      fetchWeather(city);
      setCity("");
    }
  };
  return (
    <form className="flex" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter City Name"
        value={city}
        onChange={(e) => {
          setCity(e.target.value);
        }}
        className="flex-1 p-2 border border-zinc-500 rounded-l-lg outline-none border-r-0"
      />
      <button
        className="bg-zinc-500 p-2 hover:bg-zinc-600 cursor-pointer border border-l-0 rounded-r-lg"
        type="submit"
      >
        Search
      </button>
    </form>
  );
}

export default SearchBar;
