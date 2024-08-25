import CreateBookings from "../pages/Dashboard/User/MyBookings/createBookings";
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
        element: <CreateBookings></CreateBookings>,
    },


]