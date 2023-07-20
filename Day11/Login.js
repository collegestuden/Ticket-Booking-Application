import React from 'react'
import { useState,useEffect } from 'react'
import { redirect, useNavigate } from 'react-router-dom'
import './Login.css'
import { useDispatch } from "react-redux";

import { Link } from 'react-router-dom'



const Login = () => {
 const [name,setName]=useState('')
 const [id,setId]=useState('')  
 const [password,setPassword]=useState('')
 const [errors, setErrors] = useState({});
 const[isSubmit,setIsSubmit]=useState(false);
 const navigate =useNavigate();
 const dispatch=useDispatch();

 const handleName=(event)=>{
    event.preventDefault();
    setName(event.target.value)
  }
 
  const handleId=(event)=>{
    event.preventDefault();
    setId(event.target.value)
  }
  const handlePassword=(event)=>{
    event.preventDefault();
    setPassword(event.target.value)
  }
  const handleSubmit=(event)=>{
    event.preventDefault();
    setErrors(validateForm({name,id,password}));
    // setIsSubmit(true);
    if(isSubmit===true){
        navigate('/Home');
    }
    
   
};
  

  const validateForm = (values) => {
    const errors = {};

    if (values.name.trim() === '') {
      errors.name = 'Usename is required';
      setIsSubmit(false);
    }

    else if (values.password.trim() === '') {
      errors.password = 'Password is required';
      setIsSubmit(false);
    } else if (values.password.length < 6) {
      errors.password = 'Password must be at least 6 characters long';
      setIsSubmit(false);
    }
    else{
        setIsSubmit(true)
    }
    return errors;

    // setErrors(errors);
  };

  

  return (
    <>
  
    <div className='login'>
        <form className='login_form' onSubmit={handleSubmit}>
            <h1>Login</h1>
            <div className='gogo'>
            <div className='form-floating mb-3'>
            <label for='nm'>Username</label>
            <br></br>
            <input type='name' className='form-control'
            placeholder='username'
            value={name} id='nm'
            onChange={handleName} />
            </div>
            {errors.name}
            </div>

            <div className='loginbox'>
              <div className="jo">
            <div className='form-floating mb-3'>
            <label for='pwd'>Password</label>
            <input type='password' className='form-control'
            placeholder='password' id='pwd'
            value={password}
            onChange={handlePassword}/>
            </div>
            </div>
            {errors.password && <span>{errors.password}</span>}
            </div>
            
            <button  type='submit' className='btn btn-secondary' style={{background:'black',color:'white',width:180,height:50,margin:40}}>Sign In</button>

        </form>
        <br></br><br></br>
        <h2>Don't have an account? <a href='/SignUp'>SignUp</a></h2>
    </div>
    
    </>
  )
}

export default Login