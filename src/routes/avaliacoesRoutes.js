const express = require('express');
const avaliacoesController = require('../controllers/avaliacoesController');

const router = express.Router();

router.get('/', avaliacoesController.getAllAvaliacoes);
router.get('/:id', avaliacoesController.getAvaliacaoById);
router.post('/', avaliacoesController.createAvaliacao);
router.put('/:id', avaliacoesController.updateAvaliacao);
router.delete('/:id', avaliacoesController.deleteAvaliacao);

module.exports = router;
