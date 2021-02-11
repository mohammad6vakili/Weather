import React, { useContext } from 'react';
import {AppContext} from '../AppContext';
import City from './City.jsx';



const Main=()=>{
    const{
        queryActive
    }=useContext(AppContext)

    return(
        <main className='main-wrapper'>
           
            <div className='weather-wrapper'>
                {queryActive && <City/>}
            </div>

        </main>
    )
}
export default Main;