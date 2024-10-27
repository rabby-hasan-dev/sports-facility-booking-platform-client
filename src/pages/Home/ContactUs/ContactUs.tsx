


import { Button, Col, Row } from 'antd';
import MapCard from './MapCard';
import ContactForm from './ContactForm';
import Container from '../../../components/ui/Container';
import contactImage from '../../../assets/images/contact.jpg';

const ContactUs = () => {
    const scrollToForm = () => {
        const contactForm = document.getElementById('contact-form');
        if (contactForm) {
            contactForm.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <Container>
            <section
                style={{ backgroundImage: `url(${contactImage})` }}
                className="relative bg-no-repeat bg-cover flex flex-col items-center justify-center h-64 text-center text-white shadow-lg overflow-hidden"
            >
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-black opacity-50" />

                <div className="relative z-10">
                    <h1 className="text-4xl md:text-5xl font-bold drop-shadow-md">Get in Touch</h1>
                    <p className="text-lg md:text-xl mt-2 drop-shadow-md">
                        We’d love to hear from you!
                    </p>
                    <Button
                        onClick={scrollToForm}
                        className="mt-4 bg-green-500 hover:bg-green-600 text-white rounded-lg shadow-md transition duration-300"
                        size='large'
                    >
                        Contact Us
                    </Button>
                </div>
            </section>

            <div style={{ padding: '40px 50px', backgroundColor: '#f7f8fa' }}>
                <Row gutter={16} justify="center">
                    {/* Contact Form */}
                    <Col xs={24} sm={24} md={12} id="contact-form">
                        <ContactForm />
                    </Col>

                    {/* Map Contact Location */}
                    <Col xs={24} sm={24} md={12}>
                        <MapCard />
                    </Col>
                </Row>
            </div>
        </Container>
    );
};

export default ContactUs;
