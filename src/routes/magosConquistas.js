const magosConquistasController = require('../controllers/magosConquistas');
const checkPermission = require('../middleware/auth');
module.exports = (app) => {
    app.post('/magosConquistas',checkPermission.check, magosConquistasController.postMagoConquista
        // #swagger.tags = ["Magos Conquistas"]
        // #swagger.summary = 'Crie uma Conquista de Mago'
        // #swagger.description = 'Crie uma nova conquista de mago'
        /*#swagger.parameters['json'] = {
            in: 'body',
            description: 'Dados para Inserir uma nova conquista de Mago',
            type: 'json',
            schema: {
                mag_id: 1,
                conq_id: 1,
                conq_data_da_conquista: "2000-01-01"
            }
           }
           */
    );

    app.get('/magosConquistas',checkPermission.check, magosConquistasController.getMagosConquistas
        // #swagger.tags = ["Magos Conquistas"]
        // #swagger.summary = 'Consulta a lista de Conquistas de Magos'
        // #swagger.description = 'Consulta lista de conquistas de magos cadastradas'
    );

    app.put('/magosConquistas/:id',checkPermission.check, magosConquistasController.putMagoConquista
        // #swagger.tags = ["Magos Conquistas"]
        // #swagger.summary = 'Atualize uma Conquista de Mago'
        // #swagger.description = 'Atualize uma conquista de mago existente'
        /*#swagger.parameters['json'] = {
            in: 'body',
            description: 'Dados para Inserir um novo mago',
            type: 'json',
            schema: {
                conq_id: 1,
                conq_data_da_conquista: "2000-01-01"
            }
           }
           */
    );

    app.delete('/magosConquistas/:id',checkPermission.check, magosConquistasController.deleteMagoConquista
        // #swagger.tags = ["Magos Conquistas"]
        // #swagger.summary = 'Delete uma Conquista de Mago'
        // #swagger.description = 'Apague uma conquista de mago da lista'
    );

    app.patch('/magosConquistas/:id',checkPermission.check, magosConquistasController.patchMagoConquista
        // #swagger.tags = ["Magos Conquistas"]
        // #swagger.summary = 'Atualize parcialmente uma Conquista de Mago'
        // #swagger.description = 'Atualize parcialmente uma conquista de mago existente'
        /*#swagger.parameters['json'] = {
            in: 'body',
            description: 'Dados para Inserir um novo mago',
            type: 'json',
            schema: {
                conq_id: 1,
                conq_data_da_conquista: "2000-01-01"
            }
           }
           */
    );
};
