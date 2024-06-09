const itensTrocadosController = require('../controllers/itensTrocados');

module.exports = (app) => {
    app.post('/itensTrocados', itensTrocadosController.postItemTrocado
        // #swagger.tags = ["Itens Trocados"]
        // #swagger.summary = 'Crie um Item Trocado'
        // #swagger.description = 'Crie um novo item trocado'
        /* 
           #swagger.parameters['json'] = {
            in: 'body',
            description: 'Dados para adicionar uma Itens Trocados',
            type: 'json',
            schema: {
                troca_id: 1,
                item_nome: "bola de fogo",
                item_descricao: "lança uyma bola de fogo",
                item_nivel_de_dificuldade: 1,
                item_escola_de_magia: "piromancia",
                item_dano: 100,
                item_mana: 50,
            }
           }
        */
    );

    app.get('/itensTrocados', itensTrocadosController.getItensTrocados
        // #swagger.tags = ["Itens Trocados"]
        // #swagger.summary = 'Consulta a lista de Itens Trocados'
        // #swagger.description = 'Consulta lista de itens trocados cadastrados'
    );

    app.put('/itensTrocados/:id', itensTrocadosController.putItemTrocado
        // #swagger.tags = ["Itens Trocados"]
        // #swagger.summary = 'Atualize um Item Trocado'
        // #swagger.description = 'Atualize um item trocado existente'
        /* 
           #swagger.parameters['json'] = {
            in: 'body',
            description: 'Dados para adicionar uma Itens Trocados',
            type: 'json',
            schema: {
                troca_id: 1,
                item_nome: "bola de fogo",
                item_descricao: "lança uyma bola de fogo",
                item_nivel_de_dificuldade: 1,
                item_escola_de_magia: "piromancia",
                item_dano: 100,
                item_mana: 50,
            }
           }
        */
    );

    app.delete('/itensTrocados/:id', itensTrocadosController.deleteItemTrocado
        // #swagger.tags = ["Itens Trocados"]
        // #swagger.summary = 'Delete um Item Trocado'
        // #swagger.description = 'Apague um item trocado da lista'
    );

    app.patch('/itensTrocados/:id', itensTrocadosController.patchItemTrocado
        // #swagger.tags = ["Itens Trocados"]
        // #swagger.summary = 'Atualize parcialmente um Item Trocado'
        // #swagger.description = 'Atualize parcialmente um item trocado existente'
    );
};
