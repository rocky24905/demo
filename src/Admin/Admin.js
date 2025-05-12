import React from "react";
import './Admin.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import {  Routes, Route, Link } from "react-router-dom";
import Dashbord from "./Dashbord";
import Account from "./Account";
import Student from "./Student";
import Guardians from "./Guardians";
import Teacher from "./Teacher";
import Eventcalender from "./Eventcalender";
import Manageclasses from "./Manageclasses";
import Managesubject from "./Managesubject";
import Managerouting from "./Managerouting";
import Assingteachershift from "./Assingteachershift";
import Studentattendance from "./Studentattendance";
import Teacherattendance from "./Teacherattendance";
import Exam from "./Exam";
import Examschedule from "./Examschedule";
import Examattendance from "./Examattendance";
import Examseatplan from "./Examseatplan";
import Gradasetup from "./Gradasetup";
import QuestionMaker from "./QuestionMaker"
import Admitcard from "./Admitcard";
import Academictrenscript from "./Academictrenscript";
import Academicmeritlist from "./Academicmeritlist";
import Manualfinalmeritlist from "./Manualfinalmeritlist";
import Academictabulationsheet from "./Academictabulationsheet";
import Markmanagement from "./Markmanagement";
import Markdistribution from "./Markdistribution";
import Alltransactions from "./Alltransactions";
import Studentfees from "./Studentfees";
import Sellmanager from "./Sellmanager";
import Selltype from "./Selltype";
import Servicetype from "./Servicetype";
import Expensemanager from "./Expensemanager";
import Expensetype from "./Expensetype";
import Report from "./Report";
import Hostellist from "./Hostellist";
import Hostelroomlist from './Hostelroomlist';
import Transporttype from "./Transporttype";
import Transportlist from "./Transportlist";
import Managefeetypes from "./Managefeetypes";
import Manageadmissionfees from "./Manageadmissionfees";
import Managesessionfees from "./Managesessionfees";
import Managemonthlyfees from "./Managemonthlyfees";
import Notice from "./Notice";
import Noticetype from "./Noticetype";
import Certificate from "./Certificate";
import Cetificatetype from "./Cetificatetype";
import Userrole from "./Userrole";
import Userlist from "./Userlist";
import Enginesetting from "./Enginesetting";



