import React, { useContext,useEffect } from "react";
import Fade from "react-reveal";
import Zoom from "react-reveal";
import City from "./City";
import { AppContext } from "../Contexts/AppContext";
import { useAuth } from "../Contexts/AuthContext";
import {useHistory} from 'react-router-dom';
import Modal from "react-modal";
import Avatar from '../Assets/images/Male-avatar.png';



const Home = () => {
  const {
    queryActive,
    getData,
    query,
    getQuery,
    profileModal,
    openProfileModal,
    closeProfileModal,
    setProfileModal

} = useContext(AppContext);

const {currentUser , logout} = useAuth();
const history = useHistory();

const handleLogout = async () =>{
    await logout()
    history.push('/login')
    setProfileModal(false);
}

  return (
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
        <form className="search-form" onSubmit={getData} autoComplete="on">
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
        </form>
      </Fade>
      {profileModal && 
        <Modal className="profile-modal" isOpen={true} onRequestClose={closeProfileModal}>
          <div className="w-100 d-flex flex-column align-items-center justify-content-around h-100">
            <img className='avatar-image' src={Avatar} alt="avatar"/>
            <h3 className="w-100 text-center">{currentUser.email}</h3>
            <button onClick={handleLogout} className="btn btn-outline-danger w-100">Log Out</button>
          </div>
        </Modal>
        }
    </div>
  );
};
export default Home;
