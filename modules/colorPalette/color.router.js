const express = require('express');
const router = express.Router();

const colorCotroller = require('./color.controller');

router.post('/create', colorCotroller.createColor);
// router.post('/login', authController.login);
// router.get('/seeusers', authController.seeUsers);

module.exports = router;
