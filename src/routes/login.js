const loginController = require('../controllers/login');
const checkPermission = require('../middleware/auth');
module.exports = (app) => {
    app.get('/login',checkPermission.check, loginController.getLogins
        // #swagger.tags = ["Login"]
        // #swagger.summary = 'Obtenha todos os logins'
        // #swagger.description = 'Obtenha a lista de todos os logins'
    );

    app.post('/login/authenticate', loginController.login
        // #swagger.tags = ["Login"]
        // #swagger.summary = 'Autentique um usuário'
        // #swagger.description = 'Autentique um usuário com email e senha'
        /*#swagger.parameters['json'] = {
            in: 'body',
            description: 'Dados para autenticar um login',
            type: 'json',
            schema: {
                mag_email: "email",
                mag_password: "senha",
            }
        }
        */
    );

    app.put('/login/:id',checkPermission.check, loginController.updateLogin
        // #swagger.tags = ["Login"]
        // #swagger.summary = 'Atualize um login'
        // #swagger.description = 'Atualize um login existente com base no ID'
        /*#swagger.parameters['json'] = {
            in: 'body',
            description: 'Dados para atualizar um login',
            type: 'json',
            schema: {
                mag_email: "email",
                mag_password: "senha",
            }
        }
        */
    );

    app.delete('/login/:id',checkPermission.check, loginController.deleteLogin
        // #swagger.tags = ["Login"]
        // #swagger.summary = 'Delete um login'
        // #swagger.description = 'Delete um login existente com base no ID'
    );
};
