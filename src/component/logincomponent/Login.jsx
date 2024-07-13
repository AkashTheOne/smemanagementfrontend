import { Button, Form, Input } from 'antd';
import axios from 'axios';
import React, { Component } from 'react';

class Login extends Component {
  state = {
    userName: "",
    pwd: "",
    flag: false
  };

  layout = {
    labelCol: {
      span: 7,
    },
    wrapperCol: {
      span: 14,
    },
  };

  handleSubmit = async () => {
    try {
      const response = await axios.post('http://localhost:8080/api/login', this.state);
      this.setState({
        flag: response.data.data
      }, () => {
        this.props.onChangeValue(this.state.flag);
      });
    } catch (error) {
      alert('Error Login: ' + error.message);
    }
  };

  onHandelEvent = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className='loginFormCss'>
        <Form onFinish={this.handleSubmit} {...this.layout}>
          <Form.Item
            label="User Name:"
            name="userName"
            rules={[{
              required: true,
              message: "Please enter correct user name"
            }]}
          >
            <Input placeholder='Enter user name' name='userName' autoComplete='off' onChange={this.onHandelEvent}></Input>
          </Form.Item>
          <Form.Item
            label="Password:"
            name="pwd"
            rules={[{
              required: true,
              message: "Please enter correct password"
            }]}
          >
            <Input placeholder='Enter password' name='pwd' autoComplete='off' onChange={this.onHandelEvent}></Input>
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 12}}>
            <Button type='primary' htmlType='submit'>Login</Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

export default Login;
