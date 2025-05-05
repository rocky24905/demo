import React from "react";
import './Teacherattendance.css';

const Teacheratendance = () =>{
  return(
    <div className="scroll">
        <div className="con">
            <div className="left1"><i class="fa-solid fa-house-chimney"></i><a href="#">Home</a>/ Teacher Atendance</div>
              
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

             <div className="dule11">
                
                <div className="list1"><i class="fa-solid fa-list"></i>List</div>
              <div className="uplord"><i class="fa-solid fa-circle-plus"></i><a href="#">Upload csv/excel file attendance</a></div>
             <div className="schedule11"><i class="fa-solid fa-circle-plus"></i><a href="#">Add new event</a></div>
             
             </div>

             <div className="mood">
              <from className="mood1">
                <label htmlFor="date" className="cho">Choose date * </label>
                <input type="date" className="model45"></input>

                <label htmlFor="shift" className="cho">Choose shift *</label>
                <select id="role" name="role" className="model45">
                  <option value="choose shift">Choose shift</option>
                  <option value="morning">Morning</option>
                  <option value="day">Day</option>
                </select>
                <div className="choose1">
                <div className="choose"><a href="#">Show attendance list</a></div>
                <div className="choose"><a href="#">Edit attendance</a></div>
                </div>
              </from>
             </div>
             

    </div>
  )
}

export default Teacheratendance;