import { Button, Form, Input, Row } from "antd";
import PForm from "../../../../components/form/PForm";
import PInput from "../../../../components/form/PInput";
import { Controller, FieldValues, SubmitHandler } from "react-hook-form";
import { useCreateFacilityMutation } from "../../../../redux/features/facility/facilityApi";
const img_hosting_token = import.meta.env.VITE_IMAGE_UPLOAD_TOKEN;




const CreateFacility = () => {
    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`
    const [createFacility] = useCreateFacilityMutation();


    const onSubmit: SubmitHandler<FieldValues> = async (data) => {

        // let images;

        // image uploader
        const formData = new FormData();
        formData.append('image', data?.image)

        try {
            const res = await fetch(img_hosting_url, {
                method: 'POST',
                body: formData,

            });
            const imgResponse = await res.json();
            if (imgResponse.success) {
                const imgURL = imgResponse.data.display_url;
                // images = imgURL;
                const facilityInfo = {
                    ...data,
                    pricePerHour: Number(data.pricePerHour),
                    image: imgURL
                }
                console.log(facilityInfo)
                const res = await createFacility(facilityInfo);
                console.log(res);

            }
        } catch (error) {

            console.log(error);
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