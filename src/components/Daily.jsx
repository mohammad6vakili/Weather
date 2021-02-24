import React,{useContext} from "react";
import { AppContext } from "../AppContext";
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
                  {/* {forecast && forecast.daily.map((item)=>(
                    <div className='daily-forecast-detail-item'>
                      <span>{item.sunrise}</span>
                    </div>
                  ))} */}
                  </div>

              </div>

      </Zoom>
    </React.Fragment>
  );
};
export default Daily;
