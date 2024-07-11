import { Form, Input } from 'antd';
import React, { Component } from 'react'

class Login extends Component {
  render() {
    return (
      <div>
        <Form>
            <Form.Item
            label="User Name:"
            name="username"
            rules={[{
                required:true,
                message:"Please enter correct user name"
            }]}
            >
            <Input placeholder='Enter user name' name='username' autoComplete='off'></Input>
            </Form.Item>
        </Form>
        <Form>
            <Form.Item
            label="Password:"
            name="password"
            rules={[{
                required:true,
                message:"Please enter correct password"
            }]}
            >
            <Input placeholder='Enter password' name='password' autoComplete='off'></Input>
            </Form.Item>
            <Form.Item wrapperCol={{offset:7}}>
                <Button type='primary' htmlType='submit'></Button>
            </Form.Item>
        </Form>
      </div>
    )
  }
}

export default Login;