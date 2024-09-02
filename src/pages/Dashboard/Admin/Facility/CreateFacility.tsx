import { Button, Form, Input, Row } from "antd";
import PForm from "../../../../components/form/PForm";
import PInput from "../../../../components/form/PInput";
import { Controller, FieldValues, SubmitHandler } from "react-hook-form";
import { useCreateFacilityMutation } from "../../../../redux/features/facility/facilityApi";
import { uploadImage } from "../../../../utils/imageUploader";


const CreateFacility = () => {

    const [createFacility] = useCreateFacilityMutation();


   


    const onSubmit: SubmitHandler<FieldValues> = async (data) => {
        console.log('create facility ', data);
        const img = await uploadImage(data?.image);


        const facilityInfo = {
            ...data,
            pricePerHour: Number(data.pricePerHour),
            image: img
        }

        console.log('create facility ', facilityInfo);
        try {
            const res = await createFacility(facilityInfo);
            console.log(res);
        } catch (error) {

            console.log(error);
        }







    }

    return (


        <div className=" flex items-center justify-center bg-gray-100">
            <div className="bg-white shadow-lg rounded-lg p-8 max-w-sm w-full">
                <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Create Facility</h2>

                <Row justify={"center"} align={"middle"}  >
                    <PForm onSubmit={onSubmit} >
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


                        <Button type="primary" htmlType="submit">Create Facility</Button>
                    </PForm>
                </Row>
            </div>
        </div>


    );
};

export default CreateFacility;