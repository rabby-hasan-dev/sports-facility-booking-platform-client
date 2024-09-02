
import { FieldValues, SubmitHandler } from "react-hook-form";
import { Button, Row } from "antd";
import { useSignupMutation } from "../../../../redux/features/auth/authApi";
import { USER_ROLE } from "../../../../constant/userConstant";
import PForm from "../../../../components/form/PForm";
import PInput from "../../../../components/form/PInput";



const CreateAdmin = () => {
    const [CreateAdmin] = useSignupMutation();


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
            <div className=" flex items-center justify-center bg-gray-100">
                <div className="bg-white shadow-lg rounded-lg p-8 max-w-sm w-full">
                    <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Add  Admin</h2>

                    <Row justify={"center"} align={"middle"}  >
                        <PForm onSubmit={onSubmit}>
                            <PInput placeholder="Input admin name ." name="name" label="Name" type="text"></PInput>
                            <PInput placeholder="Input admin email ." name="email" label="Email" type="text"></PInput>
                            <PInput placeholder="Input admin password ." name="password" label="Password" type="text"></PInput>
                            <PInput placeholder="Input phone number." name="phone" label="Phone" type="text"></PInput>
                            <PInput placeholder="Input admin address ." name="address" label="Address" type="text"></PInput>
                            <Button type="primary" htmlType="submit">Add Admin</Button>
                        </PForm>
                    </Row>




                </div>
            </div>



        </>
    );
};

export default CreateAdmin;