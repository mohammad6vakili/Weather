import React from 'react';
import './index.css';
import Nav from './components/Nav.jsx';
import Main from './components/Main.jsx'
import {AppProvider} from './AppContext'; 

const App=()=> {




  return (

    <AppProvider>
    <div className='App'>
        <i class="fa fa-cloud cloud"></i>
        <i className="fa fa-tint water-one"></i>
        <i className="fa fa-tint water-two"></i>
        <i className="fa fa-tint water-three"></i>
        <i className="fa fa-tint water-four"></i>
        <i className="fa fa-tint water-five"></i>
        <i className="fa fa-tint water-six"></i>

        <Nav/>
        <Main/>
    </div>
    </AppProvider>
  );
}

export default App;
