import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'

import Table from '../../components/table'
import { getUserList, addUser, editUser } from '../../api'

import { Button } from 'antd';

import { TITLE, STATE } from '../../store/types'

import Add from './add'


function User() {
    const [visible, setVisible] = useState(false)
    const [isEdit, setIsEdit] = useState(false)
    const [tableData, setTableData] = useState([])
    const [initValue, setInitValue] = useState({})
    const dispatch = useDispatch()

    useEffect(() => {
      getUsers()
    }, [])

    const columns = [
      {
        title: '用户账号',
        dataIndex: 'username',
        key: 'username'
      },
      {
        title: '用户昵称',
        dataIndex: 'nickname',
        key: 'nickname',
      },
      {
        title: '邮箱',
        dataIndex: 'email',
        key: 'email',
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
    
    let onEditData = (row) => {
      setInitValue(row)     
      setIsEdit(true)
      setVisible(true)
    }

    let getUsers = () => {
      getUserList().then(res=> {
        setTableData(res.data)
      })
    }

    let state = useSelector(state => state.state)
    let showModal = () => {
      setIsEdit(false)
      setVisible(true)
      setInitValue({})
    };
    let closeModal = () => {
      setVisible(false)
    }
    let handleState = () => {
      dispatch({ type: STATE, data: !state })
    }
    let confirm = (data) => {
      if (isEdit) {
        editUser(data).then(res=>{
          if (res.code === 200) {
            getUsers()
            closeModal()
          }
        })
      } else {
        addUser(data).then(res=>{
          if (res.code === 200) {
            getUsers()
            closeModal()
          }
        })
      }
    }
    return (
        <>
          <Button type="primary" onClick={showModal}>添加</Button>
          <Add initValue={initValue} visible={visible} closeModal={closeModal} confirm={confirm}/>
          <Table columns={columns} data={tableData} />
        </>
    )
}

export default User;