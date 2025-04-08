import React from 'react'
import { useState } from 'react';
import './Authentication.css';
import Login from './Login.js';
import Signup from './Signup';

function Authentication() {
  const [ active, setActive ] = useState('login');

  const handleChange = () => {
    setActive(active === 'login' ? 'signup' : 'login')  
  };
     return (
    <div className='authentication'>
     <div className="authentication_left">
      <img src="./images/auth-img.jpg" alt="" />
     </div>
     <div className="authentication_right">
        {/* <Login/> */}
        {active === "login" ? (<Login/>) : (<Signup/>)}
        <div className="auhtentication_more">
        <span>
        {active === 'login' ? 
          (<>Don't have an account?
          <button onClick={handleChange}>Sign Up</button></>) 
          : (<>Have an account?
          <button onClick={handleChange}>Log in</button></>)
        }
        </span>
      </div>
     </div>
    </div>
  )
}
export default Authentication

