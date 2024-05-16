const interessesService = require('../services/interessesService');

const getAllInteresses = async (req, res) => {
  try {
    const interesses = await interessesService.getAllInteresses();
    res.status(200).json(interesses);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getInteresseById = async (req, res) => {
  try {
    const { id } = req.params;
    const interesse = await interessesService.getInteresseById(id);
    res.status(200).json(interesse);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createInteresse = async (req, res) => {
  try {
    const newInteresse = await interessesService.createInteresse(req.body);
    res.status(201).json(newInteresse);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateInteresse = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedInteresse = await interessesService.updateInteresse(id, req.body);
    res.status(200).json(updatedInteresse);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteInteresse = async (req, res) => {
  try {
    const { id } = req.params;
    await interessesService.deleteInteresse(id);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllInteresses,
  getInteresseById,
  createInteresse,
  updateInteresse,
  deleteInteresse,
};
