import { createBrowserRouter } from "react-router";
import RootLayout from "../layout/RootLayout";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import ErrorLayout from "../layout/ErrorLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AddProperties from "../pages/AddProperties";
import MyProperties from "../pages/MyProperties";
import PrivateRoutes from "./PrivateRoutes";
import AllProperties from "../pages/AllProperties";
import PropertyDetails from "../pages/PropertyDetails";
import MyRatings from "../pages/MyRatings";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children:[
      {
        path: "/",
        Component: Home,
      },
      {
        path:"/login",
        Component: Login
      },
      {
        path:"/register",
        Component: Register
      },
      {
        path: "/add-properties",
        element: <PrivateRoutes><AddProperties></AddProperties></PrivateRoutes>,
      },
      {
        path: "/my-properties",
        element: <PrivateRoutes><MyProperties></MyProperties></PrivateRoutes>,
      },
      {
        path: "/all-properties",
        Component: AllProperties,
      },
      {
        path: "/property-details/:id",
        element: <PrivateRoutes><PropertyDetails></PropertyDetails></PrivateRoutes>,
      },
      {
        path: "/my-ratings",
        element: <PrivateRoutes><MyRatings></MyRatings></PrivateRoutes>,
      }
    ]
  },
  {
    Component: ErrorLayout,
    children:[
      {
        path: "*",
        Component: ErrorPage
      }
    ]
  }
]);
