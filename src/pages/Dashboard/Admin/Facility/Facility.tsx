


import { Button,  Space, Table, TableColumnsType, Tag, } from "antd";
import { useState } from "react";
import { useDeleteSingleFacilityMutation, useGetAllFacilityQuery } from "../../../../redux/features/facility/facilityApi";




// export type TTableData = Pick< , 'status' | 'startDate' | 'endDate'>






const Facility = () => {
    const [facilityId, setFacilityId] = useState('')

    const {data:allFacily, isFetching}=useGetAllFacilityQuery(undefined);
    const [deleteFacility]=useDeleteSingleFacilityMutation();
 
    const tableData = allFacily?.data?.map(({ _id, name, description, pricePerHour, location }) => ({
        key: _id,
        name,
        description, 
        pricePerHour, 
        location
    }))


    


    const columns: TableColumnsType<any> = [
        {
            title: 'Name',
            dataIndex: 'name',
            showSorterTooltip: { target: 'full-header' },

        },
        {
            title: 'Description',
            dataIndex:'description',
        },
        {
            title: 'Price PerHour',
            dataIndex:'pricePerHour',
        },
        {
            title: 'Location',
            dataIndex: 'location',
        },
        {
            title: 'Action',
            key: "x",
            render: (item) => {

                return (
                  
                       <Space size={4} >
                       <Button onClick={() => setFacilityId(item.key)} > update</Button>
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