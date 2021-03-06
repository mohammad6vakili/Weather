import React, { useContext } from "react";
import "./index.css";
import { AppContext } from "./Contexts/AppContext";
import Fade from 'react-reveal';
import { BrowserRouter as Router, Switch, Route ,Link, useHistory } from "react-router-dom";
import Watchlist from "./components/watchlist";
import Home from "./components/Home";
import Signup from "./components/Signup";
import Login from './components/Login';
import Logo from './Assets/images/Logo.png';
import PrivateRoute from './components/PrivateRoute';
import { AuthContext } from "./Contexts/AuthContext";
import Avatar from './Assets/images/Male-avatar.png';
import Modal from 'react-modal';
import ForgotPassword from "./components/ForgotPassword";
import Zoom from 'react-reveal';
import {message, Popconfirm} from 'antd';


const App = () => {

  const {
    openMenu,
    closeMenu,
    menuOpen,
    openProfileModal,
    profileModal,
    closeProfileModal,
    setProfileModal,
    accessUserLocation
  } = useContext(AppContext);

  const {
    logout,
    currentUser
  }=useContext(AuthContext);

  const handleLogout=()=>{
    logout();
    setProfileModal(false);
  }


  return (
    <Router>
      <div className="App">
        <div className="navigation">
          <Fade left>
            <ul className={menuOpen ? "menu-open" : "menu-closed"}>
              {currentUser &&
              <Fade left>
                <Link to="/">
                  <li className="menu-item">Home</li>
                </Link>
              </Fade>
              }

              {currentUser &&
              <Fade left>
                <Link to="/watchlist">
                  <li className="menu-item">WatchList</li>
                </Link>
              </Fade>
              }

              {currentUser &&
                <Fade left>
                <Link to='/'
                  onClick={accessUserLocation}
                >
                  <li className="menu-item">Current Location</li>
                </Link>
                </Fade>
              }

              {currentUser &&
              <Fade left>
                <a
                className="text-white"
                onClick={currentUser && openProfileModal}
                >
                  <li className="menu-item">Profile</li>
                </a>     
              </Fade>         
              }

              <Link to="/signup">
                <li className="menu-item">Create account</li>
              </Link>

              <a
                className="text-white"
                href="https://github.com/mohammad6vakili/Weather"
              >
                <li className="menu-item">Source</li>
              </a>

                {currentUser && 
                  <Fade left>
                    <Popconfirm
                    title="Do you want to Logout?"
                    onConfirm={handleLogout}
                    okText="Yes"
                    cancelText="No"
                    >                    
                    <Link to="/login">
                      <li className="menu-item text-danger">Log Out</li>
                    </Link>                
                    </Popconfirm>                      
                  </Fade>
                }

              <button onClick={closeMenu} className="menu-close-button">
                <i className="fa fa-chevron-left"></i>
              </button>
            </ul>
          </Fade>

          <Fade left>
            <div
              className={menuOpen ? "invisible" : "visible"}
              id="menu-button"
            >
              <i
                onClick={openMenu}
                style={{ fontSize: 35 + "px", paddingTop: 10 + "px" }}
                className="fa fa-bars"
              ></i>
            </div>
          </Fade>
          <Fade right>
            <div className="logo">
                <img onClick={currentUser && openProfileModal} style={{width:'80px'}} className='mt-4' src={Logo} alt="site logo" />
                {currentUser && <Fade right><span>Profile</span></Fade>}
            </div>
          </Fade>
        </div>

        <Switch>
          <PrivateRoute path="/" component={Home} exact />
          <PrivateRoute path="/watchlist" component={Watchlist} />
          <Route path="/signup" component={Signup}/>
          <Route path="/login" component={Login}/>
          <Route path="/forgot-password" component={ForgotPassword}/>
        </Switch>

        {profileModal && currentUser && 
        <Modal className="profile-modal" isOpen={true} onRequestClose={closeProfileModal}>
        <Zoom top>
          <div className="w-100 d-flex flex-column align-items-center justify-content-around h-100">
            <div className='w-100 pr-4 d-flex justify-content-end'>
              <button className='btn btn-danger btn-md pt-2' onClick={closeProfileModal}>X</button>
            </div>
            <img className='avatar-image' src={Avatar} alt="avatar"/>
            <p id="profile-modal-email" className="w-100 text-center">{currentUser.email}</p>
            <Link onClick={()=>{setProfileModal(false)}} className='w-100' to="/forgot-password"><button className='btn btn-outline-dark w-100'>Reset Password</button></Link>
            <Popconfirm
            title="Do you want to Logout?"
            onConfirm={handleLogout}
            okText="Yes"
            cancelText="No"
            >     
              <button className="btn btn-outline-danger w-100">Log Out</button>
            </Popconfirm>
          </div>
        </Zoom>
        </Modal>
        }
      </div>
    </Router>
  );
};

export default App;
