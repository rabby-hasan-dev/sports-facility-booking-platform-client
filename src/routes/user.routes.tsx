
import BookingDetailsUser from "../pages/Dashboard/User/MyBookings/BookingDetailsUser";
import MyBookings from "../pages/Dashboard/User/MyBookings/MyBookings";
import UserDashboard from "../pages/Dashboard/User/UserDashboard/UserDashboard";



export const userPaths = [

    {
        name: "Dashboard",
        index: true,
        element: <UserDashboard></UserDashboard>,
    },
    {
        name: "Dashboard",
        path: 'dashboard',
        element: <UserDashboard></UserDashboard>,
    },

    {
        name: "My Bookings",
        path: 'user-bookings',
        element: <MyBookings></MyBookings>,
    },
    {
       
        path: 'user-bookings/:bookingId',
        element: <BookingDetailsUser></BookingDetailsUser>,
    },


]