const { check } = require("express-validator");

const userInputRequirementsLogin = [
  // requirements
  check("email", "Please include a valid email").isEmail(),
  check("password", "Password is required").exists(),

  // validation control is in userLogin.controller.js file
];
module.exports = userInputRequirementsLogin;
