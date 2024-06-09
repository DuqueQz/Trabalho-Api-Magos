const magosController = require('../controllers/magos');

module.exports = (app) => {
    app.post('/magos', magosController.postMago
        // #swagger.tags = ["Magos"]
        // #swagger.summary = 'Crie um Mago'
        // #swagger.description = 'Crie um novo mago'
        /*#swagger.parameters['json'] = {
            in: 'body',
            description: 'Dados para Inserir um novo mago',
            type: 'json',
            schema: {
                mag_email: "mag_email",
                mag_senha: "mag_senha",
                mag_especializacao: "Piromancia",
                mag_nivel_de_magia: 10,
                mag_nome: "dumbeldore",
                mag_data_de_nascimento: "2000-01-01",
                mag_nacionalidade: "brasileiro",
                mag_bio: "um mago"
            }
           }
           */
    );

    app.get('/magos', magosController.getMagos
        // #swagger.tags = ["Magos"]
        // #swagger.summary = 'Consulta a lista de Magos'
        // #swagger.description = 'Consulta lista de magos cadastrados'
    );

    app.put('/magos/:id', magosController.putMago
        // #swagger.tags = ["Magos"]
        // #swagger.summary = 'Atualize um Mago'
        // #swagger.description = 'Atualize um mago existente'
        /*#swagger.parameters['json'] = {
            in: 'body',
            description: 'Dados para Inserir um novo mago',
            type: 'json',
            schema: {
                mag_especializacao: "Piromancia",
                mag_nivel_de_magia: 10,
                mag_nome: "dumbeldore",
                mag_data_de_nascimento: "2000-01-01",
                mag_nacionalidade: "brasileiro",
                mag_bio: "um mago"
            }
           }
           */
    );

    app.delete('/magos/:id', magosController.deleteMago
        // #swagger.tags = ["Magos"]
        // #swagger.summary = 'Delete um Mago'
        // #swagger.description = 'Apague um mago da lista'
    );

    app.patch('/magos/:id', magosController.patchMago
        // #swagger.tags = ["Magos"]
        // #swagger.summary = 'Atualize parcialmente um Mago'
        // #swagger.description = 'Atualize parcialmente um mago existente'
    );
};
