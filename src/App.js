import React, { useContext } from "react";
import "./index.css";
import { AppContext } from "./AppContext";
import Fade from 'react-reveal';
import { BrowserRouter as Router, Switch, Route ,Link} from "react-router-dom";
import Watchlist from "./components/watchlist";
import Home from "./components/Home";

const App = () => {
  const {
    openMenu,
    closeMenu,
    menuOpen
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

              <Link to="signup">
                <li className="menu-item">SignUp</li>
              </Link>

              <Link to="login">
                <li className="menu-item">Login</li>
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
            <div className="register">
              <span className="mr-2">SignUp</span>
              <i className="fa fa-user"></i>
            </div>
          </Fade>
        </div>

        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="watchlist" component={Watchlist} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
