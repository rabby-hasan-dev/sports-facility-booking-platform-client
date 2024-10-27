import { Button, Card, Rate } from 'antd';
import { Link } from 'react-router-dom';

const { Meta } = Card;

type TCardProps = {
    loading: boolean;
    id?: string;
    name: string;
    pricePerHour: number;
    description?: string;
    image: string;
}


const CardComponent = ({ id, loading, image, name, pricePerHour, }: TCardProps) => {

    return (
        <>
            <Card
                id={id}
                loading={loading}
                hoverable
                style={{ width: 240 }}
                cover={<img alt="Facility_image" src={image} />}
            >
                <Meta title={name} description={`Price: $${pricePerHour} /hour`} />

                <div className="mt-4 flex items-center justify-between">
                    <span>Rating:</span>
                    <Rate allowHalf defaultValue={4.5} />
                </div>

                <div className="mt-5">
                    <Link to={`/facilities/${id}`} ><Button type='primary' className="w-full" >Book Now</Button></Link>
                </div>
            </Card>
        </>
    );
};

export default CardComponent;