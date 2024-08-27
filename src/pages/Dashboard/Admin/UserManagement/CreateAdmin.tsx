
import { FieldValues, SubmitHandler } from "react-hook-form";
import { Button, Row } from "antd";
import { useSignupMutation } from "../../../../redux/features/auth/authApi";
import { USER_ROLE } from "../../../../constant/userConstant";
import PForm from "../../../../components/form/PForm";
import PInput from "../../../../components/form/PInput";



const CreateAdmin = () => {
    const [CreateAdmin] = useSignupMutation();

    const defaultValues = {
        name: "Programming Hero",
        email: "web@programming-hero1.com",
        password: "programming-hero",
        phone: "01322901105",
        role: "user",
        address: "Level-4, 34, Awal Centre, Banani, Dhaka"
    }

    const onSubmit: SubmitHandler<FieldValues> = async (data) => {

        const CreateAdminData = {
            ...data,
            role: USER_ROLE.admin
        }
        try {
            const res = await CreateAdmin(CreateAdminData);
            console.log(res);

        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>


            <Row justify={"center"} align={"middle"}  >
                <PForm onSubmit={onSubmit}>
                    <PInput name="name" label="Name" type="text"></PInput>
                    <PInput name="email" label="Email" type="text"></PInput>
                    <PInput name="password" label="Password" type="text"></PInput>
                    <PInput name="phone" label="phone" type="text"></PInput>
                    <PInput name="address" label="address" type="text"></PInput>
                    <Button htmlType="submit">Add Admin</Button>
                </PForm>
            </Row>





        </>
    );
};

export default CreateAdmin;