import React,{useRef , useState} from 'react';
import {Form, Button ,Alert} from 'react-bootstrap';
import {useAuth} from '../Contexts/AuthContext';
import Fade from 'react-reveal';
import {Link} from 'react-router-dom';


const Signup = () =>{

const emailRef = useRef();
const passwordRef = useRef();
const passwordConfirmRef = useRef();
const {signup} = useAuth();
const [error , setError]=useState("");
const [loading , setLoading]=useState(false);


const handleSubmit= async (e) => {
    e.preventDefault();
    if(passwordRef.current.value !== passwordConfirmRef.current.value){
        return setError('passowrd do not match');
    }
    try{
        setError("");
        setLoading(true)
        await signup(emailRef.current.value , passwordRef.current.value)
    }catch{
        setError("Failed to create an account")
    }
    setLoading(false);
}


    return(

    <div className='signup-wrapper'>
        <Fade>
        <div className='signup-form'>
            <h2 className='text-center mt-2 mb-4'>Sign Up</h2>
            {error && <Alert variant="danger">{error}</Alert>}
            <Form onSubmit={handleSubmit}>
                <Form.Group id="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" ref={emailRef} required />
                </Form.Group>
                <Form.Group id="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" ref={passwordRef} required />
                </Form.Group>
                <Form.Group id="password-confirm">
                    <Form.Label>Password Confirmation</Form.Label>
                    <Form.Control type="password" ref={passwordConfirmRef} required />
                </Form.Group>
                <Button disabled={loading} type="submit" className="w-100">Sign Up</Button>
            </Form>
        </div>
        <div className='w-100 text-center text-white mt-3'>Already have an account?
        <Link className='text-white bold' style={{fontSize:'16px'}} to="/login">Log In</Link> 
        </div>
        </Fade>
    </div>

    )
}
export default Signup;