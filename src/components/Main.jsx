import React, { useContext } from 'react';
import {AppContext} from '../AppContext';
import City from './City.jsx';
import Nav from './Nav';
import Watchlist from './watchlist';



const Main=()=>{
    const{
        queryActive
    }=useContext(AppContext)

    return(
        <main className='main-wrapper'>

            <Nav/>
           
            <div className='weather-wrapper'>
                {queryActive && <City/>}
            </div>

            <Watchlist/>

        </main>
    )
}
export default Main;