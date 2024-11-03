import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/Home";
import Coffees from "../pages/Coffees";
import DashBoard from "../pages/DashBoard";
import Categories from "../component/Categories";
import CoffeeCard from "../component/CoffeeCard";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
      children: [
        {
            path:'/',
            element: <Home></Home>,
            loader: ()=> fetch('./data/categories.json'),
            children:[
              {
                path:"/category/:coffees",
                loader:()=>fetch('../data/coffees.json'),
                element:<CoffeeCard></CoffeeCard>
              }
            ]
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