const express = require("express");
const router = express.Router();
const LoginData = require("../models/authModel");

router.route("/login").post(async (req, res) => {
  try {
    const { username, password } = req.body;
    console.log("2");
    // Find the user in the database
    const existUser = await LoginData.findOne({ username });

    if (!existUser) {
      // User not found
      return res.status(400).json({ message: "Invalid username!" });
    }

    // Verify the password
    const isPasswordCorrect = await bcrypt.compare(password, existUser.password);
    if (!isPasswordCorrect) {
      // Passwords don't match
      return res.status(400).json({ message: "Invalid password!" });
    }

    // Generate a JWT token
    const token = jwt.sign({ id: existUser._id }, process.env.JWT_SECRET);

    // Login successful
    res.json({ message: "Login successful", token });
    console.log("Login successful!")
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
