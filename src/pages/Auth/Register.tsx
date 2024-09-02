import { FieldValues, SubmitHandler } from "react-hook-form";
import PForm from "../../components/form/PForm";
import PInput from "../../components/form/PInput";
import { Button, Row } from "antd";
import { USER_ROLE } from "../../constant/userConstant";
import { useSignupMutation } from "../../redux/features/auth/authApi";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";


const Register = () => {
    const [signUp] = useSignupMutation()
    const navigate = useNavigate();


    const onSubmit: SubmitHandler<FieldValues> = async (data) => {
        const toastId = toast.loading('loading ....')


        try {
            const signUpData = {
                ...data,
                role: USER_ROLE.user
            }
            const res = await signUp(signUpData).unwrap();
            if (res?.success) {
                toast.success(res?.message, { id: toastId, duration: 2000 })
                navigate('/')

            }

        } catch (error) {
            toast.error(error?.data?.message, { id: toastId, duration: 2000 })

        }
    }

    return (

        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white shadow-lg rounded-lg p-8 max-w-sm w-full">
                <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Sign Up</h2>

                <Row justify={"center"} align={"middle"}  >
                    <PForm onSubmit={onSubmit} defaultValues={undefined} >
                        <PInput name="name" label="Name" type="text"></PInput>
                        <PInput name="email" label="Email" type="email"></PInput>
                        <PInput name="password" label="Password" type="text"></PInput>
                        <PInput name="phone" label="Phone" type="number"></PInput>
                        <PInput name="address" label="Address" type="text"></PInput>
                        <Button type="primary" htmlType="submit" style={{ width: '100%' }} >Sign Up</Button>
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