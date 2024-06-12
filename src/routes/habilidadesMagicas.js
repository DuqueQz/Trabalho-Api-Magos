const habilidadesMagicasController = require('../controllers/habilidadesMagicas');
const checkPermission = require('../middleware/auth');
module.exports = (app) => {
    app.post('/habilidadesMagicas',checkPermission.check, habilidadesMagicasController.postHabilidade
        // #swagger.tags = ["Habilidades Mágicas"]
        // #swagger.summary = 'Crie uma Habilidade Mágica'
        // #swagger.description = 'Crie uma nova habilidade mágica'
        /* 
           #swagger.parameters['json'] = {
            in: 'body',
            description: 'Dados para adicionar uma habilidade',
            type: 'json',
            schema: {
                hab_nome_da_habilidade: "bola de fogo",
                hab_descricao: "Lança uma bola de fogo",
                hab_nivel_de_dificuldade: 1,
                hab_escola_de_magia: "piromancia",
                hab_dano: 100,
                hab_mana: 50,
                hab_cooldown: 10
            }
           }
        */
    );

    app.get('/habilidadesMagicas',checkPermission.check, habilidadesMagicasController.getHabilidades
        // #swagger.tags = ["Habilidades Mágicas"]
        // #swagger.summary = 'Consulta a lista de Habilidades Mágicas'
        // #swagger.description = 'Consulta lista de habilidades mágicas cadastradas'
    );

    app.put('/habilidadesMagicas/:id',checkPermission.check, habilidadesMagicasController.putHabilidade
        // #swagger.tags = ["Habilidades Mágicas"]
        // #swagger.summary = 'Atualize uma Habilidade Mágica'
        // #swagger.description = 'Atualize uma habilidade mágica existente'
        /* 
           #swagger.parameters['json'] = {
            in: 'body',
            description: 'Dados para adicionar uma habilidade',
            type: 'json',
            schema: {
                hab_nome_da_habilidade: "bola de fogo",
                hab_descricao: "Lança uma bola de fogo",
                hab_nivel_de_dificuldade: 1,
                hab_escola_de_magia: "piromancia",
                hab_dano: 100,
                hab_mana: 50,
                hab_cooldown: 10
            }
           }
        */
    );

    app.delete('/habilidadesMagicas/:id',checkPermission.check, habilidadesMagicasController.deleteHabilidade
        // #swagger.tags = ["Habilidades Mágicas"]
        // #swagger.summary = 'Delete uma Habilidade Mágica'
        // #swagger.description = 'Apague uma habilidade mágica da lista'
    );

    app.patch('/habilidadesMagicas/:id',checkPermission.check, habilidadesMagicasController.patchHabilidade
        // #swagger.tags = ["Habilidades Mágicas"]
        // #swagger.summary = 'Atualize parcialmente uma Habilidade Mágica'
        // #swagger.description = 'Atualize parcialmente uma habilidade mágica existente'
        /* 
           #swagger.parameters['json'] = {
            in: 'body',
            description: 'Dados para adicionar uma habilidade',
            type: 'json',
            schema: {
                hab_nome_da_habilidade: "bola de fogo",
                hab_descricao: "Lança uma bola de fogo",
                hab_nivel_de_dificuldade: 1,
                hab_escola_de_magia: "piromancia",
                hab_dano: 100,
                hab_mana: 50,
                hab_cooldown: 10
            }
           }
        */
    );
};
