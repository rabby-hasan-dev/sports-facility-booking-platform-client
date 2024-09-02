import { useEffect, useState } from "react";
import TestimonialCard from "../../../../components/ui/TestimonialCard";
import { ITestimonial } from "../../../../types/extra.type";



const Testimonial = () => {

    const  [testimonials, setTestimonials]=useState([]);

    useEffect(()=>{

const testimonialApi=async()=>{

    const res= await fetch('/testimonials.json');
    const data= await res.json();
    setTestimonials(data);
    
}


testimonialApi();



    },[])
  
    return (
      <div className="py-12  bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center">
            What Our Believer Say
          </h2>
          <div className="mt-10 grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial:ITestimonial) => (
              <TestimonialCard key={testimonial?.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default Testimonial;







