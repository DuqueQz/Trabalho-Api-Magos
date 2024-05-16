const express = require('express');
const magosController = require('../controllers/magosController');

const router = express.Router();

router.get('/', magosController.getAllMagos);
router.get('/:id', magosController.getMagoById);
router.post('/', magosController.createMago);
router.put('/:id', magosController.updateMago);
router.delete('/:id', magosController.deleteMago);

module.exports = router;
