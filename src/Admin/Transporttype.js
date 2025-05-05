import React from "react";
import './Transporttype.css';

const Transporttype = () =>{
  return(
    <div className="scroll">
       <div className="con">
            <div className="left1"><i class="fa-solid fa-house-chimney"></i><a href="#">Home</a>/ Transport Type</div>
              
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


             <div className="Transporttype">
            
             <div className="Transport">
                
                <div className="Transportlist"><i class="fa-solid fa-list"></i>List</div>

             <div className="Transportschedule"><i class="fa-solid fa-circle-plus"></i>Add new transport type</div>

             </div>
              
              <from className="search55">
                <label htmlFor="role" className="showsearch55"><b>Show</b></label>
                <select id="role" name="role" className="searone55">
                  <option value="1">10</option>
                  <option value="1">15</option>
                  <option value="1">20</option>
                  <option value="1">25</option>
                </select>


                <label htmlFor="search" className="showsearch55"><b>Search :</b></label>
                <input type="search" className="sear55" placeholder="Search"></input>
              </from>
              

             <div className="onestatus55">
                <div className="status55">

                  <div className="action"><b>Transport type name</b></div>
                  <div className="action1"><b>Status</b></div>
                  <div className="action2"><b>Action</b></div>
                   
                  </div>

                  <div className="nodate55">No data available in table</div>

                  </div>
                
                  <div className="showing55">
                    <div className="showings55">Showing O to O of entries</div>
                    <div className="previous55">
                      <div className="next55">Previous</div>
                      <div className="next55">Next</div>
                    </div>
                  </div>
             
              </div>
              

             
    </div>
  )
}

export default Transporttype;