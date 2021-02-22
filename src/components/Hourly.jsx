import React,{useContext,useEffect} from 'react';
import {AppContext} from '../AppContext';
import Fade from 'react-reveal';
import {v4 as uuidv4} from 'uuid';


const Hourly =()=>{


    const{
        setShowForecast,
        forecast,
        time
    }=useContext(AppContext)



    return(
        <React.Fragment>
                <div onClick={()=>setShowForecast(0)} className='forecast-close-btn'><i className="fa fa-chevron-up"></i></div>
                    <div className='hourly-wrapper'>
                        <div className='hour-container w-25 border border-primary'>
                            
                        </div>
                        <div className='forecast-container w-75 border border-danger'>
                        {forecast && forecast.hourly.map((item)=>(
                                    <div key={uuidv4()} className='forecast-item'>
                                        <span>{item.temp}</span>
                                    </div>
                        ))}
                        </div>
                    </div>
        </React.Fragment>
    )
}
export default Hourly;