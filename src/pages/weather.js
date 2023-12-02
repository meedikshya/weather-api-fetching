import React from 'react';
import Sky from "../skyimg.webp";
import icon from "../icon.jpg";


export const Weather = ({ city, weather, error, fetchData, handleInput }) => {
    return (
      <div>
        <h2>Weather Page</h2>
        <div className='weatherBg'>
          <img  src={Sky} alt='sky' />
          <h1 className='Head' style={{"marginTop" : "15px", "marginLeft" : "430px"}}> Weather Forecast </h1>
          <input type="text" value={city} onChange={handleInput} className='inputField' />
          <button onClick={fetchData} className='button'> Search </button>
        </div>
        <div className='card'>
          <img src={icon} alt='icon' height="80px" width="120px" className='icon'/>
          <h3 className='component'>
            {weather.name} 
            {weather.main ? <div>{weather.main.temp}F</div> : null} 
          </h3> 
          <h3 className='error'>{error}</h3>
        </div>
      </div>
    );
  };
  
  export default Weather;
