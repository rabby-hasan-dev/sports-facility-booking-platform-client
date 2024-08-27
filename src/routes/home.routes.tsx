import AboutUs from "../pages/Home/AboutUs/AboutUs";
import Bookings from "../pages/Home/Bookings/Bookings";
import BookingChecker from "../pages/Home/BookingsChecker/BookingChecker";
import ContactUs from "../pages/Home/ContactUs/ContactUs";
import FacilityDetails from "../pages/Home/Facility/FacilityDetails";
import HomeFacility from "../pages/Home/Facility/HomeFacility";

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
    element:<HomeFacility></HomeFacility>

    },
    {

    path:"facilities/:id",
    element:<FacilityDetails></FacilityDetails>

    },
    {

    path:"bookings-checker",
    element:<BookingChecker></BookingChecker>

    },
]