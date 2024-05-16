const express = require('express');
const mensagensController = require('../controllers/mensagensController');

const router = express.Router();

router.get('/', mensagensController.getAllMensagens);
router.get('/:id', mensagensController.getMensagemById);
router.post('/', mensagensController.createMensagem);
router.put('/:id', mensagensController.updateMensagem);
router.delete('/:id', mensagensController.deleteMensagem);

module.exports = router;
