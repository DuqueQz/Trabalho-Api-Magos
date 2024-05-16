const mensagensService = require('../services/mensagensService');

const getAllMensagens = async (req, res) => {
  try {
    const mensagens = await mensagensService.getAllMensagens();
    res.status(200).json(mensagens);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getMensagemById = async (req, res) => {
  try {
    const { id } = req.params;
    const mensagem = await mensagensService.getMensagemById(id);
    res.status(200).json(mensagem);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createMensagem = async (req, res) => {
  try {
    const newMensagem = await mensagensService.createMensagem(req.body);
    res.status(201).json(newMensagem);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateMensagem = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedMensagem = await mensagensService.updateMensagem(id, req.body);
    res.status(200).json(updatedMensagem);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteMensagem = async (req, res) => {
  try {
    const { id } = req.params;
    await mensagensService.deleteMensagem(id);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllMensagens,
  getMensagemById,
  createMensagem,
  updateMensagem,
  deleteMensagem,
};
