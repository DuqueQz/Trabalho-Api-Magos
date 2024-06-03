const avaliacoesController = require('../controllers/avaliacoes');

module.exports = (app) => {
    app.post('/avaliacoes', avaliacoesController.createAvaliacao);
    app.get('/avaliacoes', avaliacoesController.getAvaliacoes);
    app.get('/avaliacoes/:id', avaliacoesController.getAvaliacaoById);
    app.put('/avaliacoes/:id', avaliacoesController.updateAvaliacao);
    app.delete('/avaliacoes/:id', avaliacoesController.deleteAvaliacao);
};
