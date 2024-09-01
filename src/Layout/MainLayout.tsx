

import { Button, Layout, Menu, theme } from 'antd';
import { Link, NavLink, Outlet } from 'react-router-dom';
import brandLogo from '../assets/images/brandLogo.png'
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { logOut, selectCurrentUser, } from '../redux/features/auth/authSlice';
import FooterComponent from '../pages/Shared/Footer/FooterCompo';


const { Header, Content, Footer } = Layout;

const navItems = [
    {
        key: 'Home',
        label: <Link to='/' >Home</Link>
    },

    {
        key: 'Facility',
        label: <Link to='/Facilities' >Facility</Link>
    },

    {
        key: 'ContactUs',
        label: <Link to='/contactUs' >Contact Us</Link>
    },
    {
        key: 'About Us',
        label: <Link to='/aboutUs' >About Us</Link>
    },
    {
        key: 'Dashboard',
        label: <Link to='/dashboard' >Dashboard</Link>
    },

    // {
    //     key: 'BookingChecker',
    //     label: <Link to='/bookings-checker' >Booking Checker</Link>
    // },

    // {
    //     key: 'Bookings',
    //     label: <Link to='/bookings' >Bookings</Link>
    // },


]

const MainLayout: React.FC = () => {
    const user = useAppSelector(selectCurrentUser);
    const dispatch = useAppDispatch();
    const {
        token: { colorBgContainer, },
    } = theme.useToken();

    return (
        <Layout>
            <Header style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Link to='/' >
                    <div className="demo-logo h-12 w-full" >
                        <img className='h-full w-full' src={brandLogo} alt="brand_logo" />
                    </div>

                </Link>
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['2']}
                    items={navItems}
                    style={{ flex: 1, minWidth: 0, justifyContent: 'center', color:'white' }}
                />
                {
                    user ? <Button type='primary' onClick={() => dispatch(logOut())} >Logout</Button> :
                        <Link to='/login' >
                            <Button type='primary' >Login </Button>
                        </Link>
                }
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
            <Footer style={{ textAlign: 'center', backgroundColor:'#001529' }}>
                <FooterComponent></FooterComponent>
            </Footer>
        </Layout>
    );
};

export default MainLayout;