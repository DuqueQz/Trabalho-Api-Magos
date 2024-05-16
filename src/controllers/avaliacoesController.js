const avaliacoesService = require('../services/avaliacoesService');

const getAllAvaliacoes = async (req, res) => {
  try {
    const avaliacoes = await avaliacoesService.getAllAvaliacoes();
    res.status(200).json(avaliacoes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getAvaliacaoById = async (req, res) => {
  try {
    const { id } = req.params;
    const avaliacao = await avaliacoesService.getAvaliacaoById(id);
    res.status(200).json(avaliacao);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createAvaliacao = async (req, res) => {
  try {
    const newAvaliacao = await avaliacoesService.createAvaliacao(req.body);
    res.status(201).json(newAvaliacao);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateAvaliacao = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedAvaliacao = await avaliacoesService.updateAvaliacao(id, req.body);
    res.status(200).json(updatedAvaliacao);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteAvaliacao = async (req, res) => {
  try {
    const { id } = req.params;
    await avaliacoesService.deleteAvaliacao(id);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllAvaliacoes,
  getAvaliacaoById,
  createAvaliacao,
  updateAvaliacao,
  deleteAvaliacao,
};
