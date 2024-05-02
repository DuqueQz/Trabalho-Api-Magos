CREATE TABLE magos (
    id SERIAL PRIMARY KEY,
    usuario TEXT NOT NULL UNIQUE,
    senha TEXT NOT NULL,
    especializacao VARCHAR(50) NOT NULL,
    nivel_de_magia INT NOT NULL
);

CREATE TABLE habilidades_magicas (
    id SERIAL PRIMARY KEY,
    nome_da_habilidade VARCHAR(50) NOT NULL,
    descricao TEXT NOT NULL,
    nivel_de_dificuldade INT NOT NULL,
    escola_de_magia VARCHAR(50) NOT NULL
);

CREATE TABLE conquistas (
    id SERIAL PRIMARY KEY,
    id_mago INT NOT NULL,
    descricao_da_conquista TEXT NOT NULL,
    data_da_conquista DATE NOT NULL,
    pontuacao INT NOT NULL,
    FOREIGN KEY (id_mago) REFERENCES magos(id)
);

CREATE TABLE interesses (
    id SERIAL PRIMARY KEY,
    id_mago INT NOT NULL,
    id_habilidade INT NOT NULL,
    nivel_de_interesse VARCHAR(10) NOT NULL,
    data_de_registro DATE NOT NULL,
    FOREIGN KEY (id_mago) REFERENCES magos(id),
    FOREIGN KEY (id_habilidade) REFERENCES habilidades_magicas(id)
);

CREATE TABLE trocas (
    id SERIAL PRIMARY KEY,
    id_mago_ofertante INT NOT NULL,
    id_mago_interessado INT NOT NULL,
    id_habilidade_oferecida INT NOT NULL,
    id_habilidade_desejada INT NOT NULL,
    FOREIGN KEY (id_mago_ofertante) REFERENCES magos(id),
    FOREIGN KEY (id_mago_interessado) REFERENCES magos(id),
    FOREIGN KEY (id_habilidade_oferecida) REFERENCES habilidades_magicas(id),
    FOREIGN KEY (id_habilidade_desejada) REFERENCES habilidades_magicas(id)
);

CREATE TABLE mensagens (
    id SERIAL PRIMARY KEY,
    id_troca INT NOT NULL,
    remetente TEXT NOT NULL,
    destinatario TEXT NOT NULL,
    conteudo TEXT NOT NULL,
    data_de_envio TIMESTAMP NOT NULL,
    FOREIGN KEY (id_troca) REFERENCES trocas(id)
);

CREATE TABLE avaliacoes (
    id SERIAL PRIMARY KEY,
    id_troca INT NOT NULL,
    id_mago_avaliador INT NOT NULL,
    pontuacao INT NOT NULL,
    comentario TEXT,
    data_da_avaliacao TIMESTAMP NOT NULL,
    FOREIGN KEY (id_troca) REFERENCES trocas(id),
    FOREIGN KEY (id_mago_avaliador) REFERENCES magos(id)
);

CREATE TABLE amizades (
    id SERIAL PRIMARY KEY,
    id_mago_1 INT NOT NULL,
    id_mago_2 INT NOT NULL,
    data_do_inicio DATE NOT NULL,
    status VARCHAR(10) NOT NULL,
    FOREIGN KEY (id_mago_1) REFERENCES magos(id),
    FOREIGN KEY (id_mago_2) REFERENCES magos(id)
);
