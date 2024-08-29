const express = require('express');
const router = express.Router();
const portfolioController = require('../controllers/portfolioController');


router.get('/', portfolioController.getAllItems);
router.post('/', portfolioController.createItem);
router.get('/:id', portfolioController.getItemById);
router.put('/:id', portfolioController.updateItem);
router.delete('/:id', portfolioController.deleteItem);


module.exports = router;
