import React, { useContext, useEffect, useState } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import UserPageNavbar from "../components/UserPageNavbar";
import UserContext from "../context/user/UserContext";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

const UserPageRoot = () => {
  // const [isAuth, setisAuth] = useState(false);
  // const userContext = useContext(UserContext);
  // const { token, authUser } = userContext
  // useEffect hook to make call to db with the current token and check if token valid

  // if yes then loggin the user that is in the token
  // if no to navigate to Unauthorized
  // console.log(`token:${token}`);
  // console.log(`isAuth:${isAuth}`);
  // console.log(`fromuserpageRoot isAuth:${isAuth}`);

  return (
    <div className="bg-light">
      <UserPageNavbar />
      <div>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default UserPageRoot;
