import React from "react";
import './Eventcalender.css';

const Eventcalender = ()=>{
    return(
        <div className="scroll">
            <div className="con">
            <div className="left1"><i class="fa-solid fa-house-chimney"></i><a href="#">Home</a>/ Event Calender</div>
              
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


             <div className="dule1">
                
                <div className="list"><i class="fa-solid fa-list"></i>List</div>

             <div className="even">
                <div className="evenone">Event Title</div>
                <div className="evenone">Details</div>
                <div className="evenone">Status</div>
                <div className="evenone">Action</div>
             </div>

             <div className="schedule1"><i class="fa-solid fa-circle-plus"></i>Add new event</div>


             </div>
             

             
        </div>
    )
}

export default Eventcalender;