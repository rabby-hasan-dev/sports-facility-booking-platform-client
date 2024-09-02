


import { Button, message, Popconfirm, PopconfirmProps, Space, Table, TableColumnsType, Tag, } from "antd";
import { useDeleteSingleBookingsMutation, useGetAllBookingsByUserQuery } from "../../../../redux/features/bookings/bookingsApi";
import { IBookings } from "../../../../types/booking.type";
import { Link } from "react-router-dom";


export type TTableData = Pick<IBookings, '_id' | 'facility' | 'date' | 'startTime' | 'endTime' | 'payableAmount' | 'isBooked'>



const MyBookings = () => {
    const { data: allBookings, isFetching } = useGetAllBookingsByUserQuery(undefined);
    const [cancleBooking] = useDeleteSingleBookingsMutation();



    const handleConfirm: PopconfirmProps['onConfirm'] = async (id) => {
        const res = await cancleBooking(id);
        if (res?.data?.success) {
            message.success('Booking Delete Successful');

        } else {
            message.success('Something Went Wrong!');
        }



    };




    const tableData = allBookings?.data?.map(({
        _id,
        facility,
        date,
        startTime,
        endTime,
        payableAmount,
        isBooked
    }: TTableData) => ({
        key: _id,
        facility: facility?.name,
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
            responsive: ['sm', 'md', 'lg', 'xl', 'xxl'],
        },
        {
            title: 'EndTime',
            dataIndex: 'endTime',
            responsive: ['sm', 'md', 'lg', 'xl', 'xxl'],
        },
        {
            title: 'Amount',
            dataIndex: 'payableAmount',
            responsive: ['lg', 'xl', 'xxl'],
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
                        <Link to={item?.key}>
                            <Button>Details</Button>
                        </Link>

                        <Popconfirm
                            title="Delete this booking"
                            description="Are you sure to delete this booking?"
                            onConfirm={() => handleConfirm(item?.key)}
                            okText="Yes"
                            cancelText="No"
                        >
                            <Button danger >Delete</Button>
                        </Popconfirm>


                    </Space>

                )


            },

        },
    ];




    return (
        <div>
            <Table
                columns={columns}
                loading={isFetching}
                dataSource={tableData}
                pagination={false}
                showSorterTooltip={{ target: 'sorter-icon' }}
            />
        </div>
    );
};

export default MyBookings;