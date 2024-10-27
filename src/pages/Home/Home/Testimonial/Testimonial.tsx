import { useEffect, useState } from "react";
import TestimonialCard from "../../../../components/ui/TestimonialCard";
import { ITestimonial } from "../../../../types/extra.type";
import HeadingComponent from "../../../../components/ui/HeadingComponent";
import Container from "../../../../components/ui/Container";



const Testimonial = () => {

  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {

    const testimonialApi = async () => {

      const res = await fetch('/testimonials.json');
      const data = await res.json();
      setTestimonials(data);

    }


    testimonialApi();



  }, [])

  return (
    <Container>
      <div className="container  ">
        <HeadingComponent heading=" What Our Believer Say" subHeading="There is our believer comment" />
        <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial: ITestimonial) => (
            <div key={testimonial?.id} className="w-full px-4 mb-8">
              <TestimonialCard key={testimonial?.id} testimonial={testimonial} />

            </div>
          ))}
        </div>

      </div>
    </Container>
  );
};

export default Testimonial;







