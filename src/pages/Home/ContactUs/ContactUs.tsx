

import { Col, Row } from 'antd';
import MapCard from './MapCard';
import ContactForm from './ContactForm';


const ContactUs = () => {


    return (
        <div className="contact-us-container" style={{ padding: '50px 0', backgroundColor: '#f7f8fa' }}>
            <div className='max-w-7xl mx-auto'>
                <Row gutter={16} justify="center"  >

                    {/* contact form */}

                    <Col xs={24} sm={24} md={12}>
                        <ContactForm></ContactForm>
                    </Col>

                    {/* Map Contact loaction */}

                    <Col xs={24} sm={24} md={12}>
                        <MapCard></MapCard>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default ContactUs;
