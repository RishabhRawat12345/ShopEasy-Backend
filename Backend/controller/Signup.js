const User = require('../models/Signupmodel'); // Import the User model
// Import bcrypt for password hashing

const signupUser = async (req, res) => {
  const { name, email, password } = req.body;

  // Check if all fields are provided
  if (!name || !email || !password) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  try {
    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: 'User already exists' });
    }


    // Create a new user document
    const newUser = new User({
      name,
      email,
      password,
    });

    // Save the new user to the database
    await newUser.save();

    // Respond with a success message and user data (excluding the password)
    res.status(201).json({
      message: 'User signed up successfully!',
      user: {
        id: newUser._id,
        name: newUser.name,
        email: newUser.email,
      },
    });
  } catch (error) {
    console.error('Error in signup:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = { signupUser };
