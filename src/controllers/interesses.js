const interessesService = require('../services/interesses');

const getInteresses = async (req, res, next) => {
    try {
        const retorno = await interessesService.getInteresses();
        res.status(201).json(retorno);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

const postInteresse = async (req, res, next) => {
    try {
        const retorno = await interessesService.postInteresse(req.body);
        res.status(201).json(retorno);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

const deleteInteresse = async (req, res, next) => {
    try {
        await interessesService.deleteInteresse(req.params)
            .then(ret => res.status(204).send(ret))
            .catch(err => res.status(500).send(err.message));
    } catch (err) {
        next(err);
    }
};

const putInteresse = async (req, res, next) => {
    try {
        let params = req.body;
        params.id = req.params.id;
        const retorno = await interessesService.putInteresse(params)
            .then(ret => res.status(200).send(ret))
            .catch(err => res.status(500).send(err.message));
    } catch (err) {
        next(err);
    }
};

const patchInteresse = async (req, res, next) => {
    try {
        let params = req.body;
        params.id = req.params.id;
        const retorno = await interessesService.patchInteresse(params)
            .then(ret => res.status(200).send(ret))
            .catch(err => res.status(500).send(err.message));
    } catch (err) {
        next(err);
    }
};

module.exports.getInteresses = getInteresses
module.exports.postInteresse = postInteresse
module.exports.deleteInteresse = deleteInteresse
module.exports.putInteresse = putInteresse
module.exports.patchInteresse = patchInteresse

