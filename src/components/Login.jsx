import React,{useRef ,useEffect, useState , useContext} from 'react';
import {Form, Button } from 'react-bootstrap';
import { useAuth } from '../Contexts/AuthContext';
import Fade from 'react-reveal';
import {Link , useHistory} from 'react-router-dom';


const Login = () =>{

const emailRef = useRef();
const passwordRef = useRef();
const {login , currentUser} = useAuth();
const [error , setError]=useState("");
const [loading , setLoading]=useState(false);
const history = useHistory();

useEffect(() => {
console.log(currentUser);
}, []);

const handleSubmit= async (e) => {
    e.preventDefault();
    try{
    setError("")
    setLoading(true)
    await login(emailRef.current.value , passwordRef.current.value)
    history.push('/')
    }catch{
        setError("Falied to log in")
    }
    setLoading(false);
}


    return(

    <div className='forms-wrapper'>
        <Fade>
        <div className='forms'>
            <h2 className='text-center mt-2 mb-4'>Log In</h2>
            {error && alert(error)}
            <Form onSubmit={handleSubmit}>
                <Form.Group id="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" ref={emailRef} required />
                </Form.Group>
                <Form.Group id="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" ref={passwordRef} required />
                </Form.Group>
                <Button disabled={loading} type="submit" className="w-100">Log In</Button>
            </Form>
        </div>
        <div className='w-100 text-center text-white mt-3'>Need an account? 
        <Link style={{fontSize:'16px'}} className='text-white ' to='signup'>Sign UP</Link>
        </div>
        </Fade>
    </div>

    )
}
export default Login;