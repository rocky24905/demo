import React from "react";
import './Studentfees.css';

const Studentfees = ()=>{
    return(
        <div className="scroll">
            <div className="con">
            <div className="left1"><i class="fa-solid fa-house-chimney"></i><a href="#">Home</a>/ Student Fees</div>
              
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

             <div className="Studentfeestype">
            
            <div className="Studentfees">
               
               <div className="Studentfeeslist"><i class="fa-solid fa-list"></i>List</div>

            <div className="Studentfeesschedule"><i class="fa-solid fa-circle-plus"></i>Add New Certificate Type</div>

            </div>
             
             <from className="searchfees">
               <label htmlFor="role" className="showsearchfees"><b>Show</b></label>
               <select id="role" name="role" className="searonefees">
                 <option value="1">10</option>
                 <option value="1">15</option>
                 <option value="1">20</option>
                 <option value="1">25</option>
               </select>


               <label htmlFor="search" className="showsearchfees"><b>Search :</b></label>
               <input type="search" className="searfees" placeholder="Search"></input>
             </from>
             

            <div className="onestatusfees">
               <div className="statusfees">

                 <div className="Studentfee"><b>Certificate type title</b></div>
                 <div className="Studentfee1"><b>Status</b></div>
                 <div className="Studentfee2"><b>Action</b></div>
                 <div className="Studentfee3"><b>Action</b></div>
                 <div className="Studentfee4"><b>Action</b></div>
                  
                 </div>

                 <div className="nodatefees">No data available in table</div>

                 </div>
               
                 <div className="showingfees">
                   <div className="showingsfees">Showing O to O of entries</div>
                   <div className="previousfees">
                     <div className="nextfees">Previous</div>
                     <div className="nextfees">Next</div>
                   </div>
                 </div>
            
             </div>


           
        </div>
    )
} 

export default Studentfees;