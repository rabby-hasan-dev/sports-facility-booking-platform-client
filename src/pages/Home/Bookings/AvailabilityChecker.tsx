import { Button, Card, Flex, Row } from "antd";
import PForm from "../../../components/form/PForm";
import PDatePicker from "../../../components/form/PDatePicker";
import { FieldValues, SubmitHandler } from "react-hook-form";
import moment from "moment";

import { useBookingCheckerQuery } from "../../../redux/features/bookings/bookingsApi";
import { TFacilityIdProps } from "./Bookings";
import { toast } from "sonner";
import { useEffect, useState } from "react";

export type TQueryParamsBookingsChecker = {
  name: string;
  value: string | undefined;
}

type TTimeSlots = {
  startTime: string;
  endTime: string;
}



const AvailabilityChecker = ({ facilityId }: TFacilityIdProps) => {
  const [params, setParams] = useState<TQueryParamsBookingsChecker[] | []>([]);
  const { data: bookingChecker, isFetching } = useBookingCheckerQuery(params, { skip: !params.length });

  useEffect(() => {
    let toastId: any;
    if (isFetching) {
      toastId = toast.loading('Loading ....');
    } else if (toastId) {
      toast.dismiss(toastId);
    }
    return () => {
      if (toastId) {
        toast.dismiss(toastId);
      }
    };



  }, [isFetching]);

 

  const submitTimeChecker: SubmitHandler<FieldValues> = async (data) => {

    const queryParams = [{ name: 'facility', value: facilityId }];

    if (data.date) {
      const formattedDate = moment(new Date(data.date)).format('YYYY-MM-DD');
      queryParams.push({ name: 'date', value: formattedDate });
    }

    setParams(queryParams);


  }


  return (

    <Card >
      {/* Available Time Checker */}

      <div>
        <PForm onSubmit={submitTimeChecker}  >
          <Flex justify="space-between" gap={8}>

            <PDatePicker name="date"></PDatePicker>
            <Button type="primary"   htmlType="submit" size="large" >Check Availibility</Button>

          </Flex>
        </PForm>
      </div>


      {/* Display Available time Slot */}

      <div className="mb-8">
        <div className="grid grid-cols-2 gap-4">
          {bookingChecker?.data?.map((item: TTimeSlots, index: number) => (
            <div key={index} className="text-red-500 text-xl p-4 text-center border rounded bg-white shadow-md">
              {item?.startTime} - {item?.endTime}
            </div>
          ))}
        </div>
      </div>


    </Card>
  );
};

export default AvailabilityChecker;