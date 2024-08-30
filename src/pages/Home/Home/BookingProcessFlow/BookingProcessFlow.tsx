
import Flow from './Flow';

const BookingProcessFlow = () => {
  return (
    <div>
       <div className="space-y-3 text-center bg-gray-100 p-5">
                <h2 className="text-3xl font-extrabold text-gray-900">Booking process flow</h2>
                <p className="text-lg text-gray-600 ">A step-by-step guide explaining the booking process.</p>
            </div>

      <Flow></Flow>
    </div>
  );
};

export default BookingProcessFlow;