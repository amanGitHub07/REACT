import React from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from "./components/Header";
import  Body  from "./components/Body";
import { createBrowserRouter, RouterProvider }  from "react-router-dom";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import ErrorPage from "./components/ErrorPage"; 

const AppLayout = () => {
  return (
    <div className="app-layout">
      <HeaderComponent />
      <Body/>
    </div>
  )
}

const appRouter = createBrowserRouter([
  {
    path:"/",
    element: <AppLayout/>,
    errorElement: <ErrorPage/>
  },
  {
    path:'/about-us',
    element: <AboutUs/>
  },
  {
    path:'/contactus',
    element: <ContactUs/>
  }
])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);

