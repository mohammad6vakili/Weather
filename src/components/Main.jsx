import React, { useContext , Suspense } from 'react';
import {AppContext} from '../AppContext';
import City from './City.jsx';
import Nav from './Nav';
import Watchlist from './watchlist';
import Home from './Home';



const Main=()=>{
    const{
        queryActive
    }=useContext(AppContext)


    return(
        <main className='main-wrapper'>

            <Nav/>
           
            <div className='weather-wrapper mb-5'>
                {queryActive ? <City/> :<Home/>}
            </div>

            <Watchlist/>


        </main>
    )
}
export default Main;