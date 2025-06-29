// Módulos requeridos
const fs = require('fs'); // Módulo para trabajar con el sistema de archivos
const path = require('path'); // Módulo para manejar rutas de archivos

// Controlador para obtener y mostrar todos los objetos del cielo profundo
exports.getAllDeepSkyObjects = (req, res) => {
  try {
    // Construye la ruta al archivo JSON de datos
    const dataPath = path.join(__dirname, '../data/deepSkyObjects_fixed.json');

    // Lee el contenido del archivo de forma síncrona
    const data = fs.readFileSync(dataPath, 'utf-8');

    // Parsea el contenido JSON en un objeto de JavaScript
    const objects = JSON.parse(data);

    // Renderiza la vista 'deepSky' con el título y la lista de objetos
    res.render('deepSky', { title: 'Objetos del Cielo Profundo', objects });

  } catch (error) {
    // Manejo de errores: muestra en consola y envía respuesta 500
    console.error(error);
    res.status(500).send('Error al cargar datos de objetos del cielo profundo');
  }
};

// Controlador para obtener el detalle de un objeto del cielo profundo específico
exports.getDeepSkyObjectDetail = (req, res) => {
  try {
    // Construye la ruta al archivo de datos
    const dataPath = path.join(__dirname, '../data/deepSkyObjects_fixed.json');

    // Lee y parsea el contenido del archivo JSON
    const data = fs.readFileSync(dataPath, 'utf-8');
    const objects = JSON.parse(data);

    // Busca el objeto que coincida con el nombre recibido en los parámetros de la URL
    const object = objects.find(o => 
      o.name.toLowerCase() === decodeURIComponent(req.params.name).toLowerCase()
    );

    // Si no se encuentra, envía error 404
    if (!object) return res.status(404).send('Objeto no encontrado');

    // Renderiza la vista de detalle con los datos del objeto
    res.render('deepSkyDetail', { title: object.name, object });

  } catch (error) {
    // Manejo de errores: muestra en consola y envía respuesta 500
    console.error(error);
    res.status(500).send('Error al cargar detalle del objeto del cielo profundo');
  }
};
