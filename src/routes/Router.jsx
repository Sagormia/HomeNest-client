import { createBrowserRouter } from "react-router";
import RootLayout from "../layout/RootLayout";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import ErrorLayout from "../layout/ErrorLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";

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
