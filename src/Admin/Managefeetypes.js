import React from "react";
import './Managefeetypes.css';

const Managefeetypes = () =>{
  return(
    <div className="scroll">
       <div className="con">
            <div className="left1"><i class="fa-solid fa-house-chimney"></i><a href="#">Home</a>/ Manage Fee Types</div>
              
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


             <div className="Managefeetype">
            
             <div className="Managefee">
                
                <div className="Managefeelist"><i class="fa-solid fa-list"></i>List</div>

             <div className="Managefeeschedule"><i class="fa-solid fa-circle-plus"></i>Add New Free Type</div>

             </div>
              
              <from className="search00">
                <label htmlFor="role" className="showsearch00"><b>Show</b></label>
                <select id="role" name="role" className="searone00">
                  <option value="1">10</option>
                  <option value="1">15</option>
                  <option value="1">20</option>
                  <option value="1">25</option>
                </select>


                <label htmlFor="search" className="showsearch00"><b>Search :</b></label>
                <input type="search" className="sear00" placeholder="Search"></input>
              </from>
              

             <div className="onestatus00">
                <div className="status00">

                  <div className="action00"><b>Fee name</b></div>
                  <div className="action100"><b>Status</b></div>
                  <div className="action200"><b>Action</b></div>
                   
                  </div>

                  <div className="nodate00">No data available in table</div>

                  </div>
                
                  <div className="showing00">
                    <div className="showings00">Showing O to O of entries</div>
                    <div className="previous00">
                      <div className="next00">Previous</div>
                      <div className="next00">Next</div>
                    </div>
                  </div>
             
              </div>
              

    </div>
  )
}

export default Managefeetypes;