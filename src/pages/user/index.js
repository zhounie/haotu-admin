import React, { useEffect, useState } from 'react';
import Table from '../../components/table'
import { getUserList } from '../../api'

import { Button, Modal, Form, Input, Checkbox } from 'antd';


const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: text => <a>{text}</a>,
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <span>
          <a style={{ marginRight: 16 }}>Invite {record.name}</a>
          <a>Delete</a>
        </span>
      ),
    },
  ];
  
const data = [
    {
        key: '1',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
        tags: ['nice', 'developer'],
    },
    {
        key: '2',
        name: 'Jim Green',
        age: 42,
        address: 'London No. 1 Lake Park',
        tags: ['loser'],
    },
    {
        key: '3',
        name: 'Joe Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
        tags: ['cool', 'teacher'],
    },
];
const layout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 16 },
};


const onFinish = values => {
  console.log('Success:', values);
};

const onFinishFailed = errorInfo => {
  console.log('Failed:', errorInfo);
};

function User() {
    const [visible, setVisible] = useState(true)
    useEffect(() => {
      getUserList().then(res=> {
        console.log(res)
      })
    })

    let showModal = () => {
      setVisible(true)
    };
    
    let handleOk = e => {
      setVisible(false)
    };
    
    let handleCancel = e => {
      setVisible(false)
    };

    return (
        <>
          <Button type="primary" onClick={showModal}>添加</Button>

          <Modal
            title="添加用户"
            visible={visible}
            onOk={handleOk}
            onCancel={handleCancel}
          >
              <Form
                {...layout}
                name="basic"
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
              >
                <Form.Item
                  label="Username"
                  name="username"
                  rules={[{ required: true, message: 'Please input your username!' }]}
                >
                  <Input />
                </Form.Item>

                <Form.Item
                  label="Password"
                  name="password"
                  rules={[{ required: true, message: 'Please input your password!' }]}
                >
                  <Input.Password />
                </Form.Item>
              </Form>
          </Modal>

          <Table columns={columns} data={data} />
        </>
    )
}

export default User;