import React, { useContext } from "react";
import { useLocation, Navigate } from "react-router-dom";
import UserContext from "../context/user/UserContext";

const PublicRoute = ({ children }) => {
  const userContext = useContext(UserContext);
  const { isAuth } = userContext;
  const location = useLocation();

  return isAuth ? (
    <Navigate to="/UserPage" state={{ from: location }} />
  ) : (
    children
  );
};

export default PublicRoute;
