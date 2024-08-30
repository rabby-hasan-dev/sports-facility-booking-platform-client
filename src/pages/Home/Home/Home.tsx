import FAQ from "./FAQ/FAQ";
import FeaturedFacility from "./FeaturedFacility/FeaturedFacility";
import HeroSection from "./HeroSection/HeroSection";
import Testimonial from "./Testimonial/Testimonial";
import BookingProcessFlow from "./BookingProcessFlow/BookingProcessFlow";



const Home = () => {
    return (
        <div>
            
            <HeroSection></HeroSection>
            <BookingProcessFlow></BookingProcessFlow>
            <BookingProcessFlow></BookingProcessFlow>
            <FeaturedFacility></FeaturedFacility>
            <FAQ></FAQ>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;