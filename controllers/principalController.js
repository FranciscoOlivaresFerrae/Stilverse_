// Importa los módulos necesarios
const fs = require('fs'); // Para trabajar con el sistema de archivos
const path = require('path'); // Para manejar rutas de archivos

// Controlador para renderizar la página principal
exports.getHomePage = (req, res) => {
  // Renderiza la vista 'index' con la variable 'isMainPage' en true
  res.render('index', { isMainPage: true });
};

// Controlador para buscar un objeto celeste
exports.search = (req, res) => {
  // Obtiene el parámetro de búsqueda desde la query string y lo pasa a minúsculas
  const query = req.query.query ? req.query.query.toLowerCase() : '';

  // Si no hay búsqueda, redirige a la página principal
  if (!query) return res.redirect('/');

  // Arreglo con las rutas de los datasets y sus rutas de redirección correspondientes
  const datasets = [
    { path: '../data/planets.json', route: '/planets/' },
    { path: '../public/data/estrellas.json', route: '/stars/' },
    { path: '../data/deepSkyObjects_fixed.json', route: '/deepSkyObjects/' },
    { path: '../data/cometAsteroids.json', route: '/cometAsteroids/' }
  ];

  // Itera sobre cada dataset para buscar coincidencias
  for (const dataset of datasets) {
    const dataPath = path.join(__dirname, dataset.path);

    // Verifica si el archivo existe
    if (fs.existsSync(dataPath)) {
      const raw = fs.readFileSync(dataPath, 'utf-8');
      let data = [];

      // Intenta parsear el archivo JSON
      try {
        data = JSON.parse(raw);
      } catch (err) {
        console.error('Error al parsear', dataset.path);
      }

      // Busca el objeto que contenga el texto de la búsqueda en su nombre
      const obj = data.find(o => o.name && o.name.toLowerCase().includes(query));

      // Si se encuentra, redirige a la ruta de detalle correspondiente
      if (obj) {
        const encoded = encodeURIComponent(obj.name);
        return res.redirect(`${dataset.route}${encoded}`);
      }
    }
  }

  // Si no se encuentra ningún objeto, renderiza la página principal con el mensaje de no encontrado
  res.render('index', { isMainPage: true, notFound: true });
};
