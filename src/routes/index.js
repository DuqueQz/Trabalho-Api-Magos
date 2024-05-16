const express = require('express');
const router = express.Router();

const magosRoutes = require('./magosRoutes');
const habilidadesMagicasRoutes = require('./habilidadesMagicasRoutes');

module.exports = (app) => {
    magosRoutes(app);
    habilidadesMagicasRoutes(app);
};
