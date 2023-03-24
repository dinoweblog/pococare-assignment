const express = require("express");
const { body } = require("express-validator");
const {
  signUp,
  signIn,
  getMe,
  refreshToken,
} = require("../controllers/auth.controller");
const authenticate = require("../middleware/authenticate");

const router = express.Router();

router.post(
  "/signup",
  body("name")
    .isLength({ min: 3 })
    .withMessage("Name must be at least 3 chars long"),
  body("email").isEmail().withMessage("Invalid email"),
  body("password")
    .isLength({ min: 5 })
    .withMessage("Password must be at least 5 chars long"),

  signUp
);
router.post("/signin", signIn);
router.get("/me", authenticate, getMe);
router.post("/refresh-token", authenticate, refreshToken);

module.exports = router;
