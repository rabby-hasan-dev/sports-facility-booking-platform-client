

import { Col, Row } from 'antd';
import MapCard from './MapCard';
import ContactForm from './ContactForm';
import Container from '../../../components/ui/Container';


const ContactUs = () => {


    return (
        <Container>

            <div style={{ paddingRight: '50px', paddingLeft: '50px', backgroundColor: '#f7f8fa' }}>
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
        </Container>
        // </div>
    );
};

export default ContactUs;
