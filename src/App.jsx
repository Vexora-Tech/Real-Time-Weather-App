import React from "react";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <>
      <div className="flex flex-col min-h-screen justify-center items-center bg-linear-to-br from-blue-200 via-indigo-200 to-purple-200">
        <div className="bg-zinc-800/90 text-white rounded-lg shadow-lg p-8 max-w-md w-full">
          <h1 className="text-3xl font-bold text-center mb-6">Weather App</h1>
          <SearchBar />
        </div>
      </div>
    </>
  );
}

export default App;
