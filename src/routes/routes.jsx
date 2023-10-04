import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import NewsDetails from "../pages/newsDetails/NewsDetails";
import PrivateRoute from "../PrivateRoute/PrivateRoute";


const routes = createBrowserRouter([
    {
        path:"/",
        element:<Root></Root>,
        children:[
            {
                path:"/",
                element:<Home></Home>
            },
            {
                path:"/login",
                element:<Login></Login>
            },
            {
                path:"/register",
                element:<Register></Register>
            },
            {
                path:"/newsDetails/:id",
                element:<PrivateRoute><NewsDetails></NewsDetails></PrivateRoute>,
                loader: () => fetch("/news.json")
            }
        ]
    }
])

export default routes;