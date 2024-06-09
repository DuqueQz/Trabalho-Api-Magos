const db = require('../configs/pg');

const sql_get = `
    SELECT mag_id, mag_email, mag_password
    FROM magos
`;

const getLogins = async () => {
    let logins = {};
    await db.query(sql_get)
        .then(ret => logins = { total: ret.rows.length, logins: ret.rows })
        .catch(err => logins = err.stack);
    return logins;
};

const sql_authenticate = `
    SELECT mag_id, mag_email, mag_especializacao, mag_nivel_de_magia, mag_nome, mag_data_de_nascimento, mag_nacionalidade, mag_bio
    FROM magos
    WHERE mag_email = $1 AND mag_senha = $2
`;

const authenticate = async (email, senha) => {
    const result = await db.query(sql_authenticate, [email, senha]);
    if (result.rows.length > 0) {
        return result.rows[0];
    } else {
        return null;
    }
};

const sql_update = `
    UPDATE magos
    SET mag_email = $2, mag_senha = $3
    WHERE mag_id = $1
`;

const updateLogin = async (id, params) => {
    const { mag_email, mag_senha } = params;
    return await db.query(sql_update, [id, mag_email, mag_senha]);
};

const sql_delete = `
    DELETE FROM magos
    WHERE mag_id = $1
`;

const deleteLogin = async (id) => {
    return await db.query(sql_delete, [id]);
};

module.exports = {
    getLogins,
    authenticate,
    updateLogin,
    deleteLogin
};
