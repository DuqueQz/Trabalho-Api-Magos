const express = require('express');
const router = express.Router();
const magosController = require('../controllers/magosController');

module.exports = (app) => {
    app.get('/magos', magosController.getMagos);
    app.post('/magos', magosController.criarMago);
    app.get('/magos/:id', magosController.getMagoById);
    app.put('/magos/:id', magosController.atualizarMago);
    app.delete('/magos/:id', magosController.deletarMago);
};
