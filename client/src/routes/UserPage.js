import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AlertDism from "../components/AlertDism";
import { Navigate } from "react-router-dom";
import UserPageTabs from "../components/UserPageTabs";

const UserPage = () => {
  return (
    <div>
      <AlertDism />
      <UserPageTabs />
    </div>
  );
};

export default UserPage;
