import React from "react";
import './Markdistribution.css';

const Markdistribution = ()=>{
    return(
        <div className="scroll">
            <div className="con">
        <div className="left1"><i class="fa-solid fa-house-chimney"></i><a href="#">Home</a>/ Mark Distribution</div>
          
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


         <div className="Examattendance">
            
            <div className="Examattendanceone"><i class="fa-solid fa-list"></i>List</div>

         <div className="Examattendancetwo"><i class="fa-solid fa-circle-plus"></i>Add new event</div>

         </div>

         <label htmlFor="role" className="varsone">Choose shift *</label>
                <select id="role" name="role" className="vars">
                  <option value="choose">Choose shift</option>
                  <option value="day">Day</option>
                  <option value="morning">Morning</option>
                </select>


                <label htmlFor="role" className="varsone">Choose class *</label>
                <select id="role" name="role" className="vars">
                <option value="Choose Class">Choose class</option>
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


                <label htmlFor="role" className="varsone">Choose group *</label>
                <select id="role" name="role" className="vars">
                      <option value="none">None / For all</option>
                      <option value="arts">Arts / Humanitics</option>
                      <option value="comrce">Commerce / Business stu</option>
                      <option value="science">Science</option>
                    </select>

                  
                    <label htmlFor="role" className="showfor">Choose exam *</label>
                    <select id="role" name="role" className="editlistone">
                        <option value="one">Choose one</option>
                        <option value="one">First Tutorial 2025</option>
                    </select>


                    <div className="editlist">
                    <label htmlFor="role" className="showfor">Choose Subject *</label>
                    <select id="role" name="role" className="chooseone">
                        <option value="one">Choose one</option>
                    </select>

                    <label htmlFor="role" className="showfor">Choose exam *</label>
                    <select id="role" name="role" className="chooseone">
                        <option value="one">Choose one</option>
                        <option value="one">First Tutorial 2025</option>
                    </select>


                    <div className="showedit"><i class="fa-solid fa-eye"></i><a href="#">show</a></div>
                    <div className="showedit"><i class="fa-solid fa-pen-to-square"></i><a href="#">Edit</a></div>
                    </div>
                    

         </div>
    )
}

export default Markdistribution;