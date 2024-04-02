import { createBrowserRouter } from "react-router-dom";
import Root from "../components/root/Root";
import Home from "../components/home/Home";
import Errorpage from "../components/errorpage/Errorpage";


export const routes = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <Errorpage></Errorpage>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            }
        ]
    }
])