const express = require('express');
const router = express.Router();
const controller = require('../controllers/cometAsteroidsController');

router.get('/', controller.getAllCometAsteroids);

module.exports = router;
