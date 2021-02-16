import React,{useContext} from 'react';
import Home from './Home';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Watchlist from './watchlist';
import { AppContext } from '../AppContext';




const Main=()=>{

const{
    loadWatchList
}=useContext(AppContext)

    return(
            <Router>
                <main className='main-wrapper'>

            
                        <Home/>
                        <Watchlist/>

                 
                </main>
            </Router>
    )
}
export default Main;