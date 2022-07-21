const express = require('express');
const router = express.Router();

const dishController = require('./dish.controller');

router.get('/search', dishController.search);
router.post('/create', dishController.createDish);
router.delete('/:dishId', dishController.deleteDish);
router.get('/', dishController.getDishes);
router.get('/:dishId', dishController.getDish);

module.exports = router;
