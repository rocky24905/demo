import React from "react";
import './Managesessionfees.css';

const Managesessionfees = () =>{
  return(
    <div className="scroll">
        <div className="con">
            <div className="left1"><i class="fa-solid fa-house-chimney"></i><a href="#">Home</a>/ Manage Session Fees</div>
              
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


             <div className="Managesessiontype">
            
             <div className="Managesession">
                
                <div className="Managesessionlist"><i class="fa-solid fa-list"></i>List</div>

             <div className="Managesessionschedule"><i class="fa-solid fa-circle-plus"></i>New session fee setup</div>

             </div>
              
              <from className="search77">
                <label htmlFor="role" className="showsearch77"><b>Show</b></label>
                <select id="role" name="role" className="searone77">
                  <option value="1">10</option>
                  <option value="1">15</option>
                  <option value="1">20</option>
                  <option value="1">25</option>
                </select>


                <label htmlFor="search" className="showsearch77"><b>Search :</b></label>
                <input type="search" className="sear77" placeholder="Search"></input>
              </from>
              

             <div className="onestatus77">
                <div className="status77">

                  <div className="Remarks1"><b>Class name</b></div>
                  <div className="Remarks11"><b>Fee Info</b></div>
                  <div className="Remarks21"><b>Remarks</b></div>
                  <div className="Remarks31"><b>Tottle Fee</b></div>
                  <div className="Remarks41"><b>Action</b></div>
                   
                  </div>

                  <div className="nodate77">No data available in table</div>

                  </div>
                
                  <div className="showing77">
                    <div className="showings77">Showing O to O of entries</div>
                    <div className="previous77">
                      <div className="next77">Previous</div>
                      <div className="next77">Next</div>
                    </div>
                  </div>
             
              </div>
              

    </div>
  )
}

export default Managesessionfees;