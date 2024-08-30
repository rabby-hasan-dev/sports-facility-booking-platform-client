import { Button, Form, Input, Row } from "antd";
import PForm from "../../../../components/form/PForm";
import PInput from "../../../../components/form/PInput";
import { Controller, FieldValues, SubmitHandler } from "react-hook-form";
import { useCreateFacilityMutation } from "../../../../redux/features/facility/facilityApi";
import { uploadImage } from "../../../../utils/imageUploader";


const CreateFacility = () => {

    const [createFacility] = useCreateFacilityMutation();


    const defaultFacilityData = {
        "name": "Tennis Court",
        "description": "Outdoor tennis court with synthetic surface.",
        "pricePerHour": 30,
        "location": "456 Sports Ave, Springfield"
    }


    const onSubmit: SubmitHandler<FieldValues> = async (data) => {
        console.log( 'create facility ', data);
        const img = await uploadImage(data?.image);


        const facilityInfo = {
            ...data,
            pricePerHour: Number(data.pricePerHour),
            image: img
        }

        console.log( 'create facility ', facilityInfo);
        try {
            const res = await createFacility(facilityInfo);
            console.log(res);
        } catch (error) {

            console.log(error);
        }







    }

    return (
        <div>
            <h1 className="text-center text-5xl font-semibold mb-10 ">Create Facility</h1>
            <Row justify={"center"} align={"middle"}  >
                <PForm onSubmit={onSubmit}  defaultValues={defaultFacilityData}>
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


                    <Button htmlType="submit">Create Facility</Button>
                </PForm>
            </Row>

        </div>
    );
};

export default CreateFacility;