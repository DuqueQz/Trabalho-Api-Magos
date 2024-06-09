const mensagensController = require('../controllers/mensagens');

module.exports = (app) => {
    app.post('/mensagens', mensagensController.postMensagem
        // #swagger.tags = ["Mensagens"]
        // #swagger.summary = 'Crie uma Mensagem'
        // #swagger.description = 'Crie uma nova mensagem'
        /*#swagger.parameters['json'] = {
            in: 'body',
            description: 'Dados para Inserir um novo mago',
            type: 'json',
            schema: {
                msg_id_troca: 1,
                msg_remetente: "mago 1",
                msg_destinatario: "mago 2",
                msg_conteudo: "deu boa aqui a troca",
                msg_data_de_envio: "2003-09-03"
            }
           }
           */
    );

    app.get('/mensagens', mensagensController.getMensagens
        // #swagger.tags = ["Mensagens"]
        // #swagger.summary = 'Consulta a lista de Mensagens'
        // #swagger.description = 'Consulta lista de mensagens cadastradas'
    );

    app.put('/mensagens/:id', mensagensController.putMensagem
        // #swagger.tags = ["Mensagens"]
        // #swagger.summary = 'Atualize uma Mensagem'
        // #swagger.description = 'Atualize uma mensagem existente'
        /*#swagger.parameters['json'] = {
            in: 'body',
            description: 'Dados para Inserir um novo mago',
            type: 'json',
            schema: {
                msg_remetente: "mago 1",
                msg_destinatario: "mago 2",
                msg_conteudo: "deu boa aqui a troca",
                msg_data_de_envio: "2003-09-03"
            }
           }
           */
    );

    app.delete('/mensagens/:id', mensagensController.deleteMensagem
        // #swagger.tags = ["Mensagens"]
        // #swagger.summary = 'Delete uma Mensagem'
        // #swagger.description = 'Apague uma mensagem da lista'
    );

    app.patch('/mensagens/:id', mensagensController.patchMensagem
        // #swagger.tags = ["Mensagens"]
        // #swagger.summary = 'Atualize parcialmente uma Mensagem'
        // #swagger.description = 'Atualize parcialmente uma mensagem existente'
    );
};
