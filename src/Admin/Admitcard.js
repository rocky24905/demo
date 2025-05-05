import React from "react";
import './Admitcard.css';

const Admitcard = () =>{
  return(
    <div className="scroll">
       <div className="con">
            <div className="left1"><i class="fa-solid fa-house-chimney"></i><a href="#">Home</a>/ Admit Card</div>
              
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
                
                <div className="four"><i class="fa-solid fa-list"></i>List</div>

             </div>


             <div className="admit">
              
              <from className="admiton">
                <label htmlFor="role" className="cool">Choose shift *</label>
                <select id="role" name="role" className="boxx">
                  <option value="choose">Choose shift</option>
                  <option value="day">Day</option>
                  <option value="morning">Morning</option>
                </select>


                <label htmlFor="role" className="cool">Choose class *</label>
                <select id="role" name="role" className="boxx">
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


                <label htmlFor="role" className="cool">Choose group *</label>
                <select id="role" name="role" className="boxx">
                      <option value="none">None / For all</option>
                      <option value="arts">Arts / Humanitics</option>
                      <option value="comrce">Commerce / Business stu</option>
                      <option value="science">Science</option>
                    </select>


                    <label htmlFor="role" className="cool">Choose section *</label>
                    <select id="role" name="role" className="boxx">
                      <option value="one">Choose one</option>
                    </select>


                    <div className="print">
                      <label htmlFor="role" className="play1">Choose exam *</label>
                      <select id="role" name="role" className="boxone">
                        <option value="one">Choose one</option>
                        <option value="one">First Tutorial 2025</option>
                      </select>


                      <label htmlFor="role" className="play1">Choose Student *</label>
                      <select id="role" name="role" className="boxone">
                        <option value="all">All student</option>
                      </select>

                      <label htmlFor="role" className="play1">Choose template *</label>
                      <select id="role" name="role" className="boxone">
                        <option value="display">Horizontal Display</option>
                        <option value="display">Vertical Display</option>
                      </select>


                      <label htmlFor="role" className="play1">Print per page *</label>
                      <select id="role" name="role" className="boxone">
                        <option value="one">One</option>
                        <option value="one">Two</option>
                        <option value="one">Three</option>
                        <option value="one">Four</option>
                      </select>

                    </div>


                    <div className="card">
                      <label htmlFor="role" className="forone">For instruction *</label>
                      <select id="role" name="role" className="select">
                        <option value="select">Select instruction have</option>
                        <option value="select">Print front page with admit card</option>
                      </select>

                      <div className="instruction"><a href="#">Show admit card</a></div>
                      <div className="instruction"><a href="#">Show instruction</a></div>
                    </div>


              </from>
             </div>

             
    </div>
  )
}

export default Admitcard;