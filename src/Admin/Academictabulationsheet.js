import React from "react";
import './Academictabulationsheet.css';

const Academictabulationsheet = ()=>{
   return(
    <div className="scroll">
      <div className="con">
            <div className="left1"><i class="fa-solid fa-house-chimney"></i><a href="#">Home</a>/ Academic Tabulation Sheet</div>
              
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


             <div className="tabulationsheet">
               <from>
               <label htmlFor="role" className="tabulation">Choose shift *</label>
                <select id="role" name="role" className="tabulationbox">
                  <option value="choose">Choose shift</option>
                  <option value="day">Day</option>
                  <option value="morning">Morning</option>
                </select>


               
                      <label htmlFor="role" className="tabulation">Choose exam *</label>
                      <select id="role" name="role" className="tabulationbox">
                        <option value="one">Choose one</option>
                        <option value="one">First Tutorial 2025</option>
                      </select>


                <label htmlFor="role" className="tabulation">Choose class *</label>
                <select id="role" name="role" className="tabulationbox">
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


                <label htmlFor="role" className="tabulation">Choose group *</label>
                <select id="role" name="role" className="tabulationbox">
                      <option value="none">None / For all</option>
                      <option value="arts">Arts / Humanitics</option>
                      <option value="comrce">Commerce / Business stu</option>
                      <option value="science">Science</option>
                    </select>


                    <div className="menufive">

                     <label htmlFor="role" className="menutext">Choose Section *</label>
                     <select id="role" name="role" className="content">
                        <option value="one">Choose one</option>
                     </select>

                     <label htmlFor="role" className="menutext">Choose one *</label>
                     <select id="role" name="role" className="content">
                        <option value="only">Only Total Mark</option>
                        <option value="only">All Mark Show</option>
                     </select>
                     

                    <label htmlFor="role" className="menutext">Choose one *</label>
                    <select id="role" name="role" className="content">
                     <option value="blank">With Contnt</option>
                     <option value="blank">Blank</option>
                    </select>

                    <div className="showone"><a href="#">Show Tabulation Sheet</a></div>

                    </div>
               </from>
             </div>

             
    </div>
   )
}

export default Academictabulationsheet;