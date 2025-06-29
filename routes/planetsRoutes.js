// Importa el módulo Express
const express = require('express');

// Crea un nuevo enrutador de Express
const router = express.Router();

// Importa el controlador de planetas
const planetsController = require('../controllers/planetController');

// Ruta para obtener y mostrar todos los planetas
router.get('/', planetsController.getAllPlanets);

// Ruta para obtener y mostrar el detalle de un planeta específico
router.get('/:name', planetsController.getPlanetDetail);

// Exporta el enrutador para usarlo en la aplicación principal
module.exports = router;
