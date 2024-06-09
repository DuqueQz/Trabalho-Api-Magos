const db = require('../configs/pg');

const sql_insert = `
    INSERT INTO trocas (troca_id_mago_ofertante, troca_id_mago_interessado, troca_data)
    VALUES ($1, $2, $3)
`;

const postTroca = async (params) => {
    const { troca_id_mago_ofertante, troca_id_mago_interessado, troca_data } = params;
    return await db.query(sql_insert, [troca_id_mago_ofertante, troca_id_mago_interessado, troca_data]);
};

const sql_get = `
    SELECT troca_id, troca_id_mago_ofertante, troca_id_mago_interessado, troca_data
    FROM trocas
`;

const getTrocas = async () => {
    let trocas = {};
    await db.query(sql_get)
        .then(ret => trocas = { total: ret.rows.length, trocas: ret.rows })
        .catch(err => trocas = err.stack);
    return trocas;
};

const sql_delete_items = `
    DELETE FROM itens_trocados
    WHERE troca_id = $1
`;

const sql_delete_troca = `
    DELETE FROM trocas
    WHERE troca_id = $1
`;

const deleteTroca = async (params) => {
    const { id } = params;

    try {
        await db.query('BEGIN');
        
        // Excluindo os itens trocados associados
        await db.query(sql_delete_items, [id]);
        
        // Excluindo a troca
        await db.query(sql_delete_troca, [id]);

        // Comitando a transação
        await db.query('COMMIT');
    } catch (error) {
        await db.query('ROLLBACK');
        throw error;
    }
};

const sql_put = `
    UPDATE trocas
    SET troca_id_mago_ofertante = $2, troca_id_mago_interessado = $3, troca_data = $4
    WHERE troca_id = $1
`;

const putTroca = async (params) => {
    const { id, troca_id_mago_ofertante, troca_id_mago_interessado, troca_data } = params;
    return await db.query(sql_put, [id, troca_id_mago_ofertante, troca_id_mago_interessado, troca_data]);
};

const sql_patch = `
    UPDATE trocas
    SET
`;

const patchTroca = async (params) => {
    let fields = '';
    let binds = [];
    binds.push(params.id);
    let countParams = 1;

    if (params.troca_id_mago_ofertante) {
        countParams++;
        fields += ` troca_id_mago_ofertante = $${countParams}`;
        binds.push(params.troca_id_mago_ofertante);
    }
    if (params.troca_id_mago_interessado) {
        countParams++;
        fields += (fields ? ',' : '') + ` troca_id_mago_interessado = $${countParams}`;
        binds.push(params.troca_id_mago_interessado);
    }
    if (params.troca_data) {
        countParams++;
        fields += (fields ? ',' : '') + ` troca_data = $${countParams}`;
        binds.push(params.troca_data);
    }

    let sql = sql_patch + fields + ' WHERE troca_id = $1';
    console.log(sql);
    return await db.query(sql, binds);
};

module.exports.postTroca = postTroca
module.exports.getTrocas = getTrocas
module.exports.deleteTroca = deleteTroca
module.exports.putTroca = putTroca
module.exports.patchTroca = patchTroca
