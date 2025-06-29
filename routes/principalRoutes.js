// Importa el módulo Express
const express = require('express');

// Crea un nuevo enrutador de Express
const router = express.Router();

// Importa el controlador principal
const principalController = require('../controllers/principalController');

// Ruta para renderizar la página principal
router.get('/', principalController.getHomePage);

// Ruta para manejar la búsqueda de objetos celestes
router.get('/search', principalController.search);

// Exporta el enrutador para usarlo en la aplicación principal
module.exports = router;
