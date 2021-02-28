import React,{useContext} from "react";
import { AppContext } from "../Contexts/AppContext";
import Zoom from 'react-reveal';
import {v4 as uuidv4} from 'uuid';


const Daily = () => {

    const{
        setShowForecast,
        forecast,
        dateDay
    }=useContext(AppContext)

  return (
    <React.Fragment>
      <Zoom>

              <div onClick={() => setShowForecast(0)} className="forecast-close-btn">
                <i className="fa fa-chevron-up"></i>
              </div>

              <div className="daily-wrapper">

                  <div className='daily-forecast-time'>
                  {dateDay && dateDay.map((item)=>(
                    <div key={uuidv4()} className='daily-forecast-time-item'>
                        <span>{item}</span>
                    </div>
                  ))}
                  </div>

                  <div className='daily-forecast-detail'>
                  {forecast && forecast.daily.map((item)=>(
                      <div key={uuidv4()} className='daily-forecast-detail-item'>
                          <div className='daily-forecast-detail-item-left'>
                            <div className='daily-forecast-detail-item-left-MinMax'>
                              <div>
                                <span>{Math.floor(item.temp.max - 273.15)+'°'}<strong style={{fontSize:16+'px'}}>C</strong></span>
                                <span><i className="fa fa-arrow-up text-success mr-2"></i>Max</span>
                              </div>
                              <div>
                                <span>{Math.floor(item.temp.min - 273.15)+'°'}<strong style={{fontSize:16+'px'}}>C</strong></span>
                                <span><i className="fa fa-arrow-down text-danger mr-2"></i>Min</span>
                              </div>
                            </div>
                            <div className='daily-forecast-detail-item-left-DayNight'>
                              <div>
                                <span><i className="fa fa-sun-o mr-2 text-warning"></i>Day</span>
                                <span>{Math.floor(item.temp.day - 273.15)+'°'}<strong style={{fontSize:20+'px'}}>C</strong></span>
                              </div>
                              <div>
                                <span><i className="fa fa-moon-o text-warning"></i>Night</span>
                                <span>{Math.floor(item.temp.night - 273.15)+'°'}<strong style={{fontSize:20+'px'}}>C</strong></span>
                              </div>
                            </div>
                          </div>
                          <div className='daily-forecast-detail-item-right'>
                              <div className='daily-forecast-detail-item-right-des'>
                                <span>{item.weather[0].description}</span>
                                <img style={{width:50+'px'}} src={`http://openweathermap.org/img/w/${item.weather[0].icon}.png`} alt='weather icon'/>
                              </div>
                              <div className='daily-forecast-detail-item-right-wind'>
                                <span>Wind</span>
                                <span>{item.wind_speed}{" "}km/h</span>
                              </div>
                              <div className='daily-forecast-detail-item-right-humidity'>
                                <span>Humidity</span>
                                <span>{item.humidity}{" "}%</span>
                              </div>
                              <div className='daily-forecast-detail-item-right-pressure'>
                                <span>Pressure</span>
                                <span>{item.pressure}{" "}M</span>
                              </div>
                              <div className='daily-forecast-detail-item-right-feelsLike'>
                                <span>Feels like</span>
                                <span>{Math.floor(item.feels_like.day - 273.15)+'°'}<strong style={{fontSize:16+'px'}}>C</strong></span>
                              </div>
                          </div>
                      </div>
                  ))}
                  </div>

              </div>

      </Zoom>
    </React.Fragment>
  );
};
export default Daily;
