import React from 'react';
import Home from './Home';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Watchlist from './watchlist';




const Main=()=>{



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