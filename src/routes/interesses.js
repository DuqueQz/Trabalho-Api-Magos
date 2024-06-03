const interessesController = require('../controllers/interesses');

module.exports = (app) => {
    app.post('/interesses', interessesController.createInteresse);
    app.get('/interesses', interessesController.getInteresses);
    app.get('/interesses/:id', interessesController.getInteresseById);
    app.put('/interesses/:id', interessesController.updateInteresse);
    app.delete('/interesses/:id', interessesController.deleteInteresse);
};
