import React, { useContext } from "react";
import { useLocation, Navigate } from "react-router-dom";
import UserContext from "../context/user/UserContext";
const ProtectedRoute = ({ children }) => {
  const userContext = useContext(UserContext);
  const { isAuth } = userContext;
  const location = useLocation();
  return isAuth ? (
    children
  ) : (
    <Navigate to="/Unauthorized" state={{ from: location }} />
  );
};

export default ProtectedRoute;
