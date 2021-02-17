import React,{useContext , useEffect} from 'react';
import {AppContext} from '../AppContext';
import {v4 as uuidv4} from 'uuid';
import {Popconfirm} from 'antd';



const Watchlist=()=>{


    const{
        showWatchList,
        removeFromWatch,
        cancel,
    }=useContext(AppContext)

    return(
        <div className='watchlist-wrapper'>

            


            {showWatchList.map((city)=>(
                        <div key={uuidv4()} className='watch-city-box mb-3'>
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
                                title="Do you want to delete from Watchlist?"
                                onConfirm={()=>removeFromWatch(city)}
                                onCancel={cancel}
                                okText="Yes"
                                cancelText="No"
                            >
                                <button className='btn btn-outline-danger btn-sm'>Remove from Watchlist</button>
                            </Popconfirm>
                            
                            
                            
                           
                        </div>
                        <div className="city-weather">
                            <div className='border-bottom border-secondary'><h5>Wind</h5><span>{Math.floor(city.wind.speed)}{" "} km/h</span></div>
                            <div className='border-bottom border-secondary'><h5>Humidity</h5><span>{Math.floor(city.main.humidity)}</span></div>
                            <div className='min-max-temp border-bottom border-secondary'>
                                <div className='max-temp justify-content-around'>
                                    <span style={{fontSize:30+'px'}} className='m-0 d-flex align-items-end justify-content-center'><span className='h-75'>{Math.floor(city.main.temp_max - 273.15)+'°'}</span><strong style={{fontSize:18+'px'}}>C</strong></span>
                                    <div className='justify-content-center'>
                                      <i style={{fontSize:28+'px'}} className="fa fa-arrow-up text-success"></i>
                                      <h5 className='pt-2 pl-1'>Max</h5>
                                    </div>
                                </div>
                                <div className='min-temp justify-content-around'>
                                    <span style={{fontSize:30+'px'}} className='m-0 d-flex align-items-end justify-content-center'><span className='h-75'>{Math.floor(city.main.temp_min - 273.15)+'°'}</span><strong style={{fontSize:18+'px'}}>C</strong></span>
                                    <div className='justify-content-center'>
                                      <i style={{fontSize:28+'px'}} className="fa fa-arrow-down text-danger"></i>
                                      <h5 className='pt-2 pl-1'>Min</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            ))}
            
        </div>
    )
}
export default Watchlist;