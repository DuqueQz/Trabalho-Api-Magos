const Amizades = require('./amizades');
const Avaliacoes = require('./avaliacoes');
const Conquistas = require('./conquistas');
const HabilidadesMagicas = require('./habilidadesMagicas');
const Interesses = require('./interesses');
const ItensTrocados = require('./itensTrocados');
const Magos = require('./magos');
const MagosConquistas = require('./magosConquistas');
const Mensagens = require('./mensagens');
const Trocas = require('./trocas');

module.exports=(app) => {
    Amizades(app)
    Avaliacoes(app)
    Conquistas(app)
    HabilidadesMagicas(app)
    Interesses(app)
    ItensTrocados(app)
    Magos(app)
    MagosConquistas(app)
    Mensagens(app)
    Trocas(app)
}