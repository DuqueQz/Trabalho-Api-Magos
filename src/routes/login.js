const loginController = require('../controllers/login');

module.exports = (app) => {
    app.get('/login', loginController.getLogins
        // #swagger.tags = ["Login"]
        // #swagger.summary = 'Obtenha todos os logins'
        // #swagger.description = 'Obtenha a lista de todos os logins'
    );

    app.post('/login/authenticate', loginController.authenticate
        // #swagger.tags = ["Login"]
        // #swagger.summary = 'Autentique um usuário'
        // #swagger.description = 'Autentique um usuário com email e senha'
        /*#swagger.parameters['json'] = {
            in: 'body',
            description: 'Dados para Atualize um login',
            type: 'json',
            schema: {
                mag_email: "email",
                mag_password: "senha",
            }
           }
           */
        
    );

    app.put('/login/:id', loginController.updateLogin
        // #swagger.tags = ["Login"]
        // #swagger.summary = 'Atualize um login'
        // #swagger.description = 'Atualize um login existente com base no ID'
        /*#swagger.parameters['json'] = {
            in: 'body',
            description: 'Dados para Atualize um login',
            type: 'json',
            schema: {
                mag_email: "email",
                mag_password: "senha",
            }
           }
           */
    );

    app.delete('/login/:id', loginController.deleteLogin
        // #swagger.tags = ["Login"]
        // #swagger.summary = 'Delete um login'
        // #swagger.description = 'Delete um login existente com base no ID'
    );
};
