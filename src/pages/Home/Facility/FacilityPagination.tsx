import { Pagination } from 'antd';

import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { setCurrentPage, useCurrentPage, usePageSize } from '../../../redux/features/facility/facilitySlice';
import { IFacilities } from '../../../types/faicility.type';


type TpaginateProps = {
    filteredFacilities: IFacilities[]
}

const FacilityPagination = ({ filteredFacilities }: TpaginateProps) => {
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
                total={filteredFacilities?.length} />;

        </div>
    );
};

export default FacilityPagination;