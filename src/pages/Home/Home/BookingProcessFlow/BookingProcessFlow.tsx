import Container from "../../../../components/ui/Container";
import HeadingComponent from "../../../../components/ui/HeadingComponent";
import HowItWorks from "./HowItWorks";



const BookingProcessFlow = () => {
  return (
    <Container>
      <div className="container ">
        <HeadingComponent heading="How It Works" subHeading="A step-by-step guide explaining the booking process." />
        <div className="py-8 ">
          <HowItWorks></HowItWorks>
        </div>
      </div>

    </Container>
  );
};

export default BookingProcessFlow;