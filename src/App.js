// src/App.js

import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import "./App.css";
import EmployeeForm from "./component/employeeform/EmployeeForm";
import EmployeeList from "./component/employeeform/EmployeeList";
import VendorForm from "./component/vendorform/VendorForm";
import VendorList from "./component/vendorform/VendorList";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header>
            <h1 className="App-header">SME Management</h1>
            <nav className="nav-part">
              <ul>
                <li><Link className="nav-link" to="/">Home</Link></li>
                <li><Link to="/employees">Employees</Link></li>
                <li><Link to="/employeesdata">Employees List</Link></li>
                <li><Link to="/vendors">Vendors</Link></li>
                <li><Link to="/vendorsdata">Vendors List</Link></li>
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
