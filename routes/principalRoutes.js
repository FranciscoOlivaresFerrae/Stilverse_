// routes/principalRoutes.js
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('index'); // Asegúrate de tener una vista index.pug
});

module.exports = router;
