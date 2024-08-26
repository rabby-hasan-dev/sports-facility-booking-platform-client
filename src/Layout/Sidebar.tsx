import { Layout, Menu } from 'antd';
import { sidebarItemsGenerator } from '../utils/sidebarItemsGenerator';
import { adminPaths } from '../routes/admin.routes';
import { userPaths } from '../routes/user.routes';
import { USER_ROLE } from '../constant/userConstant';
import { TUser, useCurrentToken } from '../redux/features/auth/authSlice';
import { useAppSelector } from '../redux/hooks';
import { verifyToken } from '../utils/verifyToken';

const { Sider } = Layout;


const Sidebar = () => {
    const token = useAppSelector(useCurrentToken);
    
    let user;
    
    if (token) {
        user = verifyToken(token);
    }
 
  
    // const role = "admin";
    // const role = "user";
    let sidebarItems;

 

    switch ((user as TUser)?.role) {
        case USER_ROLE.admin:
            sidebarItems = sidebarItemsGenerator(adminPaths, USER_ROLE.admin);
            break;
        case USER_ROLE.user:
            sidebarItems = sidebarItemsGenerator(userPaths, USER_ROLE.user);
            break;
        default:
            break;
    }




    return (
        <Sider
            breakpoint="lg"
            collapsedWidth="0"
           style={{height:'100vh', position:'sticky', top:'0', left:'0'}}
        >
            <div style={{
                color: "white",
                height: '4rem',
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius:'10px'

            }} >
                <h1 className='text-xl' >Sports Facility </h1>
            </div>
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']} items={sidebarItems} />
        </Sider>
    );
};

export default Sidebar;
