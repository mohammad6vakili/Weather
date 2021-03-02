import React,{useState,useEffect } from 'react';
import {auth} from '../Server';


export const AuthContext = React.createContext();


export const AuthProvider = (props) =>{

    const [currentUser , setCurrentUser]=useState();
    const [loading , setLoading]=useState(true);
    const [isLogged , setIsLogged]=useState(false);
    const [error , setError]=useState("");


    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user=>{
            setCurrentUser(user)
            setLoading(false);
        })
        return unsubscribe
        }, [])

    const signup =(email , password)=>{
        auth.createUserWithEmailAndPassword(email , password)
    }

    const login =(email,password)=>{
        auth.signInWithEmailAndPassword(email,password)
    }

    const logout = () => {
        auth.signOut();
        setIsLogged(false)
    }

    const resetPassword=(email)=>{
        auth.sendPasswordResetEmail(email)
    }


    


    const value = {
        currentUser,
        signup,
        login,
        logout,
        isLogged,
        setIsLogged,
        error,
        setError,
        resetPassword
    }


    return(
        <AuthContext.Provider value={value}>
            {!loading && props.children}
        </AuthContext.Provider>
    )
}