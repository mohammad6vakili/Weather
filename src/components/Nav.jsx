import React,{useContext} from 'react';
import {AppContext} from '../AppContext';
import Fade from 'react-reveal';


const Nav=()=>{


    const {
        getData,
        query,
        getQuery,
        openMenu,
        closeMenu,
        menuOpen
    }=useContext(AppContext)

    return(

        <div className='navigation'>

            <Fade left>
                <ul className={menuOpen ? "menu-open" : "menu-closed"}>
                    <li className="menu-item">
                        Home
                    </li>
                    <li className="menu-item">
                        WatchList
                    </li>
                    <li className="menu-item">
                        Git
                    </li>
                    <li className="menu-item">
                        SignUp
                    </li>
                    <li className="menu-item">
                        Login   
                    </li>
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
    )
}
export default Nav;