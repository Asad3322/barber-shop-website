const express = require("express");
const { signUp, login } = require("../controller/authController"); // Ensure the path is correct
const { signupValidation, loginValidation } = require("../middlewares/authMiddleware");
const authRouter = express.Router();

// Sign Up Route
authRouter.post("/signup", signupValidation, signUp);

// Login Route
authRouter.post("/login", loginValidation, login);

module.exports = authRouter;
