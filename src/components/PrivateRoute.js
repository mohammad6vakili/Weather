import React,{useContext} from 'react';
import {Route,Redirect} from 'react-router-dom';
import {AuthContext} from '../Contexts/AuthContext';

const PrivateRoute = ({component:Component , ...rest}) =>{

    const {currentUser , isLogged } = useContext(AuthContext);

    return(
        <Route
            {...rest}
            render={props=>{
                return currentUser  ? <Component {...props}/> : !isLogged && <Redirect to="/login"/>      
            }}
        >
        </Route>
    )
}
export default PrivateRoute;