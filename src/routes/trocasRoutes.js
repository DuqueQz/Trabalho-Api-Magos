const express = require('express');
const trocasController = require('../controllers/trocasController');

const router = express.Router();

router.get('/', trocasController.getAllTrocas);
router.get('/:id', trocasController.getTrocaById);
router.post('/', trocasController.createTroca);
router.put('/:id', trocasController.updateTroca);
router.delete('/:id', trocasController.deleteTroca);

module.exports = router;
