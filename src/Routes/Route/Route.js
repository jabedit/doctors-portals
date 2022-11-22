import Main from "../../Layout/Main";
import Apointment from "../../Pages/Apointment/Apointment/Apointment";
import Dashboard from "../../Pages/Dashboard/Dashboard";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/SignUp/SignUp";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />

            },
            {
                path: '/apointment',
                element: <PrivateRoute><Apointment /></PrivateRoute>

            },
            {
                path: '/login',
                element: <Login />

            },
            {
                path: '/signup',
                element: <SignUp />

            },
        ]
        
    },
    {
        path: '/dashboard',
        element: <Dashboard />
    }

])
export default router