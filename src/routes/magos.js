const magosController = require('../controllers/magos');

module.exports = (app) => {
    app.post('/magos', magosController.createMago);
    app.get('/magos', magosController.getMagos);
    app.get('/magos/:id', magosController.getMagoById);
    app.put('/magos/:id', magosController.updateMago);
    app.delete('/magos/:id', magosController.deleteMago);
};
