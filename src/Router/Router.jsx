import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home";
import Register from "../Pages/Register";
import Login from "../Pages/Login";
import Error from "../Pages/Error";
import Tasks from "../Pages/Tasks";
import PrivateRoute from "../Auth/PrivateRoute";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/tasks",
                element: <PrivateRoute><Tasks></Tasks></PrivateRoute>
            }
        ]
    },
    {
        path: "*",
        element: <Error></Error>
    }
]);

export default router;
