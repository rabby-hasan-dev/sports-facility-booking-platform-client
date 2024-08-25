import { Layout, theme } from 'antd';


import { Outlet } from 'react-router-dom';


import Sidebar from './Sidebar';


const { Header, Content, } = Layout;


const Dashboard = () => {
    const {
        token: { colorBgContainer },
    } = theme.useToken();

   


    return (
        <div>
            <Layout style={{ height: '100%' }}>
                <Sidebar></Sidebar>
                <Layout>
                    <Header style={{ padding: 0, background: colorBgContainer }} >
                       <div id='for Need'></div>
                    </Header>
                    <Content style={{ margin: '24px 16px 0' }}>
                        <div
                            style={{
                                padding: 24,
                                minHeight: 360,
                               
                            }}
                        >
                            <Outlet></Outlet>
                        </div>
                    </Content>

                </Layout>
            </Layout>
        </div>
    );
};

export default Dashboard;