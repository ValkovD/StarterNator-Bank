import { createBrowserRouter } from "react-router-dom";
import React from "react";
import Root from "./Root";
import ErrPage404 from "../pages/ErrPage404";
import RegisterUser from "../routes/RegisterUser";
import Slider from "../components/Slider";
import UserPageRoot from "./UserPageRoot";
import UserPage from "../routes/UserPage";
import Unauthorized from "../pages/Unauthorized";
import ProtectedRoute from "./ProtectedRoute";
import PublicRoute from "./PublicRoute";
const Router = createBrowserRouter([
  {
    path: "/",
    element: (
      <PublicRoute>
        <Root />
      </PublicRoute>
    ),
    errorElement: <ErrPage404 />,
    children: [
      {
        path: "/",
        element: <Slider />,
        errorElement: <ErrPage404 />,
      },
    ],
  },
  {
    path: "/registerUser",
    element: <RegisterUser />,
    errorElement: <ErrPage404 />,
  },
  {
    path: "/UserPage",
    element: (
      <ProtectedRoute>
        <UserPageRoot />
      </ProtectedRoute>
    ),
    errorElement: <ErrPage404 />,
    children: [
      {
        path: "/UserPage",
        element: <UserPage />,
        errorElement: <ErrPage404 />,
      },
    ],
  },
  {
    path: "/Unauthorized",
    element: <Unauthorized />,
    errorElement: <ErrPage404 />,
  },
  // {
  //   path: "/UserLoggedOut",
  //   element: <UserLoggedOut />,
  //   errorElement: <ErrPage404 />,
  // },
]);

export default Router;
