import Main from "../../Layout/Main";
import Apointment from "../../Pages/Apointment/Apointment/Apointment";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/SignUp/SignUp";

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
                element: <Apointment />

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
        
    }

])
export default router