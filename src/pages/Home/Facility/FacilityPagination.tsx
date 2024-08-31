import { Pagination } from 'antd';

import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { setCurrentPage, useCurrentPage, usePageSize } from '../../../redux/features/facility/facilitySlice';


const FacilityPagination = () => {
    const pageSize = useAppSelector(usePageSize);
    const currentPage = useAppSelector(useCurrentPage);
    const dispatch = useAppDispatch();

    const handlePage = (data: number) => {
        dispatch(setCurrentPage(data));

    }


    return (
        <div>
            <Pagination
                align="center"
                onChange={(value) => handlePage(value)}
                pageSize={pageSize}
                defaultCurrent={currentPage}
                total={10} />;

        </div>
    );
};

export default FacilityPagination;