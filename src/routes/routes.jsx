import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/Home";
import Coffees from "../pages/Coffees";
import DashBoard from "../pages/DashBoard";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
      children: [
        {
            path:'/',
            element: <Home></Home>
        },
        {
            path:'/coffees',
            element: <Coffees></Coffees>
        },
        {
            path:'/dashBoard',
            element: <DashBoard></DashBoard>
        }
      ]
      
    },
]);
  export {router}