const magosService = require('../services/magosService');

// Controlador para obter todos os magos
const getMagos = async (req, res) => {
  try {
    const magos = await magosService.getMagos();
    res.json(magos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Controlador para criar um novo mago
const criarMago = async (req, res) => {
  try {
    const novoMago = await magosService.adicionarMago(req.body);
    res.status(201).json(novoMago);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Controlador para obter um mago pelo ID
const getMagoById = async (req, res) => {
  try {
    const { id } = req.params;
    const mago = await magosService.getMagoById(id);
    if (!mago) {
      return res.status(404).json({ message: 'Mago não encontrado' });
    }
    res.json(mago);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Controlador para atualizar um mago existente
const atualizarMago = async (req, res) => {
  try {
    const { id } = req.params;
    const magoAtualizado = await magosService.atualizarMago(id, req.body);
    res.json(magoAtualizado);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Controlador para excluir um mago
const deletarMago = async (req, res) => {
  try {
    const { id } = req.params;
    await magosService.deletarMago(id);
    res.sendStatus(204);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getMagos,
  criarMago,
  getMagoById,
  atualizarMago,
  deletarMago
};
