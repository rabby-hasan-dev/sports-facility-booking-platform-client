import { FieldValues, SubmitHandler } from "react-hook-form";
import PForm from "../../components/form/PForm";
import PInput from "../../components/form/PInput";
import { Button } from "antd";
import { USER_ROLE } from "../../constant/userConstant";
import { useSignupMutation } from "../../redux/features/auth/authApi";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";


import signupImage from '../../assets/images/signUpPage.jpg'
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
            console.log(res);
            if (res?.success) {
                toast.success(res?.message, { id: toastId, duration: 2000 })
                navigate('/')

            }

            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error: any) {
            toast.error(error?.data?.message, { id: toastId, duration: 2000 })

        }
    }

    return (

        <div className="min-h-screen flex items-center justify-center bg-gray-100 relative">
            {/* Background Image */}
            <div className="absolute inset-0">
                <img
                    src={signupImage} // Background image for signup
                    alt="Signup Background"
                    className="object-cover w-full h-full opacity-30"
                />
            </div>

            <div className="bg-white shadow-lg rounded-lg p-8 max-w-sm w-full relative z-10 transform transition-transform duration-300 ease-in-out hover:scale-105">
                <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Sign Up</h2>

                <PForm onSubmit={onSubmit}>
                    <PInput name="name" label="Name" type="text" placeholder="Enter your Name" />
                    <PInput name="email" label="Email" type="email" placeholder="Enter your Email" />
                    <PInput name="password" label="Password" type="password" placeholder="Enter your Password" />
                    <PInput name="phone" label="Phone" type="tel" placeholder="Enter your Phone" />
                    <PInput name="address" label="Address" type="text" placeholder="Enter your Address" />
                    <button type="submit" className="w-full bg-indigo-500 text-white py-2 rounded hover:bg-indigo-600 transition duration-300">
                        Sign Up
                    </button>
                </PForm>

                <div className="text-center mb-4">
                    <span className="text-sm text-gray-700">
                        Already have an account?{' '}
                        <Link to="/login" className="text-indigo-500 hover:underline">
                            Login
                        </Link>
                    </span>
                </div>

                {/* Home Button */}
                <div className="text-center">
                    <Link to="/">
                        <Button className="bg-gray-300 text-gray-700 py-2 rounded hover:bg-gray-400 transition duration-300 w-full">
                            Go Home
                        </Button>
                    </Link>
                </div>
            </div>
        </div>






    );
};

export default Register;