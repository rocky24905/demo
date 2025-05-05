import React from "react";
import './Notice.css';

const Notice = () =>{
  return(
    <div className="scroll">
        <div className="con">
            <div className="left1"><i class="fa-solid fa-house-chimney"></i><a href="#">Home</a>/ Notice</div>
              
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


             <div className="noticetype">
            
            <div className="notice">
               
               <div className="noticelist"><i class="fa-solid fa-list"></i>List</div>

            <div className="noticeschedule"><i class="fa-solid fa-circle-plus"></i>Add a new notice</div>

            </div>
             
             <from className="search1">
               <label htmlFor="role" className="showsearch1"><b>Show</b></label>
               <select id="role" name="role" className="searone1">
                 <option value="1">10</option>
                 <option value="1">15</option>
                 <option value="1">20</option>
                 <option value="1">25</option>
               </select>


               <label htmlFor="search" className="showsearch1"><b>Search :</b></label>
               <input type="search" className="sear1" placeholder="Search"></input>
             </from>
             

            <div className="onestatus1">
               <div className="status1">

                 <div className="NoticeFor"><b>Notice Ttitle</b></div>
                 <div className="NoticeFor1"><b>Description</b></div>
                 <div className="NoticeFor2"><b>Notice Type</b></div>
                 <div className="NoticeFor3"><b>Notice For</b></div>
                 <div className="NoticeFor4"><b>Action</b></div>
                  
                 </div>

                 <div className="nodate">No data available in table</div>

                 </div>
               
                 <div className="showing1">
                   <div className="showings1">Showing O to O of entries</div>
                   <div className="previous1">
                     <div className="next1">Previous</div>
                     <div className="next1">Next</div>
                   </div>
                 </div>
            
             </div>
             

       
    </div>
  )
}

export default Notice;