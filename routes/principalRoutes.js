const express = require('express');
const router = express.Router();
const principalController = require('../controllers/principalController');

router.get('/', principalController.getHomePage);

module.exports = router;
