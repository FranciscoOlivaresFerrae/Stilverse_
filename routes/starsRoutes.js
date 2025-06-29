// Importa el módulo Express
const express = require('express');

// Crea un nuevo enrutador de Express
const router = express.Router();

// Importa el controlador de estrellas
const starsController = require('../controllers/starsController');

// Ruta para obtener y mostrar todas las estrellas
router.get('/', starsController.getAllStars);

// Ruta para obtener y mostrar el detalle de una estrella específica
router.get('/:name', starsController.getStarDetail);

// Exporta el enrutador para usarlo en la aplicación principal
module.exports = router;
