import React,{useContext} from 'react';
import {AppContext} from '../AppContext';


const Nav=()=>{


    const {
        getData,
        query,
        getQuery
    }=useContext(AppContext)

    return(
        <nav className='navbar navbar-expand-md text-light'>
            <ul className="navbar-nav">
                <li className="nav-item ml-2">
                    Home
                </li>
                <li className="nav-item">
                    Git
                </li>
                <li className="nav-item">
                    Signup
                </li>
                <li className="nav-item">
                    Login
                </li>
            </ul>

            <form className='search-form' onSubmit={getData}>
                <input className='search-box form-control' value={query} onChange={getQuery} type="text" placeholder='All Cities around the World'/>
                <button className='search-btn'><i className="fa fa-search"/></button>
            </form>
        </nav>
    )
}
export default Nav;