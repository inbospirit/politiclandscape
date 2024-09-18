// routes/register.js or routes/users.js (Backend)
const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');  // Your User model
const router = express.Router();

// POST /api/users/register - Register a new user
router.post('/register', async (req, res) => {
  const { username, email, password } = req.body;

  try {
    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: 'User already exists' });
    }

    // Hash the password before saving
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create a new user object
    const newUser = new User({
      username,
      email,
      password: hashedPassword,  // Store the hashed password
    });

    // Save the user to MongoDB Atlas
    await newUser.save();

    // Generate a JWT token
    const payload = {
      userId: newUser._id,
    };
    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });

    // Send the token and success message to the frontend
    res.status(201).json({
      status: 'success',
      token: token,  // Send the JWT token
      message: 'User registered successfully',
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
