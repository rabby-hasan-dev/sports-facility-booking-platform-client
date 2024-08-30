
import { useBookingCheckerQuery, } from "../../../redux/features/bookings/bookingsApi";
import { useParams } from "react-router-dom";
import { useState } from "react";
import AvailabilityChecker from "./AvailabilityChecker";
import BookingForm from "./BookingForm";
import FacilityOverview from "./FacilityOverview";
import { Row } from "antd";

export type TQueryParamsBookingsChecker = {
    name: string;
    value: string;
}

export type TFacilityIdProps = {
    facilityId: string | undefined;
}


const Bookings = () => {
    const { facilityId } = useParams();
    const [params, setParams] = useState<TQueryParamsBookingsChecker[]>([]);
    const { data: bookingChecker } = useBookingCheckerQuery(params, { skip: !params.length });





    return (
        <div>
            <h1 className="text-4xl text-center font-extrabold  my-4">Book Your Facility</h1>
            <FacilityOverview facilityId={facilityId} ></FacilityOverview>
           <AvailabilityChecker
                facilityId={facilityId}
                bookingChecker={bookingChecker}
                setParams={setParams}
                params={params}
            ></AvailabilityChecker>
    
            <BookingForm facilityId={facilityId} ></BookingForm>
       

        </div>

    );
};

export default Bookings;



