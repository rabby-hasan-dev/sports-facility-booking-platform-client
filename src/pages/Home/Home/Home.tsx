import FAQ from "./FAQ/FAQ";
import FeaturedFacility from "./FeaturedFacility/FeaturedFacility";
import HeroSection from "./HeroSection/HeroSection";
import Testimonial from "./Testimonial/Testimonial";
import WorkFlow from "./WorkFlow/WorkFlow";


const Home = () => {
    return (
        <div>
            
            <HeroSection></HeroSection>
            <WorkFlow></WorkFlow>,
            <FeaturedFacility></FeaturedFacility>
            <FAQ></FAQ>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;