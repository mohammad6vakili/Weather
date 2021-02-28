import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'antd/dist/antd.css';
import App from './App';
import {AppProvider} from './Contexts/AppContext'; 
import {AuthProvider} from './Contexts/AuthContext';


ReactDOM.render(
    <AppProvider>
      <AuthProvider>
        <App />
      </AuthProvider>
    </AppProvider>,
  document.getElementById('root')
);
