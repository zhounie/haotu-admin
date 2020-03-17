import React from 'react'
import { Menu } from 'antd'
import { MailOutlined, AppstoreOutlined } from '@ant-design/icons';
import { withRouter } from 'react-router-dom'
const { SubMenu } = Menu



function MenuComponent(props) {
    function handleClick({ item, key, keyPath, domEvent }) {
        console.log({ item, key, keyPath, domEvent });
        props.history.push(key)
    }
    
    return(
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="/" onClick={handleClick}>
                <MailOutlined />
                首页
            </Menu.Item>
            <SubMenu
                key="sub1"
                title={
                    <span>
                        <AppstoreOutlined />
                        <span>用户管理</span>
                    </span>
                }
            >
                <Menu.Item key="/user" onClick={handleClick}>
                    用户列表
                </Menu.Item>
            </SubMenu>
            <Menu.Item key="/photo" onClick={handleClick}>
                <MailOutlined />
                照片管理
            </Menu.Item>
        </Menu>
    )
}


export default withRouter(MenuComponent);