import React, { useState } from 'react'
import './login.css';
import {BiSolidUserRectangle} from 'react-icons/bi'
import {RiLockPasswordFill} from 'react-icons/ri';
import {AiFillEyeInvisible, AiFillEye} from 'react-icons/ai'
import {MdEmail} from 'react-icons/md';   


function Signuplogin() {
    const [change, setchange] = useState('Sign Up')
    const [show, setShow] = useState(false)

    // handle toggle
    const toggle = () => {
        setShow(!show)
    }
  return (
    <>
    
   <div className="container">
        <div className="form">
            <h1>{change}</h1>
            <div className="input-group">
             {change === "Login" ? <div></div>:<div className="input-con">
                   <BiSolidUserRectangle fontSize={36} className='bisolid'/>
                    <input className="input" type="text" placeholder="username" required />
                </div>}
    
                <div className="input-con">
                    <MdEmail fontSize={36} className='RiLock'/>
                    <input className="input" type="email" placeholder="email id" required/>
                </div>
                <div className="input-con">
                    <RiLockPasswordFill fontSize={36} className='RiLock'/>
                     <input className='input'  type={(show === false) ? "text" : "password"} placeholder=' Enter your password' />
                    {
                    (open === false) ? <AiFillEye onClick={toggle}/> : 
                    <AiFillEyeInvisible onClick={toggle} fontSize={20} id='eye'/>
                    }
                </div>
                
                {change === "Sign Up" ? <div></div>:<div className="checkbox-span">
                <input type="checkbox" className="checkbox" name="Remember" /> 
                <span className="r-me">Remember me</span>
                <span className="f-password">forget password <a href="#">click here</a></span>
               </div>}
               
            </div>
            <div className="submit-btn">
               <div className={change === "Login" ? "submit gray" : "submit"} onClick={() => {setchange("Sign Up")}}> Sign Up </div>
               <div className={change === "Sign Up" ? "submit gray" : "submit"} onClick={() => {setchange("Login")}}>Login</div>
            </div>
        </div>
    </div>
    </> 
  )  
}

export default Signuplogin;