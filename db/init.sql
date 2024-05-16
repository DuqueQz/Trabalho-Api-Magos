-- Tabela de magos 
CREATE TABLE magos (
    mag_id SERIAL PRIMARY KEY,
    mag_especializacao VARCHAR(50) NOT NULL,
    mag_nivel_de_magia INT NOT NULL,
    mag_nome VARCHAR(100),
    mag_data_de_nascimento DATE,
    mag_nacionalidade VARCHAR(50),
    mag_bio TEXT
);

-- Tabela de habilidades 
CREATE TABLE habilidades_magicas (
    hab_id SERIAL PRIMARY KEY,
    hab_nome_da_habilidade VARCHAR(50) NOT NULL,
    hab_descricao TEXT NOT NULL,
    hab_nivel_de_dificuldade INT NOT NULL,
    hab_escola_de_magia VARCHAR(50) NOT NULL,
    hab_dano INT,
    hab_mana INT
);

-- Tabela de conquistas
CREATE TABLE conquistas (
    conq_id SERIAL PRIMARY KEY,
    conq_descricao_da_conquista TEXT NOT NULL,
    conq_data_da_conquista DATE NOT NULL,
    conq_pontuacao INT NOT NULL,
    conq_tipo VARCHAR(50),
    conq_recompensa TEXT
);

-- Tabela de magos_conquistas (associação muitos-para-muitos entre magos e conquistas)
CREATE TABLE magos_conquistas (
    mag_id INT NOT NULL,
    conq_id INT NOT NULL,
    PRIMARY KEY (mag_id, conq_id),
    FOREIGN KEY (mag_id) REFERENCES magos(mag_id) ON DELETE CASCADE,
    FOREIGN KEY (conq_id) REFERENCES conquistas(conq_id) ON DELETE CASCADE
);

-- Tabela de interesses
CREATE TABLE interesses (
    int_id SERIAL PRIMARY KEY,
    int_id_mago INT NOT NULL,
    int_id_habilidade INT NOT NULL,
    int_nivel_de_interesse VARCHAR(10) NOT NULL,
    int_data_de_registro DATE NOT NULL,
    FOREIGN KEY (int_id_mago) REFERENCES magos(mag_id) ON DELETE CASCADE,
    FOREIGN KEY (int_id_habilidade) REFERENCES habilidades_magicas(hab_id) ON DELETE CASCADE
);

-- Tabela de trocas (detalhes da troca)
CREATE TABLE trocas (
    troca_id SERIAL PRIMARY KEY,
    troca_id_mago_ofertante INT NOT NULL,
    troca_id_mago_interessado INT NOT NULL,
    troca_data DATE NOT NULL,
    FOREIGN KEY (troca_id_mago_ofertante) REFERENCES magos(mag_id) ON DELETE CASCADE,
    FOREIGN KEY (troca_id_mago_interessado) REFERENCES magos(mag_id) ON DELETE CASCADE
);

-- Tabela de itens_trocados (detalhes do que está sendo trocado)
CREATE TABLE itens_trocados (
    item_id SERIAL PRIMARY KEY,
    troca_id INT NOT NULL,
    item_nome VARCHAR(50) NOT NULL,
    item_descricao TEXT NOT NULL,
    item_nivel_de_dificuldade INT NOT NULL,
    item_escola_de_magia VARCHAR(50) NOT NULL,
    item_dano INT,
    item_mana INT,
    FOREIGN KEY (troca_id) REFERENCES trocas(troca_id) ON DELETE CASCADE
);

-- Tabela de mensagens
CREATE TABLE mensagens (
    msg_id SERIAL PRIMARY KEY,
    msg_id_troca INT NOT NULL,
    msg_remetente TEXT NOT NULL,
    msg_destinatario TEXT NOT NULL,
    msg_conteudo TEXT NOT NULL,
    msg_data_de_envio TIMESTAMP NOT NULL,
    FOREIGN KEY (msg_id_troca) REFERENCES trocas(troca_id) ON DELETE CASCADE
);

-- Tabela de avaliações
CREATE TABLE avaliacoes (
    ava_id SERIAL PRIMARY KEY,
    ava_id_troca INT NOT NULL,
    ava_id_mago_avaliador INT NOT NULL,
    ava_pontuacao INT NOT NULL,
    ava_comentario TEXT,
    ava_data_da_avaliacao TIMESTAMP NOT NULL,
    FOREIGN KEY (ava_id_troca) REFERENCES trocas(troca_id) ON DELETE CASCADE,
    FOREIGN KEY (ava_id_mago_avaliador) REFERENCES magos(mag_id) ON DELETE CASCADE
);

-- Tabela de amizades
CREATE TABLE amizades (
    amiz_id SERIAL PRIMARY KEY,
    amiz_id_mago_1 INT NOT NULL,
    amiz_id_mago_2 INT NOT NULL,
    amiz_data_do_inicio DATE NOT NULL,
    amiz_status VARCHAR(10) NOT NULL,
    FOREIGN KEY (amiz_id_mago_1) REFERENCES magos(mag_id) ON DELETE CASCADE,
    FOREIGN KEY (amiz_id_mago_2) REFERENCES magos(mag_id) ON DELETE CASCADE
);
