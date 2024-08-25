import { FieldValues, SubmitHandler } from "react-hook-form";
import PForm from "../../components/form/PForm";
import PInput from "../../components/form/PInput";
import { Button,  Row } from "antd";


const Register = () => {

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        const registerData={
            ...data,
            role:"user"
        }
        console.log(registerData);
    }

    return (
        <div className="bg-blue-400 h-screen" >


            <Row justify={"center"} align={"middle"} >
                <PForm onSubmit={onSubmit}>
                    <PInput name="name" label="Name" type="text"></PInput>
                    <PInput name="email" label="Email" type="text"></PInput>
                    <PInput name="password" label="Password" type="text"></PInput>
                    <PInput name="phone" label=" phone" type="text"></PInput>
                    <Button htmlType="submit">Sign Up</Button>
                </PForm>
            </Row>





        </div>
    );
};

export default Register;