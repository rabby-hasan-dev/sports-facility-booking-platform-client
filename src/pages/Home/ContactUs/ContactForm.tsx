import { Card } from "antd";
import TextArea from "antd/es/input/TextArea";

import emailjs from '@emailjs/browser';
import { FormEventHandler, useRef } from "react";
import { toast } from "sonner";

const ContactForm = () => {

    const form = useRef<HTMLFormElement | null>(null);

    const onSubmit: FormEventHandler = (e) => {
        e.preventDefault();
        if (form?.current) {
            emailjs.sendForm(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                form.current,
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY)
                .then((result) => {
                    if (result.text) {
                        toast.success(" Send Message Successfully  ..")

                    }
                    form?.current?.reset()
                }, (error) => {
                    toast.error(error.text)

                });
        }


    }

    return (
        <>
            <Card bordered={false} style={{ backgroundColor: '#fff', padding: '20px' }}>
                <h2 className='text-lg font-medium' >Contact Us</h2>

                <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg mt-10">
                    <form ref={form} onSubmit={onSubmit} >
                        <div className="mb-6">
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                            <input
                                id="name"
                                name="name"
                                type="text"
                                placeholder="Your Name"
                                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                required
                            />
                            <p id="name-error" className="text-red-500 text-sm mt-1 hidden"></p>
                        </div>

                        <div className="mb-6">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                placeholder="Your Email"
                                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                required
                            />
                            <p id="email-error" className="text-red-500 text-sm mt-1 hidden"></p>
                        </div>

                        <div className="mb-6">
                            <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                            <input
                                id="subject"
                                name="subject"
                                type="text"
                                placeholder="Subject"
                                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                required
                            />
                            <p id="subject-error" className="text-red-500 text-sm mt-1 hidden"></p>
                        </div>

                        <div className="mb-6">
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                            <TextArea
                                id="message"
                                name="message"
                                rows={3}
                                placeholder="Your Message"
                                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                required
                            ></TextArea>
                            <p id="message-error" className="text-red-500 text-sm mt-1 hidden"></p>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>




            </Card>
        </>
    );
};

export default ContactForm;