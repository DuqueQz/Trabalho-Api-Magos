const mensagensController = require('../controllers/mensagens');

module.exports = (app) => {
    app.post('/mensagens', mensagensController.createMensagem);
    app.get('/mensagens', mensagensController.getMensagens);
    app.get('/mensagens/:id', mensagensController.getMensagemById);
    app.put('/mensagens/:id', mensagensController.updateMensagem);
    app.delete('/mensagens/:id', mensagensController.deleteMensagem);
};
