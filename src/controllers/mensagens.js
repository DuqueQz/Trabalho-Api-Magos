const mensagensService = require('../services/mensagens');

const getMensagens = async (req, res, next) => {
    try {
        const retorno = await mensagensService.getMensagens();
        res.status(201).json(retorno);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

const postMensagem = async (req, res, next) => {
    try {
        const retorno = await mensagensService.postMensagem(req.body);
        res.status(201).json(retorno);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

const deleteMensagem = async (req, res, next) => {
    try {
        await mensagensService.deleteMensagem(req.params)
            .then(ret => res.status(204).send(ret))
            .catch(err => res.status(500).send(err.message));
    } catch (err) {
        next(err);
    }
};

const putMensagem = async (req, res, next) => {
    try {
        let params = req.body;
        params.id = req.params.id;
        const retorno = await mensagensService.putMensagem(params)
            .then(ret => res.status(200).send(ret))
            .catch(err => res.status(500).send(err.message));
    } catch (err) {
        next(err);
    }
};

const patchMensagem = async (req, res, next) => {
    try {
        let params = req.body;
        params.id = req.params.id;
        const retorno = await mensagensService.patchMensagem(params)
            .then(ret => res.status(200).send(ret))
            .catch(err => res.status(500).send(err.message));
    } catch (err) {
        next(err);
    }
};

module.exports = {
    getMensagens,
    postMensagem,
    deleteMensagem,
    putMensagem,
    patchMensagem
};
