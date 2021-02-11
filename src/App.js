import React from 'react';
import './index.css';
import Main from './components/Main.jsx'
import {AppProvider} from './AppContext'; 

const App=()=> {




  return (

    <AppProvider>
    <div className='App'>
        <Main/>
    </div>
    </AppProvider>
  );
}

export default App;
