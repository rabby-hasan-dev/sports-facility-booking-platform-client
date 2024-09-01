import { Button, Card } from 'antd';
import { Link } from 'react-router-dom';

const { Meta } = Card;

type TCardProps = {
    loading: any;
    id?: string;
    name: string;
    pricePerHour?: number;
    description?: string;
    image: string;
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
              <div className='mt-5'>
              {
                description?  <Link to={`/facilities`} ><Button type='primary'  >Book Now</Button></Link>
                :  <Link to={`/facilities/${id}`} ><Button type='primary' >View Details</Button></Link>
              }
              </div>
            </Card>
        </>
    );
};

export default CardComponent;