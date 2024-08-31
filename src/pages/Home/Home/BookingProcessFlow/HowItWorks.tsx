
import { Timeline, } from 'antd';
import { CheckCircleOutlined, FileTextOutlined, CalendarOutlined, CreditCardOutlined } from '@ant-design/icons';
import 'antd/dist/reset.css'; 


const steps = [
    {
        title: 'Select Your Facility',
        icon: <FileTextOutlined />,
        description: 'Browse through our list of available facilities and choose the one that fits your needs.',
    },
    {
        title: 'Choose a Date & Time',
        icon: <CalendarOutlined />,
        description: 'Pick a suitable date and time for your booking. Our calendar will show available slots.',
    },
    {
        title: 'Complete Your Booking',
        icon: <CreditCardOutlined />,
        description: 'Fill out the booking form with your details and make a payment to confirm your reservation.',
    },
    {
        title: 'Receive Confirmation',
        icon: <CheckCircleOutlined />,
        description: 'Once your payment is processed, you will receive a confirmation  a booking summary.',
    },
];

const HowItWorks = () => {
    return (

        <div className="mx-auto px-4 py-8 bg-gray-100 rounded-lg shadow-md">
            <Timeline mode="alternate">
                {steps.map((step, index) => (
                    <Timeline.Item
                        key={index}
                        dot={step.icon}
                        color={index % 2 === 0 ? 'blue' : 'green'}
                    >
                        <div className="mb-2 text-lg font-semibold">{step.title}</div>
                        <div className="text-gray-700">{step.description}</div>
                    </Timeline.Item>
                ))}
            </Timeline>
        </div>
    );



};

export default HowItWorks;
