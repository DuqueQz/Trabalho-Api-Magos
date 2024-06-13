const db = require('../configs/pg');
const jwt = require('jsonwebtoken')
const cript = require('../utils/salt')
const fs = require('fs')

const sql_delete_mago = `
    DELETE FROM magos
    WHERE mag_id = $1
`;

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

const sql_post = 
`select mag_email,
        mag_salt, 
        mag_password
   from magos
  where mag_email = $1 `

const login = async(params) => {
    console.log(params)
    const{user, pass} = params
    result = await db.query(sql_post, [user])
    if (!result.rows.length) throw new Error("Usuário não existe")
    else {
console.log(result.rows)
        const salt = result.rows[0].mag_salt
        const password = result.rows[0].mag_password
        if (cript.comparePassword(password, salt, pass)){
            let perfilAcesso = result.rows[0].username
            const privateKey = fs.readFileSync("./src/private/private_key.pem");
            let token = jwt.sign({perfilAcesso}, privateKey, {algorithm: 'RS256', expiresIn: '7d'})
            return {
                status: 'Logado com sucesso!',
                user: result.rows[0].username,
                token: token
            }
        } else {
            throw {status: 400, type: 'WARN', message: 'Senha inválida!', detail: ''}
        }
    }
}

const sql_update = `
    UPDATE magos
    SET mag_email = $2, mag_password = $3
    WHERE mag_id = $1
`;

const updateLogin = async (id, params) => {
    const { mag_email, mag_password } = params;
    return await db.query(sql_update, [id, mag_email, mag_password]);
};

module.exports = {
    getLogins,
    login,
    updateLogin,
};
