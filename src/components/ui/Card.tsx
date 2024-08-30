import { Button, Card } from 'antd';
import { Link } from 'react-router-dom';

const { Meta } = Card;

type TCardProps = {
    image: string;
    name: string;
    pricePerHour?: string;
    id: string;
    loading: any;
    description?: string;
}


const CardComponent = ({ id, loading, image, name, pricePerHour, description }: TCardProps) => {
    return (
        <>
            <Card
                loading={loading}
                hoverable
                style={{ width: 240 }}
                cover={<img alt="Facility_image" src={image} />}
            >
                {
                    description ? <Meta title={`Name: ${name}`} description={description} />
                        : <Meta title={`Name: ${name}`} description={`Price PerHour: ${pricePerHour}`} />

                }
              {
                description?  <Link to={`/facilities`} ><Button>Book Now</Button></Link>
                :  <Link to={`/facilities/${id}`} ><Button>View Details</Button></Link>
              }
            </Card>
        </>
    );
};

export default CardComponent;