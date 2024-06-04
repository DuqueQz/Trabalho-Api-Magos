const swaggerAutogen = require( 'swagger-autogen')('pt-BR');

const doc = {
    info: {
        version: "1.0.0",
        title: "API MAGOS",
        description: "Documentação da API Magos  "
    },
    host: `localhost:3000`,
    basePath: "",
    schemes: ['http'],
    consumes: ['application/json'],
    produces: ['application/json'],
}

const outputFile = './src/docs/swagger.yaml';
const endpointFiles = ['./src/routes/amizades.js','./src/routes/avaliacoes.js', './src/routes/conquistas.js', './src/routes/habilidadesMagicas.js', './src/routes/interesses.js', './src/routes/itensTrocados.js', './src/routes/magos.js', './src/routes/magosConquistas.js', './src/routes/mensagens.js', './src/routes/trocas.js'];

swaggerAutogen(outputFile, endpointFiles, doc);