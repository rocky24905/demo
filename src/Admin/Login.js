import React, { useState } from "react";
import './Login.css';

const Login = ()=>{
    const [email, setemail]=useState('');
    const [password, setpassword]=useState('');

    return(
        <div>
            <div className="loginbox"><h1>Login</h1></div>
            <div className="login99">
                
                <form className="loginboxx">
                    <label htmlFor="email">Email</label><br></br>
                    <input type="text" id="email" placeholder=" Enter Email" className="loginbox111"
                     value={email} onChange={(e)=>setemail(e.target.value)} ></input><br></br><br></br>
                    <label htmlFor="password">Password</label><br></br>
                    <input type="password" placeholder=" Enter Pasword" className="loginbox111"
                    value={password} onChange={(e)=>setpassword(e.target.value)}></input><br></br><br></br>

                    <div className="">

                        <div className="">
                        <button type="submit" className="singup"><b>Singup</b></button>
                        </div>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default Login;