import { FieldValues, SubmitHandler } from "react-hook-form";
import PForm from "../../components/form/PForm";
import PInput from "../../components/form/PInput";
import { Button, Col, Row } from "antd";


const Login = () => {

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        console.log(data);
    }

    return (
        <div className="bg-blue-400 h-screen" >


            <Row justify={"center"} align={"middle"} >
                <PForm onSubmit={onSubmit}>
                    <PInput name="email" label="Email" type="text"></PInput>
                    <PInput name="password" label="Password" type="text"></PInput>
                    <Button htmlType="submit">Login</Button>
                </PForm>
            </Row>





        </div>
    );
};

export default Login;