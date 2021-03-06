import React,{useContext} from 'react';
import {AppContext} from '../Contexts/AppContext';
import {Popconfirm} from 'antd';
import Fade from 'react-reveal';
import Zoom from 'react-reveal';
import Hourly from './Hourly';
import Daily from './Daily';
import {Spin} from 'antd';


const City=()=>{
    
    const{
        city,
        addToWatch,
        cancel,
        showHourly,
        showDaily,
        showForecast
    }=useContext(AppContext)


    let cityLoaded =<Spin tip='Loading...' size='large'/>

    if(city){
        cityLoaded =
        <div className='city-wrapper'>
        <Zoom clear>
          <div className='city-box'>
              <div className="city-info">
                  <div className='d-flex'>
                      <div className='d-flex flex-column w-75 text-center'>
                          <span className='city-name mr-3'>{city.name}</span>
                          <span className='city-temp m-0'>{Math.floor(city.main.temp - 273.15)+'°'}<strong style={{fontSize:18+'px'}}>C</strong></span>
                      </div>
                      <div className='text-left d-flex flex-column' style={{width:30+'%'}}>
                          {city.weather.map((weather)=>(
                          <img key={weather.id} className='w-50' src={`http://openweathermap.org/img/w/${weather.icon}.png`} alt='weather icon'/>
                          ))}
                          {city.weather.map((weather)=>(
                          <span style={{fontSize:'16px'}} key={weather.id}>{weather.main}</span>
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
                  <div className='border-bottom border-secondary'><span className='city-weather-option'>Wind</span><span>{Math.floor(city.wind.speed)}{" "} km/h</span></div>
                  <div className='border-bottom border-secondary'><span className='city-weather-option'>Humidity</span><span>{Math.floor(city.main.humidity)}{" "} %</span></div>
                  <div className='border-bottom border-secondary'><span className='city-weather-option'>Pressure</span><span>{Math.floor(city.main.pressure)}{" "} M</span></div>
                  <div><span className='city-weather-option'>Feels like</span><span style={{fontSize:16+'px'}}>{Math.floor(city.main.feels_like - 273.15)+'°'}<strong style={{fontSize:12+'px'}}>C</strong></span></div>
              </div>
          </div>
         </Zoom>
          <div className='forecast-btns'>
              <Fade left>
                      <button onClick={showHourly} className="forecast-btn mr-1">48 hours forecast</button>
              </Fade>
              <Fade right>
                      <button onClick={showDaily} className="forecast-btn ml-1">7 days forecast</button>
              </Fade>
          </div>
          
          <div className="forecast-wrapper">
              {showForecast===1 && <Hourly/>}
              {showForecast===2 && <Daily/>}
          </div>
      </div>
    }


    return(
        <React.Fragment>
                {cityLoaded}
        </React.Fragment>
    )
}
export default City;