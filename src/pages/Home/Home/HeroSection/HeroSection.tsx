
import { Button } from 'antd';
import heroimg from '../../../../assets/images/heroPic.png'
import { Link } from 'react-router-dom';


const heroImageStyle = {

    // width: "100%",
    maxWidth: '100%',
    height: '660px',
    backgroundImage: `url(" ${heroimg} ")`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    marginBottom: '20px',
    marginLeft: 'auto',
    marginRight: 'auto'



}



const HeroSection = () => {
    return (
        <div className=' flex justify-center items-center' style={heroImageStyle}  >


            <div className='text-white text-center space-y-5 p-5   '>
                <h2 className='text-4xl uppercase font-extrabold' >Your Sports, Your Space - Book Now!</h2>
                <p className='text-lg mb-8'>Experience the ultimate convenience in booking your favorite sports facility. Whether it's a quick game or a scheduled practice, our platform makes it easy to reserve the space you need. With just a few clicks, secure your spot and get ready to play. <br /> Don't wait—your perfect sports facility is just a booking away!</p>
                <div>
                    <Link to='/facilities'>
                        <Button>Book Now</Button>
                    </Link>
                </div>
            </div>




        </div>
    );
};

export default HeroSection;