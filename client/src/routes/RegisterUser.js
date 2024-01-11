import React from "react";

import RegisterUserForm from "../components/RegisterUserForm";
import AlertDism from "../components/AlertDism";
import RegisterPageNavbar from "../components/RegisterPageNavbar";
import Footer from "../components/Footer";
const RegisterUser = () => {
  return (
    <>
      <RegisterPageNavbar />
      <AlertDism />
      <RegisterUserForm />
      <Footer />
    </>
  );
};

export default RegisterUser;
