const express = require("express");
const usersRegRouter = express.Router();
const usersController = require("./usersReg.controller");
const userRegValidator = require("./middleware/userReg.validator");

// app.use(cors());
// @users       POST api/users
// @description register user
// @acces       public
usersRegRouter.post("/", [userRegValidator], usersController.regNewUser);

module.exports = usersRegRouter;
