const express = require('express');
const taxesController = require('./taxesController');

const router = express.Router();
router.post('/', taxesController.createTax);
router.put('/:id', taxesController.updateTax);
router.delete('/:id', taxesController.deleteTax);

module.exports = router;
