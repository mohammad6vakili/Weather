import React from 'react';
import './index.css';
import Nav from './components/Nav.jsx';
import Main from './components/Main.jsx'
import {AppProvider} from './AppContext'; 

const App=()=> {




  return (

    <AppProvider>
    <div className='App'>
        <Nav/>
        <Main/>
    </div>
    </AppProvider>
  );
}

export default App;
