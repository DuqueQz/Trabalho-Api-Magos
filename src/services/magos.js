const db = require('../configs/pg');
const cript = require('../utils/salt');

const sql_delete_magos_conquistas = `
    DELETE FROM magos_conquistas
    WHERE mag_id = $1
`;

const sql_delete_magos_interesses = `
    DELETE FROM interesses
    WHERE int_id_mago = $1
`;

const sql_delete_avaliacoes = `
    DELETE FROM avaliacoes
    WHERE ava_id_troca IN (SELECT troca_id FROM trocas WHERE troca_id_mago_ofertante = $1 OR troca_id_mago_interessado = $1)
`;

const sql_delete_itens_trocados = `
    DELETE FROM itens_trocados
    WHERE troca_id IN (SELECT troca_id FROM trocas WHERE troca_id_mago_ofertante = $1 OR troca_id_mago_interessado = $1)
`;

const sql_delete_mensagens = `
    DELETE FROM mensagens
    WHERE msg_id_troca IN (SELECT troca_id FROM trocas WHERE troca_id_mago_ofertante = $1 OR troca_id_mago_interessado = $1)
`;

const sql_delete_magos_trocas = `
    DELETE FROM trocas
    WHERE troca_id_mago_ofertante = $1 OR troca_id_mago_interessado = $1
`;

const sql_delete_magos_amizades = `
    DELETE FROM amizades
    WHERE amiz_id_mago_1 = $1 OR amiz_id_mago_2 = $1
`;

const sql_get = `
    SELECT mag_id, mag_especializacao, mag_nivel_de_magia, mag_nome, mag_data_de_nascimento, mag_nacionalidade
    FROM magos
`;

const getMagos = async () => {
    let magos = {};
    await db.query(sql_get)
        .then(ret => magos = { total: ret.rows.length, magos: ret.rows })
        .catch(err => magos = err.stack);
    return magos;
};

const sql_post = `
    INSERT INTO magos (mag_email, mag_password, mag_salt, mag_especializacao, mag_nivel_de_magia, mag_nome, mag_data_de_nascimento, mag_nacionalidade, mag_bio)
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
`;

const postMago = async (params) => {
    const { mag_email, mag_password, mag_especializacao, mag_nivel_de_magia, mag_nome, mag_data_de_nascimento, mag_nacionalidade, mag_bio } = params;
    const pass = cript.createUser(mag_password)
    return await db.query(sql_post, [mag_email, pass.hashedPass, pass.salt, mag_especializacao, mag_nivel_de_magia, mag_nome, mag_data_de_nascimento, mag_nacionalidade, mag_bio]);
};

const sql_delete = `
    DELETE FROM magos
    WHERE mag_id = $1
`;

const deleteMago = async (params) => {
    const { id } = params;
    await db.query(sql_delete_avaliacoes, [id]);
    await db.query(sql_delete_itens_trocados, [id]);
    await db.query(sql_delete_mensagens, [id]);
    await db.query(sql_delete_magos_trocas, [id]);
    await db.query(sql_delete_magos_amizades, [id]);
    await db.query(sql_delete_magos_conquistas, [id]);
    await db.query(sql_delete_magos_interesses, [id]);
    await db.query(sql_delete, [id]);
};

const sql_put = `
    UPDATE magos
    SET mag_email = $2, mag_password = $3, mag_especializacao = $4, mag_nivel_de_magia = $5, mag_nome = $6, mag_data_de_nascimento = $7, mag_nacionalidade = $8, mag_bio = $9
    WHERE mag_id = $1
`;

const putMago = async (params) => {
    const { id, mag_email, mag_password, mag_especializacao, mag_nivel_de_magia, mag_nome, mag_data_de_nascimento, mag_nacionalidade, mag_bio } = params;
    return await db.query(sql_put, [id, mag_email, mag_password, mag_especializacao, mag_nivel_de_magia, mag_nome, mag_data_de_nascimento, mag_nacionalidade, mag_bio]);
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

    if (params.mag_email) {
        countParams++;
        fields += ` mag_email = $${countParams}`;
        binds.push(params.mag_email);
    }
    if (params.mag_password) {
        countParams++;
        fields += (fields ? ',' : '') + ` mag_password = $${countParams}`;
        binds.push(params.mag_password);
    }
    if (params.mag_especializacao) {
        countParams++;
        fields += (fields ? ',' : '') + ` mag_especializacao = $${countParams}`;
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

module.exports.getMagos = getMagos
module.exports.postMago = postMago
module.exports.deleteMago = deleteMago
module.exports.putMago = putMago
module.exports.patchMago = patchMago
