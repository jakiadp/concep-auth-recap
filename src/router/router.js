import { createBrowserRouter } from "react-router";
import RootLayout from "../RootLayout/RootLayout";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";


const router = createBrowserRouter([
  {
    path: "/",
    Component:RootLayout,
    children:[
        {
            path:"/",
            Component:Home,

        },
        {
            path:"/about",
            Component:About,
        }
    ]
  },
]);