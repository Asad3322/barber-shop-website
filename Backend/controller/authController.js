const User = require("../models/user"); // Adjust the path to your model
const bcrypt = require("bcrypt");

const signUp = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({
        message: "User Already Exists",
        success: false,
      });
    }

    // Create a new user model instance
    const user = new User({ email, password });

    // Hash the password before saving
    try {
      user.password = await bcrypt.hash(password, 10);
    } catch (error) {
      return res.status(500).json({
        message: "Error hashing password",
        success: false,
      });
    }

    // Save the user to the database
    await user.save();

    return res.status(201).json({
      message: "User successfully registered",
      success: true,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal Server Error",
      success: false,
    });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if the user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({
        message: "Invalid credentials",
        success: false,
      });
    }

    // Compare password with the hashed one in the database
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({
        message: "Invalid credentials",
        success: false,
      });
    }

    // Just return success and user data, no session or token
    return res.status(200).json({
      message: "Login successful",
      success: true,
      user: { email: user.email },  // Return user data
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal Server Error",
      success: false,
    });
  }
};

module.exports = { signUp, login };
