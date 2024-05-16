const express = require('express');
const habilidadesController = require('../controllers/habilidadesController');

const router = express.Router();

router.get('/', habilidadesController.getAllHabilidades);
router.get('/:id', habilidadesController.getHabilidadeById);
router.post('/', habilidadesController.createHabilidade);
router.put('/:id', habilidadesController.updateHabilidade);
router.delete('/:id', habilidadesController.deleteHabilidade);

module.exports = router;
