const express = require('express');
const router = express.Router();

const dishController = require('./dish.controller');

router.get('/search', dishController.search);

module.exports = router;
