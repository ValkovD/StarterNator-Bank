import React, { useContext, useEffect, useState } from "react";

import AppNavbar from "../components/AppNavbar";
import { Outlet, Navigate } from "react-router-dom";
import AlertDism from "../components/AlertDism";
import UserContext from "../context/user/UserContext";
import Footer from "../components/Footer";

const Root = () => {
  // const [isAuth, setisAuth] = useState(false);
  // const userContext = useContext(UserContext);
  // const { token, authUser } = userContext;
  // useEffect hook to make call to db with the current token and check if token valid
  // if yes then loggin the user that is in the token
  // if no to navigate to Unauthorized
  // console.log(`isAuth:${isAuth}`);

  return (
    <div className="bg-light">
      <AppNavbar />
      <AlertDism />
      <div id="detail">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Root;
