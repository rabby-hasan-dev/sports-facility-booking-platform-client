import { Button, Card, Form, Input } from "antd";
import TextArea from "antd/es/input/TextArea";
import { FieldValues, SubmitHandler } from "react-hook-form";
import emailjs from '@emailjs/browser';
import { useRef } from "react";

const ContactForm = () => {
    const formRef = useRef();

    const onFinish: SubmitHandler<FieldValues> = (values) => {


        emailjs.sendForm(import.meta.env.VITE_EMAILJS_SERVICE_ID, import.meta.env.VITE_EMAILJS_TEMPLATE_ID, formRef.current, import.meta.env.VITE_EMAILJS_PUBLIC_KEY)
            .then((result) => {
                if (result.text) {

                    console.log(" Send Message Successfully  ..");
                }

            }, (error) => {
                console.log(error.text);

            });

    };

    return (
        <>
            <Card bordered={false} style={{ backgroundColor: '#fff', padding: '20px' }}>
                <h2 className='text-lg font-medium' >Contact Us</h2>

                <Form
                    name="contact_form"
                    layout="vertical"
                    onFinish={onFinish}
                    style={{ marginTop: '20px' }}

                >
                    <Form.Item
                        name="name"
                        label="Name"
                        rules={[{ required: true, message: 'Please enter your name' }]}
                    >
                        <Input placeholder="Your Name" />
                    </Form.Item>
                    <Form.Item
                        name="email"
                        label="Email"
                        rules={[{ required: true, message: 'Please enter your email' }]}
                    >
                        <Input type="email" placeholder="Your Email" />
                    </Form.Item>
                    <Form.Item
                        name="subject"
                        label="Subject"
                        rules={[{ required: true, message: 'Please enter a subject' }]}
                    >
                        <Input placeholder="Subject" />
                    </Form.Item>
                    <Form.Item
                        name="message"
                        label="Message"
                        rules={[{ required: true, message: 'Please enter your message' }]}
                    >
                        <TextArea rows={4} placeholder="Your Message" />
                    </Form.Item>
                    <Form.Item>
                        <Button htmlType="submit" block>
                            Submit
                        </Button>
                    </Form.Item>
                </Form>

            </Card>
        </>
    );
};

export default ContactForm;