// Importa el módulo Express
const express = require('express');

// Crea un nuevo enrutador de Express
const router = express.Router();

// Importa el controlador de objetos del cielo profundo
const deepSkyController = require('../controllers/deepSkyController');

// Ruta para obtener y mostrar todos los objetos del cielo profundo
router.get('/', deepSkyController.getAllDeepSkyObjects);

// Ruta para obtener y mostrar el detalle de un objeto específico del cielo profundo
router.get('/:name', deepSkyController.getDeepSkyObjectDetail);

// Exporta el enrutador para usarlo en la aplicación principal
module.exports = router;
