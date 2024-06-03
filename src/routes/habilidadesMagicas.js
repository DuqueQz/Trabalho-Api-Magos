const habilidadesMagicasController = require('../controllers/habilidadesMagicas');

module.exports = (app) => {
    app.post('/habilidadesMagicas', habilidadesMagicasController.createHabilidade);
    app.get('/habilidadesMagicas', habilidadesMagicasController.getHabilidades);
    app.get('/habilidadesMagicas/:id', habilidadesMagicasController.getHabilidadeById);
    app.put('/habilidadesMagicas/:id', habilidadesMagicasController.updateHabilidade);
    app.delete('/habilidadesMagicas/:id', habilidadesMagicasController.deleteHabilidade);
};
