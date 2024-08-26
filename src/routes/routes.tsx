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




const router = createBrowserRouter([
    {
        path: "/",
        element: <App></App>,
        errorElement: <NotFound></NotFound>,
        children: homeRoutes
    },
    {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
    },
    {
        path: "/admin",
        element: <Dashboard></Dashboard>,
        children: routeGenerators(adminPaths)

    },
    {
        path: "/user",
        element: <Dashboard></Dashboard>,
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