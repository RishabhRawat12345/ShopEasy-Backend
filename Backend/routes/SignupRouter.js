const express = require('express');
const { signupUser } = require('../controller/Signup'); // Adjust path if necessary
const router = express.Router();

// Define the POST route
router.post('/details', signupUser);

module.exports = router;
