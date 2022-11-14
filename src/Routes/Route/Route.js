import Main from "../../Layout/Main";
import Apointment from "../../Pages/Apointment/Apointment/Apointment";
import Home from "../../Pages/Home/Home/Home";

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
        ]
        
    }

])
export default router