import React from "react";
import Admin from './Admin/Admin';
import Guardian from './Guardian/Guardian';
import Student from './Student/Student'
import Teacher from './Teacher/Teacher';
import Login from './Admin/Login';
import { BrowserRouter } from "react-router-dom";

const App= ()=>{
  return(
    <BrowserRouter>
  <Admin/>
  {/* <Guardian/> */}
  {/* <Student/> */}
  {/* <Teacher/> */}
  {/* <Login/> */}

</BrowserRouter>
  )
}
export default App;