import React from "react";
import './Markmanagement.css';

const Markmanagement = ()=>{
    return(
        <div className="scroll">
            <div className="Mark">
            <div className="left1"><i class="fa-solid fa-house-chimney"></i><a href="#">Home</a>/ Mark Management</div>
              
                <from className="Markone">
                    
                <label htmlFor="role" className="Marktwo"><h3>Brance</h3></label>
                <select id="role" name="role" className="Markthree">
                    <option value="brance">xiii</option>
                    <option value="xii">xii</option>
                </select>

                <label htmlFor="role" className="Marktwo"><h3>Sesson</h3></label>
                <select id="role" name="role" className="Markthree">
                    <option value="brance">2023</option>
                    <option value="xii">2024</option>
                    <option value="xii">2025</option>
                </select>
                
             </from>
             </div>

             <div className="markfive">
                
             <div className="marksix"><i class="fa-solid fa-list"></i>List</div>
             <div className="marksiven"><i class="fa-solid fa-circle-plus"></i><a href="#">Mark setup</a></div>

             </div>

             <div className="Markmanagement">
                <from className="rockyone">
                    <label htmlFor="role" className="management">Choose exam *</label>
                    <select id="role" name="role" className="managementone">
                        <option value="one">Choose exam</option>
                        <option value="one">First Tutorial 2025</option>
                    </select>

                    <label htmlFor="role" className="management">Choose class *</label>
                <select id="role" name="role" className="managementone">
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

                <label htmlFor="role" className="management">Choose group *</label>
                <select id="role" name="role" className="managementone">
                      <option value="none">None / For all</option>
                      <option value="arts">Arts / Humanitics</option>
                      <option value="comrce">Commerce / Business stu</option>
                      <option value="science">Science</option>
                    </select>
                      
                      
                    <div className="rocky"><a href="#">Show list</a></div>
                    
                </from>
             </div>
             

          
        </div>
    )
}

export default Markmanagement;