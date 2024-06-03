const conquistasController = require('../controllers/conquistas');

module.exports = (app) => {
    app.post('/conquistas', conquistasController.createConquista);
    app.get('/conquistas', conquistasController.getConquistas);
    app.get('/conquistas/:id', conquistasController.getConquistaById);
    app.put('/conquistas/:id', conquistasController.updateConquista);
    app.delete('/conquistas/:id', conquistasController.deleteConquista);
};
