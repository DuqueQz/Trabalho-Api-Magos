const db = require('../configs/pg');

const sql_insert = `
    INSERT INTO amizades (amiz_id_mago_1, amiz_id_mago_2, amiz_data_do_inicio, amiz_status)
    VALUES ($1, $2, $3, $4)
`;

const postAmizade = async (params) => {
    const { amiz_id_mago_1, amiz_id_mago_2, amiz_data_do_inicio, amiz_status } = params;
    return await db.query(sql_insert, [amiz_id_mago_1, amiz_id_mago_2, amiz_data_do_inicio, amiz_status]);
};

const sql_get = `
    SELECT amiz_id, amiz_id_mago_1, amiz_id_mago_2, amiz_data_do_inicio, amiz_status
    FROM amizades
`;

const getAmizades = async () => {
    let amizades = {};
    await db.query(sql_get)
        .then(ret => amizades = { total: ret.rows.length, amizades: ret.rows })
        .catch(err => amizades = err.stack);
    return amizades;
};

const sql_delete = `
    DELETE FROM amizades
    WHERE amiz_id = $1
`;

const deleteAmizade = async (params) => {
    const { id } = params;
    await db.query(sql_delete, [id]);
};

const sql_put = `   
    UPDATE amizades
    SET amiz_id_mago_1 = $2, amiz_id_mago_2 = $3, amiz_data_do_inicio = $4, amiz_status = $5
    WHERE amiz_id = $1
`;

const putAmizade = async (params) => {
    const { id, amiz_id_mago_1, amiz_id_mago_2, amiz_data_do_inicio, amiz_status } = params;
    return await db.query(sql_put, [id, amiz_id_mago_1, amiz_id_mago_2, amiz_data_do_inicio, amiz_status]);
};

const sql_patch = `
    UPDATE amizades
    SET
`;

const patchAmizade = async (params) => {
    let fields = '';
    let binds = [];
    binds.push(params.id);
    let countParams = 1;

    if (params.amiz_id_mago_1) {
        countParams++;
        fields += ` amiz_id_mago_1 = $${countParams}`;
        binds.push(params.amiz_id_mago_1);
    }
    if (params.amiz_id_mago_2) {
        countParams++;
        fields += (fields ? ',' : '') + ` amiz_id_mago_2 = $${countParams}`;
        binds.push(params.amiz_id_mago_2);
    }
    if (params.amiz_data_do_inicio) {
        countParams++;
        fields += (fields ? ',' : '') + ` amiz_data_do_inicio = $${countParams}`;
        binds.push(params.amiz_data_do_inicio);
    }
    if (params.amiz_status) {
        countParams++;
        fields += (fields ? ',' : '') + ` amiz_status = $${countParams}`;
        binds.push(params.amiz_status);
    }

    let sql = sql_patch + fields + ' WHERE amiz_id = $1';
    console.log(sql);
    return await db.query(sql, binds);
};

module.exports.postAmizade = postAmizade
module.exports.getAmizades = getAmizades
module.exports.deleteAmizade = deleteAmizade
module.exports.putAmizade = putAmizade
module.exports.patchAmizade = patchAmizade
