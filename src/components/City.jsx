import React,{useContext} from 'react';
import {AppContext} from '../AppContext';

const City=()=>{
    
    const{
        city,
    }=useContext(AppContext)
    
    return(
        <div className='city-box'>
            <div className="city-info">
                <div className='d-flex'>
                    <div className='d-flex flex-column w-50 text-center'>
                        <span className='city-name mr-3'>{city.name}</span>
                        <span style={{fontSize:38+'px'}} className='m-0'>{Math.floor(city.main.temp - 273.15)+'°'}<strong style={{fontSize:18+'px'}}>C</strong></span>
                    </div>
                    <div className='text-center pl-4' style={{width:30+'%'}}>
                        {city.weather.map((weather)=>(
                        <img className='w-100' src={`http://openweathermap.org/img/w/${weather.icon}.png`}/>
                        ))}
                        {city.weather.map((weather)=>(
                        <small>{weather.main}</small>
                        ))}                        
                    </div>
                    
                </div>
                <small className='mb-3'>{Date()}</small>
                <button className='btn btn-sm btn-outline-dark mb-2'>Add to Watchlist</button>
            </div>
            <div className="city-weather">
                <div><h5>Wind</h5><span>{Math.floor(city.wind.speed)}{" "} km/h</span></div>
                <div><h5>Humidity</h5><span>{Math.floor(city.main.humidity)}</span></div>
                <div>{city.weather.map((weather)=>(
                    <span key={weather.id}>{weather.main}</span>
                ))}</div>
            </div>
        </div>
    )
}
export default City;