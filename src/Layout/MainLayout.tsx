
import React from 'react';
import { Layout, Menu, theme } from 'antd';
import { Outlet } from 'react-router-dom';

const { Header, Content, Footer } = Layout;

const items = new Array(10).fill(null).map((_, index) => ({
    key: index + 1,
    label: `nav ${index + 1}`,
}));

const MainLayout: React.FC = () => {
    const {
        token: { colorBgContainer, },
    } = theme.useToken();

    return (
        <Layout>
            <Header style={{ display: 'flex', alignItems: 'center' }}>
                <div className="demo-logo" />
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['2']}
                    items={items}
                    style={{ flex: 1, minWidth: 0, justifyContent: 'center' }}
                />
                <div className="demo-logo" />
            </Header>
            <Content >

                <div
                    style={{
                        background: colorBgContainer,
                        minHeight: '100vh',
                        padding: 24,

                    }}
                >

                    <Outlet></Outlet>

                </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>
                Ant Design ©{new Date().getFullYear()} Created by Ant UED
            </Footer>
        </Layout>
    );
};

export default MainLayout;