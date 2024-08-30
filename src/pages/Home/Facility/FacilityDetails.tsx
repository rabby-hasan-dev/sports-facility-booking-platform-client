import { Button, Card, Image } from "antd";
import { Link, useParams } from "react-router-dom";
import { useGetAllFacilityQuery } from "../../../redux/features/facility/facilityApi";


const FacilityDetails = () => {
    const { id } = useParams();
    const { data: facilities } = useGetAllFacilityQuery(undefined);
    const singleFacility = facilities?.data?.find((item) => item._id === id);



    return (
        <div className=" lg:flex xl:flex gap-10">
            <div className="xl:w-1/2">
                <Image
                    // width={600}
                    style={{ width: '100%' }}
                    src={singleFacility?.image}
                    placeholder={
                        <Image
                            preview={false}
                            src={singleFacility?.image}
                            width={200}
                        />
                    }
                />
            </div>

            {/* details  */}
            <div className="xl:w-1/2">
                <Card style={{ width: '100%', height: '100%' }}>
                    <div className="space-y-5">
                        <h1 className="text-5xl font-semibold">{singleFacility?.name} </h1>
                        <p className="text-2xl">Location: {singleFacility?.location} </p>
                        <p className="text-xl font-bold">$ {singleFacility?.pricePerHour} </p>
                        <p>{singleFacility?.description} </p>

                        <Link to={`/bookings/${id}`} ><Button>Book Now</Button></Link>
                    </div>
                </Card>

            </div>

        </div>
    );
};

export default FacilityDetails;