const express = require('express');  // Import express
const multer = require('multer');
const path = require('path');
const productController = require('../controller/ProductController');


// Create an instance of the router, not the app
const router = express.Router();

// Set up multer storage to specify destination and filename
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads'); // Store files in 'uploads' folder
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Use timestamp as filename
  }
});

// Initialize multer with storage configuration
const upload = multer({ storage: storage });

// Define the route with the router
router.post('/add', upload.single('img'), productController.addProducts);
router.get('/getdetail',productController.getAllProducts);

module.exports = router;  // Export the router for use in the main server file
