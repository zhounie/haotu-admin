import React, { useEffect, useState, useRef } from 'react';
import Table from '../../components/table'
import { getPhotoList, setPhoto } from '../../api'

import { Modal, Form, Input, Button, Checkbox } from 'antd'

const layout = {
    labelCol: { span: 4},
    wrapperCol: { span: 20 },
}

function Photo() {
    const [tableData, setTableData] = useState([])
    const [visible, setVisible] = useState(false)
    const [initValue, setInitValue] = useState({})
    const [page, setPage] = useState({pageSize: 10, currentPage: 1, total: 10})
    const formRef = useRef()
    const columns = [
        {
            title: '上传用户',
            dataIndex: 'user_id',
            key: 'user_id'
        },
        {
            title: '是否可见',
            dataIndex: 'privacy',
            key: 'privacy',
        },
        {
            title: '图片',
            key: 'detail_url',
            render: (text, row) => (
                <img src={row.mini_url} alt="" style={{maxWidth: '200px'}} />
            )
        },{
            title: '图片格式',
            dataIndex: 'image_format',
            key: 'image_format',
        },{
            title: '图片描述',
            dataIndex: 'description',
            key: 'description',
        },
        {
            title: '图片宽度',
            dataIndex: 'width',
            key: 'width',
        },{
            title: '图片高度',
            dataIndex: 'height',
            key: 'height',
        },{
            title: '上传时间',
            dataIndex: 'created',
            key: 'created',
        },
        {
            title: 'Action',
            key: 'action',
            render: (text, record) => (
            <span>
                <a style={{ marginRight: 16 }} onClick={() => onEditData(record)}>编辑</a>
                <a>删除</a>
            </span>
            ),
        }
    ];
    useEffect(() => {
        getPhotos()
    }, [])
    let onEditData =(row) => {
        setVisible(true)
        setInitValue(row)
    }
    let getPhotos = () => {
        getPhotoList({
            page
        }).then(res=> {
            setTableData(res.data.photos)
            setPage(res.data.page)
        })
    }
    const onFinish = values => {
        console.log('Success:', values);
    };

    const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };
    const onSubmit = () => {
        formRef.current.validateFields().then(values => {
            setPhoto({...initValue, ...values}).then(res => {
                setVisible(false)
            })
        }).catch(err => {
            console.log(err);
        })
    }    
    const onChange = ({current: currentPage, pageSize}) => {
        getPhotoList({
            page: {
                currentPage,
                pageSize
            }
        }).then(res=> {
            setTableData(res.data.photos)
            setPage(res.data.page)
        })
    }
    return (
        <>
            <Modal
                title="编辑图片"
                visible={visible}
                onOk={onSubmit}
                onCancel={() => setVisible(false)}
            >
                <Form
                    {...layout}
                    name="basic"
                    initialValues={initValue}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    ref={formRef}
                >
                    <Form.Item label="是否可见" name="privacy"
                        rules={[{ required: true, message: 'Please input your username!' }]}
                    ><Input /></Form.Item>
                    <Form.Item label="图片格式" name="image_format"
                        rules={[{ required: true, message: 'Please input your username!' }]}
                    ><Input /></Form.Item>
                    <Form.Item label="图片描述" name="description"
                        rules={[{ required: true, message: 'Please input your username!' }]}
                    ><Input /></Form.Item>
                    <Form.Item label="上传用户" name="user_id"
                        rules={[{ required: true, message: 'Please input your username!' }]}
                    ><Input /></Form.Item>
                </Form>
            </Modal>
            <Table columns={columns} data={tableData} change={onChange} page={page} />
        </>
    )
}

export default Photo;