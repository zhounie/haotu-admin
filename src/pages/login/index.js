import React, { useState } from 'react'

import {Button, Card, Input, Icon, Spin} from 'antd'

import {
    UserOutlined,
    KeyOutlined
} from '@ant-design/icons';

import 'antd/dist/antd.css'


const [userName, setUserName] = useState('')
const [password, setPassword] = useState('')
const [isLoading, setIsLoading] = useState(false)

const Login = () => {
    const checkLogin = () => {
        
    }
    return (
        <div className="login-div">
            <Spin tip="Loading..." spinning={isLoading}>
                <Card title="JSPang Blog  System" bordered={true} style={{ width: 400 }} >
                    <Input
                        id="userName"
                        size="large"
                        placeholder="Enter your userName"
                        prefix={<UserOutlined twoToneColor="rgba(0,0,0,.25)" />}
                        onChange={(e)=>{setUserName(e.target.value)}}
                    /> 
                    <br/><br/>
                    <Input.Password
                        id="password"
                        size="large"
                        placeholder="Enter your password"
                        prefix={<KeyOutlined twoToneColor="rgba(0,0,0,.25)" />}
                        onChange={(e)=>{setPassword(e.target.value)}}
                    />     
                    <br/><br/>
                    <Button type="primary" size="large" block onClick={checkLogin} > Login in </Button>
                </Card>
            </Spin>
        </div>
    )
}
export default Login;