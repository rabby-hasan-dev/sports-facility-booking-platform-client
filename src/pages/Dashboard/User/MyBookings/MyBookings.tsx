


import { Button, Space, Table, TableColumnsType, Tag, } from "antd";
import { useDeleteSingleBookingsMutation, useGetAllBookingsByUserQuery } from "../../../../redux/features/bookings/bookingsApi";
import { IBookings } from "../../../../types/booking.type";


export type TTableData = Pick<IBookings , '_id' | 'facility' | 'date' | 'startTime'| 'endTime'| 'payableAmount'| 'isBooked'>



const  MyBookings = () => {
    const { data: allBookings , isFetching} = useGetAllBookingsByUserQuery(undefined);
    const [cancleBooking]=useDeleteSingleBookingsMutation();

    const tableData = allBookings?.data?.map(({
        _id,  
        facility,
        date,
        startTime,
        endTime,
        payableAmount,
        isBooked
    }:TTableData) => ({
        key: _id,
        facility:facility?.name,
        date,
        startTime,
        endTime,
        payableAmount,
        isBooked
    }))





    const columns: TableColumnsType<TTableData> = [
       
        {
            title: 'Facility',
            dataIndex: 'facility',
            showSorterTooltip: { target: 'full-header' },
        },
        {
            title: 'Date',
            dataIndex: 'date',
        },
        {
            title: 'Start Time',
            dataIndex: 'startTime',
            responsive: ['sm' ,'md', 'lg', 'xl', 'xxl'],
        },
        {
            title: 'EndTime',
            dataIndex: 'endTime',
            responsive: ['sm', 'md', 'lg', 'xl', 'xxl'],
        },
        {
            title: 'Amount',
            dataIndex: 'payableAmount',
            responsive: ['sm', 'md', 'lg', 'xl', 'xxl'],
        },
        {
            title: 'Booking Status',
            dataIndex: 'isBooked',
            responsive: ['sm', 'md', 'lg', 'xl', 'xxl'], 
            render: (status) => (
                <Tag color={status ? 'green' : 'red'}>
                    {status ? 'Confirmed' : 'Cancelled'}
                </Tag>
            ),
           
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