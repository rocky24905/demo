import React from "react";
import './Selltype.css';

const Selltype = () =>{
  return(
    <div className="scroll">
       <div className="con">
            <div className="left1"><i class="fa-solid fa-house-chimney"></i><a href="#">Home</a>/ Sell Type</div>
              
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


             <div className="Selltype">
            
            <div className="Sell">
               
               <div className="Selllist"><i class="fa-solid fa-list"></i>List</div>

            <div className="Sellschedule"><i class="fa-solid fa-circle-plus"></i>Add new sell type</div>

            </div>
             
             <from className="searchFrom">
               <label htmlFor="role" className="showsearchFrom"><b>Show</b></label>
               <select id="role" name="role" className="searoneFrom">
                 <option value="1">10</option>
                 <option value="1">15</option>
                 <option value="1">20</option>
                 <option value="1">25</option>
               </select>


               <label htmlFor="search" className="showsearch"><b>Search :</b></label>
               <input type="search" className="sear" placeholder="Search"></input>
             </from>
             

            <div className="onestatusFrom">
               <div className="statusFrom">

                 <div className="Collect"><b>Sell type name</b></div>
                 <div className="Collect1"><b>Collect From</b></div>
                 <div className="Collect2"><b>Status</b></div>
                 <div className="Collect3"><b>Action</b></div>
                  
                 </div>

                 <div className="nodateFrom">No data available in table</div>

                 </div>
               
                 <div className="showingFrom">
                   <div className="showingsFrom">Showing O to O of entries</div>
                   <div className="previousFrom">
                     <div className="nextFrom">Previous</div>
                     <div className="nextFrom">Next</div>
                   </div>
                 </div>
            
             </div>
             

    </div>
  )
}

export default Selltype;