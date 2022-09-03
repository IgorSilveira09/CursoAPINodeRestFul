const express = require ('express');
const routes = express.Router();

const UsuarioController = require('./src/controllers/UsuarioController');
const usuarioController = new UsuarioController();

// ROTAS DO USUARIOS

routes.post("/usuarios",usuarioController.login);
routes.get("/usuarios/id",usuarioController.obter);


module.exports = routes; // EXPORTAMOS PARA IMPORTAR NO 'server.js'