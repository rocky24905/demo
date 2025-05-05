import React from "react";
import './Examschedule.css';

const Examschedule = ()=>{
    return(
        <div className="scroll">
            <div className="con">
            <div className="left1"><i class="fa-solid fa-house-chimney"></i><a href="#">Home</a>/ Exam Schedulen</div>
              
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

             <div className="dule">
                
                <div className="list"><i class="fa-solid fa-list"></i>List</div>
                 
                 <div className="getone">
                <from className="get">
                    <label htmlFor="role" className="choose">Choose Exam</label>
                    <select id="role" name="role" className="box">
                        <option value="Choose one">Choose One</option>
                        <option value="2025">2025</option>
                    </select>

                    <label htmlFor="role" className="choose">Choose Class</label>
                    <select id="role" name="role" className="box">
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
                  

                </from>
                </div>
                



                <div className="schedule"><i class="fa-solid fa-circle-plus"></i>Add new exam schedule</div>
             </div>
             

             
        </div>
    )
}

export default Examschedule;