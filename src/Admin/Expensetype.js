import React from "react";
import './Expensetype.css';

const Expensetype = () =>{
  return(
    <div className="scroll">
        <div className="con">
            <div className="left1"><i class="fa-solid fa-house-chimney"></i><a href="#">Home</a>/ Expense Type</div>
              
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


             <div className="Expensetypetype">
            
            <div className="Expensetype">
               
               <div className="Expensetypelist"><i class="fa-solid fa-list"></i>List</div>

            <div className="Expensetypeschedule"><i class="fa-solid fa-circle-plus"></i>Add new expense type</div>

            </div>
             
             <from className="searchlow">
               <label htmlFor="role" className="showsearchlow"><b>Show</b></label>
               <select id="role" name="role" className="searonelow">
                 <option value="1">10</option>
                 <option value="1">15</option>
                 <option value="1">20</option>
                 <option value="1">25</option>
               </select>


               <label htmlFor="search" className="showsearchlow"><b>Search :</b></label>
               <input type="search" className="searlow" placeholder="Search"></input>
             </from>
             

            <div className="onestatuslow">
               <div className="statuslow">

                 <div className="Expen"><b>Expense type name</b></div>
                 <div className="Expen1"><b>Status</b></div>
                 <div className="Expen2"><b>Action</b></div>
                  
                 </div>

                 <div className="nodatelow">No data available in table</div>

                 </div>
               
                 <div className="showinglow">
                   <div className="showingslow">Showing O to O of entries</div>
                   <div className="previouslow">
                     <div className="nextlow">Previous</div>
                     <div className="nextlow">Next</div>
                   </div>
                 </div>
            
             </div>
             

            
    </div>
  )
}

export default Expensetype;