import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/Home";
import Coffees from "../pages/Coffees";
import DashBoard from "../pages/DashBoard";
import Categories from "../component/Categories";
import CoffeeCard from "../component/CoffeeCard";
import CoffeeDetails from "../pages/CoffeeDetails";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
      children: [
        {
            path:'/',
            element: <Home></Home>,
            loader: ()=> fetch('../data/categories.json'),
          children: [
            {
              path: '/',
              element:<CoffeeCard></CoffeeCard>,
              loader:()=> fetch('../data/coffees.json')
            },
            {
              path:"/category/:category",
              element: <CoffeeCard></CoffeeCard>,
              loader:()=> fetch('../data/coffees.json')

            },
            ]
        },
        {
            path:'/coffees',
          element: <Coffees></Coffees>,
          loader:()=> fetch('../data/coffees.json')
            
        },
        {
          path: '/coffeeDetails/:id',
          element: <CoffeeDetails></CoffeeDetails>,
          loader:()=> fetch('../data/coffees.json')
        },
        {
            path:'/dashBoard',
            element: <DashBoard></DashBoard>
        }
      ]
      
    },
]);
  export {router}