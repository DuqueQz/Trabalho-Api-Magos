const db = require('../configs/pg');

const sql_insert = `
    INSERT INTO mensagens (msg_id_troca, msg_remetente, msg_destinatario, msg_conteudo, msg_data_de_envio)
    VALUES ($1, $2, $3, $4, $5)
`;

const postMensagem = async (params) => {
    const { msg_id_troca, msg_remetente, msg_destinatario, msg_conteudo, msg_data_de_envio } = params;
    return await db.query(sql_insert, [msg_id_troca, msg_remetente, msg_destinatario, msg_conteudo, msg_data_de_envio]);
};

const sql_get = `
    SELECT msg_id, msg_id_troca, msg_remetente, msg_destinatario, msg_conteudo, msg_data_de_envio
    FROM mensagens
`;

const getMensagens = async () => {
    let mensagens = {};
    await db.query(sql_get)
        .then(ret => mensagens = { total: ret.rows.length, mensagens: ret.rows })
        .catch(err => mensagens = err.stack);
    return mensagens;
};

const sql_delete = `
    DELETE FROM mensagens
    WHERE msg_id = $1
`;

const deleteMensagem = async (params) => {
    const { id } = params;
    await db.query(sql_delete, [id]);
};

const sql_put = `
    UPDATE mensagens
    SET msg_remetente = $2, msg_destinatario = $3, msg_conteudo = $4, msg_data_de_envio = $5
    WHERE msg_id = $1
`;

const putMensagem = async (params) => {
    const { id, msg_remetente, msg_destinatario, msg_conteudo, msg_data_de_envio } = params;
    return await db.query(sql_put, [id, msg_remetente, msg_destinatario, msg_conteudo, msg_data_de_envio]);
};

const sql_patch = `
    UPDATE mensagens
    SET
`;

const patchMensagem = async (params) => {
    let fields = '';
    let binds = [];
    binds.push(params.id);
    let countParams = 1;

    if (params.msg_id_troca) {
        countParams++;
        fields += ` msg_id_troca = $${countParams}`;
        binds.push(params.msg_id_troca);
    }
    if (params.msg_remetente) {
        countParams++;
        fields += (fields ? ',' : '') + ` msg_remetente = $${countParams}`;
        binds.push(params.msg_remetente);
    }
    if (params.msg_destinatario) {
        countParams++;
        fields += (fields ? ',' : '') + ` msg_destinatario = $${countParams}`;
        binds.push(params.msg_destinatario);
    }
    if (params.msg_conteudo) {
        countParams++;
        fields += (fields ? ',' : '') + ` msg_conteudo = $${countParams}`;
        binds.push(params.msg_conteudo);
    }
    if (params.msg_data_de_envio) {
        countParams++;
        fields += (fields ? ',' : '') + ` msg_data_de_envio = $${countParams}`;
        binds.push(params.msg_data_de_envio);
    }

    let sql = sql_patch + fields + ' WHERE msg_id = $1';
    console.log(sql);
    return await db.query(sql, binds);
};

module.exports.postMensagem = postMensagem
module.exports.getMensagens = getMensagens
module.exports.deleteMensagem = deleteMensagem
module.exports.putMensagem = putMensagem
module.exports.patchMensagem = patchMensagem

