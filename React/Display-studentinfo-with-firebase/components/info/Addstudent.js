import React, { Component } from 'react'
import {BrowserRouter as Router,Link} from "react-router-dom";

class AddStudent extends React.Component
{
  state = {
  name: "",email: "",usn: "", sem: "",div: "",org: ""    
  };
  add = (e) => {
    e.preventDefault();
    if (this.state.name === "" || this.state.email === ""|| this.state.usn === ""|| this.state.sem === ""|| this.state.div === ""||this.state.org === "") {
      alert("ALl the fields are mandatory!");
      return;
    }
    this.props.addStudentHandler(this.state);
    this.setState({ name: "", email: "", usn: "", sem: "", div: "",org:"" });
  };
    render(){
        return(
            <div className="ui main">
                <h2>Event Registration Form</h2>
        <form className="ui form" onSubmit={this.add}>
          <div className="field">
            <label>Student Name</label>
    <input type="text" name="name" placeholder="Name"
      value={this.state.name}
     onChange={(e) => 
      this.setState({ name: e.target.value })}
         />
          </div>
          <div className="field">
            <label>Event Name</label>
            <input
              type="text"
              name="email"
              placeholder="Event Name"
              value={this.state.email}
              onChange={(e) => this.setState({ email: e.target.value })}
                 />
          </div>
          <div className="field">
            <label>Type of event</label>
            <input
              type="text"
              name="usn"
              placeholder="type of event"
              value={this.state.usn}
              onChange={(e) => this.setState({ usn: e.target.value })}
                 />
          </div>
          <div className="field">
            <label>Semester</label>
            <input
              type="text"
              name="sem"
              placeholder="Semester"
              value={this.state.sem}
              onChange={(e) => this.setState({ sem: e.target.value })}
                 />
          </div>
          <div className="field">
            <label>Division</label>
            <input
              type="text"
              name="div"
              placeholder="Division"
              value={this.state.div}
              onChange={(e) => this.setState({ div: e.target.value })}
                 />
          </div>
          <div className="field">
            <label>Organizer</label>
            <input
              type="text"
              name="org"
              placeholder="Organizer"
              value={this.state.org}
              onChange={(e) => this.setState({ org: e.target.value })}
                 />
          </div>
          <button className="ui button blue">
            Register</button>
        </form>
      </div>
        )

    }
    
}
export default AddStudent;