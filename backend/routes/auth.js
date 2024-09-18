const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const router = express.Router();

// Registrar un usuario
router.post('/register', async (req, res) => {
  const { username, password } = req.body;

  // Verificar si el usuario ya existe
  const userExists = await User.findOne({ username });
  if (userExists) {
    return res.status(400).json({ error: 'El usuario ya existe' });
  }

  // Hashear la contraseña antes de guardarla
  const hashedPassword = await bcrypt.hash(password, 10);

  // Crear y guardar el nuevo usuario
  const newUser = new User({ username, password: hashedPassword });
  await newUser.save();

  res.json({ status: 'Usuario registrado' });
});

// Iniciar sesión
router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });

  if (!user) {
    return res.status(400).json({ error: 'Usuario no encontrado' });
  }

  // Comparar la contraseña proporcionada con la almacenada
  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    return res.status(400).json({ error: 'Contraseña incorrecta' });
  }

  // Generar un token JWT y devolverlo
  const token = jwt.sign({ id: user._id, username: user.username }, process.env.JWT_SECRET, { expiresIn: '1h' });

  res.json({ status: 'ok', token });
});

module.exports = router;
