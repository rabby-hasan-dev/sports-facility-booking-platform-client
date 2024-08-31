
import { useParams } from "react-router-dom";
import AvailabilityChecker from "./AvailabilityChecker";
import BookingForm from "./BookingForm";
import FacilityOverview from "./FacilityOverview";



export type TFacilityIdProps = {
    facilityId: string | undefined;
}


const Bookings = () => {
    const { facilityId } = useParams();

    




    return (
        <div>
            <h1 className="text-4xl text-center font-extrabold  my-4">Book Your Facility</h1>
            <FacilityOverview facilityId={facilityId} ></FacilityOverview>
            <AvailabilityChecker facilityId={facilityId}></AvailabilityChecker>

            <BookingForm facilityId={facilityId} ></BookingForm>


        </div>

    );
};

export default Bookings;



