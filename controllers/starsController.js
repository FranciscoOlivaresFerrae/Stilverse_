// controllers/starsController.js

// Importa módulos necesarios
const fs = require('fs'); // Módulo para trabajar con el sistema de archivos
const path = require('path'); // Módulo para manejar rutas de archivos

// Variable para almacenar los datos de las estrellas
let estrellas = [];

// Función para cargar los datos de las estrellas desde el archivo JSON
function cargarEstrellas() {
  try {
    // Construye la ruta absoluta al archivo de datos
    const dataPath = path.join(__dirname, '..', 'public', 'data', 'estrellas.json');

    // Lee el archivo de forma síncrona
    const data = fs.readFileSync(dataPath, 'utf-8');

    // Parsea los datos JSON y los guarda en la variable global 'estrellas'
    estrellas = JSON.parse(data);

    // Mensaje de confirmación en consola
    console.log('Datos de estrellas cargados correctamente');
  } catch (error) {
    // Si ocurre un error, muestra en consola y deja el arreglo vacío
    console.error('Error al cargar datos de estrellas:', error);
    estrellas = [];
  }
}

// Carga los datos de estrellas al inicializar el módulo
cargarEstrellas();

// Controlador para renderizar la vista de todas las estrellas
exports.getAllStars = (req, res) => {
  // Renderiza la vista 'stars' pasando el título y el array de estrellas
  res.render('stars', { title: 'Estrellas', estrellas }); // <-- pasamos 'estrellas'
};

// Controlador para renderizar el detalle de una estrella específica
exports.getStarDetail = (req, res) => {
  // Busca la estrella que coincida con el nombre recibido en la URL
  const star = estrellas.find(s => 
    s.name.toLowerCase() === decodeURIComponent(req.params.name).toLowerCase()
  );

  // Si no se encuentra, devuelve error 404
  if (!star) return res.status(404).send('Estrella no encontrada');

  // Renderiza la vista de detalle de la estrella
  res.render('starDetail', { title: star.name, star });
};
