const db = require('../configs/pg');

const sql_insert = `
    INSERT INTO avaliacoes (ava_id_troca, ava_id_mago_avaliador, ava_pontuacao, ava_comentario, ava_data_da_avaliacao)
    VALUES ($1, $2, $3, $4, $5)
`;

const postAvaliacao = async (params) => {
    const { ava_id_troca, ava_id_mago_avaliador, ava_pontuacao, ava_comentario, ava_data_da_avaliacao } = params;
    return await db.query(sql_insert, [ava_id_troca, ava_id_mago_avaliador, ava_pontuacao, ava_comentario, ava_data_da_avaliacao]);
};

const sql_get = `
    SELECT ava_id, ava_id_troca, ava_id_mago_avaliador, ava_pontuacao, ava_comentario, ava_data_da_avaliacao
    FROM avaliacoes
`;

const getAvaliacoes = async () => {
    let avaliacoes = {};
    await db.query(sql_get)
        .then(ret => avaliacoes = { total: ret.rows.length, avaliacoes: ret.rows })
        .catch(err => avaliacoes = err.stack);
    return avaliacoes;
};

const sql_delete = `
    DELETE FROM avaliacoes
    WHERE ava_id = $1
`;

const deleteAvaliacao = async (params) => {
    const { id } = params;
    await db.query(sql_delete, [id]);
};

const sql_put = `
    UPDATE avaliacoes
    SET ava_id_troca = $2, ava_id_mago_avaliador = $3, ava_pontuacao = $4, ava_comentario = $5, ava_data_da_avaliacao = $6
    WHERE ava_id = $1
`;

const putAvaliacao = async (params) => {
    const { id, ava_id_troca, ava_id_mago_avaliador, ava_pontuacao, ava_comentario, ava_data_da_avaliacao } = params;
    return await db.query(sql_put, [id, ava_id_troca, ava_id_mago_avaliador, ava_pontuacao, ava_comentario, ava_data_da_avaliacao]);
};

const sql_patch = `
    UPDATE avaliacoes
    SET
`;

const patchAvaliacao = async (params) => {
    let fields = '';
    let binds = [];
    binds.push(params.id);
    let countParams = 1;

    if (params.ava_id_troca) {
        countParams++;
        fields += ` ava_id_troca = $${countParams}`;
        binds.push(params.ava_id_troca);
    }
    if (params.ava_id_mago_avaliador) {
        countParams++;
        fields += (fields ? ',' : '') + ` ava_id_mago_avaliador = $${countParams}`;
        binds.push(params.ava_id_mago_avaliador);
    }
    if (params.ava_pontuacao) {
        countParams++;
        fields += (fields ? ',' : '') + ` ava_pontuacao = $${countParams}`;
        binds.push(params.ava_pontuacao);
    }
    if (params.ava_comentario) {
        countParams++;
        fields += (fields ? ',' : '') + ` ava_comentario = $${countParams}`;
        binds.push(params.ava_comentario);
    }
    if (params.ava_data_da_avaliacao) {
        countParams++;
        fields += (fields ? ',' : '') + ` ava_data_da_avaliacao = $${countParams}`;
        binds.push(params.ava_data_da_avaliacao);
    }

    let sql = sql_patch + fields + ' WHERE ava_id = $1';
    console.log(sql);
    return await db.query(sql, binds);
};

module.exports = {
    postAvaliacao,
    getAvaliacoes,
    deleteAvaliacao,
    putAvaliacao,
    patchAvaliacao
};