const Admin = ()=>{
   
    return (
     
    
       <div className="contant">
        
        
        <div className="Admin">
          <div className="profile">pic</div><h2>Super Admin</h2>
          </div>
        
       <div className="menu">
        <ul>
          <div className="adminscroll">
          <div className="lift">
          
          <div className="menutwo"><b>PAGE</b></div>
         <div className="menuone"> <li><Link to="/"> <i class="fa-regular fa-square"></i> Dashbord</Link></li></div>
         <div className="menuone"><li><Link to="/Account">Account</Link></li></div><br></br><hr></hr>
         <div className="menutwo"><b>MANAGER</b></div>
        <div className="menuone"> <li><Link to="/Student"> <i class="fa-solid fa-user-graduate"></i> Student</Link></li></div>
        <div className="menuone"><li><Link to="/Guardians"><i class="fa-solid fa-user-group"></i> Guardians</Link></li></div>
        <div className="menuone"><li><Link to="/Teacher"><i class="fa-solid fa-user-large"></i> Teacher</Link></li></div>
        <div className="menuone"> <li><Link to="/Eventcalender"><i class="fa-solid fa-calendar-days"></i> Event Calender</Link></li></div><hr></hr><br></br>
        <div className="menutwo"><b>ACADEMIC SETUP</b></div>
        <div className="menuone"> <li><Link to="/Manageclasses"><i class="fa-solid fa-list"></i> Manage Classes</Link></li></div>
        <div className="menuone"> <li><Link to="/Managesubject"><i class="fa-solid fa-book"></i> Manage Subject</Link></li></div>
        <div className="menuone"> <li><Link to="/Managerouting"><i class="fa-solid fa-list"></i> Manage Routing</Link></li></div>
        <div className="menuone"> <li><Link to="/Assingteachershift"><i class="fa-solid fa-clock"></i> Assing Teacher Shift</Link></li></div><hr></hr><br></br>
        <div className="menutwo"><b>ATTENDANCE SETUP</b></div>
        <div className="menuone"> <li><Link to="/Studentattendance"><i class="fa-solid fa-user-graduate"></i> Student Attendance</Link></li></div>
        <div className="menuone"> <li><Link to="/Teacherattendance"><i class="fa-solid fa-user-large"></i> Teacher Attendance</Link></li></div><hr></hr><br></br>
        <div className="menutwo"><b>EXAM MANAGEMENT</b></div>
        <div className="menuone"> <li><Link to="/Exam"><i class="fa-solid fa-list"></i> Exam</Link></li></div>
        <div className="menuone"> <li><Link to="/Examschedule"><i class="fa-solid fa-clock"></i> Exam Schedule</Link></li></div>
        <div className="menuone"> <li><Link to="/Examattendance"><i class="fa-solid fa-chart-bar"></i> Exam Attendance</Link></li></div>
        <div className="menuone"> <li><Link to="/Examseatplan"><i class="fa-solid fa-bars-staggered"></i> Exam Seat Plan</Link></li></div>
        <div className="menuone"> <li><Link to="/Gradasetup"><i class="fa-solid fa-list"></i> Grada Setup</Link></li></div>
        <div className="menuone"> <li><Link to="/QuestionMaker"><i class="fa-solid fa-list"></i>Question Maker </Link></li></div>
        <div className="menuone"> <li><Link to="/Admitcard"> <i class="fa-regular fa-address-card"></i> Admit Card</Link></li></div>
        <div className="menuone"> <li><Link to="/Academictrenscript"><i class="fa-solid fa-chart-pie"></i> Academic Trenscript</Link></li></div>
        <div className="menuone"> <li><Link to="/Academicmeritlist"><i class="fa-solid fa-industry"></i> Academic Merit List</Link></li></div>
        <div className="menuone"> <li><Link to="/Manualfinalmeritlist"><i class="fa-solid fa-industry"></i>Manual Final Merit List</Link></li></div>
        <div className="menuone"> <li><Link to="/Academictabulationsheet"><i class="fa-regular fa-address-card"></i> Academic Tabulation Sheet</Link></li></div><hr></hr><br></br>
        <div className="menutwo"><b>MARK SETUP</b></div>
        <div className="menuone"> <li><Link to="/Markmanagement"><i class="fa-solid fa-gears"></i> Mark Management</Link></li></div>
        <div className="menuone"> <li><Link to="/Markdistribution"><i class="fa-solid fa-sitemap"></i> Mark Bistribution</Link></li></div><hr></hr><br></br>
        <div className="menutwo"><b>ACCOUNTS</b></div>
        <div className="menuone"> <li><Link to="/Alltransactions"><i class="fa-solid fa-list"></i> All Transactions</Link></li></div>
        <div className="menuone"> <li><Link to="/Studentfees"><i class="fa-solid fa-hand-holding-dollar"></i> Student Fees</Link></li></div>
        <div className="menuone"> <li><Link to="/Sellmanager"><i class="fa-solid fa-magnifying-glass-dollar"></i> Sell Manager</Link></li></div>
        <div className="menuone"> <li><Link to="/Selltype"><i class="fa-solid fa-list"></i> Sell Type</Link></li></div>
        <div className="menuone"> <li><Link to="/Servicetype"><i class="fa-solid fa-list"></i> Service Type</Link></li></div>
        <div className="menuone"> <li><Link to="/Expensemanager"><i class="fa-solid fa-hand-holding-dollar"></i> Expense Manager</Link></li></div>
        <div className="menuone"> <li><Link to="/Expensetype"><i class="fa-solid fa-list"></i> Expense Type</Link></li></div>
        <div className="menuone"> <li><Link to="/Report"><i class="fa-solid fa-chart-line"></i> Report</Link></li></div><hr></hr><br></br>
        <div className="menutwo"><b>HOSTAL MANAGER</b></div>
        <div className="menuone"> <li><Link to="/Hostellist"><i class="fa-solid fa-rectangle-list"></i> Hostel List</Link></li></div>
        <div className="menuone"> <li><Link to="/Hostelroomlist"><i class="fa-solid fa-bed-pulse"></i> Hostel Room List</Link></li></div><hr></hr><br></br>
        <div className="menutwo"><b>TRANSPORT MANAGER</b></div>
        <div className="menuone"> <li><Link to="/Transporttype"><i class="fa-solid fa-list"></i> Transport Type</Link></li></div>
        <div className="menuone"> <li><Link to="/Transportlist"><i class="fa-solid fa-bus-simple"></i> Transport List</Link></li></div><hr></hr><br></br>
        <div className="menutwo"><b>FEE SETUP</b></div>
        <div className="menuone"> <li><Link to="/Managefeetypes"> <i class="fa-solid fa-list"></i> Manage Fee Types</Link></li></div>
        <div className="menuone"> <li><Link to="/Manageadmissionfees"><i class="fa-solid fa-hand-holding-dollar"></i> Manage Admission Fees</Link></li></div>
        <div className="menuone"> <li><Link to="/Managesessionfees"><i class="fa-solid fa-hand-holding-dollar"></i> Manage Session Fees</Link></li></div>
        <div className="menuone"> <li><Link to="/Managemonthlyfees"><i class="fa-solid fa-magnifying-glass-dollar"></i> Manage Monthly Fees</Link></li></div><hr></hr><br></br>
        <div className="menutwo"><b>OTHER MANAGER</b></div>
        <div className="menuone"> <li><Link to="/Notice"><i class="fa-regular fa-clipboard"></i> Notice</Link></li></div>
        <div className="menuone"> <li><Link to="/Noticetype"> <i class="fa-solid fa-list"></i> Notice Type</Link></li></div>
        <div className="menuone"> <li><Link to="/Certificate"><i class="fa-solid fa-list"></i> Certificate</Link></li></div>
        <div className="menuone"> <li><Link to="/Cetificatetype"><i class="fa-solid fa-list"></i> Cetificate Type</Link></li></div><hr></hr><br></br>
        <div className="menutwo"><b>USER MANAGER</b></div>
        <div className="menuone"> <li><Link to="/Userrole"><i class="fa-solid fa-users"></i> User Role</Link></li></div>
        <div className="menuone"> <li><Link to="/Userlist"><i class="fa-solid fa-user"></i> User List</Link></li></div><hr></hr><br></br>
        <div className="menutwo"><b>SETTING</b></div>
        <div className="menuone"> <li><Link to="/Enginesetting"><i class="fa-solid fa-gears"></i> Engine Setting</Link></li></div><hr></hr>
        


         
         
    </div>
    </div>
        </ul>
       

       <div className="right">

        

     <Routes>

      <Route path="/" element={<Dashbord/>}/>
      <Route path="/Account" element={<Account/>}/>
      <Route path="/Student" element={<Student/>}/>
      <Route path="/Guardians" element={<Guardians/>}/>
      <Route path="/Teacher" element={<Teacher/>}/>
      <Route path="/Eventcalender" element={<Eventcalender/>}/>
      <Route path="/Manageclasses" element={<Manageclasses/>}/>
      <Route path="/Managesubject" element={<Managesubject/>}/>
      <Route path="/Managerouting" element={<Managerouting/>}/>
      <Route path="/Assingteachershift" element={<Assingteachershift/>}/>
      <Route path="/Studentattendance" element={<Studentattendance/>}/>
      <Route path="/Teacherattendance" element={<Teacherattendance/>}/>
      <Route path="/Exam" element={<Exam/>}/>
      <Route path="/Examschedule" element={<Examschedule/>}/>
      <Route path="/Examattendance" element={<Examattendance/>}/>
      <Route path="/Examseatplan" element={<Examseatplan/>}/>
      <Route path="/Gradasetup" element={<Gradasetup/>}/>
      <Route path="/QuestionMaker" element={<QuestionMaker/>}/>
      <Route path="/Admitcard" element={<Admitcard/>}/>
      <Route path="/Academictrenscript" element={<Academictrenscript/>}/>
      <Route path="/Academicmeritlist" element={<Academicmeritlist/>}/>
      <Route path="/Manualfinalmeritlist" element={<Manualfinalmeritlist/>}/>
      <Route path="/Academictabulationsheet" element={<Academictabulationsheet/>}/>
      <Route path="/Markmanagement" element={<Markmanagement/>}/>
      <Route path="/Markdistribution" element={<Markdistribution/>}/>
      <Route path="/Alltransactions" element={<Alltransactions/>}/>
      <Route path="/Studentfees" element={<Studentfees/>}/>
      <Route path="/Sellmanager" element={<Sellmanager/>}/>
      <Route path="/Selltype" element={<Selltype/>}/>
      <Route path="/Servicetype" element={<Servicetype/>}/>
      <Route path="/Expensemanager" element={<Expensemanager/>}/>
      <Route path="/Expensetype" element={<Expensetype/>}/>
      <Route path="/Report" element={<Report/>}/>
      <Route path="/Hostellist" element={<Hostellist/>}/>
      <Route path="/Hostelroomlist" element={<Hostelroomlist/>}/>
      <Route path="/Transporttype" element={<Transporttype/>}/>
      <Route path="/Transportlist" element={<Transportlist/>}/>
      <Route path="/Managefeetypes" element={<Managefeetypes/>}/>
      <Route path="/Manageadmissionfees" element={<Manageadmissionfees/>}/>
      <Route path="/Managesessionfees" element={<Managesessionfees/>}/>
      <Route path="/Managemonthlyfees" element={<Managemonthlyfees/>}/>
      <Route path="/Notice" element={<Notice/>}/>
      <Route path="/Noticetype" element={<Noticetype/>}/>
      <Route path="/Certificate" element={<Certificate/>}/>
      <Route path="/Cetificatetype" element={<Cetificatetype/>}/>
      <Route path="/Userrole" element={<Userrole/>}/>
      <Route path="/Userlist" element={<Userlist/>}/>
      <Route path="/Enginesetting" element={<Enginesetting/>}/>

     </Routes>

     </div>
     </div> 
     </div>
    
     
    )
}

export default Admin;