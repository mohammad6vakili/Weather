import React,{useContext,useEffect} from 'react';
import {AppContext} from '../AppContext';
import {v4 as uuidv4} from 'uuid';
import WindImage from '../Assets/images/wind-solid.svg';
import WindStatus from '../Assets/images/cloud-sun-solid.svg';
import Humidity from '../Assets/images/water-solid.svg';
import Zoom from 'react-reveal';


const Hourly =()=>{


    const{
        setShowForecast,
        forecast,
        time
    }=useContext(AppContext)



    return(
        <React.Fragment>
            <Zoom>
                <div onClick={()=>setShowForecast(0)} className='forecast-close-btn'><i className="fa fa-chevron-up"></i></div>
                    <div className='hourly-wrapper'>
                        <div className='time-wrapper'>
                            <div className='time-item border-bottom-0 mb-5' style={{backgroundColor:'rgb(240, 238, 238)'}}>
                                <span className='forecast-title'>Time</span>
                                <i style={{fontSize:36+'px'}} className="fa fa-clock-o"></i>
                            </div>
                            {time.map((item)=>(
                                <div className='time-item text-secondary ' key={uuidv4()}><span style={{fontSize:22+'px',fontWeight:900,color:'slategrey'}}>{item}</span></div>
                            ))}
                        </div>
                        <div className='forecast-container'>
                            <div className='forecast-item border-bottom-0 mb-5'>
                                <div>
                                    <span className='forecast-title'>Temp</span>
                                    <i style={{fontSize:36+'px'}} className="fa fa-thermometer-half"></i>
                                </div>
                                <div>
                                    <span className='forecast-title'>Description</span>
                                    <img style={{width:30+'px'}} src={WindStatus} alt="wind description"/>
                                </div>
                                <div>
                                    <span className='forecast-title'>Wind</span>
                                    <img style={{width:30+'px'}} src={WindImage} alt="wind image"/>
                                </div>
                                <div>
                                    <span className='forecast-title'>Humidity</span>
                                    <img style={{width:30+'px'}} src={Humidity} alt="humidity"/>
                                </div>
                            </div>
                            {forecast && forecast.hourly.map((item)=>(
                                    <div key={uuidv4()} id='forecast-item' className='forecast-item text-secondary'>
                                        <div>
                                            <span>{Math.floor(item.temp - 273.15)+'°'}<strong style={{fontSize:16+'px'}}>C</strong></span>
                                        </div>
                                        <div>
                                            <span>{item.weather[0].description}
                                                <img style={{width:30+'px'}} src={`http://openweathermap.org/img/w/${item.weather[0].icon}.png`} alt='weather icon'/>
                                            </span>
                                        </div>
                                        <div>
                                            <span>{Math.floor(item.wind_speed)}{" "} km/h</span>    
                                        </div>
                                        <div>
                                            <span>{item.humidity} {" "} %</span>
                                        </div>
                                    </div>
                            ))}
                        </div>
                    </div>
                    </Zoom>
        </React.Fragment>
    )
}
export default Hourly;