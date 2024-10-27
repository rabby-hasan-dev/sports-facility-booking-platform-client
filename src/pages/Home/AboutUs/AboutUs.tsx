import ContactInfo from "./ContactInfo";
import HistoryMileStone from "./HistoryMileStone";
import MissionStatement from "./MissionStatement";
import TeamSection from "./TeamSection";


const AboutUs = () => {
    return (
        <div className="mx-[50px] " >
            <MissionStatement />
            <TeamSection />
            <HistoryMileStone />
            <ContactInfo />



        </div>
    );
};

export default AboutUs;