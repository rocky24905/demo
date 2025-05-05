import React from "react";
import './Noticetype.css';

const Noticetype = () =>{
  return(
    <div className="scroll">
       <div className="con">
            <div className="left1"><i class="fa-solid fa-house-chimney"></i><a href="#">Home</a>/ Notice Type</div>
              
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


             <div className="Noticetypee">
            
            <div className="Noticetype">
               
               <div className="Noticetypelist"><i class="fa-solid fa-list"></i>List</div>

            <div className="Noticetypeschedule"><i class="fa-solid fa-circle-plus"></i>Add New Notice Type</div>

            </div>
             
             <from className="search2">
               <label htmlFor="role" className="showsearch2"><b>Show</b></label>
               <select id="role" name="role" className="searone2">
                 <option value="1">10</option>
                 <option value="1">15</option>
                 <option value="1">20</option>
                 <option value="1">25</option>
               </select>


               <label htmlFor="search" className="showsearch2"><b>Search :</b></label>
               <input type="search" className="sear2" placeholder="Search"></input>
             </from>
             

            <div className="onestatus2">
               <div className="status2">

                 <div className="action"><b>Notice type title</b></div>
                 <div className="action1"><b>Status</b></div>
                 <div className="action2"><b>Action</b></div>
                  
                 </div>

                 <div className="nodate2">No data available in table</div>

                 </div>
               
                 <div className="showing2">
                   <div className="showings2">Showing O to O of entries</div>
                   <div className="previous2">
                     <div className="next2">Previous</div>
                     <div className="next2">Next</div>
                   </div>
                 </div>
            
             </div>
             

          
    </div>
  )
}

export default Noticetype;