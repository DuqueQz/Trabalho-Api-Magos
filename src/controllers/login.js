const loginService = require('../services/login');

const getLogins = async (req, res, next) => {
    try {
        const retorno = await loginService.getLogins();
        res.status(200).json(retorno);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

const login = async (req, res) => {

    if (req.headers.authorization && req.headers.authorization.startsWith('Basic ')) {
        const basicToken = req.headers.authorization.split(' ')[1]; // Pega o token base64

        if (basicToken) {
            try {
                const token = Buffer.from(basicToken, 'base64').toString('ascii');
                let posPonto = token.indexOf(':');

                if (posPonto === -1) {
                    throw new Error('Token Basic inválido');
                }

                const user = token.substring(0, posPonto);
                const pass = token.substring(posPonto + 1);

                req.body.user = user;
                req.body.pass = pass;

                const ret = await loginService.login(req.body);
                res.cookie('auth', ret.token, {
                    sameSite: 'none',
                    secure: true,
                    expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 7)
                });
                res.status(201).json({ status: ret.status, usuario: ret.user });
            } catch (err) {
                console.error('Erro ao decodificar o token:', err);
                res.status(400).json({ type: 'ERRO', message: 'Token Basic inválido ou malformado' });
            }
        } else {
            res.status(400).json({ type: 'ERRO', message: 'Token Basic não fornecido' });
        }
    } else {
        res.status(400).json({ type: 'ERRO', message: 'LOGIN WITH BASIC AUTH!' });
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

module.exports = {
    getLogins,
    login,
    updateLogin,
};
