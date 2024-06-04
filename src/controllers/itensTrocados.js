const itensTrocadosService = require('../services/itensTrocados');

const getItensTrocados = async (req, res, next) => {
    try {
        const retorno = await itensTrocadosService.getItensTrocados();
        res.status(201).json(retorno);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

const postItemTrocado = async (req, res, next) => {
    try {
        const retorno = await itensTrocadosService.postItemTrocado(req.body);
        res.status(201).json(retorno);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

const deleteItemTrocado = async (req, res, next) => {
    try {
        await itensTrocadosService.deleteItemTrocado(req.params)
            .then(ret => res.status(204).send(ret))
            .catch(err => res.status(500).send(err.message));
    } catch (err) {
        next(err);
    }
};

const putItemTrocado = async (req, res, next) => {
    try {
        let params = req.body;
        params.id = req.params.id;
        const retorno = await itensTrocadosService.putItemTrocado(params)
            .then(ret => res.status(200).send(ret))
            .catch(err => res.status(500).send(err.message));
    } catch (err) {
        next(err);
    }
};

const patchItemTrocado = async (req, res, next) => {
    try {
        let params = req.body;
        params.id = req.params.id;
        const retorno = await itensTrocadosService.patchItemTrocado(params)
            .then(ret => res.status(200).send(ret))
            .catch(err => res.status(500).send(err.message));
    } catch (err) {
        next(err);
    }
};

module.exports.getItensTrocados = getItensTrocados
module.exports.postItemTrocado = postItemTrocado
module.exports.deleteItemTrocado = deleteItemTrocado
module.exports.putItemTrocado = putItemTrocado
module.exports.patchItemTrocado = patchItemTrocado
