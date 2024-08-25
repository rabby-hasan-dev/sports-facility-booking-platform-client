import { FieldValues, SubmitHandler } from "react-hook-form";
import PForm from "../../components/form/PForm";
import PInput from "../../components/form/PInput";
import { Button, Row } from "antd";
import { USER_ROLE } from "../../constant/userConstant";
import { useSignupMutation } from "../../redux/features/auth/authApi";


const Register = () => {
    const [signUp] = useSignupMutation()

    const defaultValues = {
        name: "Programming Hero",
        email: "web@programming-hero1.com",
        password: "programming-hero",
        phone: "01322901105",
        role: "user",
        address: "Level-4, 34, Awal Centre, Banani, Dhaka"
    }

    const onSubmit: SubmitHandler<FieldValues> = async (data) => {
        const signUpData = {
            ...data,
            role: USER_ROLE.user
        }
        try {
            const res = await signUp(signUpData);
            console.log(res);

        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="bg-blue-400 h-screen" >


            <Row justify={"center"} align={"middle"} defaultValues={defaultValues} >
                <PForm onSubmit={onSubmit}>
                    <PInput name="name" label="Name" type="text"></PInput>
                    <PInput name="email" label="Email" type="text"></PInput>
                    <PInput name="password" label="Password" type="text"></PInput>
                    <PInput name="phone" label="phone" type="text"></PInput>
                    <PInput name="address" label="address" type="text"></PInput>
                    <Button htmlType="submit">Sign Up</Button>
                </PForm>
            </Row>





        </div>
    );
};

export default Register;