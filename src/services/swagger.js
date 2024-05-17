const swaggerAutogen = require('swagger-autogen')('pt-BR');

const doc = {
  info: {
        version: "1.0.0",
        title: "API MAGOS",
        description: "Documentação da API MAGOS "
  },
  host: `localhost:3000`,
  basePath: "",
  schemes: ['http'],
  consumes: ['application/json'],
  produces: ['application/json'],
}

const outputFile = './src/docs/swagger.yaml';
const endpointsFiles = ['./src/routes/amizadesRoutes.js', './src/routes/avaliacoesRoutes.js', './src/routes/conquistasRoutes.js', './src/routes/habilidadesRoutes.js', './src/routes/interessesRoutes.js', './src/routes/magosRoutes.js', './src/routes/mensagensRoutes.js', './src/routes/trocasRoutes.js'];

swaggerAutogen(outputFile, endpointsFiles, doc);