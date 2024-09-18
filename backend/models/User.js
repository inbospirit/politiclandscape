const mongoose = require('mongoose');

// Definir el esquema del usuario
const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },  // Add email field
  password: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },  // Timestamp for user creation
});

// Create the User model
const User = mongoose.model('User', UserSchema);

module.exports = User;

