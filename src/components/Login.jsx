import React,{useRef , useState} from 'react';
import {Form, Button ,Alert} from 'react-bootstrap';
import {useAuth} from '../Contexts/AuthContext';
import Fade from 'react-reveal';
import {Link , useHistory} from 'react-router-dom';

const Login = () =>{

const emailRef = useRef();
const passwordRef = useRef();
const {login} = useAuth();
const [error , setError]=useState("");
const [loading , setLoading]=useState(false);
const history = useHistory();


const handleSubmit= async (e) => {
    e.preventDefault();
    try{
        setError("");
        setLoading(true)
        await login(emailRef.current.value , passwordRef.current.value)
        history.push('/');
    }catch{
        setError("Failed to Sign In")
    }
    setLoading(false);
}


    return(

    <div className='signup-wrapper'>
        <Fade>
        <div className='signup-form'>
            <h2 className='text-center mt-2 mb-4'>Log In</h2>
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
                <Button disabled={loading} type="submit" className="w-100">Log In</Button>
            </Form>
        </div>
        <div className='w-100 text-center text-white mt-3'>Need an account? 
        <Link style={{fontSize:'16px'}} className='text-white ml-2' to='signup'>Sign UP</Link>
        </div>
        </Fade>
    </div>

    )
}
export default Login;