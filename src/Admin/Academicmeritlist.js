import React from "react";
import './Academicmeritlist.css';

const Academicmeritlist = ()=>{
    return(
        <div className="scroll">
            <div className="con">
            <div className="left1"><i class="fa-solid fa-house-chimney"></i><a href="#">Home</a>/ Academic Merit List</div>
              
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


             <div className="meritlist">
                <from>
                <label htmlFor="role" className="cooll">Choose class *</label>
                <select id="role" name="role" className="acade">
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


                <label htmlFor="role" className="cooll">Choose group *</label>
                <select id="role" name="role" className="acade">
                      <option value="none">None / For all</option>
                      <option value="arts">Arts / Humanitics</option>
                      <option value="comrce">Commerce / Business stu</option>
                      <option value="science">Science</option>
                    </select>


                <label htmlFor="role" className="cooll">Choose exam *</label>
                <select id="role" name="role" className="acade">
                      <option value="one">Choose one</option>
                      <option value="one">First Tutorial 2025</option>
                      
                    </select>

                    <div className="merit"><a href="#">Show academic merit list</a></div>
                </from>
             </div>

             
        </div>
        
    )
}

export default Academicmeritlist;