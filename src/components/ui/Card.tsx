import { Button, Card } from 'antd';
import { Link } from 'react-router-dom';

const { Meta } = Card;

type TCardProps = {
    image: string;
    name: string;
    pricePerHour: string;
    id: string;
    loading:any
}


const CardComponent = ({ id,loading, image, name, pricePerHour }: TCardProps) => {
    return (
        <>
            <Card
                loading={loading}
                hoverable
                style={{ width: 240 }}
                cover={<img alt="Facility_image" src={image} />}
            >
                <Meta title={`Name: ${name}`} description={`Price PerHour: ${pricePerHour}`} />
                <Link to={`/facilities/${id}`} ><Button>View Details</Button></Link>
            </Card>
        </>
    );
};

export default CardComponent;