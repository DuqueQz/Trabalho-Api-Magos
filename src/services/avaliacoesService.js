const pool = require('../config/pg');

const getAllAvaliacoes = async () => {
  const { rows } = await pool.query('SELECT * FROM avaliacoes');
  return rows;
};

const getAvaliacaoById = async (id) => {
  const { rows } = await pool.query('SELECT * FROM avaliacoes WHERE id = $1', [id]);
  return rows[0];
};

const createAvaliacao = async (avaliacao) => {
  const { rows } = await pool.query(
    'INSERT INTO avaliacoes (comentario, nota, mago_id) VALUES ($1, $2, $3) RETURNING *',
    [avaliacao.comentario, avaliacao.nota, avaliacao.mago_id]
  );
  return rows[0];
};

const updateAvaliacao = async (id, avaliacao) => {
  const { rows } = await pool.query(
    'UPDATE avaliacoes SET comentario = $1, nota = $2, mago_id = $3 WHERE id = $4 RETURNING *',
    [avaliacao.comentario, avaliacao.nota, avaliacao.mago_id, id]
  );
  return rows[0];
};

const deleteAvaliacao = async (id) => {
  await pool.query('DELETE FROM avaliacoes WHERE id = $1', [id]);
};

module.exports = {
  getAllAvaliacoes,
  getAvaliacaoById,
  createAvaliacao,
  updateAvaliacao,
  deleteAvaliacao,
};
