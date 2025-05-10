const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require('dotenv').config()
const SECRET = process.env.SECRET

const { validationResult } = require("express-validator");
const cookie = require("js-cookie");

const User = require("../models/User");
const { default: mongoose } = require("mongoose");

async function regNewUser(req, res) {
  // validation on the user input
  // const setCookie = (token, value) => {
  //   cookie.set(token, value);
  // };
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  // validation passed
  const { name, surname, email, password } = req.body;
  try {
    let user = await User.findOne({ email });
    if (user) {
      return res
        .status(400)
        .json([{ msg: "User with this e-mail already exist" }]);
      // return res.status(400).json({ errors: [{ msg: "User Already Exist" }] });
    }
    // if new user doesn exist in db then user instance is created
    user = new User({
      name: name,
      surname: surname,
      email: email,
      password: password,
    });
    //###################################################
    // user password hashed
    user.password = await bcrypt.hash(password, 10);
    // ##################################################
    // user saved
    await user.save();
    // -----------------------------------JWT-----------------------
    // jwt
    jwt.sign(
      { id: user.id },
      SECRET,
      { expiresIn: "10h" },
      (err, token) => {
        if (err) {
          // console.error(err);
          throw err;
        }

        res.status(200).json([{ msg: "User saved in database", token: token }]);
        // .setCookie("token", `${token}`);
      }
    );
    // -----------------------------------JWT----------------------
    // response ok
    // res.status(200).json({
    //   name: "User saved in database",
    // });
  } catch (err) {
    console.error(err.message);
    res.status(500).json([{ msg: "Server error" }]);
  }
}

module.exports = {
  regNewUser,
};
