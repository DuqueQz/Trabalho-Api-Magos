const pool = require('../config/pg');

const getAllHabilidades = async () => {
  const { rows } = await pool.query('SELECT * FROM habilidades');
  return rows;
};

const getHabilidadeById = async (id) => {
  const { rows } = await pool.query('SELECT * FROM habilidades WHERE id = $1', [id]);
  return rows[0];
};

const createHabilidade = async (habilidade) => {
  const { rows } = await pool.query(
    'INSERT INTO habilidades (nome, descricao) VALUES ($1, $2) RETURNING *',
    [habilidade.nome, habilidade.descricao]
  );
  return rows[0];
};

const updateHabilidade = async (id, habilidade) => {
  const { rows } = await pool.query(
    'UPDATE habilidades SET nome = $1, descricao = $2 WHERE id = $3 RETURNING *',
    [habilidade.nome, habilidade.descricao, id]
  );
  return rows[0];
};

const deleteHabilidade = async (id) => {
  await pool.query('DELETE FROM habilidades WHERE id = $1', [id]);
};

module.exports = {
  getAllHabilidades,
  getHabilidadeById,
  createHabilidade,
  updateHabilidade,
  deleteHabilidade,
};
