import React from "react";
import './Alltransactions.css';

const Alltransactions = ()=>{
    return(
        <div className="scroll">
            <div className="con">
            <div className="left1"><i class="fa-solid fa-house-chimney"></i><a href="#">Home</a>/ All Transactions</div>
              
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
                
                <div className="modellist">

             <div className="Alltransactionstype">
            
             <div className="Alltransactions">
                
                <div className="Alltransactionslist"><i class="fa-solid fa-list"></i>List</div>


             </div>

             <div className="modelview">

             <div className="view">
              <label htmlFor="date" ><b>Choose date *</b></label>
              <input type="date" className="Transac"></input>
              <label htmlFor="role" ><b>Transaction type</b></label>
              <select id="role" className="Transac">
                <option value="one">All</option>
                <option value="one">Only expense</option>
                <option value="one">Only earn</option>
              </select>

              <div className="viewreport"><a href="#">View report</a></div>
             </div>
              
              <from className="searchall">
                <label htmlFor="role" className="showsearchall"><b>Show</b></label>
                <select id="role" name="role" className="searoneall">
                  <option value="1">10</option>
                  <option value="1">15</option>
                  <option value="1">20</option>
                  <option value="1">25</option>
                </select>


                <label htmlFor="search" className="showsearchall"><b>Search :</b></label>
                <input type="search" className="searall" placeholder="Search"></input>
              </from>
              

             <div className="onestatusall">
                <div className="statusall">

                  <div className="transactions"><b>Date</b></div>
                  <div className="transactions1"><b>Particular</b></div>
                  <div className="transactions2"><b>Expense</b></div>
                  <div className="transactions3"><b>Earn</b></div>
                   
                  </div>

                  <div className="nodateall">No data available in table</div>

                  </div>

                  <div className="expense">
                    <div className="earn"><b>Total expense</b></div>
                    <div className="earn1"><b>Total earn</b></div>
                    <div className="earn2"><b>Total balance</b></div>
                  </div>

                  <div className="manual">
                    <div className="manual1"><b>0.00 Tk ( 0.00 Tk total )</b></div>
                    <div className="manual2"><b>0.00 Tk ( 0.00 Tk total )</b></div>
                    <div className="manual2"><b>0.00 Tk ( 0.00 Tk total )</b></div>
                  </div>
                
                  <div className="showingall">
                    <div className="showingsall">Showing O to O of entries</div>
                    <div className="previousall">
                      <div className="nextall">Previous</div>
                      <div className="nextall">Next</div>
                    </div>
                  </div>
             
              </div>

              </div>

              </div>



        </div>
    )
}

export default Alltransactions;