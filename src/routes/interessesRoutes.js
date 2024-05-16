const express = require('express');
const interessesController = require('../controllers/interessesController');

const router = express.Router();

router.get('/', interessesController.getAllInteresses);
router.get('/:id', interessesController.getInteresseById);
router.post('/', interessesController.createInteresse);
router.put('/:id', interessesController.updateInteresse);
router.delete('/:id', interessesController.deleteInteresse);

module.exports = router;
