
import React, { Component } from 'react';
import axios from 'axios';
import { Button, Form, Input, message } from 'antd';

class EmployeeForm extends Component {
    state = {
        email: '',
        name: '',
        designation: '',
        ctc: ''
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
            await axios.post('http://localhost:8080/api/employees', this.state);
            this.setState({
                email: '',
                name: '',
                designation: '',
                ctc: ''
            },()=>{
                message.success('Employee added successfully!');
            });
        } catch (error) {
            message.error('Error adding employee: ' + error.message);
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
                            message: "Please enter proper email id!"
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
                            message: "Please enter your name!",
                        }
                    ]}
                    >
                        <Input name="name" value={this.state.name} onChange={this.handleChange}></Input>
                    </Form.Item>

                    <Form.Item
                    label="Designation:"
                    name="designation"
                    rules={[
                        {
                            required:true,
                            message: "Please enter your designation!",
                        }
                    ]}
                    >
                        <Input name="designation" value={this.state.designation} onChange={this.handleChange}></Input>
                    </Form.Item>

                    <Form.Item
                    label="CTC:"
                    name="ctc"
                    rules={[
                        {
                            required:true,
                            message: "Please enter your designation!",
                        }
                    ]}
                    >
                        <Input name="ctc" value={this.state.ctc} onChange={this.handleChange}></Input>
                    </Form.Item>

                    <Form.Item wrapperCol={{offset:7}}>
                        <Button type='primary' htmlType='submit'> Add Employee</Button>
                    </Form.Item>
                </Form>
            </div>
        );
    }
}

export default EmployeeForm;
