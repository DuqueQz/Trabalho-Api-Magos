const db = require('../configs/pg');

const sql_insert = `
    INSERT INTO habilidades_magicas (hab_nome_da_habilidade, hab_descricao, hab_nivel_de_dificuldade, hab_escola_de_magia, hab_dano, hab_mana, hab_cooldown)
    VALUES ($1, $2, $3, $4, $5, $6, $7)
`;

const postHabilidade = async (params) => {
    const { hab_nome_da_habilidade, hab_descricao, hab_nivel_de_dificuldade, hab_escola_de_magia, hab_dano, hab_mana, hab_cooldown } = params;
    return await db.query(sql_insert, [hab_nome_da_habilidade, hab_descricao, hab_nivel_de_dificuldade, hab_escola_de_magia, hab_dano, hab_mana, hab_cooldown]);
};

const sql_get = `
    SELECT hab_id, hab_nome_da_habilidade, hab_descricao, hab_nivel_de_dificuldade, hab_escola_de_magia, hab_dano, hab_mana, hab_cooldown
    FROM habilidades_magicas
`;

const getHabilidades = async () => {
    let habilidades = {};
    await db.query(sql_get)
        .then(ret => habilidades = { total: ret.rows.length, habilidades: ret.rows })
        .catch(err => habilidades = err.stack);
    return habilidades;
};

const sql_delete = `
    DELETE FROM habilidades_magicas
    WHERE hab_id = $1
`;

const deleteHabilidade = async (params) => {
    const { id } = params;
    await db.query(sql_delete, [id]);
};

const sql_put = `
    UPDATE habilidades_magicas
    SET hab_nome_da_habilidade = $2, hab_descricao = $3, hab_nivel_de_dificuldade = $4, hab_escola_de_magia = $5, hab_dano = $6, hab_mana = $7, hab_cooldown = $8
    WHERE hab_id = $1
`;

const putHabilidade = async (params) => {
    const { id, hab_nome_da_habilidade, hab_descricao, hab_nivel_de_dificuldade, hab_escola_de_magia, hab_dano, hab_mana, hab_cooldown } = params;
    return await db.query(sql_put, [id, hab_nome_da_habilidade, hab_descricao, hab_nivel_de_dificuldade, hab_escola_de_magia, hab_dano, hab_mana, hab_cooldown]);
};

const sql_patch = `
    UPDATE habilidades_magicas
    SET
`;

const patchHabilidade = async (params) => {
    let fields = '';
    let binds = [];
    binds.push(params.id);
    let countParams = 1;

    if (params.hab_nome_da_habilidade) {
        countParams++;
        fields += ` hab_nome_da_habilidade = $${countParams}`;
        binds.push(params.hab_nome_da_habilidade);
    }
    if (params.hab_descricao) {
        countParams++;
        fields += (fields ? ',' : '') + ` hab_descricao = $${countParams}`;
        binds.push(params.hab_descricao);
    }
    if (params.hab_nivel_de_dificuldade) {
        countParams++;
        fields += (fields ? ',' : '') + ` hab_nivel_de_dificuldade = $${countParams}`;
        binds.push(params.hab_nivel_de_dificuldade);
    }
    if (params.hab_escola_de_magia) {
        countParams++;
        fields += (fields ? ',' : '') + ` hab_escola_de_magia = $${countParams}`;
        binds.push(params.hab_escola_de_magia);
    }
    if (params.hab_dano) {
        countParams++;
        fields += (fields ? ',' : '') + ` hab_dano = $${countParams}`;
        binds.push(params.hab_dano);
    }
    if (params.hab_mana) {
        countParams++;
        fields += (fields ? ',' : '') + ` hab_mana = $${countParams}`;
        binds.push(params.hab_mana);
    }
    if (params.hab_cooldown) {
        countParams++;
        fields += (fields ? ',' : '') + ` hab_cooldown = $${countParams}`;
        binds.push(params.hab_cooldown);
    }

    let sql = sql_patch + fields + ' WHERE hab_id = $1';
    console.log(sql);
    return await db.query(sql, binds);
};

module.exports.postHabilidade = postHabilidade
module.exports.getHabilidades = getHabilidades
module.exports.deleteHabilidade = deleteHabilidade
module.exports.putHabilidade = putHabilidade
module.exports.patchHabilidade = patchHabilidade

