import React,{useContext} from 'react';
import Watchlist from './watchlist';
import Home from './Home';
import {BrowserRouter as Router , Switch , Route} from 'react-router-dom';
import {Link} from 'react-router-dom';
import Fade from 'react-reveal';
import {AppContext} from '../AppContext';

const Main=()=>{

    
    const {
        getData,
        query,
        getQuery,
        openMenu,
        closeMenu,
        menuOpen,
    }=useContext(AppContext)


    return(
        <React.Fragment>
                <Router>
                    <div className='navigation'>
                        <Fade left>
                            <ul className={menuOpen ? "menu-open" : "menu-closed"}>
                                
                                <Link to="/"> 
                                <li className="menu-item">
                                    Home
                                </li>
                                </Link>  
                                
                                <Link to='/watchlist'>
                                    <li className="menu-item">
                                        WatchList
                                    </li>
                                </Link>

                                <a className='text-white' href="https://github.com/mohammad6vakili/Weather">
                                    <li className="menu-item">
                                        Git
                                    </li>
                                </a> 
                                
                                <Link to='signup'>
                                    <li className="menu-item">
                                        SignUp
                                    </li>
                                </Link>

                                <Link to='login'>
                                    <li className="menu-item">
                                        Login   
                                    </li>
                                </Link>

                                <button onClick={closeMenu} className='menu-close-button'><i className="fa fa-chevron-left"></i></button>
                            </ul>
                        </Fade>

                        <Fade left>
                        <div className={menuOpen ? "invisible" : "visible"} id='menu-button'>
                            <i onClick={openMenu} style={{fontSize:50+'px',paddingTop:10+'px'}} className="fa fa-bars"></i>
                        </div>
                        </Fade>
                        <Fade top>
                        <form className='search-form' onSubmit={getData}>
                            <input className='search-box form-control' value={query} onChange={getQuery} type="text" placeholder='All Cities around the World'/>
                            <button type='submit' className='search-btn'><i className="fa fa-search"/></button>
                        </form>
                        </Fade>
                        <Fade right>
                        <div className='register'>
                            <span className='mr-2'>SignUp</span><i className="fa fa-user"></i>
                        </div>
                        </Fade>
                    </div>
                    
                    <Switch>
                        <Route path='/' exact component={Home} />
                        <Route path='/watchlist' component={Watchlist}/>

                    </Switch>

                </Router>
        </React.Fragment>        
        )
}
export default Main;