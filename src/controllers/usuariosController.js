const model = require('../models/usuariosModel');

exports.registrarUsuario = async (req, res) => {
  try {
    const { nombre, rol, materias } = req.body;
    if (!nombre || !rol) {
      return res.status(400).json({ error: 'Faltan datos obligatorios' });
    }

    await model.registrarUsuario(nombre, rol, materias || []);
    res.json({ mensaje: `${nombre} registrado como ${rol}` });
  } catch (error) {
    console.error('Error en controlador:', error);
    res.status(500).json({ error: error.message });
  }
};

exports.ingresarUsuario = async (req, res) => {
  try {
    const { nombre, rol } = req.body;
    const usuario = await model.obtenerUsuario(nombre, rol);
    
    if (!usuario) {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }
    
    res.json(usuario);
  } catch (error) {
    console.error('Error en controlador:', error);
    res.status(500).json({ error: error.message });
  }
};