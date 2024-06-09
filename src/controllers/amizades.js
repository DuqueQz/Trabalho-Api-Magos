const amizadesService = require('../services/amizades');

const getAmizades = async (req, res, next) => {
    try {
        const retorno = await amizadesService.getAmizades();
        res.status(201).json(retorno);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

const postAmizade = async (req, res, next) => {
    try {
        const retorno = await amizadesService.postAmizade(req.body);
        res.status(201).json(retorno);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

const deleteAmizade = async (req, res, next) => {
    try {
        await amizadesService.deleteAmizade(req.params)
            .then(ret => res.status(204).send(ret))
            .catch(err => res.status(500).send(err.message));
    } catch (err) {
        next(err);
    }
};

const putAmizade = async (req, res, next) => {
    try {
        let params = req.body;
        params.id = req.params.id;
        const retorno = await amizadesService.putAmizade(params)
            .then(ret => res.status(200).send(ret))
            .catch(err => res.status(500).send(err.message));
    } catch (err) {
        next(err);
    }
};

const patchAmizade = async (req, res, next) => {
    try {
        let params = req.body;
        params.id = req.params.id;
        const retorno = await amizadesService.patchAmizade(params)
            .then(ret => res.status(200).send(ret))
            .catch(err => res.status(500).send(err.message));
    } catch (err) {
        next(err);
    }
};

module.exports.getAmizades = getAmizades;
module.exports.postAmizade = postAmizade;
module.exports.deleteAmizade = deleteAmizade;
module.exports.putAmizade = putAmizade;
module.exports.patchAmizade = patchAmizade;
