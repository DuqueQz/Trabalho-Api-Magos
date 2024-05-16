const trocasService = require('../services/trocasService');

const getAllTrocas = async (req, res) => {
  try {
    const trocas = await trocasService.getAllTrocas();
    res.status(200).json(trocas);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getTrocaById = async (req, res) => {
  try {
    const { id } = req.params;
    const troca = await trocasService.getTrocaById(id);
    res.status(200).json(troca);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createTroca = async (req, res) => {
  try {
    const newTroca = await trocasService.createTroca(req.body);
    res.status(201).json(newTroca);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateTroca = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedTroca = await trocasService.updateTroca(id, req.body);
    res.status(200).json(updatedTroca);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteTroca = async (req, res) => {
  try {
    const { id } = req.params;
    await trocasService.deleteTroca(id);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllTrocas,
  getTrocaById,
  createTroca,
  updateTroca,
  deleteTroca,
};
