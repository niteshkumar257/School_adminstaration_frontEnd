import React from 'react'
import "./Login.scss"
import img from "../../assest/img3.png";
import image from "../../assest/Img1.png"
import { useState } from 'react'
import axios from 'axios';
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [error,setError]=useState(false);
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const navigate = useNavigate();
  const loginHandler=(e)=>
  {
    e.preventDefault();
    axios.post("http://localhost:8080/user/login", { admin_id: email, password: password }).then((res) => {
      localStorage.setItem("auth_token", res.data.token);
      return navigate("/");
    }).catch((err) => {
      console.log(err.response.data.error);
    })
  }
  return (
    <div>
  <div className='login-container'>
    <div className='main-container'>
      <div className="left-container">
        <div className='content-box'>
        <div className="logo">

        <img className='photo' src={img}></img>
      </div>
     
        </div>
    
      </div>
      <div className="right-container">
                <div className="headerImage">
                  <div>
                  <img src={image}></img>
                  </div>
             <div>
             <span>GW Techies</span>
             </div>
              
                 
                </div>
                <form onSubmit={loginHandler}>
                    <div className="input-container">
                    <label>Email</label>
                     <input type='number' placeholder='enter Your id...' onChange={(e)=>setEmail(e.target.value)}></input>
                    </div>
                   <div className="input-container">
                   <label>Password</label>
                     <input type='password' placeholder='enter Your password...' onChange={(e)=>setPassword(e.target.value)}></input>
                   </div>
                   <div className='button-container'>
                    <button type='submit'>Login</button>
                    <div className='forgotpassword'>
                    {/* <span >forgot password ?</span> */}
                    </div>
                 
                   </div>
                    
                </form>
                {/* <div className='bottom'>
                  <button>Create Account</button>
                  
                </div> */}
            </div>
    </div>
   </div>
    </div>
  )
}

export default Login;
