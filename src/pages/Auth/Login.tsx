import { FieldValues, SubmitHandler } from "react-hook-form";
import PForm from "../../components/form/PForm";
import PInput from "../../components/form/PInput";
import { Button, Row } from "antd";
import { useLoginMutation } from "../../redux/features/auth/authApi";
import { useAppDispatch } from "../../redux/hooks";
import { setUser } from "../../redux/features/auth/authSlice";
import { Link, useNavigate } from "react-router-dom";




const Login = () => {
    const navigate = useNavigate()

    const [login] = useLoginMutation();
    const dispatch = useAppDispatch();

    const defaultValues = {
        email: 'web@programming-hero.com',
        password: 'programming-hero'
    }

    const onSubmit: SubmitHandler<FieldValues> = async (data) => {


        const userInfo = {
            ...data
        }

        try {

            const res = await login(userInfo).unwrap();
            dispatch(setUser({ user: res.data, token: res.token }));
            navigate('/')

        } catch (error) {

            console.log(error);
        }


    }

    return (

        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white shadow-lg rounded-lg p-8 max-w-sm w-full">
                <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Login</h2>

                <Row justify={"center"} align={"middle"} >
                    <PForm onSubmit={onSubmit} defaultValues={defaultValues}>
                        <PInput name="email" label="Email" type="text"></PInput>
                        <PInput name="password" label="Password" type="text"></PInput>
                        <Button type="primary" htmlType="submit" style={{width:'100%'}}>Login</Button>
                    </PForm>
                </Row>

                <Row justify={"center"} align={"middle"}>

                    <div className="text-center mb-4">
                        <span className="text-sm text-gray-700">
                            Don't have an account?{' '}
                            <Link  to='/register' className="text-indigo-500 hover:underline">
                                Sign Up
                            </Link>
                        </span>
                    </div>
                    <div className="text-center">
                        <a href="#" className="text-sm text-indigo-500 hover:underline">
                            Forgot your password?
                        </a>
                    </div>
                </Row>

            </div>
        </div>









    );
};

export default Login;