const pool = require('../config/pg');

const getAllInteresses = async () => {
  const { rows } = await pool.query('SELECT * FROM interesses');
  return rows;
};

const getInteresseById = async (id) => {
  const { rows } = await pool.query('SELECT * FROM interesses WHERE id = $1', [id]);
  return rows[0];
};

const createInteresse = async (interesse) => {
  const { rows } = await pool.query(
    'INSERT INTO interesses (nome, descricao) VALUES ($1, $2) RETURNING *',
    [interesse.nome, interesse.descricao]
  );
  return rows[0];
};

const updateInteresse = async (id, interesse) => {
  const { rows } = await pool.query(
    'UPDATE interesses SET nome = $1, descricao = $2 WHERE id = $3 RETURNING *',
    [interesse.nome, interesse.descricao, id]
  );
  return rows[0];
};

const deleteInteresse = async (id) => {
  await pool.query('DELETE FROM interesses WHERE id = $1', [id]);
};

module.exports = {
  getAllInteresses,
  getInteresseById,
  createInteresse,
  updateInteresse,
  deleteInteresse,
};
