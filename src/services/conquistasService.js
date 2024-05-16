const pool = require('../config/pg');

const getAllConquistas = async () => {
  const { rows } = await pool.query('SELECT * FROM conquistas');
  return rows;
};

const getConquistaById = async (id) => {
  const { rows } = await pool.query('SELECT * FROM conquistas WHERE id = $1', [id]);
  return rows[0];
};

const createConquista = async (conquista) => {
  const { rows } = await pool.query(
    'INSERT INTO conquistas (nome, descricao) VALUES ($1, $2) RETURNING *',
    [conquista.nome, conquista.descricao]
  );
  return rows[0];
};

const updateConquista = async (id, conquista) => {
  const { rows } = await pool.query(
    'UPDATE conquistas SET nome = $1, descricao = $2 WHERE id = $3 RETURNING *',
    [conquista.nome, conquista.descricao, id]
  );
  return rows[0];
};

const deleteConquista = async (id) => {
  await pool.query('DELETE FROM conquistas WHERE id = $1', [id]);
};

module.exports = {
  getAllConquistas,
  getConquistaById,
  createConquista,
  updateConquista,
  deleteConquista,
};
