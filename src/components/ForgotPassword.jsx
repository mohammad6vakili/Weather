import React,{useRef , useState , useContext} from 'react';
import {Form, Button } from 'react-bootstrap';
import { AuthContext } from '../Contexts/AuthContext';
import Fade from 'react-reveal';
import {Link , useHistory} from 'react-router-dom';
import Swal from 'sweetalert';
import {message} from "antd";

const ForgotPassword = () =>{

const emailRef = useRef();
const { resetPassword, error ,setError} = useContext(AuthContext);
const [loading , setLoading]=useState(false);
const history = useHistory();


const handleSubmit= async (e) => {
    e.preventDefault();
    try{
    setError("");
    setLoading(true);
    await resetPassword(emailRef.current.value);
    Swal({
        title: "Successful!",
        text: "Reset password link was sent to your email.",
        icon: "success",
        button: history.push('/login'),
      });
    }catch{
        setError("Falied to reset your password");
    }
    setLoading(false);
}

    return(

    <div className='forms-wrapper'>
        <Fade>
        <div className='forms'>
            <h2 className='text-center mt-2 mb-4'>Reset your password</h2>
            {error && message.error(error)}
            <Form onSubmit={handleSubmit}>
                <Form.Group id="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" ref={emailRef} required />
                </Form.Group>
                <Button  disabled={loading} type="submit" className="w-100 mt-4">Reset Password</Button>
            </Form>
        </div>
        <div className='w-100 text-center text-white mt-3'>Need an account? 
        <Link style={{fontSize:'16px'}} className='text-white ' to='signup'>Sign UP</Link>
        </div>
        </Fade>
    </div>

    )
}
export default ForgotPassword;