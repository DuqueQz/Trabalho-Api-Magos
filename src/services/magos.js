const db = require('../configs/pg');

const sql_insert = `
    INSERT INTO magos (mag_email, mag_password, mag_especializacao, mag_nivel_de_magia, mag_nome, mag_data_de_nascimento, mag_nacionalidade, mag_bio)
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
`;

const postMago = async (params) => {
    const { mag_email, mag_password, mag_especializacao, mag_nivel_de_magia, mag_nome, mag_data_de_nascimento, mag_nacionalidade, mag_bio } = params;
    return await db.query(sql_insert, [mag_email, mag_password, mag_especializacao, mag_nivel_de_magia, mag_nome, mag_data_de_nascimento, mag_nacionalidade, mag_bio]);
};

const sql_get = `
    SELECT mag_id, mag_especializacao, mag_nivel_de_magia, mag_nome, mag_data_de_nascimento, mag_nacionalidade, mag_bio
    FROM magos
`;

const getMagos = async () => {
    let magos = {};
    await db.query(sql_get)
        .then(ret => magos = { total: ret.rows.length, magos: ret.rows })
        .catch(err => magos = err.stack);
    return magos;
};

const sql_delete = `
    DELETE FROM magos
    WHERE mag_id = $1
`;

const deleteMago = async (params) => {
    const { id } = params;
    await db.query(sql_delete, [id]);
};

const sql_put = `
    UPDATE magos
    SET mag_especializacao = $2, mag_nivel_de_magia = $3, mag_nome = $4, mag_data_de_nascimento = $5, mag_nacionalidade = $6, mag_bio = $7
    WHERE mag_id = $1
`;

const putMago = async (params) => {
    const { id, mag_especializacao, mag_nivel_de_magia, mag_nome, mag_data_de_nascimento, mag_nacionalidade, mag_bio } = params;
    return await db.query(sql_put, [id, mag_especializacao, mag_nivel_de_magia, mag_nome, mag_data_de_nascimento, mag_nacionalidade, mag_bio]);
};

const sql_patch = `
    UPDATE magos
    SET
`;

const patchMago = async (params) => {
    let fields = '';
    let binds = [];
    binds.push(params.id);
    let countParams = 1;

    if (params.mag_especializacao) {
        countParams++;
        fields += ` mag_especializacao = $${countParams}`;
        binds.push(params.mag_especializacao);
    }
    if (params.mag_nivel_de_magia) {
        countParams++;
        fields += (fields ? ',' : '') + ` mag_nivel_de_magia = $${countParams}`;
        binds.push(params.mag_nivel_de_magia);
    }
    if (params.mag_nome) {
        countParams++;
        fields += (fields ? ',' : '') + ` mag_nome = $${countParams}`;
        binds.push(params.mag_nome);
    }
    if (params.mag_data_de_nascimento) {
        countParams++;
        fields += (fields ? ',' : '') + ` mag_data_de_nascimento = $${countParams}`;
        binds.push(params.mag_data_de_nascimento);
    }
    if (params.mag_nacionalidade) {
        countParams++;
        fields += (fields ? ',' : '') + ` mag_nacionalidade = $${countParams}`;
        binds.push(params.mag_nacionalidade);
    }
    if (params.mag_bio) {
        countParams++;
        fields += (fields ? ',' : '') + ` mag_bio = $${countParams}`;
        binds.push(params.mag_bio);
    }

    let sql = sql_patch + fields + ' WHERE mag_id = $1';
    console.log(sql);
    return await db.query(sql, binds);
};

module.exports.postMago = postMago 
module.exports.getMagos = getMagos
module.exports.deleteMago = deleteMago
module.exports.putMago = putMago
module.exports.patchMago = patchMago

