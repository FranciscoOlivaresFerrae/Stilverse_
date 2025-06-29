// server.js

// Importa dependencias
const express = require('express');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv');
const path = require('path');

// Importa las rutas de cada sección
const principalScreen = require('./routes/principalRoutes');
const starsRoutes = require('./routes/starsRoutes');
const planetsRoutes = require('./routes/planetsRoutes');
const deepSkyRoutes = require('./routes/deepSkyRoutes');
const cometAsteroidsRoutes = require('./routes/cometAsteroidsRoutes'); // 👈 nueva línea

// Configura variables de entorno
dotenv.config();

// Crea la aplicación de Express
const app = express();

// Usa las rutas importadas para cada sección
app.use('/stars', starsRoutes);
app.use('/planets', planetsRoutes);
app.use('/deepSkyObjects', deepSkyRoutes);
app.use('/cometAsteroids', cometAsteroidsRoutes); // 👈 nueva línea

// Configura motor de vistas y directorio de vistas
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// Middlewares para parsear JSON y formularios
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// Configura sesiones
app.use(session({
  secret: process.env.SESSION_SECRET, // Secreto desde variables de entorno
  resave: false,
  saveUninitialized: false
}));

// Sirve archivos estáticos desde la carpeta 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Usa la ruta principal
app.use('/', principalScreen);

// Configura el puerto y arranca el servidor
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});

// Exporta la aplicación para pruebas u otros usos
module.exports = app;
