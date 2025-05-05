import React from "react";
import './Hostellist.css';

const Hostellist = () =>{
  return(
    <div className="scroll">
       <div className="con">
            <div className="left1"><i class="fa-solid fa-house-chimney"></i><a href="#">Home</a>/ Hostel list</div>
              
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


             <div className="Hostellisttype">
            
            <div className="Hostellist">
               
               <div className="Hostellistlist"><i class="fa-solid fa-list"></i>List</div>

            <div className="Hostellistschedule"><i class="fa-solid fa-circle-plus"></i>Add new hostel</div>

            </div>
             
             <from className="search777">
               <label htmlFor="role" className="showsearch777"><b>Show</b></label>
               <select id="role" name="role" className="searone777">
                 <option value="1">10</option>
                 <option value="1">15</option>
                 <option value="1">20</option>
                 <option value="1">25</option>
               </select>


               <label htmlFor="search" className="showsearch777"><b>Search :</b></label>
               <input type="search" className="sear777" placeholder="Search"></input>
             </from>
             

            <div className="onestatus777">
               <div className="status777">

                 <div className="Address"><b>Hostel name</b></div>
                 <div className="Address1"><b>Description</b></div>
                 <div className="Address2"><b>Address</b></div>
                 <div className="Address3"><b>Status</b></div>
                 <div className="Address4"><b>Action</b></div>
                  
                 </div>

                 <div className="nodate777">No data available in table</div>

                 </div>
               
                 <div className="showing777">
                   <div className="showings777">Showing O to O of entries</div>
                   <div className="previous777">
                     <div className="next777">Previous</div>
                     <div className="next777">Next</div>
                   </div>
                 </div>
            
             </div>
             

             
    </div>
  )
}

export default Hostellist;