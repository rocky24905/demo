import React from "react";
import './Managemonthlyfees.css';

const Managemonthlyfees = () =>{
  return(
    <div className="scroll">
       <div className="con">
            <div className="left1"><i class="fa-solid fa-house-chimney"></i><a href="#">Home</a>/ Manage Monthly Fees</div>
              
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

             <div className="Managemonthlytype">
            
            <div className="Managemonthly">
               
               <div className="Managemonthlylist"><i class="fa-solid fa-list"></i>List</div>

            <div className="Managemonthlyschedule"><i class="fa-solid fa-circle-plus"></i>New monthly fee setup</div>

            </div>
             
             <from className="search88">
               <label htmlFor="role" className="showsearch88"><b>Show</b></label>
               <select id="role" name="role" className="searone88">
                 <option value="1">10</option>
                 <option value="1">15</option>
                 <option value="1">20</option>
                 <option value="1">25</option>
               </select>


               <label htmlFor="search" className="showsearch88"><b>Search :</b></label>
               <input type="search" className="sear88" placeholder="Search"></input>
             </from>
             

            <div className="onestatus88">
               <div className="status88">

                 <div className="TottleFee"><b>Class name</b></div>
                 <div className="TottleFee1"><b>Fee Info</b></div>
                 <div className="TottleFee2"><b>Remarks</b></div>
                 <div className="TottleFee3"><b>Tottle Fee</b></div>
                 <div className="TottleFee4"><b>Action</b></div>
                  
                 </div>

                 <div className="nodate88">No data available in table</div>

                 </div>
               
                 <div className="showing88">
                   <div className="showings88">Showing O to O of entries</div>
                   <div className="previous88">
                     <div className="next88">Previous</div>
                     <div className="next88">Next</div>
                   </div>
                 </div>
            
             </div>


            
    </div>
  )
}

export default Managemonthlyfees;