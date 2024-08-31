import { Pagination } from 'antd';


const FacilityPagination = () => {
    const handlePage = (data) => {
        console.log('pagination ==>', data);

    }

    return (
        <div>
            <Pagination onChange={(value) => handlePage(value)} align="center" pageSize={3} defaultCurrent={1} total={10} />;
        </div>
    );
};

export default FacilityPagination;