import React, { useState } from 'react';
import { Layout, Breadcrumb } from 'antd'
import MenuComponent from './menu'
import { Router, Switch, Route, Redirect } from 'react-router-dom'

const { Header, Content, Footer, Sider } = Layout



function AdminIndex (props) {
    const [collapsed, setCollapsed] = useState(false)
    const onCollapse = (collapsed) => {
        setCollapsed(collapsed)
    }
    
    return (
        <Layout style={{minHeight: '100vh'}}>
            <Sider collapsible collapsed={collapsed} onCollapse={onCollapse} >
                {/* <div className="logo">
                    <img src={} />
                </div> */}
                <MenuComponent />
            </Sider>
            <Layout>
                <Header style={{background: '#fff', padding: 0}}></Header>
                <Content style={{margin: '0 16px'}}>
                    <Breadcrumb style={{margin: '16px 0'}}>
                        <Breadcrumb.Item>后台管理</Breadcrumb.Item>
                        <Breadcrumb.Item>工作台</Breadcrumb.Item>
                    </Breadcrumb>
                    <div style={{padding: 24, background: '#fff', minHeight: 360}}>
                        {props.children}
                    </div>
                </Content>
                <Footer style={{textAlign: 'center'}}>JOSNLFFJL</Footer>
            </Layout>
        </Layout>
    )
}

export default AdminIndex;