import FAQ from "./FAQ/FAQ";
import FeaturedFacility from "./FeaturedFacility/FeaturedFacility";
import HeroSection from "./HeroSection/HeroSection";
import Testimonial from "./Testimonial/Testimonial";
import BookingProcessFlow from "./BookingProcessFlow/BookingProcessFlow";
import OfferSection from "./OfferSection/OfferSection";



const Home = () => {

    return (
        <div className="space-y-10">

            <HeroSection></HeroSection>
            <BookingProcessFlow></BookingProcessFlow>
            <FeaturedFacility></FeaturedFacility>
            <OfferSection />
            <FAQ></FAQ>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;