import React from "react";
import './Event.css';

const Event = ()=>{
    return(
        <div className="scroll">
            <div className="cont">
            <div className="left"><i class="fa-solid fa-house-chimney"></i><a href="#">Home</a>/ Event</div>
              
              
                <from className="righte">
                    
                <label htmlFor="role"><h3>Brance</h3></label>
                <select id="role" name="role" className="role">
                    <option value="brance">xiii</option>
                    <option value="xii">xii</option>
                </select>

                <label htmlFor="role"><h3>Sesson</h3></label>
                <select id="role" name="role" className="role">
                    <option value="brance">2023</option>
                    <option value="xii">2024</option>
                    <option value="xii">2025</option>
                </select>
                
             </from>
             </div>
             

        
        </div>
    )
}

export default Event;