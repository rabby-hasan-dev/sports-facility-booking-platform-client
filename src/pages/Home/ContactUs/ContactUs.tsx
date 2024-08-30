import ContactForm from "../../../components/ContactForm/ContactForm";
import Map from "../../../components/Map/Map";

const ContactUs = () => {
    return (
        <div className="space-y-16">

            {/* Conatct Form */}
            <div className="text-center">
                <h2 className="text-4xl font-extrabold  my-4">Contact Us</h2>
                <p className="text-lg text-center">Whether you have a question about bookings, need assistance with our platform, or just want to give feedback, our team is ready to assist you. <br />
                    Reach out to us through any of the channels below, and we’ll get back to you as soon as possible.</p>
                <div>
                    <ContactForm></ContactForm>
                </div>
            </div>

            {/* map component */}
            <div className="space-y-10 text-center">

                <h2 className="text-4xl font-extrabold">Get in touch with Osome</h2>

                <div className="lg:flex justify-around items-center space-y-3" >

                    <div className=" lg:mr-6 rounded-xl ">
                        <Map></Map>
                    </div>

                    <div className="bg-[#f3ede6] p-8 text-2xl  rounded-xl space-y-4 font-semibold md:w-[160] w-full h-[480px] ">
                        {/* <h1>Address: Mirpur,dahaka</h1> */}

                        <address>
                            <span className="text-[#909396] "> Address</span> <br /> Mirpur,dahaka
                        </address>
                        <p> <span className="text-[#909396] "> Email adress</span> <br /> contact@sportsbooking.com</p>
                        <p> <span className="text-[#909396] "> Phone</span> <br />  012595565568</p>
                    </div>

                </div>


            </div>
        </div>
    );
};

export default ContactUs;