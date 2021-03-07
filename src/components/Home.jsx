import React, { useContext } from "react";
import Fade from "react-reveal";
import Zoom from "react-reveal";
import City from "./City";
import { AppContext } from "../Contexts/AppContext";
import {Spin} from "antd";
import {AuthContext} from "../Contexts/AuthContext";


const Home = () => {

  const {
    queryActive,
    getData,
    query,
    getQuery,
    accessUserLocation
} = useContext(AppContext);

  const {
    currentUser
  }=useContext(AuthContext)

  let homeLoaded = <Spin tip='Loading...' size='large'/>
  if(currentUser){
    homeLoaded = 
    <div className="weather-wrapper mb-5">
      
       {queryActive ? 
        <City />
       : 
       
        <div className="home-wrapper">
          <Zoom>
            <div className="home-anim">
              <i id="home-cloud" className="fa fa-cloud"></i>
              <i id="water-one" className="fa fa-tint"></i>
              <i id="water-two" className="fa fa-tint"></i>
              <i id="water-three" className="fa fa-tint"></i>
              <i id="water-four" className="fa fa-tint"></i>
              <i id="water-five" className="fa fa-tint"></i>
              <i id="water-six" className="fa fa-tint"></i>
              <i id="water-seven" className="fa fa-tint"></i>
              <i id="water-eight" className="fa fa-tint"></i>
              <i id="water-one-one" className="fa fa-tint"></i>
              <i id="water-two-two" className="fa fa-tint"></i>
              <i id="water-three-three" className="fa fa-tint"></i>
              <i id="water-four-four" className="fa fa-tint"></i>
              <i id="water-five-five" className="fa fa-tint"></i>
              <i id="water-six-six" className="fa fa-tint"></i>
              <i id="water-seven-seven" className="fa fa-tint"></i>
              <i id="water-eight-eight" className="fa fa-tint"></i>
            </div>
          </Zoom>
          <Fade bottom>
            <div>
              <div className="home-title">Online Weather</div>
              <div className="home-des">
                <p style={{ fontSize: 18 + "px", textAlign: "center" }}>
                  online weather and optional forecast{" "}
                </p>
                <p style={{ fontSize: 16 + "px", textAlign: "center" }}>
                  save your favorite city on the watchlist
                </p>
              </div>
            </div>
          </Fade>
        </div>
       }
      <Fade top>
        <form className="search-form" onSubmit={getData} autoComplete="off">
          <input
            className="search-box form-control"
            value={query}
            onChange={getQuery}
            type="text"
            placeholder="All Cities around the World"
          />
          <button type="submit" className="search-btn">
            <i className="fa fa-search" />
          </button>
          <div data-toggle="tooltip" title="Your Location" data-placement="top" onClick={accessUserLocation} className='userLoc-weather-btn'>
            <i className="fa fa-map-marker"></i>
          </div>
        </form>
      </Fade>
    </div>
  }


  return (
    <React.Fragment>
      {homeLoaded}
    </React.Fragment>
  );
};
export default Home;
