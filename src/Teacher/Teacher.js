import React from "react";
import './Teacher.css';
import Dashbord from "./Dashbord";
import ClassRouting from "./ClassRouting";
import AcademicTranscript from "./AcademicTranscript";
import StudentsPerformanceAnalysis from "./StudentsPerformanceAnalysis";
import StudentsAttendance from "./StudentsAttendance";
import Syllabus from "./Syllabus";
import { Routes, Route, Link } from "react-router-dom";

const Teacher = ()=>{
    return (

        <div>

 
          <div className="lon"><h2>Teacher Panel</h2></div>
          <nav className="lift">
            <ul>
                <div className="Teacher">
               <div className="Teac"> <li><Link to="/"><h3>Dashbord</h3></Link></li></div>
               <div className="Teac"> <li><Link to="/ClassRouting"><h3>Class Routing</h3></Link></li></div>
               <div className="Teac"> <li><Link to="/AcademicTranscript"><h3>Academic Transcript</h3></Link></li></div>
               <div className="Teac"> <li><Link to="/StudentsPerformanceAnalysis"><h3>Students Performance Analysis</h3></Link></li></div>
               <div className="Teac"> <li><Link to="/StudentsAttendance"><h3>Students Attendance</h3></Link></li></div>
               <div className="Teac">  <li><Link to="/Syllabus"><h3>Syllabus</h3></Link></li></div>
                </div>
            </ul>
            </nav>
            <div className="right">
            <Routes>
               <Route path="/" element={<Dashbord/>}/>
               <Route path="/ClassRouting" element={<ClassRouting/>}/>
               <Route path="/AcademicTranscript" element={<AcademicTranscript/>}/>
               <Route path="/StudentsPerformanceAnalysis" element={<StudentsPerformanceAnalysis/>}/>
               <Route path="/StudentsAttendance" element={<StudentsAttendance/>}/>
               <Route path="/Syllabus" element={<Syllabus/>}/>
            </Routes>
            </div>

            </div>
      
    )
}

export default Teacher;