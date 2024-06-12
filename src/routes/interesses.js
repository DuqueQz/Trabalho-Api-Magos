const interessesController = require('../controllers/interesses');
const checkPermission = require('../middleware/auth');
module.exports = (app) => {
    app.post('/interesses',checkPermission.check, interessesController.postInteresse
        // #swagger.tags = ["Interesses"]
        // #swagger.summary = 'Crie um Interesse'
        // #swagger.description = 'Crie um novo interesse'
        /* 
           #swagger.parameters['json'] = {
            in: 'body',
            description: 'Dados para adicionar uma habilidade',
            type: 'json',
            schema: {
                int_id_mago: 1,
                int_id_habilidade: 1,
                int_nivel_de_interesse: 11,
                int_data_de_registro: "2003-09-03"
            }
           }
        */
    );

    app.get('/interesses',checkPermission.check, interessesController.getInteresses
        // #swagger.tags = ["Interesses"]
        // #swagger.summary = 'Consulta a lista de Interesses'
        // #swagger.description = 'Consulta lista de interesses cadastrados'
    );

    app.put('/interesses/:id',checkPermission.check, interessesController.putInteresse
        // #swagger.tags = ["Interesses"]
        // #swagger.summary = 'Atualize um Interesse'
        // #swagger.description = 'Atualize um interesse existente'
        /* 
           #swagger.parameters['json'] = {
            in: 'body',
            description: 'Dados para adicionar uma habilidade',
            type: 'json',
            schema: {
                int_id_mago: 1,
                int_id_habilidade: 1,
                int_nivel_de_interesse: 11,
                int_data_de_registro: "2003-09-03"
            }
           }
        */
    );

    app.delete('/interesses/:id',checkPermission.check, interessesController.deleteInteresse
        // #swagger.tags = ["Interesses"]
        // #swagger.summary = 'Delete um Interesse'
        // #swagger.description = 'Apague um interesse da lista'
    );

    app.patch('/interesses/:id',checkPermission.check, interessesController.patchInteresse
        // #swagger.tags = ["Interesses"]
        // #swagger.summary = 'Atualize parcialmente um Interesse'
        // #swagger.description = 'Atualize parcialmente um interesse existente'
        /* 
           #swagger.parameters['json'] = {
            in: 'body',
            description: 'Dados para adicionar uma habilidade',
            type: 'json',
            schema: {
                int_id_mago: 1,
                int_id_habilidade: 1,
                int_nivel_de_interesse: 11,
                int_data_de_registro: "2003-09-03"
            }
           }
        */
    );
};
