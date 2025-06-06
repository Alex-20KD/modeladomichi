const express = require('express');
const router = express.Router();
const usuariosController = require('../controllers/usuariosController');

router.post('/registro', usuariosController.registrarUsuario);
router.post('/ingresar', usuariosController.ingresarUsuario);

module.exports = router;
