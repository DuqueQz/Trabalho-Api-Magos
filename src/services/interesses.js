const db = require('../configs/pg');

const sql_insert = `
    INSERT INTO interesses (int_id_mago, int_id_habilidade, int_nivel_de_interesse, int_data_de_registro)
    VALUES ($1, $2, $3, $4)
`;

const postInteresse = async (params) => {
    const { int_id_mago, int_id_habilidade, int_nivel_de_interesse, int_data_de_registro } = params;
    return await db.query(sql_insert, [int_id_mago, int_id_habilidade, int_nivel_de_interesse, int_data_de_registro]);
};

const sql_get = `
    SELECT int_id, int_id_mago, int_id_habilidade, int_nivel_de_interesse, int_data_de_registro
    FROM interesses
`;

const getInteresses = async () => {
    let interesses = {};
    await db.query(sql_get)
        .then(ret => interesses = { total: ret.rows.length, interesses: ret.rows })
        .catch(err => interesses = err.stack);
    return interesses;
};

const sql_delete = `
    DELETE FROM interesses
    WHERE int_id = $1
`;

const deleteInteresse = async (params) => {
    const { id } = params;
    await db.query(sql_delete, [id]);
};

const sql_put = `
    UPDATE interesses
    SET int_id_mago = $2, int_id_habilidade = $3, int_nivel_de_interesse = $4, int_data_de_registro = $5
    WHERE int_id = $1
`;

const putInteresse = async (params) => {
    const { id, int_id_mago, int_id_habilidade, int_nivel_de_interesse, int_data_de_registro } = params;
    return await db.query(sql_put, [id, int_id_mago, int_id_habilidade, int_nivel_de_interesse, int_data_de_registro]);
};

const sql_patch = `
    UPDATE interesses
    SET
`;

const patchInteresse = async (params) => {
    let fields = '';
    let binds = [];
    binds.push(params.id);
    let countParams = 1;

    if (params.int_id_mago) {
        countParams++;
        fields += ` int_id_mago = $${countParams}`;
        binds.push(params.int_id_mago);
    }
    if (params.int_id_habilidade) {
        countParams++;
        fields += (fields ? ',' : '') + ` int_id_habilidade = $${countParams}`;
        binds.push(params.int_id_habilidade);
    }
    if (params.int_nivel_de_interesse) {
        countParams++;
        fields += (fields ? ',' : '') + ` int_nivel_de_interesse = $${countParams}`;
        binds.push(params.int_nivel_de_interesse);
    }
    if (params.int_data_de_registro) {
        countParams++;
        fields += (fields ? ',' : '') + ` int_data_de_registro = $${countParams}`;
        binds.push(params.int_data_de_registro);
    }

    let sql = sql_patch + fields + ' WHERE int_id = $1';
    console.log(sql);
    return await db.query(sql, binds);
};

module.exports = {
    postInteresse,
    getInteresses,
    deleteInteresse,
    putInteresse,
    patchInteresse
};
