const express = require('express');
const conquistasController = require('../controllers/conquistasController');

const router = express.Router();

router.get('/', conquistasController.getAllConquistas);
router.get('/:id', conquistasController.getConquistaById);
router.post('/', conquistasController.createConquista);
router.put('/:id', conquistasController.updateConquista);
router.delete('/:id', conquistasController.deleteConquista);

module.exports = router;
