const habilidadesMagicasService = require('../services/habilidadesMagicas');

const getHabilidades = async (req, res, next) => {
    try {
        const retorno = await habilidadesMagicasService.getHabilidades();
        res.status(201).json(retorno);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

const postHabilidade = async (req, res, next) => {
    try {
        const retorno = await habilidadesMagicasService.postHabilidade(req.body);
        res.status(201).json(retorno);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

const deleteHabilidade = async (req, res, next) => {
    try {
        await habilidadesMagicasService.deleteHabilidade(req.params)
            .then(ret => res.status(204).send(ret))
            .catch(err => res.status(500).send(err.message));
    } catch (err) {
        next(err);
    }
};

const putHabilidade = async (req, res, next) => {
    try {
        let params = req.body;
        params.id = req.params.id;
        const retorno = await habilidadesMagicasService.putHabilidade(params)
            .then(ret => res.status(200).send(ret))
            .catch(err => res.status(500).send(err.message));
    } catch (err) {
        next(err);
    }
};

const patchHabilidade = async (req, res, next) => {
    try {
        let params = req.body;
        params.id = req.params.id;
        const retorno = await habilidadesMagicasService.patchHabilidade(params)
            .then(ret => res.status(200).send(ret))
            .catch(err => res.status(500).send(err.message));
    } catch (err) {
        next(err);
    }
};

module.exports = {
    getHabilidades,
    postHabilidade,
    deleteHabilidade,
    putHabilidade,
    patchHabilidade
};
