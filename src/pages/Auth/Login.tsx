import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import PForm from "../../components/form/PForm";
import PInput from "../../components/form/PInput";
import { Button, Input, Row, Space, Tooltip } from "antd";
import { useLoginMutation } from "../../redux/features/auth/authApi";
import { useAppDispatch } from "../../redux/hooks";
import { setUser, TUser } from "../../redux/features/auth/authSlice";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { verifyToken } from "../../utils/verifyToken";
import { USER_ROLE } from "../../constant/userConstant";

import loginImage from '../../assets/images/loginImage.jpg'


const Login = () => {
    const navigate = useNavigate()
    const [login] = useLoginMutation();
    const dispatch = useAppDispatch();

    // Initialize useForm
    const { register, handleSubmit, setValue } = useForm();

    const onSubmit: SubmitHandler<FieldValues> = async (data) => {
        const toastId = toast.loading('loading ....')

        try {

            const userInfo = {
                ...data
            }

            console.log(userInfo)
            const res = await login(userInfo).unwrap();
            const user = verifyToken(res?.token) as TUser;
            if (user?.role === USER_ROLE.user || user?.role === USER_ROLE.admin || user?.role === USER_ROLE.superAdmin) {
                dispatch(setUser({ user: { ...user, name: res?.data?.name }, token: res.token }));
                toast.success(res?.message, { id: toastId, duration: 2000 });
                navigate('/')
            }

        } catch (error: any) {
            toast.error(error?.data?.message, { id: toastId, duration: 2000 })

        }


    }






    return (


        <div className="min-h-screen flex items-center justify-center bg-gray-100 relative">
            {/* Background Image */}
            <div className="absolute inset-0">
                <img
                    src={loginImage}
                    alt="Login Background"
                    className="object-cover w-full h-full opacity-30"
                />
            </div>

            <div className="bg-white shadow-lg rounded-lg p-8 max-w-sm w-full relative z-10 transform transition-transform duration-300 ease-in-out hover:scale-105">
                <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Login</h2>

                <Row justify={"space-evenly"} align={"middle"} style={{ margin: 10 }}>
                    <Space>
                        <Tooltip title="Click on auto fill user creadential!" color={"blue"} key={'blue'}>
                            <Button onClick={() => {

                                setValue("email", "code@gmail.com", {
                                    shouldValidate: true,
                                    shouldDirty: true
                                })
                                setValue("password", "123456", {
                                    shouldValidate: true,
                                    shouldDirty: true
                                })

                            }

                            } size="small">User Credential</Button>
                        </Tooltip>
                        <Tooltip title="Click on  auto fill admin creadential!" color={"purple"} key={"purple"}>
                            <Button onClick={() => {

                                setValue("email", "code-admin@gmail.com", {
                                    shouldValidate: true,
                                    shouldDirty: true
                                })
                                setValue("password", "admin12345", {
                                    shouldValidate: true,
                                    shouldDirty: true
                                })

                            }

                            } size="small"> Admin Credential</Button>
                        </Tooltip>

                    </Space>
                </Row>
                <Row justify={"center"} align={"middle"}>
                    <form
                        className="space-y-5"
                        onSubmit={handleSubmit(onSubmit)}
                    >
                        <input
                            {...register("email")}
                            name="email"
                            placeholder="Enter your Email"
                            className="border-2 border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            required
                        />
                        <input
                            {...register("password")}
                            name="password" type="password"
                            placeholder="Enter your Password"
                            className="border-2 border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            required
                        />
                        <Button type="primary" htmlType="submit" style={{ width: '100%' }}>Login</Button>
                    </form>
                </Row>

                <Row justify={"center"} align={"middle"}>
                    <div className="text-center mb-4">
                        <span className="text-sm text-gray-700">
                            Don't have an account?{' '}
                            <Link to='/register' className="text-indigo-500 hover:underline">
                                Sign Up
                            </Link>
                        </span>
                    </div>
                    <div className="text-center mb-4">
                        <Link to="#" className="text-sm text-indigo-500 hover:underline">
                            Forgot your password?
                        </Link>
                    </div>
                </Row>

                {/* Home Button */}
                <div className="text-center">
                    <Link to='/' >
                        <Button
                            type="default"
                            className="mt-4 bg-gray-300 text-gray-700 py-2 rounded hover:bg-gray-400 transition duration-300 w-full"
                        >
                            Go Home
                        </Button>
                    </Link>
                </div>
            </div>
        </div>









    );
};

export default Login;