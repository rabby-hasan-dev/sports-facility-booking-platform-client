import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../pages/Auth/Login";
import Registration from "../pages/Auth/Register";
import NotFound from "../error/NotFound";


const router=createBrowserRouter([
    {
        path:"/",
        element:<App></App>,
        errorElement:<NotFound></NotFound>
    },
    {
        path:"/login",
        element:<Login></Login>
    },
    {
        path:"/register",
        element:<Registration></Registration>
    }
])




export default router;