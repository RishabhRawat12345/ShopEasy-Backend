const User = require('../models/Signupmodel'); // Adjust the path to your User model as needed

exports.signupUser = async (req, res) => {
  const { email, password } = req.query;

  if (!email || !password) {
    return res.status(400).json({ success: false, message: "Email and password are required" });
  }

  try {
    // Query the database for the user
    const user = await User.findOne({ email });

    if (user && user.password === password) {
      return res.status(200).json({ success: true, message: "Login successful" });
    } else {
      return res.status(401).json({ success: false, message: "Invalid email or password" });
    }
  } catch (error) {
    console.error("Database query failed:", error);
    return res.status(500).json({ success: false, message: "Internal server error" });
  }
};

