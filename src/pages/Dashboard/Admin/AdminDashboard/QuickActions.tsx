
import { Button } from 'antd';
import { Link } from 'react-router-dom';

const QuickActions = () => {

    return (
        <div className="mb-6 space-x-4">
            <Link to='/admin/create-facility' >
                <Button type="primary" >Add Facility</Button>
            </Link>
            <Link to='#' >
                <Button type="default" >View Reports</Button>
            </Link>
            <Link to='#' >
                <Button type="default" className='mt-4'>Manage Users</Button>
            </Link>
        </div>
    )


}

export default QuickActions;