import React from "react";
import './Certificate.css';

const Certificate = () =>{
  return(
    <div className="scroll">
       <div className="con">
            <div className="left1"><i class="fa-solid fa-house-chimney"></i><a href="#">Home</a>/ Certificate</div>
              
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


             <div className="Certificatetype10">
            
             <div className="Certificate10">
                
                <div className="Certificatelist10"><i class="fa-solid fa-list"></i>List</div>

             <div className="Certificateschedule10"><i class="fa-solid fa-circle-plus"></i>Add New Certificate</div>

             </div>
              
              <from className="search10">
                <label htmlFor="role" className="showsearch10">Show</label>
                <select id="role" name="role" className="searone10">
                  <option value="1">10</option>
                  <option value="1">15</option>
                  <option value="1">20</option>
                  <option value="1">25</option>
                </select>


                <label htmlFor="search" className="showsearch10">Search :</label>
                <input type="search" className="sear10" placeholder="Search"></input>
              </from>
              

             <div className="onestatus10">
                <div className="status10">

                  <div className="Description"><b>Certificate Title</b></div>
                  <div className="Description1"><b>Description</b></div>
                  <div className="Description2"><b>Certificate Type</b></div>
                  <div className="Description3"><b>Action</b></div>
                   
                  </div>

                  <div className="nodate10">No data available in table</div>

                  </div>
                
                  <div className="showing10">
                    <div className="showings10">Showing O to O of entries</div>
                    <div className="previous10">
                      <div className="next10">Previous</div>
                      <div className="next10">Next</div>
                    </div>
                  </div>
             
              </div>
              

            
    </div>
  )
}

export default Certificate;