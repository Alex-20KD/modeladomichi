require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');

// Importación CORRECTA de rutas
const usuariosRoutes = require('./routes/usuarios');

const app = express();

app.use(cors());
app.use(express.json());

// Configuración de rutas
app.use('/api/usuarios', usuariosRoutes);

// Archivos estáticos
app.use(express.static(path.join(__dirname, '../public')));

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Servidor en puerto ${PORT}`));
// para subir commit 
