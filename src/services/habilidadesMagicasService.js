const pool = require('../configs/pg');

// Operação Create: Adicionar uma nova habilidade mágica
const adicionarHabilidadeMagica = async (dadosHabilidade) => {
  try {
    const { nome_da_habilidade, descricao, nivel_de_dificuldade, escola_de_magia } = dadosHabilidade;
    const query = 'INSERT INTO habilidades_magicas (nome_da_habilidade, descricao, nivel_de_dificuldade, escola_de_magia) VALUES ($1, $2, $3, $4) RETURNING *';
    const values = [nome_da_habilidade, descricao, nivel_de_dificuldade, escola_de_magia];
    const result = await pool.query(query, values);
    return result.rows[0];
  } catch (error) {
    throw new Error('Erro ao adicionar habilidade mágica ao banco de dados');
  }
};

// Operação Read: Obter todas as habilidades mágicas
const getHabilidadesMagicas = async () => {
  try {
    const result = await pool.query('SELECT * FROM habilidades_magicas');
    return result.rows;
  } catch (error) {
    throw new Error('Erro ao obter habilidades mágicas do banco de dados');
  }
};

// Operação Read: Obter uma habilidade mágica pelo ID
const getHabilidadeMagicaById = async (id) => {
  try {
    const query = 'SELECT * FROM habilidades_magicas WHERE id = $1';
    const result = await pool.query(query, [id]);
    return result.rows[0];
  } catch (error) {
    throw new Error('Erro ao obter habilidade mágica do banco de dados');
  }
};

// Operação Update: Atualizar uma habilidade mágica existente
const atualizarHabilidadeMagica = async (id, novosDados) => {
  try {
    const { nome_da_habilidade, descricao, nivel_de_dificuldade, escola_de_magia } = novosDados;
    const query = 'UPDATE habilidades_magicas SET nome_da_habilidade = $1, descricao = $2, nivel_de_dificuldade = $3, escola_de_magia = $4 WHERE id = $5 RETURNING *';
    const values = [nome_da_habilidade, descricao, nivel_de_dificuldade, escola_de_magia, id];
    const result = await pool.query(query, values);
    return result.rows[0];
  } catch (error) {
    throw new Error('Erro ao atualizar habilidade mágica no banco de dados');
  }
};

// Operação Delete: Excluir uma habilidade mágica
const deletarHabilidadeMagica = async (id) => {
  try {
    const query = 'DELETE FROM habilidades_magicas WHERE id = $1';
    await pool.query(query, [id]);
    return true;
  } catch (error) {
    throw new Error('Erro ao excluir habilidade mágica do banco de dados');
  }
};

module.exports = {
  adicionarHabilidadeMagica,
  getHabilidadesMagicas,
  getHabilidadeMagicaById,
  atualizarHabilidadeMagica,
  deletarHabilidadeMagica
};
