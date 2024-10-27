
import { Button } from 'antd';
import heroimg from '../../../../assets/images/heroPic.png';
import { Link } from 'react-router-dom';
import Container from '../../../../components/ui/Container';

const HeroSection = () => {
    return (
        <div
            className="flex justify-center items-center h-[660px] mb-5 bg-cover bg-no-repeat relative"
            style={{ backgroundImage: `url(${heroimg})` }} // Keeping background image in style for now
        >
            <div className="absolute inset-0 bg-black/30 z-10" /> {/* Semi-transparent overlay */}

            <Container>
                <div className="relative z-20 text-white text-center p-5 space-y-5">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl uppercase font-extrabold">
                        Your Sports, Your Space - Book Now!
                    </h2>
                    <p className="text-md md:text-lg mb-8">
                        Experience the ultimate convenience in booking your favorite sports facility. Whether it's a quick game or a scheduled practice, our platform makes it easy to reserve the space you need.
                        <br /> Don't wait—your perfect sports facility is just a booking away!
                    </p>
                    <Link to='/facilities'>
                        <Button type='primary' size='large' className="bg-blue-500 hover:bg-blue-600 text-white transition duration-300">
                            Book Now
                        </Button>
                    </Link>
                </div>
            </Container>
        </div>
    );
};

export default HeroSection;
