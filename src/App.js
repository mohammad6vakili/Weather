import React from 'react';
import './index.css';
import Main from './components/Main.jsx'
import Nav from './components/Nav';
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
