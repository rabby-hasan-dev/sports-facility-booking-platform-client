import { Button, Row } from "antd";
import PForm from "../../../../components/form/PForm";
import PInput from "../../../../components/form/PInput";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { useCreateFacilityMutation } from "../../../../redux/features/facility/facilityApi";


const dammydata = {
    name: "Tennis Court4",
    description: "Outdoor tennis court with synthetic surface.",
    pricePerHour: 30,
    location: "456 Sports Ave, Springfield"
}


const CreateFacility = () => {

    const [createFacility] = useCreateFacilityMutation();

    const onSubmit: SubmitHandler<FieldValues> = async (data) => {

        const facilityInfo = {
            ...data,
            pricePerHour: Number(data.pricePerHour)
        }

        console.log(facilityInfo);

        try {

            const res = await createFacility(facilityInfo);
            console.log(res);
        } catch (err) {
            console.log(err);
        }


    }

    return (
        <div>

            <Row justify={"center"} align={"middle"}  >
                <PForm onSubmit={onSubmit}>
                    <PInput name="name" label="Name" type="text"></PInput>
                    <PInput name="description" label="Description" type="text"></PInput>
                    <PInput name="pricePerHour" label="Price PerHour" type="number"></PInput>
                    <PInput name="location" label="Location" type="text"></PInput>
                    <Button htmlType="submit">Create Facility</Button>
                </PForm>
            </Row>

        </div>
    );
};

export default CreateFacility;