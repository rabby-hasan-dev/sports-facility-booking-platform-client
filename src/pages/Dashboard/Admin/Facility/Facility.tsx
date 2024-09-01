


import { Button, Space, Table, TableColumnsType, } from "antd";

import { useDeleteSingleFacilityMutation, useGetAllFacilityQuery } from "../../../../redux/features/facility/facilityApi";
import { Link } from "react-router-dom";
import { IFacilities } from "../../../../types/faicility.type";



export type TTableData = Pick<IFacilities, '_id' | 'name' | 'description' | 'image' | 'location' | 'pricePerHour'>






const Facility = () => {
    const { data: allFacily, isFetching } = useGetAllFacilityQuery(undefined);
    const [deleteFacility] = useDeleteSingleFacilityMutation();


    const tableData = allFacily?.data?.map(({ _id, name, description, pricePerHour, location }: TTableData) => ({
        key: _id,
        name,
        description,
        pricePerHour,
        location
    }))





    const columns: TableColumnsType<TTableData> = [
        {
            title: 'Name',
            dataIndex: 'name',
            showSorterTooltip: { target: 'full-header' },

        },
        {
            title: 'Description',
            dataIndex: 'description',
            responsive:['lg']
        },
        {
            title: 'Price PerHour',
            dataIndex: 'pricePerHour',
            responsive:['lg']
        },
        {
            title: 'Location',
            dataIndex: 'location',
            responsive:['lg']
        },
        {
            title: 'Action',
            key: "x",
            render: (item) => {

                return (

                    <Space size={4} >
                        <Link to={item.key} >
                            <Button> update</Button>
                        </Link>
                        <Button onClick={() => deleteFacility(item.key)} >Delete</Button>

                    </Space>

                )


            },
            // responsive: ['md'],
        },
    ];

    // const onChange: TableProps<any>['onChange'] = (_pagination, filters, _sorter, extra) => {

    //     console.log({filters, extra})




    // };



    return (
        <div>
            <Table
                columns={columns}
                loading={isFetching}
                dataSource={tableData}
                pagination={false}
                // onChange={onChange}
                showSorterTooltip={{ target: 'sorter-icon' }}
            />
        </div>
    );
};

export default Facility;