
import FeaturedFacility from "./FeaturedFacility/FeaturedFacility";
import HeroSection from "./HeroSection/HeroSection";
import Testimonial from "./Testimonial/Testimonial";
import BookingProcessFlow from "./BookingProcessFlow/BookingProcessFlow";
import OfferSection from "./OfferSection/OfferSection";
import FAQSection from "./FAQSection/FAQSection";



const Home = () => {
    // className="flex flex-col justify-center"
    return (
        <div>

            <HeroSection></HeroSection>
            <BookingProcessFlow></BookingProcessFlow>
            <FeaturedFacility></FeaturedFacility>
            <OfferSection />
            <FAQSection />
            <Testimonial></Testimonial>

        </div>
    );
};

export default Home;