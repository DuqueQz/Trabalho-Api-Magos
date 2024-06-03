const itensTrocadosController = require('../controllers/itensTrocados');

module.exports = (app) => {
    app.post('/itensTrocados', itensTrocadosController.createItemTrocado);
    app.get('/itensTrocados', itensTrocadosController.getItensTrocados);
    app.get('/itensTrocados/:id', itensTrocadosController.getItemTrocadoById);
    app.put('/itensTrocados/:id', itensTrocadosController.updateItemTrocado);
    app.delete('/itensTrocados/:id', itensTrocadosController.deleteItemTrocado);
};
