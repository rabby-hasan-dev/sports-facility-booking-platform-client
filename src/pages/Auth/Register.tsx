import { FieldValues, SubmitHandler } from "react-hook-form";
import PForm from "../../components/form/PForm";
import PInput from "../../components/form/PInput";
import { Button, Row } from "antd";
import { USER_ROLE } from "../../constant/userConstant";
import { useSignupMutation } from "../../redux/features/auth/authApi";
import { Link } from "react-router-dom";


const Register = () => {
    const [signUp] = useSignupMutation()

    // const defaultValues = {
    //     name: "Programming Hero",
    //     email: "web@programming-hero1.com",
    //     password: "programming-hero",
    //     phone: "01322901105",
    //     // role: "user",
    //     address: "Level-4, 34, Awal Centre, Banani, Dhaka"
    // }


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

        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white shadow-lg rounded-lg p-8 max-w-sm w-full">
                <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Sign Up</h2>

                <Row justify={"center"} align={"middle"}  >
                    <PForm onSubmit={onSubmit} defaultValues={undefined} >
                        <PInput name="name" label="Name" type="text"></PInput>
                        <PInput name="email" label="Email" type="text"></PInput>
                        <PInput name="password" label="Password" type="text"></PInput>
                        <PInput name="phone" label="Phone" type="text"></PInput>
                        <PInput name="address" label="Address" type="text"></PInput>
                        <Button htmlType="submit"  style={{width:'100%'}} >Sign Up</Button>
                    </PForm>
                </Row>

                <Row justify={"center"} align={"middle"}>
                    <div className="text-center mb-4">
                        <span className="text-sm text-gray-700">
                            Already have an account?
                            <Link to='/login' className="text-indigo-500 hover:underline">
                               Login
                            </Link>
                        </span>
                    </div>
                    <div className="text-center">
                       
                    </div>
                </Row>

            </div>
        </div>








    );
};

export default Register;