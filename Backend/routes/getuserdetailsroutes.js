const express = require('express');
const router = express.Router();
const User = require('../models/Signupmodel.js'); // Adjust this path to the correct User model location

router.get('/signupdata', async (req, res) => {
  try {
    const { email, password } = req.query;

    if (!email || !password) {
      return res.status(400).json({ success: false, message: 'Email and password are required' });
    }

    // Query the database for the user
    const user = await User.findOne({ email });
    console.log(user)
    if (!user) {
      return res.status(404).json({ success: false, message: 'User not found' });
    }

    // Compare passwords
    if (user.password === password) { // Ensure passwords are hashed in production
      return res.status(200).json({ success: true, message: 'Login successful' });
    } else {
      return res.status(401).json({ success: false, message: 'Invalid password' });
    }
  } catch (error) {
    console.error('Error in /signupdata:', error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
});

module.exports = router;
