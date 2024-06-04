const trocasService = require('../services/trocas');

const getTrocas = async (req, res, next) => {
    try {
        const retorno = await trocasService.getTrocas();
        res.status(201).json(retorno);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

const postTroca = async (req, res, next) => {
    try {
        const retorno = await trocasService.postTroca(req.body);
        res.status(201).json(retorno);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

const deleteTroca = async (req, res, next) => {
    try {
        await trocasService.deleteTroca(req.params)
            .then(ret => res.status(204).send(ret))
            .catch(err => res.status(500).send(err.message));
    } catch (err) {
        next(err);
    }
};

const putTroca = async (req, res, next) => {
    try {
        let params = req.body;
        params.id = req.params.id;
        const retorno = await trocasService.putTroca(params)
            .then(ret => res.status(200).send(ret))
            .catch(err => res.status(500).send(err.message));
    } catch (err) {
        next(err);
    }
};

const patchTroca = async (req, res, next) => {
    try {
        let params = req.body;
        params.id = req.params.id;
        const retorno = await trocasService.patchTroca(params)
            .then(ret => res.status(200).send(ret))
            .catch(err => res.status(500).send(err.message));
    } catch (err) {
        next(err);
    }
};

module.exports = {
    getTrocas,
    postTroca,
    deleteTroca,
    putTroca,
    patchTroca
};
