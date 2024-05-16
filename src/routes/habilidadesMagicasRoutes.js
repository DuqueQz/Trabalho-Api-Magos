const express = require('express');
const router = express.Router();
const habilidadesMagicasController = require('../controllers/habilidadesMagicasController');

module.exports = (app) => {
    app.get('/habilidades-magicas', habilidadesMagicasController.getHabilidadesMagicas);
    app.post('/habilidades-magicas', habilidadesMagicasController.criarHabilidadeMagica);
    app.get('/habilidades-magicas/:id', habilidadesMagicasController.getHabilidadeMagicaById);
    app.put('/habilidades-magicas/:id', habilidadesMagicasController.atualizarHabilidadeMagica);
    app.delete('/habilidades-magicas/:id', habilidadesMagicasController.deletarHabilidadeMagica);
};
