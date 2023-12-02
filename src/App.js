import './App.css';
import { useState } from 'react';
import Axios from 'axios';
import Weather from './pages/weather';
import { HashRouter } from 'react-router-dom';

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState({});
  const [error, setError] = useState("");

  const fetchData = () => {
    Axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=69e25e58804f7907341c835ff317549d`)
      .then((res) => {
        setWeather(res.data);
        setError("");
      })
      .catch((error) => {
        setError("Uh-Oh! The city you entered doesn't seem to exist.");
        setWeather("");
      });
  };

  const handleInput = (event) => {
    setCity(event.target.value);
  };

  return (
    <HashRouter> 
    <div className="App">
      <Weather
        city={city}
        weather={weather}
        error={error}
        fetchData={fetchData}
        handleInput={handleInput}
      />
    </div>
    </HashRouter>
    
  );
}

export default App;