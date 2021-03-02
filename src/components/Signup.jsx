import React,{useRef , useState , useContext} from 'react';
import {Form, Button} from 'react-bootstrap';
import {AuthContext} from '../Contexts/AuthContext';
import Fade from 'react-reveal';
import {Link , useHistory} from 'react-router-dom';
import {message} from 'antd';
import swal from 'sweetalert';


const Signup = () =>{

const emailRef = useRef();
const passwordRef = useRef();
const passwordConfirmRef = useRef();
const {signup , error , setError} = useContext(AuthContext);
const [loading , setLoading]=useState(false);
let history = useHistory();


const handleSubmit= async (e) => {
    e.preventDefault();
    if(passwordRef.current.value !== passwordConfirmRef.current.value){
        return setError('passowrd do not match');
    }
    try{
        setError("");
        setLoading(true)
        await signup(emailRef.current.value , passwordRef.current.value)
        swal({
            title: "Done!",
            text: "Your account has created successfuly",
            icon: "success",
            button: history.push('/login'),
          });
    }catch{
        setError("Failed to create an account")
    }
    setLoading(false);
}


    return(

    <div className='forms-wrapper'>
        <Fade>
        <div className='forms'>
            <h2 className='text-center mt-2 mb-4'>Sign Up</h2>
            {error && message.error(error)}
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