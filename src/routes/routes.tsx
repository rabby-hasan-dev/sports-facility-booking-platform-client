import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../pages/Auth/Login";
import Registration from "../pages/Auth/Register";
import NotFound from "../error/NotFound";
import Dashboard from "../Layout/Dashboard";
import { routeGenerators } from "../utils/routesGenerators";
import { adminPaths } from "./admin.routes";
import { userPaths } from "./user.routes";
import { homeRoutes } from "./home.routes";
import ProtectedRoute from "./ProtectedRoute";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App></App>,
        errorElement: <NotFound></NotFound>,
        children: homeRoutes
    },

    {
        path: "/admin",
        element: <ProtectedRoute role="admin">
            <Dashboard></Dashboard>
        </ProtectedRoute>,
        children: routeGenerators(adminPaths)

    },
    {
        path: "/user",
        element: <ProtectedRoute role="user">
            <Dashboard></Dashboard>
        </ProtectedRoute>,
        children: routeGenerators(userPaths)

    },
    {
        path: "/login",
        element: <Login></Login>
    },
    {
        path: "/register",
        element: <Registration></Registration>
    }
])




export default router;