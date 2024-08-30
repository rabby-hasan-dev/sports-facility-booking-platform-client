
import { Controller, useFormContext } from 'react-hook-form';
import { Form, TimePicker } from 'antd';

type TPTimePicker = {
  name: string;
  label: string;
};

const PTimePicker = ({ name, label }: TPTimePicker) => {
  const { control } = useFormContext();

  return (
    <div style={{ marginBottom: '10px' }}>
      <Controller
        name={name}
        control={control}
        render={({ field, fieldState: { error } }) => (
          <>
            <Form.Item label={label}>
              <TimePicker
                {...field}
                size="large"
                style={{ width: '100%' }}
                format="HH:mm"
              />
              {error && <small style={{ color: 'red' }}>{error.message}</small>}
            </Form.Item>
          </>
        )}
      ></Controller>
    </div>
  );
};

export default PTimePicker;