import ContactForm from "../../../components/ContactForm/ContactForm";
import Map from "../../../components/Map/Map";

const ContactUs = () => {
    return (
        <div className="space-y-16">

            {/* Conatct Form */}
            <div className="text-center">
                <h1 className="text-6xl font-medium  my-4">Contact Us</h1>
                <p className="text-xl text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus dignissimos maiores, animi ullam adipisci a consectetur, esse molestias, aliquid fugit minima suscipit nobis amet nostrum tenetur earum ad numquam. Cupiditate.</p>
                <div>
                    <ContactForm></ContactForm>
                </div>
            </div>

            {/* map component */}
            <div className="space-y-10 text-center">

                <h1 className="text-6xl font-medium">Get in touch with Osome</h1>

                <div className="lg:flex justify-around items-center space-y-3" >

                    <div className=" lg:mr-6 rounded-xl ">
                        <Map></Map>
                    </div>

                    <div className="bg-[#f3ede6] p-8 text-2xl  rounded-xl space-y-4 font-semibold md:w-[160] w-full h-[480px] ">
                        {/* <h1>Address: Mirpur,dahaka</h1> */}

                        <address>
                            <span className="text-[#909396] "> Address</span> <br /> Mirpur,dahaka
                        </address>
                        <p> <span className="text-[#909396] "> Email adress</span> <br />  email@gmail.com</p>
                        <p> <span className="text-[#909396] "> Phone</span> <br />  012595565568</p>
                    </div>

                </div>


            </div>
        </div>
    );
};

export default ContactUs;