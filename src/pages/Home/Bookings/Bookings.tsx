import { Button, Col, Flex, Row, TimePicker } from "antd";
import PForm from "../../../components/form/PForm";
import PDatePicker from "../../../components/form/PDatePicker";
import { FieldValues, SubmitHandler } from "react-hook-form";

import { useBookingCheckerQuery, useCreateBookingsMutation } from "../../../redux/features/bookings/bookingsApi";
import moment from "moment";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import PTimePicker from "../../../components/form/PTimePicker";

export type TQueryParamsBookingsChecker = {
    name: string;
    value: string;
}


const Bookings = () => {
    const { facilityId } = useParams();
    const [params, setParams] = useState<TQueryParamsBookingsChecker[]>([]);
    const { data: bookingChecker } = useBookingCheckerQuery(params, { skip: !params.length });
    const [createBookings]=useCreateBookingsMutation();
    console.log(bookingChecker?.data);

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

    const submitBookingForm: SubmitHandler<FieldValues> = async (data) => {

        const bookingData = {
            ...data,
            date: moment(new Date(data.date)).format('YYYY-MM-DD'),
            startTime: moment(new Date(data.startTime)).format('HH:MM'),
            endTime: moment(new Date(data.endTime)).format('HH:MM'),
            facility: facilityId
        }

        try{
                const res=await createBookings(bookingData);
               
                if (res?.data.success) {
                    console.log(res)
                    window.location.href=res.data?.data?.payment_url;
                  } else {
                    console.error('Bookings creation failed:', res.message);
                  }
            
             

            }catch(error){
                    console.log("booking faild", error);

            }

    }










    return (
        <div>

            <h1 className="text-4xl text-center font-medium  my-4">Book Your Facility</h1>

            {/* Available Time Checker */}

            <div>

                <Row >
                    <PForm onSubmit={submitTimeChecker}  >
                        <Flex gap={8}>
                            <PDatePicker name="date"></PDatePicker>

                            <Button htmlType="submit">Check Availibility</Button>

                        </Flex>

                    </PForm>

                </Row>

            </div>


            {/* Display Available time Slot */}

            <div >

                <div className="grid gird-cols-8">

                    {
                        bookingChecker?.data?.map((item, index) => <div key={index + 1} className="text-red-500 text-xl p-2 border-2 bg-slate-300" >{item?.startTime} - {item?.endTime} </div>)
                    }
                    
                </div>

            </div>


            {/*Booking form  */}
            <div>

                <h3 className="text-center text-xl">Booking Form</h3>
                <Flex justify="center" align="center" >
                    <Col span={6} >
                        <PForm onSubmit={submitBookingForm}  >
                            <PDatePicker label="Date" name="date"></PDatePicker>
                            <PTimePicker name="startTime" label="Start Time" />
                            <PTimePicker name="endTime" label="End Time" />

                            <Button htmlType="submit">Proced to Pay</Button>


                        </PForm>

                    </Col>
                </Flex>
            </div>


        </div>
    );
};

export default Bookings;