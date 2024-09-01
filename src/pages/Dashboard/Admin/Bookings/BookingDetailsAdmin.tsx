import {  Card, Descriptions,  Image, Spin, Tag } from "antd";
import {  useParams } from "react-router-dom";
import { useGetAllBookingsByAdminQuery } from "../../../../redux/features/bookings/bookingsApi";
import { IBookings } from "../../../../types/booking.type";



const BookingDetailsAdmin = () => {
    const { bookingId } = useParams();
    const { data: allBookings } = useGetAllBookingsByAdminQuery(undefined, { skip: !bookingId });
    const singleBookingData = allBookings?.data?.find((item: IBookings) => item._id === bookingId);

    if (!singleBookingData) {
        return <Spin></Spin>;
    }

    const { user, startTime,endTime, transactionId, paymentStatus, isBooked, payableAmount, date, facility } = singleBookingData;

    return (
        <div className="p-8 space-y-8">
            {/* Facility Data */}
            <div className="lg:flex xl:flex shadow-lg rounded-lg overflow-hidden">
                <div className="xl:w-1/2">
                    <Image
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        src={facility?.image}
                        alt={facility?.name}
                        placeholder={
                            <Image
                                preview={false}
                                src={facility?.image}
                                width={200}
                                alt="Picture"
                            />
                        }
                    />
                </div>
                <div className="xl:w-1/2 ">
                    <Card style={{ width: '100%', height: '100%' }}  >
                        <div className="space-y-4">
                            <h1 className="text-4xl font-bold">{facility?.name}</h1>
                            <p className="text-xl text-gray-600">Location: {facility?.location}</p>
                            <p className="text-2xl font-semibold text-green-600">$ {facility?.pricePerHour}/hour</p>
                            <p className="text-gray-700">{facility?.description}</p>
                        </div>
                    </Card>
                </div>
            </div>

            {/* Booking Data */}
            <Card className="shadow-lg rounded-lg">
                <Descriptions
                    title="Booking Details"
                    bordered
                    layout="vertical"
                    column={2}
                >
                    <Descriptions.Item label="Date">{date}</Descriptions.Item>
                    <Descriptions.Item label="Start Time">{startTime}</Descriptions.Item>
                    <Descriptions.Item label="End Time">{endTime}</Descriptions.Item>
                    <Descriptions.Item label="Transaction ID">{transactionId}</Descriptions.Item>
                    <Descriptions.Item label="Payment Status">
                        <Tag color={paymentStatus === "Paid" ? "green" : "red"}>
                            {paymentStatus}
                        </Tag>
                    </Descriptions.Item>
                    <Descriptions.Item label="Booking Status">
                        <Tag color={isBooked ? "green" : "red"}>
                            {isBooked ? "Confirmed" : "Pending"}
                        </Tag>
                    </Descriptions.Item>
                    <Descriptions.Item label="Payable Amount">
                        <span className="text-xl font-semibold text-green-600">${payableAmount}</span>
                    </Descriptions.Item>
                </Descriptions>
            </Card>

            {/* User Details */}
            <Card className="shadow-lg rounded-lg">
                <Descriptions
                    title="User Details"
                    bordered
                    layout="vertical"
                    column={2}
                >
                    <Descriptions.Item label="Name">{user?.name}</Descriptions.Item>
                    <Descriptions.Item label="Email">{user?.email}</Descriptions.Item>
                    <Descriptions.Item label="Phone Number">{user?.phone}</Descriptions.Item>
                </Descriptions>
            </Card>


        </div>




    );
};

export default BookingDetailsAdmin;