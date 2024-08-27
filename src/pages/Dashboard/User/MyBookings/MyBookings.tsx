


import { Button, Space, Table, TableColumnsType, Tag, } from "antd";
import { useDeleteSingleBookingsMutation, useGetAllBookingsByUserQuery } from "../../../../redux/features/bookings/bookingsApi";


// export type TTableData = Pick< , 'status' | 'startDate' | 'endDate'>



const  MyBookings = () => {
    const { data: allBookings , isFetching} = useGetAllBookingsByUserQuery(undefined);
    const [cancleBooking]=useDeleteSingleBookingsMutation();
 



    const tableData = allBookings?.data?.map(({
        _id,
        user,
        facility,
        date,
        startTime,
        endTime,
        payableAmount,
        isBooked
    }) => ({
        key: _id,
        name:user?.name,
        facility:facility?.name,
        date,
        startTime,
        endTime,
        payableAmount,
        isBooked
    }))





    const columns: TableColumnsType<any> = [
        {
            title: 'Name',
            dataIndex: 'name',
            showSorterTooltip: { target: 'full-header' },

        },
        {
            title: 'Facility',
            dataIndex: 'facility',
        },
        {
            title: 'Date',
            dataIndex: 'date',
        },
        {
            title: 'Start Time',
            dataIndex: 'startTime',
        },
        {
            title: 'EndTime',
            dataIndex: 'endTime',
        },
        {
            title: 'Payable Amount',
            dataIndex: 'payableAmount',
        },
        {
            title: 'Bookings Status',
            dataIndex:'isBooked',
        },
        {
            title: 'Action',
            key: "x",
            render: (item) => {

                return (

                    <Space size={4} >
                        <Button>Details</Button>
                        <Button onClick={() => cancleBooking(item.key)} >Delete</Button>

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

export default  MyBookings;