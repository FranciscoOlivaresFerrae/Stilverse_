// Módulos requeridos
const fs = require('fs'); // Módulo para manejar el sistema de archivos
const path = require('path'); // Módulo para resolver rutas de archivos

// Controlador para obtener y mostrar todos los cometas y asteroides
exports.getAllCometAsteroids = (req, res) => {
  try {
    // Construye la ruta absoluta al archivo de datos JSON
    const dataPath = path.join(__dirname, '../data/cometAsteroids.json');

    // Lee el contenido del archivo de forma síncrona (bloqueante)
    const data = fs.readFileSync(dataPath, 'utf-8');

    // Parsea el contenido JSON en un objeto de JavaScript
    const objects = JSON.parse(data);

    // Renderiza la vista 'cometAsteroids' pasando los datos y el título
    res.render('cometAsteroids', { title: 'Cometas y Asteroides', objects });

  } catch (error) {
    // Captura y muestra cualquier error, y responde con error 500
    console.error(error);
    res.status(500).send('Error al cargar datos de cometas y asteroides');
  }
};

// Controlador para obtener y mostrar el detalle de un cometa o asteroide
exports.getCometAsteroidDetail = (req, res) => {
  try {
    // Construye la ruta al archivo de datos
    const dataPath = path.join(__dirname, '../data/cometAsteroids.json');

    // Lee y parsea los datos del archivo JSON
    const data = fs.readFileSync(dataPath, 'utf-8');
    const objects = JSON.parse(data);

    // Busca un objeto que coincida con el nombre en los parámetros de la URL
    const object = objects.find(o => 
      o.name.toLowerCase() === decodeURIComponent(req.params.name).toLowerCase()
    );

    // Si no se encuentra el objeto, responde con error 404
    if (!object) return res.status(404).send('Objeto no encontrado');

    // Renderiza la vista de detalle con el objeto encontrado
    res.render('cometAsteroidsDetail', { title: object.name, object });

  } catch (error) {
    // Manejo de errores generales
    console.error(error);
    res.status(500).send('Error al cargar detalle de cometa/asteroide');
  }
};

