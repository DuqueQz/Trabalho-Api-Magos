const conquistasService = require('../services/conquistas');

const getConquistas = async (req, res, next) => {
    try {
        const retorno = await conquistasService.getConquistas();
        res.status(201).json(retorno);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

const postConquista = async (req, res, next) => {
    try {
        const retorno = await conquistasService.postConquista(req.body);
        res.status(201).json(retorno);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

const deleteConquista = async (req, res, next) => {
    try {
        await conquistasService.deleteConquista(req.params)
            .then(ret => res.status(204).send(ret))
            .catch(err => res.status(500).send(err.message));
    } catch (err) {
        next(err);
    }
};

const putConquista = async (req, res, next) => {
    try {
        let params = req.body;
        params.id = req.params.id;
        const retorno = await conquistasService.putConquista(params)
            .then(ret => res.status(200).send(ret))
            .catch(err => res.status(500).send(err.message));
    } catch (err) {
        next(err);
    }
};

const patchConquista = async (req, res, next) => {
    try {
        let params = req.body;
        params.id = req.params.id;
        const retorno = await conquistasService.patchConquista(params)
            .then(ret => res.status(200).send(ret))
            .catch(err => res.status(500).send(err.message));
    } catch (err) {
        next(err);
    }
};

module.exports.getConquistas = getConquistas
module.exports.postConquista = postConquista
module.exports.deleteConquista = deleteConquista
module.exports.putConquista = putConquista
module.exports.patchConquista = patchConquista 

