import React, { useState, useEffect } from "react";
import './App1.css';
import Addstudent from "./Components/Info/Addstudent"
import Studentlist from "./Components/Info/Studentlist";
import {BrowserRouter as Router,Link} from 'react-router-dom';
import { Route } from "react-router";
function App1() {
 /* const students =[
    {
    id:"1",
    "name":"Namita",
    "email":"nsk@gmail.com", "usn":"01fe17mcs018", "sem":"5","div":"C"
  }
  ];*/
  const LOCAL_STORAGE_KEY = "students";
  const [students, setStudents] = useState([]);
  const addStudentHandler = (student)=>{
    console.log(student);
    setStudents([...students,student]);
  }
  useEffect(() => {
    const retriveStudents = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (retriveStudents) setStudents(retriveStudents);
  }, []);
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(students));
  }, [students]);
  
  return (
    <div className="ui container">
    <Addstudent addStudentHandler={addStudentHandler}></Addstudent>
        <Studentlist students={students}></Studentlist>
  
    </div>
  );
}

export default App1;
