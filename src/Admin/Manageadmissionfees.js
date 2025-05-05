import React from "react";
import './Managadmissionfees.css';

const Managadmissionfees = () =>{
  return(
    <div className="scroll">
        <div className="con">
            <div className="left1"><i class="fa-solid fa-house-chimney"></i><a href="#">Home</a>/ Manag Admission Fees</div>
              
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


             <div className="Managadmissiontype">
            
             <div className="Managadmission">
                
                <div className="Managadmissionlist"><i class="fa-solid fa-list"></i>List</div>

             <div className="Managadmissionschedule"><i class="fa-solid fa-circle-plus"></i>New admission fee setup</div>

             </div>
              
              <from className="search99">
                <label htmlFor="role" className="showsearch99"><b>Show</b></label>
                <select id="role" name="role" className="searone99">
                  <option value="1">10</option>
                  <option value="1">15</option>
                  <option value="1">20</option>
                  <option value="1">25</option>
                </select>


                <label htmlFor="search" className="showsearch99"><b>Search :</b></label>
                <input type="search" className="sear99" placeholder="Search"></input>
              </from>
              

             <div className="onestatus99">
                <div className="status99">

                  <div className="Remarks"><b>Class name</b></div>
                  <div className="Remarks1"><b>Fee Info</b></div>
                  <div className="Remarks2"><b>Remarks</b></div>
                  <div className="Remarks3"><b>Tottle Fee</b></div>
                  <div className="Remarks4"><b>Action</b></div>
                   
                  </div>

                  <div className="nodate99">No data available in table</div>

                  </div>
                
                  <div className="showing99">
                    <div className="showings99">Showing O to O of entries</div>
                    <div className="previous99">
                      <div className="next99">Previous</div>
                      <div className="next99">Next</div>
                    </div>
                  </div>
             
              </div>
              

            
    </div>
  )
}

export default Managadmissionfees;