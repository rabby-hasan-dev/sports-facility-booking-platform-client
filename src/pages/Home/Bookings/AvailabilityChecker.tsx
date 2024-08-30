import { Button, Card, Flex, Row } from "antd";
import PForm from "../../../components/form/PForm";
import PDatePicker from "../../../components/form/PDatePicker";
import { FieldValues, SubmitHandler } from "react-hook-form";
import moment from "moment";
import { useEffect } from "react";




const AvailabilityChecker = ({ bookingChecker, facilityId, setParams, params }) => {
 
 
  useEffect(() => {

    if (facilityId) {

      setParams([{ name: 'facility', value: facilityId }]);
    }

  }, [facilityId]);


  const submitTimeChecker: SubmitHandler<FieldValues> = async (data) => {

    const queryParams = [...params];

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
          <Flex justify="space-between"  gap={8}>

            <PDatePicker name="date"></PDatePicker>
            <Button htmlType="submit" size="large" >Check Availibility</Button>

          </Flex>
        </PForm>
      </div>


      {/* Display Available time Slot */}

      <div className="mb-8">
        <div className="grid grid-cols-2 gap-4">
          {bookingChecker?.data?.map((item, index) => (
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