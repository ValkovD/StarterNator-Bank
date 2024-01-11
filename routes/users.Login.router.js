const express = require("express");
const usersLoginRouter = express.Router();
const userLoginValidator = require("./middleware/userLogin.validator");
const auth = require("./middleware/auth");
const usersLoginController = require("./usersLogin.controller");

// @users       POST api/auth
// @description login user
// @acces       public
usersLoginRouter.post(
  "/",
  [userLoginValidator],
  usersLoginController.logInUser
);
// @users       GET api/auth
// @description auth user
// @acces       private
usersLoginRouter.get("/", auth.authUser, usersLoginController.returnUser);

module.exports = usersLoginRouter;
