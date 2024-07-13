// src/components/VendorForm.js

import React, { Component } from 'react';
import axios from 'axios';
import { Button, Form, Input, message } from 'antd';

class VendorForm extends Component {
    state = {
        vendors: [],
        email: '',
        name: '',
        upi: ''
    };

    layout = {
        labelCol: {
          span: 8,
        },
        wrapperCol: {
          span: 16,
        },
      };

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    handleSubmit = async (e) => {
        try {
            await axios.post('http://localhost:8080/api/vendors', this.state);
            this.setState({
                email: '',
                name: '',
                upi: ''
            },()=>{
                message.success('Vendor added successfully!');
            });
        } catch (error) {
            message.error('Error adding Vendor: ' + error.message);
        }
    };

    render() {
        return (
            <div className='formcss'>
                <Form onFinish={this.handleSubmit} style={{maxWidth: 600,}} {...this.layout}>
                    <Form.Item
                    label="Email:"
                    name="email"
                    rules={[
                        {
                            required:true,
                            message: "Please enter email id!"
                        }
                    ]}
                    >
                        <Input name="email" value={this.state.email} onChange={this.handleChange}></Input>
                    </Form.Item>

                    <Form.Item
                    label="Name:"
                    name="name"
                    rules={[
                        {
                            required:true,
                            message: "Please enter your name",
                        }
                    ]}
                    >
                        <Input name="name" value={this.state.name} onChange={this.handleChange}></Input>
                    </Form.Item>

                    <Form.Item
                    label="UPI:"
                    name="upi"
                    rules={[
                        {
                            required:true,
                            message: "Please enter your UPI ID",
                        }
                    ]}
                    >
                        <Input name="upi" value={this.state.upi} onChange={this.handleChange}></Input>
                    </Form.Item>

                    <Form.Item wrapperCol={{offset:7}}>
                        <Button type='primary' htmlType='submit'> Add Vendor</Button>
                    </Form.Item>
                    </Form>
            </div>
        );
    }
}

export default VendorForm;
