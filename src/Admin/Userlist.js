import React from "react";
import './Userlist.css';

const Userlist = () =>{
  return(
    <div className="scroll">
        <div className="con">
            <div className="left1"><i class="fa-solid fa-house-chimney"></i><a href="#">Home</a>/ User List</div>
              
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


             <div className="Userlisttype">
            
            <div className="Userlist">
               
               <div className="Userlistlist"><i class="fa-solid fa-list"></i>List</div>

            <div className="Userlistschedule"><i class="fa-solid fa-circle-plus"></i>Add new user</div>

            </div>
             
             <from className="search12">
               <label htmlFor="role" className="showsearch12"><b>Show</b></label>
               <select id="role" name="role" className="searone12">
                 <option value="1">10</option>
                 <option value="1">15</option>
                 <option value="1">20</option>
                 <option value="1">25</option>
               </select>


               <label htmlFor="search" className="showsearch12"><b>Search :</b></label>
               <input type="search" className="sear12" placeholder="Search"></input>
             </from>
             

            <div className="onestatus12">
               <div className="status12">

                 <div className="UserInfo"><b>User ID</b></div>
                 <div className="UserInfo1"><b>User Info</b></div>
                 <div className="UserInfo2"><b>Role</b></div>
                 <div className="UserInfo3"><b>Status</b></div>
                 <div className="UserInfo4"><b>Action</b></div>
                  
                 </div>
                 
                 <div className="superadminn">
                 <div className="superadmin"><br></br>admin</div>
                 <div className="superadmin1"><address>Name : Super Admin<br></br>
                 E-mail :<br></br>
                 Password : 01709094992
                  </address></div>
                 <div className="superadmin2"><br></br>superadmin</div>
                 <div className="superadmin3"></div>
                 <div className="superadmin4"></div></div>

               

                 </div>
               
                 <div className="showing12">
                   <div className="showings12">Showing 1 to 1 of entries</div>
                   <div className="previous12">
                     <div className="next12">Previous</div>
                     <div className="next13">1</div>
                     <div className="next12">Next</div>
                   </div>
                 </div>
            
             </div>
             

             
    </div>
  )
}

export default Userlist;