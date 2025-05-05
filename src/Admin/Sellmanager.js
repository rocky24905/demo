import React from "react";
import './Sellmanager.css';

const Sellmanager = ()=>{
    return(
        <div className="scroll">
            <div className="con">
            <div className="left1"><i class="fa-solid fa-house-chimney"></i><a href="#">Home</a>/ Sell Manager</div>
              
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

             <div className="Sellmanagertype">
            
            <div className="Sellmanager">
               
               <div className="Sellmanagerlist"><i class="fa-solid fa-list"></i>List</div>

            <div className="Sellmanagerschedule"><i class="fa-solid fa-circle-plus"></i>Add a new sell</div>

            </div>
             
             <from className="searchs">
               <label htmlFor="role" className="showsearchs"><b>Show</b></label>
               <select id="role" name="role" className="searones">
                 <option value="1">10</option>
                 <option value="1">15</option>
                 <option value="1">20</option>
                 <option value="1">25</option>
               </select>


               <label htmlFor="search" className="showsearchs"><b>Search :</b></label>
               <input type="search" className="sears" placeholder="Search"></input>
             </from>
             

            <div className="onestatuss">
               <div className="statuss">

                 <div className="Amount"><b>Date</b></div>
                 <div className="Amount1"><b>Info</b></div>
                 <div className="Amount2"><b>Amount</b></div>
                 <div className="Amount3"><b>Payment method	</b></div>
                 <div className="Amount4"><b>Action</b></div>
                  
                 </div>

                 <div className="nodates">No data available in table</div>
                    
                    <div className="totle">
                 <div className="totle1"><b>Total :</b></div>
                 <div className="totle2"><b>0.00 Tk ( 0.00 Tk total )</b></div>
                 </div>

                 </div>
               
                 <div className="showings">
                   <div className="showingss">Showing O to O of entries</div>
                   <div className="previouss">
                     <div className="nexts">Previous</div>
                     <div className="nexts">Next</div>
                   </div>
                 </div>
            
             </div>
             

         
        </div>
    )
}

export default Sellmanager;