import React,{useContext} from "react";
import { AppContext } from "../AppContext";
import Fade from 'react-reveal';

const Daily = () => {

    const{
        setShowForecast,
    }=useContext(AppContext)

  return (
    <Fade bottom>
        <div className="daily-wrapper">
            <div onClick={() => setShowForecast(0)} className="forecast-close-btn"><i className="fa fa-chevron-up"></i></div>
        </div>
    </Fade>
  );
};
export default Daily;
