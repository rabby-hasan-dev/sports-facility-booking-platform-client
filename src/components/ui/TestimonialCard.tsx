
const TestimonialCard = ({ testimonial }:any) => {
    return (
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-md mx-auto">
            <div className="flex items-center space-x-4">
                <img
                    src={testimonial.image}
                    alt={testimonial?.name}
                    className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                    <h3 className="text-xl font-semibold">{testimonial?.name}</h3>
                    <p className="text-gray-500">{testimonial?.designation}</p>
                </div>
            </div>
            <p className="mt-4 text-gray-600">{testimonial?.text}</p>
        </div>
    );
};


export default TestimonialCard