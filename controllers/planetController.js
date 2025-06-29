// Importa el módulo que contiene los datos de los planetas
const planets = require('../data/planets');

// Controlador para mostrar la lista de todos los planetas
exports.getAllPlanets = (req, res) => {
  // Renderiza la vista 'planets' pasando el título y el array de planetas
  res.render('planets', { title: 'Planetas del Sistema Solar', planets });
};

// Controlador para mostrar el detalle de un planeta específico
exports.getPlanetDetail = (req, res) => {
  // Busca el planeta que coincida con el nombre pasado como parámetro en la URL
  const planet = planets.find(p => 
    p.name.toLowerCase() === decodeURIComponent(req.params.name).toLowerCase()
  );

  // Si no se encuentra el planeta, responde con error 404
  if (!planet) return res.status(404).send('Planeta no encontrado');

  // Renderiza la vista de detalle del planeta con sus datos
  res.render('planetDetail', { title: planet.name, planet });
};
