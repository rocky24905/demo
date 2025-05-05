import React from "react";
import './Studentattendance.css';

const Studentattendance = () =>{
  return(
    <div className="scroll">
       <div className="con">
            <div className="left1"><i class="fa-solid fa-house-chimney"></i><a href="#">Home</a>/ Student Attendancen</div>
              
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

             <div className="dules">
                
                <div className="lists"><i class="fa-solid fa-list"></i>List</div>
              <div className="uplords"><i class="fa-solid fa-circle-plus"></i><a href="#">Upload csv/excel file attendance</a></div>
             <div className="schedules"><i class="fa-solid fa-circle-plus"></i><a href="#">Add new event</a></div>
             
             </div>


          <div className="parsing">
            <from className="fromm">
              <label htmlFor="role" className="section">Choose shift *</label>
              <select id="role" name="role" className="roll">
                <option value="choose" >Choose one</option>
                <option value="morning">Morning</option>
                <option value="day">Day</option>
              </select>

              <label htmlFor="role" className="section">Choose Class *</label>
                    <select id="role" name="role" className="roll">
                        <option value="Choose Class">Choose Class</option>
                        <option value="Play">Play</option>
                        <option value="Nursery">Nursery</option>
                        <option value="one">One</option>
                        <option value="two">Two</option>
                        <option value="three">Three</option>
                        <option value="four">Four</option>
                        <option value="five">Five</option>
                        <option value="six">Six</option>
                        <option value="seven">Seven</option>
                        <option value="eight">Eight</option>
                        <option value="nine">Nine</option>
                        <option value="ten">Ten</option>
                    </select>


                    <label htmlFor="role" className="section">Choose group *</label>
                    <select id="role" name="role" className="roll">
                      <option value="none">None / For all</option>
                      <option value="arts">Arts / Humanitics</option>
                      <option value="comrce">Commerce / Business stu</option>
                      <option value="science">Science</option>
                    </select>


                    <label htmlFor="role" className="section">Choose section *</label>
                    <select id="role" name="role" className="roll">
                      <option value="not">Not found</option>
                    </select>


                   <div className="haveone">
                    <label htmlFor="date" className="section">Choose date *</label>
                    <input type="date" className="datee"></input>

                    <div className="showw"><a href="#">Show attendance list</a></div>
                    <div className="showw"><a href="#">Edit attendance</a></div>
                   </div>


            </from>
          </div>


    </div>
  )
}

export default Studentattendance;