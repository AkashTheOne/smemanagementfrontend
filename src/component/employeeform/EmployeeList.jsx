// src/components/EmployeeList.js

import React, { Component } from "react";
import axios from "axios";
import { Table } from "antd";

class EmployeeList extends Component {
  state = {
    employees: [],
  };

  componentDidMount() {
    console.log("inside ");
    this.fetchEmployees();
  }

  fetchEmployees = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/employees");
      this.setState({ employees: response.data });
    } catch (error) {
      console.error("Error fetching employees: ", error);
    }
  };

  render() {
    return (
      <div>
        <h2>Employees List</h2>
        <div className="table-size">
            <Table dataSource={this.state.employees} rowKey="email">
              <Table.Column title="Employee Name" dataIndex="name" key="name" />
              <Table.Column title="Designation" dataIndex="designation" key="designation" />
              <Table.Column title="Salary" dataIndex="ctc" key="ctc" />
              <Table.Column title="Email" dataIndex="email" key="upemaili" />
            </Table>
        </div>
      </div>
    );
  }
}

export default EmployeeList;
