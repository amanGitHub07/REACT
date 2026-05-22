import React from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from "./components/Header";
import  Body  from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet }  from "react-router-dom";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import ErrorPage from "./components/ErrorPage"; 
import RestaurantMenu from "./components/RestaurantMenu";

const AppLayout = () => {
  return (
    <div className="app-layout">
      <HeaderComponent />
      <Outlet />
    </div>
  )
}

const appRouter = createBrowserRouter([
  {
    path:"/",
    element: <AppLayout/>,
      children: [
        {
          path: '/',
          element: <Body />
        },
        {
          path:'/about-us',
          element: <AboutUs/>
        },
        {
          path:'/contactus',
          element: <ContactUs/>
        },
        {
          path:'/restaurant/:id',
          element: <RestaurantMenu/>
        }
      ],
    errorElement: <ErrorPage/>
  },
  
])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);

