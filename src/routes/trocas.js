const trocasController = require('../controllers/trocas');

module.exports = (app) => {
    app.post('/trocas', trocasController.createTroca);
    app.get('/trocas', trocasController.getTrocas);
    app.get('/trocas/:id', trocasController.getTrocaById);
    app.put('/trocas/:id', trocasController.updateTroca);
    app.delete('/trocas/:id', trocasController.deleteTroca);
};
