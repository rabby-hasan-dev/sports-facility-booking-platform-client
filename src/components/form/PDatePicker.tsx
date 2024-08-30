
import { DatePicker, Form } from "antd";
import { Controller } from "react-hook-form";

type TPDatePickerProps = {
    name: string;
    label?: string;
}


const  PDatePicker = ({ name, label }: TPDatePickerProps) => {

    return (
        <div style={{ marginBottom: '20px' }}>

            <Controller
                name={name}
                render={({ field }) =>(
                    <Form.Item label={label} >
                        <DatePicker  {...field}  style={{width:'100%'}} size="middle" />
                    </Form.Item>
                ) }


            />
          

        </div>
    )

};

export default  PDatePicker;