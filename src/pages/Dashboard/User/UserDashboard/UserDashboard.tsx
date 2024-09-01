
import { UserOutlined, BellOutlined } from '@ant-design/icons';
import { Card, Button, List, Avatar, } from 'antd';
import { Link } from 'react-router-dom';
import WelcomeHeaderUser from './WelcomeHeaderUser';

const UserDashboard = () => {
    const recentActivities = [
        "Placed an order for 'facility A'",
        "Updated profile information",
        "Left a review on 'facility B'",
        // Do: retrive   data from api 
    ];

    const notifications = [
        "Your order has been shipped",
        "Password changed successfully",
        "New login from Chrome on Windows",
        // Do: retrive   data from api 
    ];

    return (
        <div className="p-6">

            {/* Welcome Header */}
            <WelcomeHeaderUser></WelcomeHeaderUser>

            {/* Do: Quick Links */}
            <div className="mb-6">
                <Link to='/user/user-bookings'>
                    <Button type="primary" className='mr-4'>My Bookings</Button>
                </Link>
                <Link to='#'>
                    <Button type="default" className="mr-4">Edit Profile</Button>
                </Link>
                <Link to='#'>
                    <Button type="default" className="mt-4">Change Password</Button>
                </Link>
            </div>

            {/* Do: Activity Summary */}
            <Card className="mb-6" title="Recent Activity">
                <List
                    dataSource={recentActivities}
                    renderItem={item => (
                        <List.Item>
                            <List.Item.Meta
                                avatar={<Avatar icon={<UserOutlined />} />}
                                title={<a href="">{item}</a>}
                                description="2 days ago"
                            />
                        </List.Item>
                    )}
                />
            </Card>

            {/* Do: Notifications */}
            <Card className="mb-6" title="Notifications">
                <List
                    dataSource={notifications}
                    renderItem={item => (
                        <List.Item>
                            <List.Item.Meta
                                avatar={<Avatar icon={<BellOutlined />} />}
                                title={<a href="">{item}</a>}
                                description="Just now"
                            />
                        </List.Item>
                    )}
                />
            </Card>

            {/* Do: User Settings */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Button type="default" block>
                    Manage Account Settings
                </Button>
                <Button type="default" block>
                    Notification Preferences
                </Button>
            </div>
        </div>
    );
};

export default UserDashboard;

