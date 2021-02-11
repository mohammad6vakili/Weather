import React,{useContext} from 'react';
import {AppContext} from '../AppContext';

const City=()=>{
    
    const{
        city,
    }=useContext(AppContext)
    
    return(
        <div className='city-box'>
            <div className="city-info">
                <span className='city-name mr-3'>{city.name}</span>
                <span style={{fontSize:38+'px'}} className='m-0'>{Math.floor(city.main.temp - 273.15)+'°'}<strong style={{fontSize:18+'px'}}>C</strong></span>
                <small>{Date()}</small>
                <button className='btn btn-sm btn-outline-dark'>Add to Watchlist</button>
            </div>
            <div className="city-weather">
                <div><h5>Wind</h5><span>{Math.floor(city.wind.speed)}{" "} km/h</span></div>
                <div><h5>Humidity</h5><span>{Math.floor(city.main.humidity)}</span></div>
            </div>
        </div>
    )
}
export default City;