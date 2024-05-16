const magosService = require('../services/magosService');

const getAllMagos = async (req, res) => {
  try {
    const magos = await magosService.getAllMagos();
    res.status(200).json(magos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getMagoById = async (req, res) => {
  try {
    const { id } = req.params;
    const mago = await magosService.getMagoById(id);
    res.status(200).json(mago);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createMago = async (req, res) => {
  try {
    const newMago = await magosService.createMago(req.body);
    res.status(201).json(newMago);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateMago = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedMago = await magosService.updateMago(id, req.body);
    res.status(200).json(updatedMago);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteMago = async (req, res) => {
  try {
    const { id } = req.params;
    await magosService.deleteMago(id);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllMagos,
  getMagoById,
  createMago,
  updateMago,
  deleteMago,
};
