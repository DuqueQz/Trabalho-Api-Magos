const magosConquistasService = require('../services/magosConquistas');

const getMagosConquistas = async (req, res, next) => {
    try {
        const retorno = await magosConquistasService.getMagosConquistas();
        res.status(201).json(retorno);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

const postMagoConquista = async (req, res, next) => {
    try {
        const retorno = await magosConquistasService.postMagoConquista(req.body);
        res.status(201).json(retorno);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

const deleteMagoConquista = async (req, res, next) => {
    try {
        await magosConquistasService.deleteMagoConquista(req.params)
            .then(ret => res.status(204).send(ret))
            .catch(err => res.status(500).send(err.message));
    } catch (err) {
        next(err);
    }
};

const putMagoConquista = async (req, res, next) => {
    try {
        let params = req.body;
        params.mag_id = req.params.mag_id;
        params.conq_id = req.params.conq_id;
        const retorno = await magosConquistasService.putMagoConquista(params)
            .then(ret => res.status(200).send(ret))
            .catch(err => res.status(500).send(err.message));
    } catch (err) {
        next(err);
    }
};

const patchMagoConquista = async (req, res, next) => {
    try {
        let params = req.body;
        params.mag_id = req.params.mag_id;
        params.conq_id = req.params.conq_id;
        const retorno = await magosConquistasService.patchMagoConquista(params)
            .then(ret => res.status(200).send(ret))
            .catch(err => res.status(500).send(err.message));
    } catch (err) {
        next(err);
    }
};

module.exports = {
    getMagosConquistas,
    postMagoConquista,
    deleteMagoConquista,
    putMagoConquista,
    patchMagoConquista
};
