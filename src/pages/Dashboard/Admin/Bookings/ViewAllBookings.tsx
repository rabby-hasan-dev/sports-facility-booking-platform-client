import { useGetAllBookingsByAdminQuery } from "../../../../redux/features/bookings/bookingsApi";
import { Button, Space, Table, TableColumnsType, Tag, } from "antd";
import { IBookings } from "../../../../types/booking.type";
import { Link } from "react-router-dom";



export type TTableData = Pick<IBookings, '_id' | 'user' | 'paymentStatus' | 'transactionId' | 'facility' | 'date' | 'startTime' | 'endTime' | 'payableAmount' | 'isBooked'>





const ViewAllBookings = () => {
    const { data: allBookings, isFetching } = useGetAllBookingsByAdminQuery(undefined);


    const tableData = allBookings?.data?.map(({
        _id,
        user,
        facility,
        date,
        startTime,
        endTime,
        payableAmount,
        isBooked,
        paymentStatus,
        transactionId
    }: TTableData) => ({
        key: _id,
        name: user?.name,
        facility: facility?.name,
        date,
        startTime,
        endTime,
        payableAmount,
        isBooked,
        paymentStatus,
        transactionId
    }))




    const columns: TableColumnsType<TTableData> = [
        {
            title: 'Consumer Name',
            dataIndex: 'name',
            showSorterTooltip: { target: 'full-header' },


        },
        {
            title: 'Facility Name',
            dataIndex: 'facility',
            showSorterTooltip: { target: 'full-header' },
        },
        {
            title: 'Date',
            dataIndex: 'date',
            responsive: ['xl', 'xxl']
        },
        {
            title: 'Start Time',
            dataIndex: 'startTime',
            responsive: ['xl', 'xxl'],
        },
        {
            title: 'EndTime',
            dataIndex: 'endTime',
            responsive: ['xl', 'xxl'],
        },
        {
            title: 'Amount',
            dataIndex: 'payableAmount',
            responsive: ['xl', 'xxl'],
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
            title: 'Payment Status',
            dataIndex: 'paymentStatus',
            responsive: ['sm', 'md', 'lg', 'xl', 'xxl'],
            render: (status) => (

                <Tag color={status === 'Paid' ? 'green' : status === 'pending' ? 'yellow' : 'red'}>
                    {status === 'Paid' ? 'Paid' : status === 'pending' ? 'Pending' : 'Faild'}
                </Tag>
            ),

        },
        {
            title: 'transactionId',
            dataIndex: 'transactionId',
            responsive: ['xxl'],
        },
        {
            title: 'Action',
            key: "x",
            render: (item) => {  
                return (
                    <Link to={item?.key} >
                        <Button >Details</Button>
                    </Link>

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

export default ViewAllBookings;