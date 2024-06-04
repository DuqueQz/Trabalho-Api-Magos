const magosService = require('../services/magos');

const getMagos = async (req, res, next) => {
    try {
        const retorno = await magosService.getMagos();
        res.status(201).json(retorno);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

const postMago = async (req, res, next) => {
    try {
        const retorno = await magosService.postMago(req.body);
        res.status(201).json(retorno);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

const deleteMago = async (req, res, next) => {
    try {
        await magosService.deleteMago(req.params)
            .then(ret => res.status(204).send(ret))
            .catch(err => res.status(500).send(err.message));
    } catch (err) {
        next(err);
    }
};

const putMago = async (req, res, next) => {
    try {
        let params = req.body;
        params.id = req.params.id;
        const retorno = await magosService.putMago(params)
            .then(ret => res.status(200).send(ret))
            .catch(err => res.status(500).send(err.message));
    } catch (err) {
        next(err);
    }
};

const patchMago = async (req, res, next) => {
    try {
        let params = req.body;
        params.id = req.params.id;
        const retorno = await magosService.patchMago(params)
            .then(ret => res.status(200).send(ret))
            .catch(err => res.status(500).send(err.message));
    } catch (err) {
        next(err);
    }
};

module.exports.getMagos = getMagos
module.exports.postMago = postMago
module.exports.deleteMago = deleteMago
module.exports.putMago = putMago
module.exports.patchMago = patchMago

