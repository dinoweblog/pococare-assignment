const jwt_secret = require("../config/configs");
const jwt = require("jsonwebtoken");
const User = require("../models/user.model");
const { validationResult } = require("express-validator");
const { errorFormat } = require("../utils/errorFormat");
const randomstring = require("randomstring");
const fs = require("fs");

const newToken = (user) => {
  return jwt.sign({ user }, jwt_secret);
};

const signUp = async (req, res) => {
  try {
    const error = validationResult(req);

    if (!error.isEmpty()) {
      return res.status(400).json({ error: errorFormat(error.array()) });
    }

    let user = await User.findOne({ email: req.body.email });

    if (user) {
      return res.status(400).json({ message: "User already exists!" });
    }
    await User.create(req.body);

    return res.send(true);
  } catch (error) {
    return res.send({ message: error.message });
  }
};

const signIn = async (req, res) => {
  try {
    const { email, password } = req.body;

    let user = await User.findOne({ email });
    if (!user) {
      return res
        .status(400)
        .json({ message: "Either Email or Password is incorrect" });
    }
    const match = user.checkPassword(password);
    if (!match) {
      return res
        .status(400)
        .json({ message: "Either Email or Password is incorrect" });
    }

    const token = newToken(user);

    return res.send({ user, token });
  } catch (error) {
    return res.send({ message: error });
  }
};

const refreshToken = async (req, res) => {
  try {
    const user = req.user;

    const new_secret_key = randomstring.generate();

    fs.readFile(`./src/config/configs.js`, "utf8", function (err, data) {
      if (err) {
        return console.log(err);
      }
      var newValue = data.replace(new RegExp(jwt_secret, "g"), new_secret_key);

      console.log(newValue);

      fs.writeFile(`./src/config/configs.js`, newValue, "utf8", function (err) {
        if (err) return console.log(err);
      });
    });

    const token = newToken(user);

    return res.send({ token });
  } catch (error) {
    return res.send({ message: error });
  }
};

const getMe = async (req, res) => {
  try {
    return res.send(req.user);
  } catch (error) {
    return res.send({ message: error });
  }
};

module.exports = { signUp, signIn, getMe, refreshToken };
