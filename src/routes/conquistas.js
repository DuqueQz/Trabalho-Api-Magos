const conquistasController = require('../controllers/conquistas');

module.exports = (app) => {
    app.post('/conquistas', conquistasController.postConquista
        // #swagger.tags = ["Conquistas"]
        // #swagger.summary = 'Crie uma Conquista'
        // #swagger.description = 'Crie uma nova conquista'
         /* 
           #swagger.parameters['json'] = {
            in: 'body',
            description: 'Dados para adicionar uma conquista',
            type: 'json',
            schema: {
                conq_descricao_da_conquista: "Dados",
                conq_pontuacao: 200,
                conq_tipo: "Bosses",
                conq_recompensa: "10 diamantes"
            }
           }
        */
    );

    app.get('/conquistas', conquistasController.getConquistas
        // #swagger.tags = ["Conquistas"]
        // #swagger.summary = 'Consulta a lista de Conquistas'
        // #swagger.description = 'Consulta lista de conquistas cadastradas'
    );

    app.put('/conquistas/:id', conquistasController.putConquista
        // #swagger.tags = ["Conquistas"]
        // #swagger.summary = 'Atualize uma Conquista'
        // #swagger.description = 'Atualize uma conquista existente'
        /* 
           #swagger.parameters['json'] = {
            in: 'body',
            description: 'Dados para alterar uma conquista',
            type: 'json',
            schema: {
                conq_descricao_da_conquista: "Dados",
                conq_pontuacao: 200,
                conq_tipo: "Bosses",
                conq_recompensa: "10 diamantes"
            }
           }
        */
    );

    app.delete('/conquistas/:id', conquistasController.deleteConquista
        // #swagger.tags = ["Conquistas"]
        // #swagger.summary = 'Delete uma Conquista'
        // #swagger.description = 'Apague uma conquista da lista'
    );

    app.patch('/conquistas/:id', conquistasController.patchConquista
        // #swagger.tags = ["Conquistas"]
        // #swagger.summary = 'Atualize parcialmente uma Conquista'
        // #swagger.description = 'Atualize parcialmente uma conquista existente'
    );
};

