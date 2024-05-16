const habilidadesService = require('../services/habilidadesService');

const getAllHabilidades = async (req, res) => {
  try {
    const habilidades = await habilidadesService.getAllHabilidades();
    res.status(200).json(habilidades);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getHabilidadeById = async (req, res) => {
  try {
    const { id } = req.params;
    const habilidade = await habilidadesService.getHabilidadeById(id);
    res.status(200).json(habilidade);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createHabilidade = async (req, res) => {
  try {
    const newHabilidade = await habilidadesService.createHabilidade(req.body);
    res.status(201).json(newHabilidade);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateHabilidade = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedHabilidade = await habilidadesService.updateHabilidade(id, req.body);
    res.status(200).json(updatedHabilidade);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteHabilidade = async (req, res) => {
  try {
    const { id } = req.params;
    await habilidadesService.deleteHabilidade(id);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllHabilidades,
  getHabilidadeById,
  createHabilidade,
  updateHabilidade,
  deleteHabilidade,
};
