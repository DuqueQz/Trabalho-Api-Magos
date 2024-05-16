const habilidadesMagicasService = require('../services/habilidadesMagicasService');

// Controlador para obter todas as habilidades mágicas
const getHabilidadesMagicas = async (req, res) => {
  try {
    const habilidadesMagicas = await habilidadesMagicasService.getHabilidadesMagicas();
    res.json(habilidadesMagicas);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Controlador para criar uma nova habilidade mágica
const criarHabilidadeMagica = async (req, res) => {
  try {
    const novaHabilidadeMagica = await habilidadesMagicasService.adicionarHabilidadeMagica(req.body);
    res.status(201).json(novaHabilidadeMagica);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Controlador para obter uma habilidade mágica pelo ID
const getHabilidadeMagicaById = async (req, res) => {
  try {
    const { id } = req.params;
    const habilidadeMagica = await habilidadesMagicasService.getHabilidadeMagicaById(id);
    if (!habilidadeMagica) {
      return res.status(404).json({ message: 'Habilidade mágica não encontrada' });
    }
    res.json(habilidadeMagica);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Controlador para atualizar uma habilidade mágica existente
const atualizarHabilidadeMagica = async (req, res) => {
  try {
    const { id } = req.params;
    const habilidadeMagicaAtualizada = await habilidadesMagicasService.atualizarHabilidadeMagica(id, req.body);
    res.json(habilidadeMagicaAtualizada);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Controlador para excluir uma habilidade mágica
const deletarHabilidadeMagica = async (req, res) => {
  try {
    const { id } = req.params;
    await habilidadesMagicasService.deletarHabilidadeMagica(id);
    res.sendStatus(204);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getHabilidadesMagicas,
  criarHabilidadeMagica,
  getHabilidadeMagicaById,
  atualizarHabilidadeMagica,
  deletarHabilidadeMagica
};
