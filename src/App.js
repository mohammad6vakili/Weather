import React from 'react';
import './index.css';
import {AppProvider} from './AppContext'; 
import Main from './components/Main';

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
