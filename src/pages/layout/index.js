import React, { useState } from 'react';
import { Layout, Menu, Breadcrumb } from 'antd'
import SubMenu from 'antd/lib/menu/SubMenu';

const { Header, Content, Footer, Sider } = Layout
const { SUbMenu } = Menu

function AdminIndex () {
    const [collapsed, setCollapsed] = useState(false)
    const onCollapse = (collapsed) => {
        setCollapsed(collapsed)
    }
    return (
        <Layout style={{minHeight: '100vh'}}>
            <Sider collapsible collapsed={collapsed} onCollapse={onCollapse} >
                <div className="logo"></div>
                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                    <Menu.Item key="1">
                        <span>工作台</span>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <span>添加文章</span>
                    </Menu.Item>
                    <SubMenu key="sub1" title={
                        <span>
                            文章管理
                        </span>
                    }>
                        <Menu.Item key="3">
                            <span>文章列表</span>
                        </Menu.Item>
                    </SubMenu>
                </Menu>
            </Sider>
            <Layout>
                <Header style={{background: '#fff', padding: 0}}></Header>
                <Content style={{margin: '0 16px'}}>
                    <Breadcrumb style={{margin: '16px 0'}}>
                        <Breadcrumb.Item>后台管理</Breadcrumb.Item>
                        <Breadcrumb.Item>工作台</Breadcrumb.Item>
                    </Breadcrumb>
                    <div style={{padding: 24, background: '#fff', minHeight: 360}}>
                    博客工作台.
                    </div>
                </Content>
                <Footer style={{textAlign: 'center'}}>JOSNLFFJL</Footer>
            </Layout>
        </Layout>
    )
}

export default AdminIndex;