import React,{useContext} from 'react';
import {AppContext} from '../AppContext';
import {Popconfirm} from 'antd';

const City=()=>{
    
    const{
        city,
        addToWatch,
        cancel,
        getForecast
    }=useContext(AppContext)
    
    return(
    <div className='city-wrapper'>

        <div className='city-box'>
            <div className="city-info">
                <div className='d-flex'>
                    <div className='d-flex flex-column w-50 text-center'>
                        <span className='city-name mr-3'>{city.name}</span>
                        <span style={{fontSize:38+'px'}} className='m-0'>{Math.floor(city.main.temp - 273.15)+'°'}<strong style={{fontSize:18+'px'}}>C</strong></span>
                    </div>
                    <div className='text-center pl-4' style={{width:30+'%'}}>
                        {city.weather.map((weather)=>(
                        <img key={weather.id} className='w-100' src={`http://openweathermap.org/img/w/${weather.icon}.png`} alt='weather icon'/>
                        ))}
                        {city.weather.map((weather)=>(
                        <small key={weather.id}>{weather.main}</small>
                        ))}                        
                    </div>
                    
                </div>
                <small className='mb-3'>{Date()}</small>
                <Popconfirm
                    title="Do you want to add to the Watchlist?"
                    onConfirm={()=>addToWatch(city)}
                    onCancel={cancel}
                    okText="Yes"
                    cancelText="No"
                >
                    <button className='btn btn-sm btn-outline-dark mb-2'>Add to Watchlist</button>
                </Popconfirm>
            </div>
            <div className="city-weather">
                <div className='border-bottom border-secondary'><h5>Wind</h5><span>{Math.floor(city.wind.speed)}{" "} km/h</span></div>
                <div className='border-bottom border-secondary'><h5>Humidity</h5><span>{Math.floor(city.main.humidity)}{" "} %</span></div>
                <div className='border-bottom border-secondary'><h5>Humidity</h5><span>{Math.floor(city.main.pressure)}{" "} M</span></div>
                <div><h5>Feels like</h5><span style={{fontSize:16+'px'}}>{Math.floor(city.main.feels_like - 273.15)+'°'}<strong style={{fontSize:12+'px'}}>C</strong></span></div>
            </div>
        </div>

        <div className='forecast-btns'>
            <button onClick={getForecast} className="forecast-btn">48 hours forecast</button>
            <button onClick={getForecast} className="forecast-btn">7 days forecast</button>
        </div>
    
    </div>
    )
}
export default City;