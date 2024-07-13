// src/App.js

import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import "./App.css";
import EmployeeForm from "./component/employeeform/EmployeeForm";
import EmployeeList from "./component/employeeform/EmployeeList";
import VendorForm from "./component/vendorform/VendorForm";
import VendorList from "./component/vendorform/VendorList";
import Login from "./component/logincomponent/Login";
import { Button } from "antd";

class App extends Component {

  state={
    flag:false
  };

  onChangeValue=(flagValue)=>{
    this.setState({flag:flagValue})
  };

  onLogout=()=>{
    this.setState({flag:false})
  };

  render() {
    return (
      <div>
         {!this.state.flag ? (
          <Login onChangeValue={this.onChangeValue} />
        ) : (
      <Router>
        <div className="App">
          <header>
            <div className="App-header">
            <h1>SME Management</h1>
            <span className="logoutButtonCss"><Button htmlType="button" onClick={this.onLogout}>Logout</Button></span>
            </div>
            <nav className="nav-part">
              <ul>
                <li><Link className="nav-link" to="/">Home</Link></li>
                <li><Link className="nav-link" to="/employees">Employees</Link></li>
                <li><Link className="nav-link" to="/employeesdata">Employees List</Link></li>
                <li><Link className="nav-link" to="/vendors">Vendors</Link></li>
                <li><Link className="nav-link" to="/vendorsdata">Vendors List</Link></li>
              </ul>
            </nav>
          </header>
          <div className="App-body">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/employees" element={<Employee />} />
              <Route path="/employeesdata" element={<EmployeeData />} />
              <Route path="/vendors" element={<Vendor />} />
              <Route path="/vendorsdata" element={<VendorData />} />
            </Routes>
          </div>
        </div>
      </Router>
      )}
      </div>
    );
  }
}

const Home = () => (
  <div style={{margin:"200px"}}>
    <h2>Welcome to Payment Management</h2>
  </div>
);

const Employee = () => (
  <div>
    <EmployeeForm />
  </div>
);

const EmployeeData = () => (
  <div>
    <EmployeeList />
  </div>
);

const Vendor = () => (
  <div>
    <VendorForm />
  </div>
);

const VendorData = () => (
  <div>
    <VendorList />
  </div>
);

export default App;
