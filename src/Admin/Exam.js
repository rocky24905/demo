import React from "react";
import './Exam.css';

const Exam = ()=>{
    return(
        <div className="scroll">
            <div className="con">
            <div className="left1"><i class="fa-solid fa-house-chimney"></i><a href="#">Home</a>/ Exam</div>
              
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


             <div className="Examtype">
            
            <div className="Exam">
               
               <div className="Examlist"><i class="fa-solid fa-list"></i>List</div>

            <div className="Examschedule"><i class="fa-solid fa-circle-plus"></i>Add new exam</div>

            </div>
             
             <from className="search1000">
               <label htmlFor="role" className="showsearch1000">Show</label>
               <select id="role" name="role" className="searone1000">
                 <option value="1">10</option>
                 <option value="1">15</option>
                 <option value="1">20</option>
                 <option value="1">25</option>
               </select>


               <label htmlFor="search" className="showsearch1000">Search :</label>
               <input type="search" className="sear1000" placeholder="Search"></input>
             </from>
             

            <div className="onestatus1000">
               <div className="status1000">

                 <div className="Description9"><b>Exam name</b></div>
                 <div className="Description19"><b>Exam classes</b></div>
                 <div className="Description29"><b>Exam Relation With</b></div>
                 <div className="Description39"><b>Status</b></div>
                 <div className="Description49"><b>Action</b></div>
                  
                 </div>

                 <div className="provideds">
                    <div className="providedes">First Tutorial 2025</div>
                    <div className="provie">
                        <div className="play2">Play</div>
                        <div className="play2">Nursery</div>
                        <div className="play2">One</div>
                        <div className="play2">Two</div>
                        <div className="play2">Three</div>
                        <div className="play2">Four</div>
                        <div className="play2">Five</div>
                        <div className="play2">Six</div>
                        <div className="play2">Seven</div>
                        <div className="play2">Eight</div>
                        <div className="play2">Nine</div>
                        <div className="play2">Ten</div>
                    </div>
                    <div className="provided">[Not provided]<hr></hr>[Not provided]</div>
                    <div className="Eight1"></div>
                    <div className="Eight1"></div>
                 </div>

                 </div>
               
                 <div className="showing1000">
                   <div className="showings1000">Showing O to O of entries</div>
                   <div className="previous1000">
                     <div className="next1000">Previous</div>
                     <div className="next444">1</div>
                     <div className="next1000">Next</div>
                   </div>
                 </div>
            
             </div>
       
        </div>
    )
}

export default Exam;