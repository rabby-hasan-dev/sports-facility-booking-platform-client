import { ReactNode } from "react";
import { FieldValues, FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { Form } from "antd";

type TPropsForm = {
    onSubmit: SubmitHandler<FieldValues>;
    children: ReactNode;
    ref?:any;

} & TFormCofing

type TFormCofing = {
    defaultValues?: Record<string, any>;
    

}





const PForm = ({ onSubmit, children, defaultValues, ref }: TPropsForm) => {
    const methods = useForm();

    const formConfig: TFormCofing = {};

    if (defaultValues) {
        formConfig['defaultValues'] = defaultValues;
    }

    const submitFormData: SubmitHandler<FieldValues> = (data) => {
        onSubmit(data)
        methods.reset();

    }

    return (
        <FormProvider  {...methods}>
            <Form ref={ref} layout="vertical" initialValues={defaultValues}  onFinish={methods.handleSubmit(submitFormData)}> {children} </Form>
        </FormProvider>
    );
};

export default PForm;