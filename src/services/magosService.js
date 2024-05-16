const pool = require('../config/pg');

const getAllMagos = async () => {
  const { rows } = await pool.query('SELECT * FROM magos');
  return rows;
};

const getMagoById = async (id) => {
  const { rows } = await pool.query('SELECT * FROM magos WHERE id = $1', [id]);
  return rows[0];
};

const createMago = async (mago) => {
  const { rows } = await pool.query(
    'INSERT INTO magos (nome, nivel, especialidade) VALUES ($1, $2, $3) RETURNING *',
    [mago.nome, mago.nivel, mago.especialidade]
  );
  return rows[0];
};

const updateMago = async (id, mago) => {
  const { rows } = await pool.query(
    'UPDATE magos SET nome = $1, nivel = $2, especialidade = $3 WHERE id = $4 RETURNING *',
    [mago.nome, mago.nivel, mago.especialidade, id]
  );
  return rows[0];
};

const deleteMago = async (id) => {
  await pool.query('DELETE FROM magos WHERE id = $1', [id]);
};

module.exports = {
  getAllMagos,
  getMagoById,
  createMago,
  updateMago,
  deleteMago,
};
