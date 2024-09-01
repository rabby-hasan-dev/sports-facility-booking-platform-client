import { Avatar,  Flex, Layout, theme } from 'antd';


import { Outlet } from 'react-router-dom';




import Sidebar from './Sidebar';
import { BellOutlined, UserOutlined } from '@ant-design/icons';
import Icon from '@ant-design/icons/lib/components/Icon';


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

                        <Flex justify='flex-end' align='center' gap={16} className='m-4' >
                            <Avatar
                                size={{ xs: 24, sm: 32, md: 40, lg: 40, xl: 40, xxl: 40 }}
                                shape='circle'
                                icon={<UserOutlined />}
                            />
                            <BellOutlined />

                        </Flex>



                    </Header>
                    <Content style={{ margin: '24px 16px 0' }}>
                        <div
                            style={{
                                padding: 24,
                                minHeight: 360,
                                maxWidth: '1280px'

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