import React,{useContext,useEffect} from 'react';
import {AppContext} from '../Contexts/AppContext';
import {v4 as uuidv4} from 'uuid';
import {Popconfirm, Spin} from 'antd';
import Zoom from 'react-reveal';


const Watchlist=()=>{

    const{
        showWatchList,
        removeFromWatch,
        cancel,
        loadWatchList
        }=useContext(AppContext)

        useEffect(()=>{
            loadWatchList();
            },[])

        let watchlistData = <Spin tip='Loading...' size='large'/>
        if(showWatchList){
            watchlistData = 
            <Zoom>
            <div className='watchlist-wrapper'>
                {showWatchList && showWatchList.map((city)=>(
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
                                <div className='watchLater-details'><h5>Wind</h5><span>{Math.floor(city.wind.speed)}{" "} km/h</span></div>
                                <div className='watchLater-details'><h5>Humidity</h5><span>{Math.floor(city.main.humidity)}</span></div>
                                <div className='watchLater-details'><h5>Pressure</h5><span>{Math.floor(city.main.pressure)}{" "}M</span></div>
                                <div className='watchLater-details'><h5>Feels like</h5><span>{Math.floor(city.main.temp - 273.15)+'°'}<strong style={{fontSize:14+'px'}}>C</strong></span></div>
                            </div>
                        </div>
                ))}
        </div>
        </Zoom>
        }

    return(
        <React.Fragment>
            {watchlistData}
        </React.Fragment>
    )
}
export default Watchlist;