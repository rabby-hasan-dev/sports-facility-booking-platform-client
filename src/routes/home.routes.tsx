import AboutUs from "../pages/Home/AboutUs/AboutUs";
import Bookings from "../pages/Home/Bookings/Bookings";
import BookingChecker from "../pages/Home/BookingsChecker/BookingChecker";
import ContactUs from "../pages/Home/ContactUs/ContactUs";
import Facility from "../pages/Home/Facility/Facility";
import Home from "../pages/Home/Home/Home";



export   const homeRoutes=[
    {

    path:"/",
    element:<Home></Home>

    },
    {

    path:"aboutUs",
    element:<AboutUs></AboutUs>

    },
    {

    path:"contactUs",
    element:<ContactUs></ContactUs>

    },
    {

    path:"bookings",
    element:<Bookings></Bookings>

    },
    {

    path:"facilities",
    element:<Facility></Facility>

    },
    {

    path:"bookings-checker",
    element:<BookingChecker></BookingChecker>

    },
]