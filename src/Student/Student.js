import React from "react";
import Dashbord from "./Dashbord";
import ClassRoom from "./ClassRoom";
import ClassRouting from "./ClassRouting";
import SelfAcademicTranscript from "./SelfAcademicTranscript";
import SelfAccounts from "./SelfAccounts";
import SelfAttendance from "./SelfAttendance";
import Syllabus from "./Syllabus";
import { Routes, Route, Link } from "react-router-dom";
import '@fortawesome/fontawesome-free/css/all.min.css';
import './Student.css';


const Student = ()=>{
    return (
      
             <div>
                <div className="Stu"><h2>Student Panel</h2></div>

                <nav className="lift">
                    <ul>
                        
                        <div className="Student">
                       <div className="model">  <li><Link to="/"><h3><i class="fa-solid fa-chart-line"></i> Dashbord</h3></Link></li></div>
                       <div className="model">  <li><Link to="/ClassRoom"><h3>Class Room</h3></Link></li></div>
                       <div className="model">  <li><Link to="/ClassRouting"><h3><i class="fa-solid fa-book-open"></i> Class Routing</h3></Link></li></div>
                       <div className="model">  <li><Link to="/SelfAcademicTranscript"><h3>Self Academic Transcript</h3></Link></li></div>
                       <div className="model">  <li><Link to="/SelfAccounts"><h3> <i class="fa-solid fa-image-portrait"></i> Self Accounts</h3></Link></li></div>
                       <div className="model">  <li><Link to="/SelfAttendance"><h3>Self Attendance</h3></Link></li></div>
                       <div className="model">  <li><Link to="/Syllabus"><h3><i class="fa-solid fa-book"></i> Syllabus</h3></Link></li></div>
                        </div>
                        
                    </ul>
                </nav>
               
               <div className="right">
               <Routes>
                <Route path="/" element={<Dashbord/>}/>
                <Route path="/ClassRoom" element={<ClassRoom/>}/>
                <Route path="/ClassRouting" element={<ClassRouting/>}/>
                <Route path="/SelfAcademicTranscript" element={<SelfAcademicTranscript/>}/>
                <Route path="/SelfAccounts" element={<SelfAccounts/>}/>
                <Route path="/SelfAttendance" element={<SelfAttendance/>}/>
                <Route path="/Syllabus" element={<Syllabus/>}/>
               </Routes>
               </div>
            </div>
    )
}

export default Student;