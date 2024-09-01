
import { MailOutlined, PhoneOutlined, HomeOutlined } from '@ant-design/icons';
import { Card } from 'antd';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const MapCard = () => {
    const position = [23.820626491316503, 90.37038287534364]

    return (
        <div>
            <Card bordered={false} style={{ backgroundColor: '#fff', padding: '20px' }}>
                <h2 className='text-lg font-medium mb-2' >Contact Details</h2>
                <p><PhoneOutlined /> Phone: (123) 456-7890</p>
                <p><MailOutlined /> Email: contact@company.com</p>
                <p><HomeOutlined /> Address: 1234 Mirpur,dahaka, Bangladesh</p>

                <h3 className='text-lg font-medium'>Our Location</h3>
                <MapContainer
                    center={position}
                    zoom={13}
                    style={{ height: '360px', width: '100%', marginTop: '20px' }}
                >
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    />
                    <Marker position={position}>
                        <Popup>Our Office</Popup>
                    </Marker>
                </MapContainer>
            </Card>
        </div>
    );
};

export default MapCard;