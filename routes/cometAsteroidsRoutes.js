// Importa Express
const express = require('express');

// Crea un nuevo enrutador
const router = express.Router();

// Importa el controlador de cometas y asteroides
const cometAsteroidsController = require('../controllers/cometAsteroidsController');

// Ruta para obtener y mostrar todos los cometas y asteroides
router.get('/', cometAsteroidsController.getAllCometAsteroids);

// Ruta para obtener y mostrar el detalle de un cometa o asteroide específico
router.get('/:name', cometAsteroidsController.getCometAsteroidDetail);

// Exporta el enrutador para usarlo en la aplicación principal
module.exports = router;
