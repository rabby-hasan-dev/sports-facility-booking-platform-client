
import { Card, Button } from 'antd';
import { Link } from 'react-router-dom';
import HeadingComponent from '../../../../components/ui/HeadingComponent';

const { Meta } = Card;

const offers = [
    {
        id: 1,
        facility: "Indoor Basketball Court",
        discount: 25,
        originalPrice: 80,
        discountedPrice: 60,
        description: "Enjoy 25% off on all weekday bookings!",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCCsIzwk9yMohv1CgBZ3zAdMCraXCqpDRrsA&s",
    },
    {
        id: 2,
        facility: "Swimming Pool",
        discount: 15,
        originalPrice: 50,
        discountedPrice: 42.5,
        description: "Get 15% off on weekend pool sessions!",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp1jMReREWbrNtbLhDroxRKs32UlX4k9wHAw&s",
    },
    {
        id: 2,
        facility: "Swimming Pool",
        discount: 15,
        originalPrice: 50,
        discountedPrice: 42.5,
        description: "Get 15% off on weekend pool sessions!",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp1jMReREWbrNtbLhDroxRKs32UlX4k9wHAw&s",
    },
    {
        id: 2,
        facility: "Swimming Pool",
        discount: 15,
        originalPrice: 50,
        discountedPrice: 42.5,
        description: "Get 15% off on weekend pool sessions! ",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp1jMReREWbrNtbLhDroxRKs32UlX4k9wHAw&s",
    },
    // Add more offers as needed
];

const OfferSection = () => {
    return (
        <section className="bg-gray-100 py-12  max-w-screen-xl mx-auto">
            <div className="container mx-auto px-6">

                <HeadingComponent heading=" Special Offers" subHeading="We are provide speciall offer for sports lover" />
                <div className="grid grid-cols-4 -mx-4">
                    {offers.map((offer) => (
                        <div key={offer.id} className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
                            <Card
                                hoverable
                                style={{ width: 240 }}
                                cover={<img alt={offer.facility} src={offer.imageUrl} className="h-48 object-cover" />}
                            >
                                <Meta title={offer.facility} description={offer.description.slice(0, 60)} />
                                <div className="flex items-center mt-4">
                                    <span className="text-red-600 font-bold text-lg">
                                        ${offer.discountedPrice}
                                    </span>
                                    <span className="text-gray-400 line-through ml-2">
                                        ${offer.originalPrice}
                                    </span>
                                    <span className="ml-auto bg-red-500 text-white text-xs font-bold rounded-full py-1 px-2">
                                        {offer.discount}% OFF
                                    </span>
                                </div>
                                <div className="mt-5">
                                    <Link to={`/facilities/${offer.id}`}>
                                        <Button type="primary" className="w-full">Book Now</Button>
                                    </Link>
                                </div>
                            </Card>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OfferSection;

