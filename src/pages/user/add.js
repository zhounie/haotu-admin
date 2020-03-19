import React, { useEffect, useState, useRef, useLayoutEffect } from 'react';
import { Button, Modal, Form, Input, Checkbox } from 'antd';

const layout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 1126 },
};
const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
};

function Add({visible, closeModal, confirm, initValue}) {
    const formRef = useRef()

    useEffect(() => {
        return () => {
            if(formRef.current) {
                onReset()
            }
        }
    }, [visible])

    const onFinish = values => {
        console.log('Success:', values);
    };
    
    const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };

    const onReset = () => {
        formRef.current.resetFields()
    }
     
    const onSubmit = () => {
        formRef.current.validateFields().then(values => {
            confirm({...initValue, ...values})
        }).catch(err => {
            console.log(err);
        })
        
    }

    return (
        <Modal
            title="添加用户" visible={visible} onOk={onSubmit} onCancel={closeModal} >
            <Form
                {...layout}
                name="basic"
                initialValues={initValue}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                ref={formRef}
            >
                <Form.Item
                    label="用户名"
                    name="username"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="用户昵称"
                    name="nickname"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="邮箱"
                    name="email"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="密码"
                    name="password"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input.Password />
                </Form.Item>
            </Form>
        </Modal>
    )
}

export default Add;