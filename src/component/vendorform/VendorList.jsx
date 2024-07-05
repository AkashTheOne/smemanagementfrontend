import React, { Component } from "react";
import axios from "axios";
import { Button, message, Table } from "antd";

class VendorList extends Component {
  state = {
    vendors: [],
  };

  componentDidMount() {
    this.fetchVendors();
  }

  handleSendEmail = async (email) => {
    try {
      message.success(`Email sent to ${email}`);
    } catch (error) {
      console.error("Error sending email: ", error);
      message.error(`Failed to send email to ${email}`);
    }
  };

  fetchVendors = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/vendors");
      this.setState({ vendors: response.data });
    } catch (error) {
      console.error("Error fetching vendors: ", error);
    }
  };

  render() {
    return (
      <div>
        <h2>Vendors</h2>
        <div className="table-size">
        <Table dataSource={this.state.vendors} rowKey="email">
          <Table.Column title="Name" dataIndex="name" key="name" />
          <Table.Column title="Email" dataIndex="email" key="email" />
          <Table.Column title="UPI ID" dataIndex="upi" key="upi" />
          <Table.Column
            title="Action"
            key="action"
            render={(text, record) => (
              <Button
                type="primary"
                onClick={() => this.handleSendEmail(record.email)}
              >
                Send Email
              </Button>
            )}
          />
        </Table>
        </div>
      </div>
    );
  }
}

export default VendorList;
