import React, { useState } from "react";
import "./Loginsignup.css";
import email_icon from "../Assets/envelope.png";
import password_icon from "../Assets/lock.png";
import {Link} from 'react-router-dom';

const Signin =() => {
    const[action, setAction] = useState("Sign Up");
    
    return(
        <div className="background">
        <div className="container">
           <div className="header">
            <div className="text">{action}</div>
           </div>
           <div className="inputs">
    
            <div className="input">
               <img className="email" src={email_icon} alt="email"/>
               <input type="email" placeholder="Email Id"/> 
            </div>
            <div className="input">
               <img className="password" src={password_icon} alt="password"/>
               <input type="password" placeholder="Password"/> 
            </div>
           </div>
           { action==="Sign Up"?<div></div> :<div className="forgot-pass">Forgot Passsword? <span>Click here</span>
            </div>
            }
            <div className="submit-container">
                <Link  to="/Signup" className={action==="Login"?"submit gray":"submit"} onClick={()=> {setAction("Sign Up")}}> Sign Up</Link>
                <Link to="/Login" className={action==="Sign Up"? "submit gray":"submit"}onClick={()=> {setAction("Login")}}> Login</Link>
            </div>
        </div>
        </div>

    )
}
export default Signin;
