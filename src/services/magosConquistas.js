const db = require('../configs/pg');

const sql_insert = `
    INSERT INTO magos_conquistas (mag_id, conq_id, conq_data_da_conquista)
    VALUES ($1, $2, $3)
`;

const postMagoConquista = async (params) => {
    const { mag_id, conq_id, conq_data_da_conquista } = params;
    return await db.query(sql_insert, [mag_id, conq_id, conq_data_da_conquista]);
};

const sql_get = `
    SELECT mag_id, conq_id, conq_data_da_conquista
    FROM magos_conquistas
`;

const getMagosConquistas = async () => {
    let magosConquistas = {};
    await db.query(sql_get)
        .then(ret => magosConquistas = { total: ret.rows.length, magosConquistas: ret.rows })
        .catch(err => magosConquistas = err.stack);
    return magosConquistas;
};

const sql_delete = `
    DELETE FROM magos_conquistas
    WHERE mag_id = $1 AND conq_id = $2
`;

const deleteMagoConquista = async (params) => {
    const { mag_id, conq_id } = params;
    await db.query(sql_delete, [mag_id, conq_id]);
};

const sql_put = `
    UPDATE magos_conquistas
    SET conq_data_da_conquista = $3
    WHERE mag_id = $1 AND conq_id = $2
`;

const putMagoConquista = async (params) => {
    const { mag_id, conq_id, conq_data_da_conquista } = params;
    return await db.query(sql_put, [mag_id, conq_id, conq_data_da_conquista]);
};

const sql_patch = `
    UPDATE magos_conquistas
    SET
`;

const patchMagoConquista = async (params) => {
    let fields = '';
    let binds = [];
    binds.push(params.mag_id, params.conq_id);
    let countParams = 2;

    if (params.conq_data_da_conquista) {
        countParams++;
        fields += ` conq_data_da_conquista = $${countParams}`;
        binds.push(params.conq_data_da_conquista);
    }

    let sql = sql_patch + fields + ' WHERE mag_id = $1 AND conq_id = $2';
    console.log(sql);
    return await db.query(sql, binds);
};

module.exports = {
    postMagoConquista,
    getMagosConquistas,
    deleteMagoConquista,
    putMagoConquista,
    patchMagoConquista
};
