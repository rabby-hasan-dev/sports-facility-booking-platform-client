

import { Button, Card, Image, Spin, Alert } from "antd";
import { Link, useParams } from "react-router-dom";
import { useGetAllFacilityQuery } from "../../../redux/features/facility/facilityApi";

import Container from "../../../components/ui/Container";
import CustomerReviewsHome from "../../../components/bookings/CustomersReviewHome";
import { IFacilities } from "../../../types/faicility.type";

const FacilityDetails = () => {
    const { id } = useParams();
    const { data: facilities, isLoading, error } = useGetAllFacilityQuery(undefined);
    const singleFacility = facilities?.data?.find((item: IFacilities) => item._id === id);

    if (isLoading) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <Spin size="large" tip="Loading facility details..." />
            </div>
        );
    }

    if (error || !singleFacility) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <Alert message="Error" description="Unable to fetch facility details." type="error" showIcon />
            </div>
        );
    }

    return (
        <Container>
            <div className="lg:flex xl:flex gap-10 mt-8 mb-8">
                {/* Image Section */}
                <div className="xl:w-1/2 mb-6 lg:mb-0">
                    <Image
                        src={singleFacility?.image}
                        alt={`${singleFacility?.name} image`}
                        style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
                        placeholder={
                            <Image
                                preview={false}
                                src={singleFacility?.image}
                                width={'100%'}
                                style={{ borderRadius: '8px' }}

                            />
                        }
                    />
                </div>

                {/* Facility Details Section */}
                <div className="xl:w-1/2">
                    <Card
                        bordered={false}
                        style={{ width: '100%', height: '100%', padding: '20px', borderRadius: '8px', boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)' }}
                    >
                        <div className="space-y-5">
                            <h1 className="text-4xl font-semibold text-gray-800">{singleFacility?.name}</h1>
                            <p className="text-xl text-gray-600">📍 Location: {singleFacility?.location}</p>
                            <p className="text-xl font-bold text-green-600">💲 ${singleFacility?.pricePerHour} / hour</p>
                            <p className="text-lg text-gray-700 leading-relaxed">{singleFacility?.description}</p>

                            <Link to={`/bookings/${id}`}>
                                <Button type="primary" size="large" className="mt-4 w-full lg:w-auto">
                                    Book Now
                                </Button>
                            </Link>
                        </div>
                    </Card>
                </div>
            </div>

            {/* Customer Reviews Section */}
            <CustomerReviewsHome />
        </Container>
    );
};

export default FacilityDetails;
