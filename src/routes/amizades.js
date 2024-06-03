const amizadesController = require('../controllers/amizades');

module.exports = (app) => {
    app.post('/amizades', amizadesController.createAmizade);
    app.get('/amizades', amizadesController.getAmizades);
    app.get('/amizades/:id', amizadesController.getAmizadeById);
    app.put('/amizades/:id', amizadesController.updateAmizade);
    app.delete('/amizades/:id', amizadesController.deleteAmizade);
};
