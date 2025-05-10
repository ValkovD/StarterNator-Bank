const { validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const config = require("config");
const jwt = require("jsonwebtoken");

const User = require("../models/User");

async function logInUser(req, res) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { email, password } = req.body;
  try {
    let user = await User.findOne({ email });
    if (!user) {
      return res
        .status(400)
        .json([{ msg: "User with this email doesn`t exist" }]);
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json([{ msg: "Incorrect Password" }]);
    }

    // -------------------------JWT-----------------------
    // jwt
    jwt.sign(
      { id: user.id },
      config.get("SECRET"),
      { expiresIn: "10h" },
      (err, token) => {
        if (err) {
          // console.error(err);
          throw err;
        }
        res.status(200).json([{ msg: "User logged in", token: token }]);
      }
    );
    // -------------------------------JWT-------------------
    // res.status(200).json({ msg: "user logged in" });
  } catch (err) {
    console.error(err.message);
    res.status(500).json([{ msg: "Server ERROR" }]);
  }
}
async function returnUser(req, res) {
  console.log(req.userId);

  // get real user by id from MongoDB
  // let user = await User.findById(req.userId).populate("name", "-password");
  let user = await User.findOne({ _id: req.userId }).select("-password");
  res.status(200).json([{ msg: "User Auth ok", user: user }]);
}

module.exports = {
  logInUser,
  returnUser,
};
