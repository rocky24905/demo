import React from "react";
import './Servicetype.css';

const Servicetype = () =>{
  return(
    <div className="scroll">
        <div className="con">
            <div className="left1"><i class="fa-solid fa-house-chimney"></i><a href="#">Home</a>/ Service Type</div>
              
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

             <div className="Servicetype">
            
            <div className="Service">
               
               <div className="Servicelist"><i class="fa-solid fa-list"></i>List</div>

            <div className="Serviceschedule"><i class="fa-solid fa-circle-plus"></i>Add new service type</div>

            </div>
             
             <from className="searchinge">
               <label htmlFor="role" className="showsearchinge"><b>Show</b></label>
               <select id="role" name="role" className="searoneinge">
                 <option value="1">10</option>
                 <option value="1">15</option>
                 <option value="1">20</option>
                 <option value="1">25</option>
               </select>


               <label htmlFor="search" className="showsearchinge"><b>Search :</b></label>
               <input type="search" className="searinge" placeholder="Search"></input>
             </from>
             

            <div className="onestatusinge">
               <div className="statusinge">

                 <div className="Services"><b>Service type name</b></div>
                 <div className="Services1"><b>Status</b></div>
                 <div className="Services2"><b>Action</b></div>
                  
                 </div>

                 <div className="nodateinge">No data available in table</div>

                 </div>
               
                 <div className="showinginge">
                   <div className="showingsinge">Showing O to O of entries</div>
                   <div className="previousinge">
                     <div className="nextinge">Previous</div>
                     <div className="nextinge">Next</div>
                   </div>
                 </div>
            
             </div>
             

    </div>
  )
}

export default Servicetype;