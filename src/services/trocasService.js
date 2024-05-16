const pool = require('../config/pg');

const getAllTrocas = async () => {
  const { rows } = await pool.query('SELECT * FROM trocas');
  return rows;
};

const getTrocaById = async (id) => {
  const { rows } = await pool.query('SELECT * FROM trocas WHERE id = $1', [id]);
  return rows[0];
};

const createTroca = async (troca) => {
  const { rows } = await pool.query(
    'INSERT INTO trocas (item, quantidade) VALUES ($1, $2) RETURNING *',
    [troca.item, troca.quantidade]
  );
  return rows[0];
};

const updateTroca = async (id, troca) => {
  const { rows } = await pool.query(
    'UPDATE trocas SET item = $1, quantidade = $2 WHERE id = $3 RETURNING *',
    [troca.item, troca.quantidade, id]
  );
  return rows[0];
};

const deleteTroca = async (id) => {
  await pool.query('DELETE FROM trocas WHERE id = $1', [id]);
};

module.exports = {
  getAllTrocas,
  getTrocaById,
  createTroca,
  updateTroca,
  deleteTroca,
};
