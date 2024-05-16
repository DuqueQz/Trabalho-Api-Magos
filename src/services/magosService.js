const pool = require('../configs/pg');

// Operação Create: Adicionar um novo mago
const adicionarMago = async (dadosMago) => {
  try {
    const { usuario, senha, especializacao, nivel_de_magia } = dadosMago;
    const query = 'INSERT INTO magos (usuario, senha, especializacao, nivel_de_magia) VALUES ($1, $2, $3, $4) RETURNING *';
    const values = [usuario, senha, especializacao, nivel_de_magia];
    const result = await pool.query(query, values);
    return result.rows[0];
  } catch (error) {
    throw new Error('Erro ao adicionar mago ao banco de dados');
  }
};

// Operação Read: Obter todos os magos
const getMagos = async () => {
  try {
    const result = await pool.query('SELECT * FROM magos');
    return result.rows;
  } catch (error) {
    throw new Error('Erro ao obter magos do banco de dados');
  }
};

// Operação Read: Obter um mago pelo ID
const getMagoById = async (id) => {
  try {
    const query = 'SELECT * FROM magos WHERE id = $1';
    const result = await pool.query(query, [id]);
    return result.rows[0];
  } catch (error) {
    throw new Error('Erro ao obter mago do banco de dados');
  }
};

// Operação Update: Atualizar um mago existente
const atualizarMago = async (id, novosDados) => {
  try {
    const { usuario, senha, especializacao, nivel_de_magia } = novosDados;
    const query = 'UPDATE magos SET usuario = $1, senha = $2, especializacao = $3, nivel_de_magia = $4 WHERE id = $5 RETURNING *';
    const values = [usuario, senha, especializacao, nivel_de_magia, id];
    const result = await pool.query(query, values);
    return result.rows[0];
  } catch (error) {
    throw new Error('Erro ao atualizar mago no banco de dados');
  }
};

// Operação Delete: Excluir um mago
const deletarMago = async (id) => {
  try {
    const query = 'DELETE FROM magos WHERE id = $1';
    await pool.query(query, [id]);
    return true;
  } catch (error) {
    throw new Error('Erro ao excluir mago do banco de dados');
  }
};

module.exports = {
  adicionarMago,
  getMagos,
  getMagoById,
  atualizarMago,
  deletarMago
};
