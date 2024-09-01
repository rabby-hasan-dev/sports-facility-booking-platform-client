
import { Button, Form, Input, Row } from "antd";

import { Controller, FieldValues, SubmitHandler } from "react-hook-form";
import { useGetAllFacilityQuery, useUpdateFacilityMutation } from "../../../../redux/features/facility/facilityApi";
import { uploadImage } from "../../../../utils/imageUploader";
import PForm from "../../../../components/form/PForm";
import PInput from "../../../../components/form/PInput";
import { useParams } from "react-router-dom";
import { IFacilities } from "../../../../types/faicility.type";


const UpdateFacility = () => {
    const { id } = useParams();
    const [updateFacility] = useUpdateFacilityMutation();
    const { data: facility } = useGetAllFacilityQuery(undefined, { skip: !id });

    const findSingleFacility = facility?.data?.find((item: IFacilities) => item._id === id);





    const onSubmit: SubmitHandler<FieldValues> = async (data) => {
        let img;
        if (data?.image) {
            img = await uploadImage(data?.image);
        }

        const facilityInfo = {
            ...data,
            pricePerHour: Number(data.pricePerHour),
            image: img
        }

        console.log(facility);

        try {
            const res = await updateFacility({ id, data: facilityInfo });
            console.log(res);
        } catch (error) {

            console.log(error);
        }







    }

    return (
        <div>

            <div className=" flex items-center justify-center bg-gray-100">
                <div className="bg-white shadow-lg rounded-lg p-8 max-w-sm w-full">
                    <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Update Facility</h2>

                    <Row justify={"center"} align={"middle"}  >
                        <PForm onSubmit={onSubmit} defaultValues={findSingleFacility}>
                            <PInput name="name" label="Name" type="text"></PInput>
                            <PInput name="description" label="Description" type="text"></PInput>
                            <PInput name="pricePerHour" label="Price PerHour" type="number"></PInput>
                            <PInput name="location" label="Location" type="text"></PInput>
                            <Controller
                                name="image"
                                render={({ field: { onChange, value, ...field } }) =>

                                (
                                    <Form.Item label="Picture"  >
                                        <Input
                                            type="file" {...field}
                                            onChange={(e) => onChange(e.target.files?.[0])}
                                            value={value?.fileName}
                                        ></Input>
                                    </Form.Item>
                                )
                                }

                            />


                            <Button type="primary" htmlType="submit">Update Facility</Button>
                        </PForm>
                    </Row>

                </div>
            </div>
        </div>
    );
};

export default UpdateFacility;