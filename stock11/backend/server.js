require('dotenv').config();  // Add this line to load .env variables

const express = require('express');
const mongoose = require('mongoose');
const app = express();

// Use the environment variables from the .env file
const port = process.env.PORT || 5002;
const mongoURI = process.env.MONGO_URI;
const jwtSecret = process.env.JWT_SECRET;

// MongoDB connection
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Failed to connect to MongoDB', err));

// Set up other routes and middleware

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
