const avaliacoesService = require('../services/avaliacoes');

const getAvaliacoes = async (req, res, next) => {
    try {
        const retorno = await avaliacoesService.getAvaliacoes();
        res.status(201).json(retorno);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

const postAvaliacao = async (req, res, next) => {
    try {
        const retorno = await avaliacoesService.postAvaliacao(req.body);
        res.status(201).json(retorno);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

const deleteAvaliacao = async (req, res, next) => {
    try {
        await avaliacoesService.deleteAvaliacao(req.params)
            .then(ret => res.status(204).send(ret))
            .catch(err => res.status(500).send(err.message));
    } catch (err) {
        next(err);
    }
};

const putAvaliacao = async (req, res, next) => {
    try {
        let params = req.body;
        params.id = req.params.id;
        const retorno = await avaliacoesService.putAvaliacao(params)
            .then(ret => res.status(200).send(ret))
            .catch(err => res.status(500).send(err.message));
    } catch (err) {
        next(err);
    }
};

const patchAvaliacao = async (req, res, next) => {
    try {
        let params = req.body;
        params.id = req.params.id;
        const retorno = await avaliacoesService.patchAvaliacao(params)
            .then(ret => res.status(200).send(ret))
            .catch(err => res.status(500).send(err.message));
    } catch (err) {
        next(err);
    }
};

module.exports = {
    getAvaliacoes,
    postAvaliacao,
    deleteAvaliacao,
    putAvaliacao,
    patchAvaliacao
};
