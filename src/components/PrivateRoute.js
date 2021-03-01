import React from 'react';
import {Route,Redirect} from 'react-router-dom';
import {useAuth} from '../Contexts/AuthContext';

const PrivateRoute = ({component:Component , ...rest}) =>{

    const {currentUser, loading} = useAuth();

    return(
        <Route
        {...rest}
        render={props=>{
            return currentUser ? <Component {...props}/> : <Redirect to="/login"/> 
        }}
        >

        </Route>
    )
}
export default PrivateRoute;