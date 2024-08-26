
import CreateBookings from "../pages/Dashboard/User/MyBookings/CreateBookings";
import MyBookings from "../pages/Dashboard/User/MyBookings/MyBookings";
import UserDashboard from "../pages/Dashboard/User/UserDashboard/UserDashboard";



export const userPaths = [

    {
        name: "Dashboard",
        path: 'dashboard',
        element: <UserDashboard></UserDashboard>,
    },
    {
        name: "Create Bookings",
        path: 'create-bookings',
        element: <CreateBookings></CreateBookings>,
    },
    {
        name: "Bookings",
        path: 'user-bookings',
        element:  <MyBookings></MyBookings> ,
    },


]