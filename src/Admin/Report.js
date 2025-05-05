import React from "react";
import './Report.css';

const Report = () =>{
  return(
    <div className="scroll">
        <div className="con">
            <div className="left1"><i class="fa-solid fa-house-chimney"></i><a href="#">Home</a>/ Report</div>
              
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

             <div className="dulo">
                
                <div className="four"><i class="fa-solid fa-list"></i>List</div>

             </div>


             <div className="report">
              <from className="reportone">
                <label htmlFor="role" className="repotone">Choose report type *</label>
                <select id="role" name="role" className="repot">
                  <option value="Report">Report by total expenses</option>
                  <option value="Report">Report by total collections</option>
                </select>

                <label htmlFor="role" className="repotone">Choose collection type *</label>
                <select id="role" name="role" className="repot">
                  <option value="all">All</option>
                  <option value="all">Collections from sales</option>
                  <option value="all">Collection report from student</option>
                </select>

                <label htmlFor="role" className="repotone">Choose accountant *</label>
                <select id="role" name="role" className="repot">
                  <option value="all">All accountants</option>
                </select>

              </from>

              <div className="dateone">
                <from className="">
                  <label htmlFor="date" className="datetwo">Choose Date *</label>
                  <input type="Date" className="date"></input>

                  <label htmlFor="role" className="datetwo">Choose Page *</label>
                  <select id="role" name="role" className="page">
                    <option value="one">1</option>
                    <option value="one">2</option>
                    <option value="one">3</option>
                    <option value="one">4</option>
                    <option value="one">5</option>
                    <option value="one">6</option>
                    <option value="one">7</option>
                    <option value="one">8</option>
                    <option value="one">9</option>
                    <option value="one">10</option>
                    <option value="one">11</option>
                    <option value="one">12</option>
                    <option value="one">13</option>
                    <option value="one">14</option>
                    <option value="one">15</option>
                    <option value="one">16</option>
                    <option value="one">17</option>
                    <option value="one">18</option>
                    <option value="one">19</option>
                    <option value="one">20</option>
                    <option value="one">21</option>
                    <option value="one">22</option>
                    <option value="one">23</option>
                    <option value="one">24</option>
                    <option value="one">25</option>
                  </select>
                </from>
              
                </div>
                
                <div className="showfo"><a href="#">Show statement</a></div>
              
            
              
             </div>


            
    </div>
  )
}

export default Report;