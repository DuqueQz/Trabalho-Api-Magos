const amizadesController = require('../controllers/amizades');

module.exports = (app) => {
    app.post('/amizades', amizadesController.postAmizade
        /* #swagger.tags = ["Amizades"]
           #swagger.summary = 'Insira uma Amizade'
           #swagger.description = 'Insira uma Amizade Nova'
           #swagger.parameters['json'] = {
            in: 'body',
            description: 'Dados para Inserir uma nova Amizade',
            type: 'json',
            schema: {
                amiz_id_mago_1: 1,
                amiz_id_mago_2: 2,
                amiz_data_do_inicio: "2003-09-03",
                amiz_status: "ativa"
            }
           }
        */
    );

    app.get('/amizades', amizadesController.getAmizades
        // #swagger.tags = ["Amizades"]
        // #swagger.summary = 'Consulta a lista de Amizades'
        // #swagger.description = 'Consulta lista de amizades cadastradas'
    );

    app.put('/amizades/:id', amizadesController.putAmizade
        /* #swagger.tags = ["Amizades"]
           #swagger.summary = 'Faça uma alteração na Amizade'
           #swagger.description = 'Faça uma alteração na Amizade'
           #swagger.parameters['json'] = {
            in: 'body',
            description: 'Dados para atualizar uma Amizade',
            type: 'json',
            schema: {
                amiz_id_mago_1: 1,
                amiz_id_mago_2: 2,
                amiz_data_do_inicio: "2003-09-03",
                amiz_status: "ativa"
            }
           }
        */
    );

    app.delete('/amizades/:id', amizadesController.deleteAmizade
        // #swagger.tags = ["Amizades"]
        // #swagger.summary = 'Delete uma Amizade'
        // #swagger.description = 'Apague uma Amizade na Lista'
    );

    app.patch('/amizades/:id', amizadesController.patchAmizade
        /* #swagger.tags = ["Amizades"]
           #swagger.summary = 'Faça uma alteração parcial na Amizade'
           #swagger.description = 'Faça uma alteração parcial na Amizade'
           #swagger.parameters['json'] = {
            in: 'body',
            description: 'Dados para atualizar uma Amizade',
            type: 'json',
            schema: {
                amiz_id_mago_1: 1,
                amiz_id_mago_2: 2,
                amiz_data_do_inicio: "2003-09-03",
                amiz_status: "ativa"
            }
           }
        */
    );
};
