const pool = require('../config/pg');

const getAllMensagens = async () => {
  const { rows } = await pool.query('SELECT * FROM mensagens');
  return rows;
};

const getMensagemById = async (id) => {
  const { rows } = await pool.query('SELECT * FROM mensagens WHERE id = $1', [id]);
  return rows[0];
};

const createMensagem = async (mensagem) => {
  const { rows } = await pool.query(
    'INSERT INTO mensagens (conteudo, remetente_id, destinatario_id) VALUES ($1, $2, $3) RETURNING *',
    [mensagem.conteudo, mensagem.remetente_id, mensagem.destinatario_id]
  );
  return rows[0];
};

const updateMensagem = async (id, mensagem) => {
  const { rows } = await pool.query(
    'UPDATE mensagens SET conteudo = $1, remetente_id = $2, destinatario_id = $3 WHERE id = $4 RETURNING *',
    [mensagem.conteudo, mensagem.remetente_id, mensagem.destinatario_id, id]
  );
  return rows[0];
};

const deleteMensagem = async (id) => {
  await pool.query('DELETE FROM mensagens WHERE id = $1', [id]);
};

module.exports = {
  getAllMensagens,
  getMensagemById,
  createMensagem,
  updateMensagem,
  deleteMensagem,
};
