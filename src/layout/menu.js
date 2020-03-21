import React from 'react'
import { Menu } from 'antd'
import { MailOutlined, AppstoreOutlined } from '@ant-design/icons';
import { useRouteMatch } from 'react-router-dom'
import { useHistory } from 'react-router-dom'

const { SubMenu } = Menu

function MenuComponent(props) {
    const match = useRouteMatch()
    const history = useHistory()
    function handleClick({ item, key, keyPath, domEvent }) {
        history.push(key)
    }
    return(
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="/" onClick={handleClick}>
                <MailOutlined />
                首页
            </Menu.Item>
            <Menu.Item key={`${match.path}/demo`} onClick={handleClick}>
                <MailOutlined />
                Demo
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
                <Menu.Item key={`${match.path}/user`} onClick={handleClick}>
                    用户列表
                </Menu.Item>
            </SubMenu>
            <Menu.Item key={`${match.path}/photo`} onClick={handleClick}>
                <MailOutlined />
                照片管理
            </Menu.Item>
        </Menu>
    )
}


export default MenuComponent;