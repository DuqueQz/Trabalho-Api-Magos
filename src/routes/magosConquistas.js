const magosConquistasController = require('../controllers/magosConquistas');

module.exports = (app) => {
    app.post('/magosConquistas', magosConquistasController.createMagoConquista);
    app.get('/magosConquistas', magosConquistasController.getMagosConquistas);
    app.get('/magosConquistas/:id', magosConquistasController.getMagoConquistaById);
    app.put('/magosConquistas/:id', magosConquistasController.updateMagoConquista);
    app.delete('/magosConquistas/:id', magosConquistasController.deleteMagoConquista);
};
