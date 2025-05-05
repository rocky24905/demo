import React from "react";
import './Examseatplan.css';

const Examseatplan = () =>{
  return(
    <div className="scroll">
        <div className="con">
            <div className="left1"><i class="fa-solid fa-house-chimney"></i><a href="#">Home</a>/ Exam Seat Plan</div>
              
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

             <div className="dulo">
                
                <div className="listt"><i class="fa-solid fa-list"></i>List</div>

             </div>


             <div className="utf">
              <from className="utf1">
                <label htmlFor="role" className="alon2">Choose shift *</label>
                <select id="role" name="role" className="alon">
                  <option value="choose">Choose shift</option>
                  <option value="day">Day</option>
                  <option value="morning">Morning</option>
                </select>


                <label htmlFor="role" className="alon2">Choose class *</label>
                <select id="role" name="role" className="alon">
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


                <label htmlFor="role" className="alon2">Choose group *</label>
                <select id="role" name="role" className="alon">
                      <option value="none">None / For all</option>
                      <option value="arts">Arts / Humanitics</option>
                      <option value="comrce">Commerce / Business stu</option>
                      <option value="science">Science</option>
                    </select>



                    <div className="exame">
                      <label htmlFor="role" className="tion">Choose section *</label>
                      <select id="role" name="role" className="plan">
                        <option value="one">Choose one</option>
                      </select>

                      <label htmlFor="role" className="tion">Choose exam *</label>
                      <select id="role" name="role" className="plan">
                        <option value="exam">Choose exam</option>
                        <option value="frist">First Tutorial 2025</option>
                      </select>

                      <div className="exa"><a href="#">Show seat plan</a></div>
                    </div>
              </from>
             </div>
             

             
    </div>
  )
}

export default Examseatplan;