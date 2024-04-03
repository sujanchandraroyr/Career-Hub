import { createBrowserRouter } from "react-router-dom";
import Root from "../components/root/Root";
import Home from "../components/home/Home";
import Errorpage from "../components/errorpage/Errorpage";
import Appliedjobs from "../components/appliedjobs/Appliedjobs";
import Jobdetails from "../components/jobdetails/Jobdetails";



export const routes = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <Errorpage></Errorpage>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/applied",
                element: <Appliedjobs></Appliedjobs>,
                loader: () => fetch('/jobs.json') // warning: do not load all data. load only what you need
            },
            {
                path: "/job/:id",
                element: <Jobdetails></Jobdetails>,
                loader: () => fetch('/jobs.json') // do not load all data. load only what you need
            }

        ]
    }
])