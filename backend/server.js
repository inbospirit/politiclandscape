const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

// Crear una aplicación de Express
const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // Para parsear JSON

// Conectar a MongoDB (reemplaza con tu URL de MongoDB en el archivo .env)
mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Conectado a MongoDB'))
  .catch((err) => console.log('Error al conectar a MongoDB', err));

// Rutas (más adelante agregaremos rutas como la de autenticación)

const authRoutes = require('./routes/auth');

// Agregar las rutas de autenticación
app.use('/auth', authRoutes);

// Iniciar el servidor
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
