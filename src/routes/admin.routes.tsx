import AdminDashboard from "../pages/Dashboard/Admin/AdminDashboard/AdminDashboard";
import ViewAllBookings from "../pages/Dashboard/Admin/Bookings/ViewAllBookings";
import CreateFacility from "../pages/Dashboard/Admin/Facility/CreateFacility";
import Facility from "../pages/Dashboard/Admin/Facility/Facility";
import UpdateFacility from "../pages/Dashboard/Admin/Facility/UpdateFacility";
import PaymentInfoAdmin from "../pages/Dashboard/Admin/Payment/PaymentInfoAdmin";
import CreateAdmin from "../pages/Dashboard/Admin/UserManagement/CreateAdmin";



export const adminPaths = [

    {
        name: "Dashboard",
        path: 'dashboard',
        element: <AdminDashboard></AdminDashboard>,
    },
    {
        name: "Facility Management",
        children: [
            {
                name: "Create Facility",
                path: 'create-facility',
                element: <CreateFacility></CreateFacility>,
            },

            {
                path: 'facility/:id',
                element: <UpdateFacility></UpdateFacility>,
            },
            {
                name: "Facility",
                path: 'facility',
                element: <Facility></Facility>,
            },



        ]

    },
    {
        name: "Booking Management",
        children: [
            {
                name: "View All Bookings",
                path: 'view-bookings-admin',
                element: <ViewAllBookings></ViewAllBookings>,
            },


        ]

    },
    {
        name: "Payment",
        path: 'payment-info',
        element: <PaymentInfoAdmin></PaymentInfoAdmin>,
    },
    {
        name: "Add Admin",
        path: 'create-admin',
        element: <CreateAdmin></CreateAdmin>,
    },


]

