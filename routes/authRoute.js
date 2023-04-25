const express = require("express");
const router = express.Router();
const LoginData = require("../models/LoginData");

router.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;

    // Find the user in the database
    const user = await UserData.findOne({ username });

    if (!user) {
      // User not found
      return res.status(400).json({ message: "Invalid username!" });
    }

    // Verify the password
    if (user.password !== password) {
      // Passwords don't match
      return res.status(400).json({ message: "Invalid password!" });
    }

    // Login successful
    res.json({ message: "Login successful" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
