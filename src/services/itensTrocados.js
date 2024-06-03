const db = require('../configs/pg');

const sql_insert = `
    INSERT INTO itens_trocados (troca_id, item_nome, item_descricao, item_nivel_de_dificuldade, item_escola_de_magia, item_dano, item_mana)
    VALUES ($1, $2, $3, $4, $5, $6, $7)
`;

const postItemTrocado = async (params) => {
    const { troca_id, item_nome, item_descricao, item_nivel_de_dificuldade, item_escola_de_magia, item_dano, item_mana } = params;
    return await db.query(sql_insert, [troca_id, item_nome, item_descricao, item_nivel_de_dificuldade, item_escola_de_magia, item_dano, item_mana]);
};

const sql_get = `
    SELECT item_id, troca_id, item_nome, item_descricao, item_nivel_de_dificuldade, item_escola_de_magia, item_dano, item_mana
    FROM itens_trocados
`;

const getItensTrocados = async () => {
    let itensTrocados = {};
    await db.query(sql_get)
        .then(ret => itensTrocados = { total: ret.rows.length, itensTrocados: ret.rows })
        .catch(err => itensTrocados = err.stack);
    return itensTrocados;
};

const sql_delete = `
    DELETE FROM itens_trocados
    WHERE item_id = $1
`;

const deleteItemTrocado = async (params) => {
    const { id } = params;
    await db.query(sql_delete, [id]);
};

const sql_put = `
    UPDATE itens_trocados
    SET troca_id = $2, item_nome = $3, item_descricao = $4, item_nivel_de_dificuldade = $5, item_escola_de_magia = $6, item_dano = $7, item_mana = $8
    WHERE item_id = $1
`;

const putItemTrocado = async (params) => {
    const { id, troca_id, item_nome, item_descricao, item_nivel_de_dificuldade, item_escola_de_magia, item_dano, item_mana } = params;
    return await db.query(sql_put, [id, troca_id, item_nome, item_descricao, item_nivel_de_dificuldade, item_escola_de_magia, item_dano, item_mana]);
};

const sql_patch = `
    UPDATE itens_trocados
    SET
`;

const patchItemTrocado = async (params) => {
    let fields = '';
    let binds = [];
    binds.push(params.id);
    let countParams = 1;

    if (params.troca_id) {
        countParams++;
        fields += ` troca_id = $${countParams}`;
        binds.push(params.troca_id);
    }
    if (params.item_nome) {
        countParams++;
        fields += (fields ? ',' : '') + ` item_nome = $${countParams}`;
        binds.push(params.item_nome);
    }
    if (params.item_descricao) {
        countParams++;
        fields += (fields ? ',' : '') + ` item_descricao = $${countParams}`;
        binds.push(params.item_descricao);
    }
    if (params.item_nivel_de_dificuldade) {
        countParams++;
        fields += (fields ? ',' : '') + ` item_nivel_de_dificuldade = $${countParams}`;
        binds.push(params.item_nivel_de_dificuldade);
    }
    if (params.item_escola_de_magia) {
        countParams++;
        fields += (fields ? ',' : '') + ` item_escola_de_magia = $${countParams}`;
        binds.push(params.item_escola_de_magia);
    }
    if (params.item_dano) {
        countParams++;
        fields += (fields ? ',' : '') + ` item_dano = $${countParams}`;
        binds.push(params.item_dano);
    }
    if (params.item_mana) {
        countParams++;
        fields += (fields ? ',' : '') + ` item_mana = $${countParams}`;
        binds.push(params.item_mana);
    }

    let sql = sql_patch + fields + ' WHERE item_id = $1';
    console.log(sql);
    return await db.query(sql, binds);
};

module.exports = {
    postItemTrocado,
    getItensTrocados,
    deleteItemTrocado,
    putItemTrocado,
    patchItemTrocado
};
