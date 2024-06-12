const avaliacoesController = require('../controllers/avaliacoes');
const checkPermission = require('../middleware/auth');
module.exports = (app) => {
    app.post('/avaliacoes',checkPermission.check, avaliacoesController.postAvaliacao
           //#swagger.tags = ["Avaliações"]
           //#swagger.summary = 'Crie uma Avaliação'
           //#swagger.description = 'Crie uma nova avaliação'
           /* 
           #swagger.parameters['json'] = {
            in: 'body',
            description: 'Dados para adicionar uma avaliação',
            type: 'json',
            schema: {
                ava_id_troca: 1,
                ava_id_mago_avaliador: 2,
                ava_pontuacao: 200,
                ava_comentario: "Boa troca",
                ava_data_da_avaliacao: "2003-09-03"
            }
           }
        */
    );

    app.get('/avaliacoes',checkPermission.check, avaliacoesController.getAvaliacoes
        // #swagger.tags = ["Avaliações"]
        // #swagger.summary = 'Consulta a lista de Avaliações'
        // #swagger.description = 'Consulta lista de avaliações cadastradas'
    );

    app.put('/avaliacoes/:id',checkPermission.check, avaliacoesController.putAvaliacao
        /* #swagger.tags = ["Avaliações"]
           #swagger.summary = 'Atualize uma Avaliação'
           #swagger.description = 'Atualize uma avaliação existente'
           #swagger.parameters['json'] = {
            in: 'body',
            description: 'Dados para adicionar uma avaliação',
            type: 'json',
            schema: {
                ava_id_troca: 1,
                ava_id_mago_avaliador: 2,
                ava_pontuacao: 200,
                ava_comentario: "Boa troca",
                ava_data_da_avaliacao: "2003-09-03"
            }
           }
        */
    );

    app.delete('/avaliacoes/:id',checkPermission.check, avaliacoesController.deleteAvaliacao
        // #swagger.tags = ["Avaliações"]
        // #swagger.summary = 'Delete uma Avaliação'
        // #swagger.description = 'Apague uma avaliação da lista'
    );

    app.patch('/avaliacoes/:id',checkPermission.check, avaliacoesController.patchAvaliacao
        /* #swagger.tags = ["Avaliações"]
           #swagger.summary = 'Atualize parcialmente uma Avaliação'
           #swagger.description = 'Atualize parcialmente uma avaliação existente'
           #swagger.parameters['json'] = {
            in: 'body',
            description: 'Dados para adicionar uma avaliação',
            type: 'json',
            schema: {
                ava_id_troca: 1,
                ava_id_mago_avaliador: 2,
                ava_pontuacao: 200,
                ava_comentario: "Boa troca",
                ava_data_da_avaliacao: "2003-09-03"
            }
           }
        */
    );
};
