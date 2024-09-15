const mongoose = require('mongoose');

// Definir el esquema del usuario
const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
