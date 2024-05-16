const express = require('express');
const amizadesController = require('../controllers/amizadesController');

const router = express.Router();

router.get('/', amizadesController.getAllAmizades);
router.get('/:id', amizadesController.getAmizadeById);
router.post('/', amizadesController.createAmizade);
router.put('/:id', amizadesController.updateAmizade);
router.delete('/:id', amizadesController.deleteAmizade);

module.exports = router;
