import React from "react";
import './Dashbord.css';

const Dashbord = ()=>{
    return(
        <div className="scroll">
            <div className="con">
            <div className="left1"><i class="fa-solid fa-house-chimney"></i><a href="#">Home</a>/ Dashbord</div>
              
                <from className="rightee">
                    
                <label htmlFor="role" className="brance"><h3>Brance</h3></label>
                <select id="role" name="role" className="rolee">
                    <option value="brance">xiii</option>
                    <option value="xii">xii</option>
                </select>

                <label htmlFor="role" className="brance"><h3>Sesson</h3></label>
                <select id="role" name="role" className="rolee">
                    <option value="brance">2023</option>
                    <option value="xii">2024</option>
                    <option value="xii">2025</option>
                </select>
                
             </from>
             </div>

            <div className="modell">
             <div className="mod"><h1><i class="fa-solid fa-user-graduate"></i>Student</h1></div>
             <div className="mod1"><h1><i class="fa-solid fa-user-secret" ></i>  Guardian</h1></div>
             <div className="mod2"><h1><i class="fa-solid fa-user-tie"></i>Teacher</h1></div>
             <div className="mod3"><h1><i class="fa-regular fa-money-bill-1"></i>Total Earnings</h1></div>
             </div>

             <div className="expenses">
                <div className="reven">Total Active Student Class</div>
                <div className="reven">Total Expenses By Expense Type</div>
                <div className="reven">TODAYS BIRTHDAY  -STUDENTS</div>
             </div>

             <div className="last">
               <div className="lastone">Last 7days Student Attendance report</div>
               <div className="lastone">Last 6 months revenue report</div>
             </div>

                 <div className="node">
                    <div className="nodeone">© 2025</div>
                 </div>
       

        </div>
    )
}

export default Dashbord;