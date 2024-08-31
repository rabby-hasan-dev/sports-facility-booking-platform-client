
import { useParams } from "react-router-dom";
import AvailabilityChecker from "./AvailabilityChecker";
import BookingForm from "./BookingForm";
import FacilityOverview from "./FacilityOverview";
import { toast } from "sonner";



export type TFacilityIdProps = {
    facilityId: string | undefined;
}


const Bookings = () => {
    const { facilityId } = useParams();

    

    if (!facilityId) {
        toast.error("facility id empty");
      }


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



