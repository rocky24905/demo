import React from "react";
import './Guardian.css';
import { Routes, Route, Link } from "react-router-dom";
import '@fortawesome/fontawesome-free/css/all.min.css';
import Dashbord from "./Dashbord";
import Syllabus from "./Syllabus";
import ClassRoting from "./ClassRoting";
import ChildAttendance from "./ChildsAttendance";
import AcademicTranscript from "./AcademicTranscript";
import Accounts from "./Accounts";
import ChildPerformance from './ChildPerformance';


const Guardian = ()=>{
    return (
       
    <div >
        

           <div className="Guar"><h2>Guardian Panel</h2></div>
        <nav className="lift">
            
        <ul>
                <div className="Guardian">
               <div className="ginput">  <li><Link to="/"><h3> <i class="fa-solid fa-chart-line"></i> Dashbord</h3></Link></li></div>
               <div className="ginput">  <li><Link to="/accounts"><h3> <i class="fa-solid fa-user"></i> Accounts</h3></Link></li></div>
               <div className="ginput">  <li><Link to="/classRoting"><h3> <i class="fa-solid fa-book-open"></i> Class Roting</h3></Link></li></div>
               <div className="ginput">  <li><Link to="/syllabus"><h3> <i class="fa-solid fa-book"></i> Syllabus</h3></Link></li></div>
               <div className="ginput">  <li><Link to="/childAttendance"><h3> <i class="fa-solid fa-child"></i> Child Attendance</h3></Link></li></div>
               <div className="ginput">  <li><Link to="/childPerformance"><h3> <i class="fa-solid fa-chart-simple"></i> Child Performance</h3></Link></li></div>
               <div className="ginput">  <li><Link to="/academicTranscript"><h3>Academic Transcript</h3></Link></li></div>
               </div>
            </ul>
        </nav>

        <div className="right">
        <Routes>
            <Route path="/" element={<Dashbord/>}/>
            <Route path="/accounts" element={<Accounts/>}/>
            <Route path="/classRoting" element={<ClassRoting/>}/>
            <Route path="/syllabus" element={<Syllabus/>}/>
            <Route path="/childAttendance" element={<ChildAttendance/>}/>
            <Route path="/childPerformance" element={<ChildPerformance/>}/>
            <Route path="/academicTranscript" element={<AcademicTranscript/>}/>
        </Routes>
        </div>
    </div>
        
    )
}

export default Guardian;