const express = require('express');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const cors = require('cors'); // Import CORS package
const productRouter = require('./routes/productRoutes'); // Adjust this path according to your actual structure
const path = require('path');
const signup=require('../Backend/routes/SignupRouter');
const app = express();
const getuser=require('../Backend/routes/getuserdetailsroutes');

// Enable CORS for all origins (this will allow any domain to access your server)
app.use(cors({
  origin: '*', // Allow all origins (for testing)
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// Alternatively, you can specify only one or more origins:
// app.use(cors({
//   origin: 'http://localhost:5173' // Allow only your frontend to access
// }));

// Middleware to parse incoming JSON data
app.use(bodyparser.json());

// Serve static files (like images) from the "uploads" folder
app.use(express.static(path.join(__dirname, 'uploads')));

// MongoDB connection
const dbURI = 'mongodb+srv://rawatrishabh76:Rishabh@cluster0.owjsw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => {
    console.error("Mongoose Connection error:", err);
    process.exit(1); // Exit the application if MongoDB connection fails
  });

// Use product routes for requests under the "/api/products" path
app.use('/api/add', signup);
app.use('/api/products', productRouter);
app.use('/api/getdetails',getuser);

// Start the server
const PORT = process.env.PORT || 5000; // Use the environment's PORT or default to 5000
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
