const db = require('../configs/pg');

// Consulta para deletar todas as magos_conquistas relacionadas
const sql_delete_related = `
    DELETE FROM magos_conquistas
    WHERE conq_id = $1
`;

const sql_insert = `
    INSERT INTO conquistas (conq_descricao_da_conquista, conq_pontuacao, conq_tipo, conq_recompensa)
    VALUES ($1, $2, $3, $4)
`;

const postConquista = async (params) => {
    const { conq_descricao_da_conquista, conq_pontuacao, conq_tipo, conq_recompensa } = params;
    return await db.query(sql_insert, [conq_descricao_da_conquista, conq_pontuacao, conq_tipo, conq_recompensa]);
};

const sql_get = `
    SELECT conq_id, conq_descricao_da_conquista, conq_pontuacao, conq_tipo, conq_recompensa
    FROM conquistas
`;

const getConquistas = async () => {
    let conquistas = {};
    await db.query(sql_get)
        .then(ret => conquistas = { total: ret.rows.length, conquistas: ret.rows })
        .catch(err => conquistas = err.stack);
    return conquistas;
};

const sql_delete = `
    DELETE FROM conquistas
    WHERE conq_id = $1
`;

const deleteConquista = async (params) => {
    const { id } = params;
    // Excluindo todas as magos_conquistas relacionadas antes de excluir a conquista
    await db.query(sql_delete_related, [id]);
    await db.query(sql_delete, [id]);
};

const sql_put = `
    UPDATE conquistas
    SET conq_descricao_da_conquista = $2, conq_pontuacao = $3, conq_tipo = $4, conq_recompensa = $5
    WHERE conq_id = $1
`;

const putConquista = async (params) => {
    const { id, conq_descricao_da_conquista, conq_pontuacao, conq_tipo, conq_recompensa } = params;
    return await db.query(sql_put, [id, conq_descricao_da_conquista, conq_pontuacao, conq_tipo, conq_recompensa]);
};

const sql_patch = `
    UPDATE conquistas
    SET
`;

const patchConquista = async (params) => {
    let fields = '';
    let binds = [];
    binds.push(params.id);
    let countParams = 1;

    if (params.conq_descricao_da_conquista) {
        countParams++;
        fields += ` conq_descricao_da_conquista = $${countParams}`;
        binds.push(params.conq_descricao_da_conquista);
    }
    if (params.conq_pontuacao) {
        countParams++;
        fields += (fields ? ',' : '') + ` conq_pontuacao = $${countParams}`;
        binds.push(params.conq_pontuacao);
    }
    if (params.conq_tipo) {
        countParams++;
        fields += (fields ? ',' : '') + ` conq_tipo = $${countParams}`;
        binds.push(params.conq_tipo);
    }
    if (params.conq_recompensa) {
        countParams++;
        fields += (fields ? ',' : '') + ` conq_recompensa = $${countParams}`;
        binds.push(params.conq_recompensa);
    }

    let sql = sql_patch + fields + ' WHERE conq_id = $1';
    console.log(sql);
    return await db.query(sql, binds);
};

module.exports.postConquista = postConquista
module.exports.getConquistas = getConquistas
module.exports.deleteConquista = deleteConquista
module.exports.putConquista = putConquista
module.exports.patchConquista = patchConquista
