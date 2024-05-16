const conquistasService = require('../services/conquistasService');

const getAllConquistas = async (req, res) => {
  try {
    const conquistas = await conquistasService.getAllConquistas();
    res.status(200).json(conquistas);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getConquistaById = async (req, res) => {
  try {
    const { id } = req.params;
    const conquista = await conquistasService.getConquistaById(id);
    res.status(200).json(conquista);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createConquista = async (req, res) => {
  try {
    const newConquista = await conquistasService.createConquista(req.body);
    res.status(201).json(newConquista);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateConquista = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedConquista = await conquistasService.updateConquista(id, req.body);
    res.status(200).json(updatedConquista);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteConquista = async (req, res) => {
  try {
    const { id } = req.params;
    await conquistasService.deleteConquista(id);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllConquistas,
  getConquistaById,
  createConquista,
  updateConquista,
  deleteConquista,
};
