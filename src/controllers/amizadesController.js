const amizadesService = require('../services/amizadesService');

const getAllAmizades = async (req, res) => {
  try {
    const amizades = await amizadesService.getAllAmizades();
    res.status(200).json(amizades);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getAmizadeById = async (req, res) => {
  try {
    const { id } = req.params;
    const amizade = await amizadesService.getAmizadeById(id);
    res.status(200).json(amizade);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createAmizade = async (req, res) => {
  try {
    const newAmizade = await amizadesService.createAmizade(req.body);
    res.status(201).json(newAmizade);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateAmizade = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedAmizade = await amizadesService.updateAmizade(id, req.body);
    res.status(200).json(updatedAmizade);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteAmizade = async (req, res) => {
  try {
    const { id } = req.params;
    await amizadesService.deleteAmizade(id);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllAmizades,
  getAmizadeById,
  createAmizade,
  updateAmizade,
  deleteAmizade,
};
