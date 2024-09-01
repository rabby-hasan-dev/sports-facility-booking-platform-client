import AboutUs from "../pages/Home/AboutUs/AboutUs";
import Bookings from "../pages/Home/Bookings/Bookings";
import ContactUs from "../pages/Home/ContactUs/ContactUs";
import FacilityDetails from "../pages/Home/Facility/FacilityDetails";
import HomeFacility from "../pages/Home/Facility/HomeFacility";
import Home from "../pages/Home/Home/Home";
import ProtectedRoute from "./ProtectedRoute";



export const homeRoutes = [
    {

        index: true,
        element: <Home></Home>

    },
    {

        path: "aboutUs",
        element: <AboutUs></AboutUs>

    },
    {

        path: "contactUs",
        element: <ContactUs></ContactUs>

    },
    {

        path: "bookings",
        element: <ProtectedRoute role="user">
            <Bookings></Bookings>
        </ProtectedRoute>

    },
    {

        path: "bookings/:facilityId",
        element: <ProtectedRoute role="user">
            <Bookings></Bookings>
        </ProtectedRoute>

    },
    {

        path: "facilities",
        element: <HomeFacility></HomeFacility>

    },
    {

        path: "facilities/:id",
        element: <FacilityDetails></FacilityDetails>

    },
]