import React, { useContext } from "react";
import "./index.css";
import { AppContext } from "./Contexts/AppContext";
import Fade from 'react-reveal';
import { BrowserRouter as Router, Switch, Route ,Link } from "react-router-dom";
import Watchlist from "./components/watchlist";
import Home from "./components/Home";
import Signup from "./components/Signup";
import Login from './components/Login';
import Logo from './Assets/images/Logo.png';
import PrivateRoute from './components/PrivateRoute';


const App = () => {
  const {
    openMenu,
    closeMenu,
    menuOpen,
    openProfileModal,
  } = useContext(AppContext);


  return (
    <Router>
      <div className="App">
        <div className="navigation">
          <Fade left>
            <ul className={menuOpen ? "menu-open" : "menu-closed"}>
              <Link to="/">
                <li className="menu-item">Home</li>
              </Link>

              <Link to="/watchlist">
                <li className="menu-item">WatchList</li>
              </Link>

              <a
                className="text-white"
                href="https://github.com/mohammad6vakili/Weather"
              >
                <li className="menu-item">Git</li>
              </a>

              <Link to="/signup">
                <li className="menu-item">Create account</li>
              </Link>


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
                style={{ fontSize: 50 + "px", paddingTop: 10 + "px" }}
                className="fa fa-bars"
              ></i>
            </div>
          </Fade>
          <Fade right>
            <div className="logo">
                <img onClick={openProfileModal} style={{width:'80px'}} className='mt-4' src={Logo} alt="site logo" />
            </div>
          </Fade>
        </div>

        <Switch>
          <PrivateRoute path="/" component={Home} exact />
          <PrivateRoute path="/watchlist" component={Watchlist} />
          <Route path="/signup" component={Signup}/>
          <Route path="/login" component={Login}/>
        </Switch>


      </div>
    </Router>
  );
};

export default App;
