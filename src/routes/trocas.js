const trocasController = require('../controllers/trocas');
const checkPermission = require('../middleware/auth');
module.exports = (app) => {
    app.post('/trocas',checkPermission.check, trocasController.postTroca
        // #swagger.tags = ["Trocas"]
        // #swagger.summary = 'Crie uma Troca'
        // #swagger.description = 'Crie uma nova troca'
        /*#swagger.parameters['json'] = {
            in: 'body',
            description: 'Dados para Inserir um novo mago',
            type: 'json',
            schema: {
                troca_id_mago_ofertante: 1,
                troca_id_mago_interessado: 1,
                troca_data: "2003-09-03"
            }
           }
           */
    );

    app.get('/trocas',checkPermission.check, trocasController.getTrocas
        // #swagger.tags = ["Trocas"]
        // #swagger.summary = 'Consulta a lista de Trocas'
        // #swagger.description = 'Consulta lista de trocas cadastradas'
    );

    app.put('/trocas/:id',checkPermission.check, trocasController.putTroca
        // #swagger.tags = ["Trocas"]
        // #swagger.summary = 'Atualize uma Troca'
        // #swagger.description = 'Atualize uma troca existente'
        /*#swagger.parameters['json'] = {
            in: 'body',
            description: 'Dados para Inserir um novo mago',
            type: 'json',
            schema: {
                troca_id_mago_ofertante: 1,
                troca_id_mago_interessado: 1,
                troca_data: "2003-09-03"
            }
           }
           */
    );

    app.delete('/trocas/:id',checkPermission.check, trocasController.deleteTroca
        // #swagger.tags = ["Trocas"]
        // #swagger.summary = 'Delete uma Troca'
        // #swagger.description = 'Apague uma troca da lista'
    );

    app.patch('/trocas/:id',checkPermission.check, trocasController.patchTroca
        // #swagger.tags = ["Trocas"]
        // #swagger.summary = 'Atualize parcialmente uma Troca'
        // #swagger.description = 'Atualize parcialmente uma troca existente'
        /*#swagger.parameters['json'] = {
            in: 'body',
            description: 'Dados para Inserir um novo mago',
            type: 'json',
            schema: {
                troca_id_mago_ofertante: 1,
                troca_id_mago_interessado: 1,
                troca_data: "2003-09-03"
            }
           }
           */
    );
};
