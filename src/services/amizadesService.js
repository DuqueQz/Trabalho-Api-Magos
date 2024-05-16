const pool = require('../config/pg');

const getAllAmizades = async () => {
  const { rows } = await pool.query('SELECT * FROM amizades');
  return rows;
};

const getAmizadeById = async (id) => {
  const { rows } = await pool.query('SELECT * FROM amizades WHERE id = $1', [id]);
  return rows[0];
};

const createAmizade = async (amizade) => {
  const { rows } = await pool.query(
    'INSERT INTO amizades (mago1_id, mago2_id) VALUES ($1, $2) RETURNING *',
    [amizade.mago1_id, amizade.mago2_id]
  );
  return rows[0];
};

const updateAmizade = async (id, amizade) => {
  const { rows } = await pool.query(
    'UPDATE amizades SET mago1_id = $1, mago2_id = $2 WHERE id = $3 RETURNING *',
    [amizade.mago1_id, amizade.mago2_id, id]
  );
  return rows[0];
};

const deleteAmizade = async (id) => {
  await pool.query('DELETE FROM amizades WHERE id = $1', [id]);
};

module.exports = {
  getAllAmizades,
  getAmizadeById,
  createAmizade,
  updateAmizade,
  deleteAmizade,
};
