import { Avatar, Button, Flex, Layout, theme } from 'antd';


import { Link, Outlet } from 'react-router-dom';




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
                       
                       <Flex justify='flex-end' >
                       <Avatar
                            size={{ xs: 24, sm: 32, md: 40, lg: 50, xl: 50, xxl: 50 }}
                            shape='circle'
                            src='data:image/jpeg;base64,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'
                        />
                       
                       </Flex>



                    </Header>
                    <Content style={{ margin: '24px 16px 0' }}>
                        <div
                            style={{
                                padding: 24,
                                minHeight: 360,
                                maxWidth:'1280px'

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