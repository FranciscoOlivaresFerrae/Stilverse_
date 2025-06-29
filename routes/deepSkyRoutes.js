const express = require('express');
const router = express.Router();
const deepSkyController = require('../controllers/deepSkyController');

router.get('/', deepSkyController.getAllDeepSkyObjects);

module.exports = router;
