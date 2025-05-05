import React from "react";
import './Userrole.css';

const userrole = () =>{
  return(
    <div className="scroll">
       <div className="con">
            <div className="left1"><i class="fa-solid fa-house-chimney"></i><a href="#">Home</a>/ User Role</div>
              
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

             <div className="userroletype">
            
            <div className="userrole">
               
               <div className="userrolelist"><i class="fa-solid fa-list"></i>List</div>

            <div className="userroleschedule"><i class="fa-solid fa-circle-plus"></i>Add New Certificate Type</div>

            </div>
             
             <from className="search4">
               <label htmlFor="role" className="showsearch4"><b>Show</b></label>
               <select id="role" name="role" className="searone4">
                 <option value="1">10</option>
                 <option value="1">15</option>
                 <option value="1">20</option>
                 <option value="1">25</option>
               </select>


               <label htmlFor="search" className="showsearch4"><b>Search :</b></label>
               <input type="search" className="sear4" placeholder="Search"></input>
             </from>
             

            <div className="onestatus4">
               <div className="status4">

                 <div className="Authorization"><b>Role name</b></div>
                 <div className="Authorization1"><b>Authorization area</b></div>
                 <div className="Authorization2"><b>Status</b></div>
                 <div className="Authorization3"><b>Action</b></div>
                  
                 </div>

                 <div className="all">
                 <div className="allyer">superadmin</div>
                 <div className="allyer1">all</div>
                 <div className="allyer2">-</div>
                 <div className="allyer3">-</div>
                 </div>

                 </div>
               
                 <div className="showing4">
                   <div className="showings4">Showing O to O of entries</div>
                   <div className="previous4">
                     <div className="next4">Previous</div>
                     <div className="next44">1</div>
                     <div className="next4">Next</div>
                   </div>
                 </div>
            
             </div>

    </div>
  )
}

export default userrole;