
import emailjs from '@emailjs/browser';
import { useRef,  } from 'react';
import PForm from '../form/PForm';
import { Button, Row } from 'antd';
import PInput from '../form/PInput';
import { Controller, FieldValues, SubmitHandler } from 'react-hook-form';
import TextArea from 'antd/es/input/TextArea';

const ContactForm = () => {
    const form = useRef();

    const sendEmail:SubmitHandler<FieldValues>= (data) => {
       
        emailjs.sendForm(import.meta.env.VITE_EMAILJS_SERVICE_ID, import.meta.env.VITE_EMAILJS_TEMPLATE_ID, form.current, import.meta.env.VITE_EMAILJS_PUBLIC_KEY)
            .then((result) => {
                if (result.text) {
                  
                    console.log(" Send Message Successfully  ..");
                }

            }, (error) => {
                console.log(error.text);

            });
       
    };


    return (
        <div className="pt-20 mb-8">
            <div className="  border-2  lg:mx-96   ">
                <div className="text-5xl font-bold text-center bg-slate-200 p-4 mb-4"></div>

                <Row justify={"center"} align={"middle"}   >
                    <PForm ref={form} onSubmit={sendEmail}  >

                        <PInput name="name" type="text" placeholder="Your Name"></PInput>
                        <PInput name="email" type="text" placeholder='Your Email'></PInput>
                        <PInput name="subject" type="text" placeholder='Write down the subject.'></PInput>
                        <Controller
                            name='message'
                            render={({ field }) => (
                                   <TextArea {...field} placeholder='Write Message' ></TextArea>
                                
                            )}


                        />
                        <Button htmlType="submit" style={{marginTop:'12px', marginBottom:'12px'}}>Send Message</Button>
                    </PForm>
                </Row>

               

            </div>
        </div>
    );
};

export default ContactForm;