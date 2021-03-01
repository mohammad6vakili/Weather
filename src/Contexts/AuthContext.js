import React,{useContext,useState,useEffect } from 'react';
import {auth} from '../Firebase';


const AuthContext = React.createContext();

export function useAuth(){
    return useContext(AuthContext);
}


export const AuthProvider = (props) =>{

    const [currentUser , setCurrentUser]=useState();
    const [loading , setLoading]=useState(true);


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
    }



    


    const value = {
        currentUser,
        signup,
        login,
        logout
    }


    return(
        <AuthContext.Provider value={value}>
            {!loading && props.children}
        </AuthContext.Provider>
    )
}