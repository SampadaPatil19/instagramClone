import React, { useState } from 'react'
import './Login.css'
function Login() {
  const [email , setEmail] = useState("");
  const [password , setPassword] = useState("");

  return (
    <div className='login'>
      <img src="./images/applogo.jpg" alt="" />
      <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder='Enter email' value={email}/>
      <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder='Enter password' value={password}/>
      <button>Login</button>
    </div>
  )
}

export default Login;
