import { FieldValues, SubmitHandler } from "react-hook-form";
import PForm from "../../components/form/PForm";
import PInput from "../../components/form/PInput";
import { Button, Row } from "antd";
import { useLoginMutation } from "../../redux/features/auth/authApi";
import { useAppDispatch } from "../../redux/hooks";
import { setUser } from "../../redux/features/auth/authSlice";




const Login = () => {

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
            console.log(res);

        } catch (error) {

            console.log(error);
        }


    }

    return (
        <div className="bg-blue-400 h-screen" >


            <Row justify={"center"} align={"middle"} >
                <PForm onSubmit={onSubmit} defaultValues={defaultValues}>
                    <PInput name="email" label="Email" type="text"></PInput>
                    <PInput name="password" label="Password" type="text"></PInput>
                    <Button htmlType="submit">Login</Button>
                </PForm>
            </Row>





        </div>
    );
};

export default Login;