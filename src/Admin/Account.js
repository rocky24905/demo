import React, { useState } from "react";
import './Account.css';

const Account = ()=> {
    const [email, setemail]=useState('');
    const [password, setpassword]=useState('');
    const [retypepassword, setretypepassword]=useState('');


    return (
        <div>
             <div className="singone">
                <from>
                    <div className="sing00"><h2>Singup</h2></div>
                    <label htmlFor="email">Email :</label><br></br>
                    <input type="email" id="email" placeholder=" Enter Email" className="holder"
                    value={email} onChange={(e)=>setemail(e.target.value)}></input><br></br><br></br>
                    <label htmlFor="password">Password :</label><br></br>
                    <input type="password" id="password" placeholder=" Enter Password" className="holder"
                    value={password} onChange={(e)=>setpassword(e.target.value)}></input><br></br><br></br>
                    <label htmlFor="retypepassword">Retype Password :</label><br></br>
                    <input type="password" id="retypepassword" placeholder=" Retype Password" className="holder"
                    value={retypepassword} onChange={(e)=>setretypepassword(e.target.value)}></input>
                    
                    <div className="sub22">
                        
                        <label htmlFor="role">Role :</label>
                        <select id="role" name="role" className="chone">
                            <option value="one">Teacher</option>
                            <option value="one">Student</option>
                            <option value="one">Guardian</option>
                        </select>

                        <div className="sub1">
                        <button type="submit" className="sub"><b>Singup</b></button>
                        </div>
                    </div>

                </from>
             </div>
        </div>
    )
}

export default Account;