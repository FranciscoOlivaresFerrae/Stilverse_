const express = require('express');
const router = express.Router();
const { obtenerEstrellas } = require('../controllers/starsController');

router.get('/', async (req, res) => {
  const estrellas = await obtenerEstrellas();
  res.render('stars', { estrellas });
});

module.exports = router;
