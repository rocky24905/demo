import React from "react";
import "./Certificatetype.css";

const Certificatetype = () =>{
  return(
    <div className="scroll">
       <div className="con">
            <div className="left1"><i class="fa-solid fa-house-chimney"></i><a href="#">Home</a>/ Certificate Type</div>
              
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

               
            <div className="Certificatetype">
            
             <div className="Certificate">
                
                <div className="Certificatelist"><i class="fa-solid fa-list"></i>List</div>

             <div className="Certificateschedule"><i class="fa-solid fa-circle-plus"></i>Add New Certificate Type</div>

             </div>
              
              <from className="search">
                <label htmlFor="role" className="showsearch"><b>Show</b></label>
                <select id="role" name="role" className="searone">
                  <option value="1">10</option>
                  <option value="1">15</option>
                  <option value="1">20</option>
                  <option value="1">25</option>
                </select>


                <label htmlFor="search" className="showsearch"><b>Search :</b></label>
                <input type="search" className="sear" placeholder="Search"></input>
              </from>
              

             <div className="onestatus">
                <div className="status">

                  <div className="action"><b>Certificate type title</b></div>
                  <div className="action1"><b>Status</b></div>
                  <div className="action2"><b>Action</b></div>
                   
                  </div>

                  <div className="nodate">No data available in table</div>

                  </div>
                
                  <div className="showing">
                    <div className="showings">Showing O to O of entries</div>
                    <div className="previous">
                      <div className="next">Previous</div>
                      <div className="next">Next</div>
                    </div>
                  </div>
             
              </div>
              

          
             
    </div>
  )
}

export default Certificatetype;