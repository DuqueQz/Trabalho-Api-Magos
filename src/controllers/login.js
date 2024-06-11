const loginService = require('../services/login');

const getLogins = async (req, res, next) => {
    try {
        const retorno = await loginService.getLogins();
        res.status(200).json(retorno);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

const authenticate = async (req, res, next) => {
    try {
        const { mag_email, mag_password } = req.body;
        const retorno = await loginService.authenticate(mag_email, mag_password);
        if (retorno) {
            res.status(200).json({ message: 'Autenticado com sucesso' });
        } else {
            res.status(401).json({ message: 'Email ou senha incorretos' });
        }
    } catch (err) {
        res.status(500).send(err.message);
    }
};

const updateLogin = async (req, res, next) => {
    try {
        const { id } = req.params;
        const retorno = await loginService.updateLogin(id, req.body);
        res.status(200).json(retorno);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

const deleteLogin = async (req, res, next) => {
    try {
        const { id } = req.params;
        await loginService.deleteLogin(id);
        res.status(204).send();
    } catch (err) {
        res.status(500).send(err.message);
    }
};

module.exports = {
    getLogins,
    authenticate,
    updateLogin,
    deleteLogin
};
