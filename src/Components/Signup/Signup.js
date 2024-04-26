import React, { useState } from "react";
import "./Signup.css";
import user_icon from "../Assets/user.png";
import email_icon from "../Assets/envelope.png";
import password_icon from "../Assets/lock.png";
import {Link} from 'react-router-dom';

const Signup =() => {
    const[action, setAction] = useState("Sign Up");
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const handleLogin = () => {
        console.log("Name:", name);
        console.log("Email:", email);
        console.log("Password:", password);
    }
    
    return(
        <div className="background">
        <div className="container">
           <div className="header">
            <div className="text">{action}</div>
           </div>
           <div className="inputs">
            {
                action==="Login"? <div></div> :<div className="input">
               <img  className="name" src={user_icon} alt="name"/>
               <input 
               type="text" 
               placeholder="Name"
               value={name}
               onChange={(e) => setName(e.target.value)}
               /> 
            </div>
            }
            <div className="input">
               <img className="email" src={email_icon} alt="email"/>
               <input 
               type="email"
                placeholder="Email Id"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                /> 
            </div>
            <div className="input">
               <img className="password" src={password_icon} alt="password"/>
               <input 
               type="password" 
               placeholder="Password"
               value={password}
               onChange={(e) => setPassword(e.target.value)}
               /> 
            </div>
           </div>
           { action==="Sign Up"?<div></div> :<div className="forgot-pass">Forgot Passsword? <span>Click here</span>
            </div>
            }
            <div className="submit-container">
            <button className={action === "Login" ? "submit gray" : "submit"} onClick={() => { setAction("Sign Up"); handleLogin(); }}> Sign Up</button>
                <Link to="/Login" className={action==="Sign Up"? "submit gray":"submit"}onClick={()=> {setAction("Login")}}> Login</Link>
            </div>
        </div>
        </div>

    )
}
export default Signup;
