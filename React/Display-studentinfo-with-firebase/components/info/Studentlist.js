import React,{Component} from 'react'
import {Link} from "react-router-dom";
import user from "../images/user.png";

const Studentlist = (props) => {
    console.log(props);

    const renderStudentList = props.students.map((student) => {
        return (
            <div className="item">
            <img className="ui avatar image" src={user} alt="user" />
       <div className="content">
        <div className="header"> {student.name}</div>
        <div> {student.email} </div>
        <div> {student.usn} </div>
        <div> {student.sem} </div>
        <div> {student.div} </div>
        <div> {student.org} </div>
        </div>
    
    </div>        );
    });
            return(
        <div className="ui celled list">{renderStudentList}        
        </div>
    );
}
export default Studentlist;
    